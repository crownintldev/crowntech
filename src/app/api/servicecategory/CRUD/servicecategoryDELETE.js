import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicecategoryDELETE = async (req, { params }) => {
  try {
    const id = params.id;

    // Check if there are associated Serviceinfo records
    const serviceinfos = await prisma.serviceinfo.findMany({
      where: {
        categoryId: id,
      },
    });

    if (serviceinfos.length > 0) {
      // Delete associated Serviceinfo records first
      await prisma.serviceinfo.deleteMany({
        where: {
          categoryId: id,
        },
      });
    }

    // Now you can safely delete the Servicecategory
    const servicecategory = await prisma.servicecategory.delete({
      where: {
        id: id,
      },
    });

    return new NextResponse(
      JSON.stringify(
        {
          success: 'Data deleted successfully',
          servicecategory,
        },
        { status: '200' }
      )
    );
  } catch (error) {
    console.error('Error deleting data:', error);
    return new NextResponse(
      JSON.stringify(
        {
          error: 'Data not deleted',
        },
        { status: '500' }
      )
    );
  } finally {
    await prisma.$disconnect();
  }
};
