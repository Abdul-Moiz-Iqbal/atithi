'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { CldUploadWidget } from 'next-cloudinary';

// Dynamically import React Quill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }, { font: [] }, "bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const EditCategoryBlog = ({ blogId }: { blogId: string }) => {
  console.log(blogId)
  const params = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState<string | null>(null); // Current image URL
  const [cloudImage, setCloudImage] = useState<string | null>(null); // Current image URL
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/category/${params.slug}`);
        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }

        const { data } = await res.json();
        console.log(data)
        setId(data._id)
        setTitle(data.title);
        setContent(data.content);
        setImage(data.image_url); // Fetch and set current image
        setCloudImage(data.image_url); // Fetch and set current image
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Failed to load the blog data');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/blog/category`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, title, content, image_url: cloudImage }),
      });

      if (!res.ok) {
        throw new Error('Failed to update blog');
      }

      toast.success('Blog updated successfully!');
      // router.push('/dashboard/blog');
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error('Failed to save the blog');
    } finally {
      setIsSaving(false);
    }
  };

  const onImageUploadHandler = async (result: unknown) => {
   

    const { public_id, secure_url, width, height, format } = result.info;
    try {
      const response = await fetch("/api/blog/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  
          public_id,
          url: secure_url,
          width,
          height,
          format,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save image to database");
      }

      const data = await response.json();
      console.log(data)
      setCloudImage({_id:data.id ,public_id });
      setImage(data.id)
    } catch (error) {
      console.error("Error saving image to database:", error);
    }

    // Set new image

    toast.success('Image uploaded succes  sfully!');
  };
  const handleImageRemove = async() => {
    try {
      await fetch('/api/blog/image/delete-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_id: cloudImage.public_id ,blogId:id, modelType:'category'}), // Extract public ID
      });
      alert('Image deleted successfully!');
      toast.success('Previous image deleted!');
    } catch (error) {
      console.error('Error deleting old image:', error);
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-3xl h-full mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Edit Category Blog Post</h1>

      <div className="mb-6">
        <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-lg font-medium mb-2">Content</label>
        <ReactQuill
          id="content"
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Write your blog content here..."
          modules={modules}
        />
      </div>

      {/* Image Upload Section */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Image</label>
        {image ? (
          <div className="mb-4">
            {/* <img src={image} alt="Blog Image" className="w-full max-h-64 object-cover rounded-md mb-2" /> */}
            <button
              type="button"
              // onClick={() => setImage(null)} // Remove current image
              onClick={handleImageRemove}
              className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Remove Image
            </button>
          </div>
        ) : (
          <CldUploadWidget
            signatureEndpoint="/api/blog/sign-image"
            onSuccess={onImageUploadHandler}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Upload New Image
              </button>
            )}
          </CldUploadWidget>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`w-full sm:w-auto py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none transition ${
            isSaving ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
        <button
          onClick={() => router.push('/dashboard/blog')}
          className="w-full sm:w-auto py-3 px-6 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 focus:outline-none transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCategoryBlog;
