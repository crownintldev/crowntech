import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

// Helper function to process form data
async function processFormData(formData) {
  let faqs = [];
  for (let [key, value] of formData) {
    let match = key.match(/faqs\[(\d+)\]\[(.+)\]/);
    if (match) {
      let [index, property] = [parseInt(match[1]), match[2]];
      faqs[index] = faqs[index] || {};
      if (property === 'planId') {
        // Convert planId to string
        faqs[index][property] = String(value);
      } else {
        faqs[index][property] = value instanceof File ? value : value;
      }
    }
  }
  return faqs;
}

// Helper function to handle file upload and validation
async function handleFileUpload(file) {
  if (file.size > 10000000) { // Check file size (less than 10MB)
    throw new Error("Image should be less than 10MB in size");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const imageFileName = `${Date.now()}_${file.name}`;
  const relativeImagePath = `./public/uploads/${imageFileName}`;
  const absoluteImagePath = path.join(process.cwd(), relativeImagePath);

  await fs.writeFile(absoluteImagePath, buffer);
  return relativeImagePath;
}

// Main function for handling the POST request
export const servicefaqPOST = async (req) => {
  try {
    let formData = await req.formData();
    let faqs = await processFormData(formData);

    const createdFaqs = await Promise.all(faqs.map(async faq => {
      if (faq.Faqimage instanceof File) {
        faq.Faqimage = await handleFileUpload(faq.Faqimage);
      }

      return prisma.servicefaq.create({
        data: {
          Faqimage: faq.Faqimage || '',
          heading: faq.heading || '',
          description: faq.description || '',
          planId: faq.planId
        }
      });
    }));

    console.log('Created FAQs:', createdFaqs);
    return NextResponse.json({ success: true, data: createdFaqs }, { status: 200 });
  } catch (err) {
    console.error('Error in servicefaqPOST:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
};
