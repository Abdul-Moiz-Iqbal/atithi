"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CldUploadWidget } from "next-cloudinary";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [
      { header: [1, 2, 3, false] },
      { font: [] },
      "bold",
      "italic",
      "underline",
      "strike",
    ],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const BlogEditor = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageId, setImageId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = { title, content, image_url: imageId };
    try {
      const response = await fetch("/api/blog/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Blog uploaded successfully!");
        setTitle("");
        setContent("");
      } else {
           console.error("Error:", data.message); // Log the error message
      alert(data.message); // Show error message to the user
      }
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert("Something went wrong!");
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
      setImageId(data.id);
      console.log("Image saved successfully:", data);
    } catch (error) {
      console.error("Error saving image to database:", error);
    }
  };

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create a New Category</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Content Editor */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Content
          </label>
          <ReactQuill
            id="content"
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here..."
            modules={modules}
            formats={[
              "header",
              "font",
              "bold",
              "italic",
              "underline",
              "strike",
              "list",
              "bullet",
              "link",
              "image",
            ]}
          />
        </div>

        <div>
            <p>Image Size should not exceed 10mb </p>
          <CldUploadWidget
            signatureEndpoint="/api/blog/sign-image"
            onSuccess={onImageUploadHandler}
          >
            {({ open }) => {
              return (
                <button
                  type="button" // Prevents this button from submitting the form
                  onClick={() => open()}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-10 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
