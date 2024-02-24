import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const serviceinfoPOST = async (req) => {
  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      console.log("No file provided");
      return NextResponse.json({
        message: "Invalid file",
        success: false,
        status: 400,
      });
    }

    // Process file upload
    const bytedata = await file.arrayBuffer();
    const buffer = Buffer.from(bytedata);
    const path = `./public/uploads/${file.name}`;
    await writeFile(path, buffer);
    console.log("File uploaded:", path);

    // Extract other form data
    const serviceName = data.get('serviceName');
    const serviceText = data.get('serviceText');
    const categoryId = data.get('categoryId'); // Keep categoryId as a string
    console.log("Form data:", { serviceName, serviceText, categoryId });

    // Create a new serviceinfo record
    const serviceinfo = await prisma.serviceinfo.create({
      data: {
        serviceImage: path,
        serviceName,
        serviceText,
        category: {
          connect: {
            id: categoryId, // Connect using the string ID
          },
        },
      },
      include: {
        category: true,
      },
    });
    console.log("Service info created:", serviceinfo);

    return NextResponse.json({
        message: "Post created successfully",
        serviceinfo,
        success: true,
        status: 200,
    });

  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({
        message: "Error in processing request",
        details: error.message,
        success: false,
        status: 400,
    });
  }
};
