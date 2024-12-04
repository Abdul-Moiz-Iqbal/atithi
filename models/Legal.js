const mongoose = require('mongoose');

// Define the schema for legal page content
const LegalPageSchema = new mongoose.Schema({
  slug: {
    type: String,

  },
  title: {
    type: String,
    required: true, // Title of the page (e.g., 'Privacy Policy')
  },
  content: {
    type: String, // Store HTML content from React Quill
    required: true, // Content from React Quill
  },

});





export default mongoose.models.LegalPage || mongoose.model('LegalPage', LegalPageSchema);

