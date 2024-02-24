import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPOST = async (req) => {
  try {
    const bodyArray = await req.json();
    console.log('Received request body:', bodyArray);

    if (!Array.isArray(bodyArray)) {
      throw new Error("Request body must be an array of objects");
    }

    const responses = await Promise.all(bodyArray.map(async (body) => {
      const { title, heading, description, subdata, serviceInfoId } = body;

      // Assuming serviceInfoId should be a valid MongoDB ObjectID
      if (typeof serviceInfoId !== 'string' || serviceInfoId.length !== 24) {
        throw new Error("Invalid serviceInfoId format. It must be a 24-character hexadecimal string.");
      }

      const ServiceSubItem = subdata.map(subItem => ({
        link: subItem.link,
        description: subItem.description
      }));

      return prisma.servicetab.create({
        data: {
          title,
          heading,
          description,
          subdata: { create: ServiceSubItem },
          serviceInfos: { connect: { id: serviceInfoId } },
        },
        include: { subdata: true, serviceInfos: true },
      });
    }));

    return new NextResponse(
      JSON.stringify({ success: "Servicetabs saved successfully", responses }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 400 }
    );
  }
};
