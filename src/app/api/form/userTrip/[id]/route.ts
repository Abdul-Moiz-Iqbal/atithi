import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/config/database";
import UserTrip from "@/models/UserTrip";

// Handle GET requests to fetch a specific form by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // Ensure database connection

    // Get the form ID from the URL params
    const { id } = params;

    // Find the form by its ID in the database
    const form = await UserTrip.findById(id);

    if (!form) {
      return NextResponse.json(
        { error: "Form not found" },
        { status: 404 }
      );
    }

    // Return the found form
    return NextResponse.json(form, { status: 200 });
  } catch (err: unknown) {
    console.error("Error fetching form by ID:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}
