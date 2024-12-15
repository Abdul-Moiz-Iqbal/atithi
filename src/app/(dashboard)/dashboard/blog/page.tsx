"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CldUploadWidget } from "next-cloudinary";
import "react-quill/dist/quill.snow.css";

import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageId, setImageId] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [blogs, setBlogs] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [showCategoriesEdit, setShowCategoriesEdit] = useState<boolean>(false);
  const [showBlogsEdit, setShowBlogsEdit] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/blog/category");
        const data = await response.json();
        console.log(data);
        if (data.success) {
          setCategories([...data.data]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();

        if (data.success) {
          setBlogs([...data.data]);
        }
      } catch (err) {
        console.log("Error in fetching categorie", err);
      }
    };
    fetchBlogs();
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = { title, content, category, image_url: imageId };
    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        alert("Blog uploaded successfully!");
        setTitle("");
        setContent("");
        setCategory("");
      } else {
        alert("Failed to upload the blog. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading blog:", error);
      alert("Something went wrong!");
    }
  };

  const handleEditBlog = async (id: string) => {
    console.log(id);
    router.push(`/dashboard/blog-edit/${id}`);
   
  };
  const handleEditCategory = async (id: string) => {
    console.log(id);
    router.push(`/dashboard/category-edit/${id}`);
   
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
    } catch (error) {
      console.error("Error saving image to database:", error);
    }
  };

  const handleRemoveBlog = async (id: string) => {
    const ans = window.confirm("Are you sure you want to delete this blog?");
    if (!ans) return;
    try {
      const res = await fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Blog deleted successfully");
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        console.log("Blog deleted successfully");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  const handleRemoveCategory = async (id: string) => {
    const ans = window.confirm("Are you sure you want to delete this blog?");
    if (!ans) return;
    try {
      const res = await fetch("/api/blog/category", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Blog deleted successfully");
        setCategories((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        console.log("Blog deleted successfully");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleShowCategoriesEdit = () => {
    setShowCategoriesEdit(!showCategoriesEdit);
  };
  const handleShowBlogEdit = () => {
    setShowBlogsEdit(!showBlogsEdit);
  };

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Create a New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-6"
      >
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
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Content   Input */}
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

        {/* Image Upload */}
        <div className="mb-6">
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
                Upload an Image
              </button>
            )}
          </CldUploadWidget>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-lg font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories?.map((blog) => (
              <option key={blog._id} value={blog.tilte}>
                {blog.title}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit Blog
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-y-5">
         
        {/* edit and removve categories  */}
        <button
          className="mt-5 font-medium text-2xl mx-auto bg-slate-200 w-fit rounded-md px-5 py-2"
          onClick={handleShowCategoriesEdit}
        >
          Edit Categories
        </button>
        {showCategoriesEdit && (
          <div className="mb-6">
            {categories?.map((blog) => (
              <div
                key={blog._id}
                className="flex justify-between items-center mb-2"
              >
                <span>{blog.title}</span>
                <div>
                  <button
                    type="button"
                    onClick={() => handleEditCategory(blog.title)}
                    className="py-1 px-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveCategory(blog._id)}
                    className="ml-2 py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <button          className="mt-5 font-medium text-2xl mx-auto bg-slate-200 w-fit rounded-md px-5 py-2" onClick={handleShowBlogEdit}>
          Edit Blogs
        </button>
        {/* Edit and Remove Blog */}

        {showBlogsEdit && (
          <div className="mb-6">
            {blogs?.map((blog) => (
              <div
                key={blog._id}
                className="flex justify-between items-center mb-2"
              >
                <span>{blog.title}</span>
                <div>
                  <button
                    type="button"
                    onClick={() => handleEditBlog(blog.slug)}
                    className="py-1 px-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveBlog(blog._id)}
                    className="ml-2 py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogEditor;
