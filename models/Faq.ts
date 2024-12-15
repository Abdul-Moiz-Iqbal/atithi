// src/app/models/faq.model.ts

import mongoose, { Document, Schema } from 'mongoose';

interface IFaq extends Document {
  question: string;
  answer: string;
}

const faqSchema = new Schema<IFaq>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const Faq = mongoose.models.Faq || mongoose.model<IFaq>('Faq', faqSchema);

export default Faq;
