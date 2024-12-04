// models/Metadata.js
import mongoose from 'mongoose';

const metadataSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },  // Page identifier (like /about or /home)
  title: { type: String, required: true },
  description: { type: String, required: true },
  openGraph: {
    title: { type: String },
    description: { type: String },
    image: { type: String },  // URL of the Open Graph image
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Metadata = mongoose.models.Metadata || mongoose.model('Metadata', metadataSchema);

export default Metadata;
