import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPOST = async (req) => {
    try {
        const bodyArray = await req.json();
        console.log('Received request body:', bodyArray);

        if (!Array.isArray(bodyArray)) {
            throw new Error("Request body must be an array of objects");
        }

        const responses = await Promise.all(bodyArray.map(async (body) => {
            const { title, text, price, chooseplan, description, feature, tabId } = body;

            // Validate tabId format
            if (typeof tabId !== 'string' || tabId.length !== 24) {
                throw new Error("Invalid tabId format. It must be a 24-character hexadecimal string.");
            }

            // Create service plan
            return prisma.serviceplan.create({
                data: {
                    title,
                    text,
                    price,
                    chooseplan,
                    description,
                    feature: {
                        create: feature.map(f => ({ ...f }))
                    },
                    tab: {
                        connect: { id: tabId }
                    },
                },
                include: {
                    feature: true, // Include features in the response
                    tab: true // Include tab in the response
                }
            });
        }));

        return new NextResponse(
            JSON.stringify({ success: "Serviceplans saved successfully", responses }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error occurred:", error);
        return new NextResponse(
            JSON.stringify({ error: error.message }),
            { status: 400 }
        );
    }
};
