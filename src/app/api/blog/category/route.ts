import dbConnect from "@/config/database";
import Category from "@/models/Category";
import { NextRequest, NextResponse } from "next/server";  // Import NextResponse

export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find({});
    return NextResponse.json({ success: true, data: categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json(
        { success: false, message: "Category name is required" },
        { status: 400 }
      );
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 400 }
      );
    }

    const category = await Category.create({ name });
    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
