// src/app/api/faq/route.ts

import { NextResponse } from 'next/server';
import Faq from '@/models/Faq';

export async function GET() {
  try {
    const faqs = await Faq.find();
    return NextResponse.json(faqs);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function POST(req: Request) {
  try {
    const { question, answer } = await req.json();
    
    if (!question || !answer) {
      return NextResponse.json({ message: 'Question and answer are required' }, { status: 400 });
    }
    
    const newFaq = new Faq({ question, answer });
    await newFaq.save();
    return NextResponse.json(newFaq, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
    try {
      
      const { question, answer ,id } = await req.json();
  
      if (!question || !answer) {
        return NextResponse.json({ message: 'Question and answer are required' }, { status: 400 });
      }
  
      const updatedFaq = await Faq.findByIdAndUpdate(
        id,
        { question, answer },
        { new: true }
      );
  
      if (!updatedFaq) {
        return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
      }
  
      return NextResponse.json(updatedFaq);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }


export async function DELETE(req ) {
    try {
        const {id} = await req.json()
      const deletedFaq = await Faq.findByIdAndDelete(id);
  
      if (!deletedFaq) {
        return NextResponse.json({ message: 'FAQ not found' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'FAQ deleted successfully' });
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }