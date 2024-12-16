import LegalPage from "@/models/Legal";
import connectDb from "@/config/database"; // Make sure to have a MongoDB connection setup
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url); // Get the URL
  const slug = url.searchParams.get("id")?.trim(); // Get the 'id' query parameter
  console.log(slug);
  // if (!slug) {
  //   return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
  // }

  if (slug !== "get") {
    try {
      // Establish DB connection
      await connectDb();

      // Fetch the legal page by 'slug' (or '_id' if that's what you're using)
      const page = await LegalPage.findOne({ slug });

      if (!page) {
        return NextResponse.json(
          { error: "Legal page not found" },
          { status: 404 }
        );
      }

      // Return the legal page content
      return NextResponse.json(page, { status: 200 });
    } catch (error) {
      console.error("Error fetching legal page:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }

  if(slug == 'get'){
    try {
      // Establish DB connection
      await connectDb();

      // Fetch the legal page by 'slug' (or '_id' if that's what you're using)
      const page = await LegalPage.find();

      if (!page) {
        return NextResponse.json(
          { error: "Legal page not found" },
          { status: 404 }
        );
      }

      // Return the legal page content
      return NextResponse.json(page, { status: 200 });
    } catch (error) {
      console.error("Error fetching legal page:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json(); // Parse incoming JSON data

    // Destructure the data received from the frontend
    const { slug, title, content } = data;

    if (!slug || !title || !content) {
      return NextResponse.json(
        { error: "Slug, Title, and Content are required" },
        { status: 400 }
      );
    }

    // Establish DB connection
    await connectDb();

    // Create or update the legal page based on the slug
    const updatedPage = await LegalPage.findOneAndUpdate(
      { slug }, // Find by slug
      { slug, title, content }, // Update fields
      { upsert: true, new: true } // Create if not found, return the new document
    );

    return NextResponse.json(
      {
        message: `Legal page ${
          updatedPage ? "updated" : "created"
        } successfully`,
        data: updatedPage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating or updating legal page:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
