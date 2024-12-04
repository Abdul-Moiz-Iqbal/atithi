'use client';
import { useState } from 'react';

export default function CreateMetadataForm() {
  const [slug, setSlug] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ogTitle, setOgTitle] = useState('');
  const [ogDescription, setOgDescription] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const predefinedSlugs = [
    'contact',
    'faq',
    'how-we-work',
    'payment',
    'privacy-policy',
    'refund',
    'services',
    'success',
    'terms-condition',
    'tripform',
    'home',
    'home-layout',
  ];

  const validateForm = () => {
    if (!slug && !customSlug) {
      return 'Slug is required.';
    }
    if (!title || !description) {
      return 'Title and description are required.';
    }
    return null;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const metadata = {
      slug: customSlug || slug, // Use custom slug if provided, otherwise the selected slug
      title,
      description,
      openGraph: {
        title: ogTitle || undefined,  // Set to undefined if not provided
        description: ogDescription || undefined,  // Set to undefined if not provided
        image: ogImage || undefined,  // Set to undefined if not provided
      },
    };

    try {
      setLoading(true);
      const response = await fetch(`/api/metaData/${metadata.slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metadata),
      });

      if (response.ok) {
        setSuccessMessage('Metadata created successfully!');
      } else {
        const data = await response.json();
        setError(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Internal server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Create Metadata</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* Slug Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="slug">
            Slug (Page identifier)
          </label>
          <div className="flex items-center">
            <select
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a predefined slug</option>
              {predefinedSlugs.map((slugOption) => (
                <option key={slugOption} value={slugOption}>
                  {slugOption}
                </option>
              ))}
            </select>
            <span className="mx-2 text-gray-500">or</span>
            <input
              type="text"
              id="customSlug"
              placeholder="Enter custom slug"
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the page title"
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a short description of the page"
            required
          />
        </div>

        {/* Open Graph Title (Optional) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="ogTitle">
            Open Graph Title (Optional)
          </label>
          <input
            type="text"
            id="ogTitle"
            value={ogTitle}
            onChange={(e) => setOgTitle(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Open Graph title (optional)"
          />
        </div>

        {/* Open Graph Description (Optional) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="ogDescription">
            Open Graph Description (Optional)
          </label>
          <textarea
            id="ogDescription"
            value={ogDescription}
            onChange={(e) => setOgDescription(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Open Graph description (optional)"
          />
        </div>

        {/* Open Graph Image URL (Optional) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="ogImage">
            Open Graph Image URL (Optional)
          </label>
          <input
            type="url"
            id="ogImage"
            value={ogImage}
            onChange={(e) => setOgImage(e.target.value)}
            className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Open Graph image URL (optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-300"
          >
            {loading ? 'Submitting...' : 'Submit Metadata'}
          </button>
        </div>
      </form>
    </div>
  );
}
