import { NextResponse } from 'next/server';
import Testimonial from '@/models/Testimonial';
import connectDB from '@/config/database';



export async function GET() {
    try {
      await connectDB();
      const testimonials = await Testimonial.find();
      return NextResponse.json(testimonials, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'An error occurred while fetching testimonials.' },
        { status: 500 }
      );
    }
  }

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, content, userName, userCountry } = body;

    if (!title || !content || !userName || !userCountry) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const testimonial = new Testimonial({
      title,
      content,
      userName,
      userCountry,
    });

    await testimonial.save();
    return NextResponse.json(
      { message: 'Testimonial created successfully!' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'An error occurred while saving the testimonial.' },
      { status: 500 }
    );
  }
}
