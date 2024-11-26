// "use client"
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const modules = {
//     toolbar: {
//       container: [
//         [
//           { header: [1, 2,3, false] },
//           { font: [] },
//           "bold",
//           "italic",
//           "underline",
//           "strike",
//         ],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["link", "image"],
//         ["clean"],
//       ],
//       handlers: {
//         bold: function () {
//           // You can define custom logic here if needed
//           console.log("Bold clicked!");
//           this.quill.format("bold", !this.quill.getFormat().bold);
//         },
//       },
//     },
//   };
// const BlogEditor = () => {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const blogData = { title, content };
//     console.log("Blog Data",blogData)
//     try {
//       const response = await fetch("/api/blog", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(blogData),
//       });

//       if (response.ok) {
//         alert("Blog uploaded successfully!");
//         setTitle("");
//         setContent("");
//       } else {
//         alert("Failed to upload the blog. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error uploading blog:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="p-6 w-full bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         {/* Title Input */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-lg font-medium mb-2">
//             Title
//           </label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Enter blog title"
//             required
//           />
//         </div>

//         {/* Content Editor */}
//         <div className="mb-4">
//           <label htmlFor="content" className="block text-lg font-medium mb-2">
//             Content
//           </label>
//           <ReactQuill
//             id="content"
//             theme="snow"
//             value={content}
//             onChange={setContent}
//             placeholder="Write your blog content here..."
//             modules={modules}
//             formats={[
//               "header",
//               "font",
//               "bold",
//               "italic",
//               "underline",
//               "strike",
//               "list",
//               "bullet",
//               "link",
//               "image",
//             ]}
    
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Submit Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BlogEditor;
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }, { font: [] }, 'bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const BlogEditor = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/blog/category');
        const data = await response.json();
        if (data.success) {
          setCategories(data.data.map((cat: unknown) => cat.name));
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = { title, content, category };
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        alert('Blog uploaded successfully!');
        setTitle('');
        setContent('');
        setCategory('');
      } else {
        alert('Failed to upload the blog. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading blog:', error);
      alert('Something went wrong!');
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory) return alert('Category name is required.');
  
    const response = await fetch('/api/blog/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newCategory }),
    });
  
    if (response.ok) {
      alert('Category added!');
      setNewCategory('');
      // Update categories state without fetching from the server
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } else {
      alert('Failed to add category. Try again.');
    }
  };
  

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
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
            formats={['header', 'font', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image']}
          />
        </div>

        {/* Category Selection */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Add New Category */}
        <div className="mb-4">
          <label htmlFor="newCategory" className="block text-lg font-medium mb-2">
            Add New Category
          </label>
          <input
            id="newCategory"
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="New category name"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Category
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
