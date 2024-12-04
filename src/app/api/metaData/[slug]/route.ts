// src/app/api/metadata/[slug]/route.ts
import { NextResponse } from 'next/server';
import connectDb from '@/config/database';
import Metadata from '@/models/MetaData';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    // Establish DB connection
    await connectDb();

    // Fetch metadata for the given slug
    const pageMetadata = await Metadata.findOne({ slug });

    if (!pageMetadata) {
      return NextResponse.json({ error: 'Metadata not found' }, { status: 404 });
    }

    // Return the metadata in the response
    return NextResponse.json(pageMetadata);
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


interface MetadataRequest {
    slug: string;
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
    };
  }
  

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON data from the frontend
    const data: MetadataRequest = await req.json();

    // Establish DB connection
    await connectDb();

    // Check if metadata with the same slug already exists
    const existingMetadata = await Metadata.findOne({ slug: data.slug });

    if (existingMetadata) {
      // If metadata exists, update it
      existingMetadata.title = data.title;
      existingMetadata.description = data.description;
      existingMetadata.openGraph = data.openGraph;

      // Save the updated metadata
      await existingMetadata.save();

      return NextResponse.json({ message: 'Metadata updated successfully!' }, { status: 200 });
    } else {
      // If metadata doesn't exist, create new one
      const metadata = new Metadata({
        slug: data.slug,
        title: data.title,
        description: data.description,
        openGraph: data.openGraph,
      });

      // Save the new metadata to the database
      await metadata.save();

      return NextResponse.json({ message: 'Metadata created successfully!' }, { status: 201 });
    }
  } catch (error) {
    console.error('Error processing metadata:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
