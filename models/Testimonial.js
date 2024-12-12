import mongoose, { Schema, model, models } from 'mongoose';

const TestimonialSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    userName: { type: String, required: true },
    userCountry: { type: String, required: true },
  },
  { timestamps: true }
);

// Export the model, reusing it if already defined
const Testimonial = models.Testimonial || model('Testimonial', TestimonialSchema);

export default Testimonial;
