"use client";

import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadBanner: React.FC = () => {
  const [slug, setSlug] = useState<string>("blog");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleUpload = async () => {
    // if (!slug || !imageUrl) {
    //   setMessage("Please provide both slug and an uploaded image.");
    //   return;
    // }

    try {
      const response = await fetch("/api/page/banner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug, bannerImage: imageUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Banner uploaded successfully!");
        setSlug("");
        setImageUrl(null);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error: unknown) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const onImageUploadHandler = async(result: unknown) => {
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
      setImageUrl(data.id);
      console.log("Image saved successfully:", data);
    } catch (error) {
      console.error("Error saving image to database:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload Banner Image</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Page Slug:</label>
        <select
          className="w-full px-4 py-2 border rounded"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        >
          <option value="blog">Blog</option>
        </select>
      </div>

      <div className="mb-4">
        <CldUploadWidget
          signatureEndpoint="/api/blog/sign-image"
          onSuccess={onImageUploadHandler}
        >
          {({ open }) => {
            return (
              <button
                type="button"
                onClick={() => open()}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Upload Banner Image
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      {/* {imageUrl && (
        <div className="mb-4">
          <p className="text-sm">Uploaded Image Preview:</p>
          <img src={imageUrl} alt="Banner Preview" className="w-1/2 mt-2" />
        </div>
      )} */}
      <button
        type="button"
        onClick={handleUpload}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Banner
      </button>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default UploadBanner;
