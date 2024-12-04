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
// "use client";

// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import {CldUploadWidget} from 'next-cloudinary';
// import "react-quill/dist/quill.snow.css";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const modules = {
//   toolbar: [
//     [
//       { header: [1, 2, 3, false] },
//       { font: [] },
//       "bold",
//       "italic",
//       "underline",
//       "strike",
//     ],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link", "image"],
//     ["clean"],
//   ],
// };

// const BlogEditor = () => {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [imageId, setImageId] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   const [categories, setCategories] = useState<string[]>([]);
//   const [newCategory, setNewCategory] = useState<string>("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("/api/blog/category");
//         const data = await response.json();
//         console.log(data)
//         if (data.success) {
//           setCategories(data.data.map((cat: unknown) => cat.title));
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const blogData = { title, content, category , image_url: imageId};
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
//         setCategory("");
//       } else {
//         alert("Failed to upload the blog. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error uploading blog:", error);
//       alert("Something went wrong!");
//     }
//   };

//   const handleAddCategory = async () => {
//     if (!newCategory) return alert("Category name is required.");

//     const response = await fetch("/api/blog/category", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name: newCategory }),
//     });

//     if (response.ok) {
//       alert("Category added!");
//       setNewCategory("");
//       // Update categories state without fetching from the server
//       setCategories((prevCategories) => [...prevCategories, newCategory]);
//     } else {
//       alert("Failed to add category. Try again.");
//     }
//   };

//   const onImageUploadHandler = async (result: any) => {
//     const { public_id, secure_url, width, height, format } = result.info;
  
//     try {
//       const response = await fetch("/api/blog/upload", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           public_id,
//           url: secure_url,
//           width,
//           height,
//           format,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to save image to database");
//       }
  
//       const data = await response.json();
//       setImageId(data.id);
//       console.log("Image saved successfully:", data);
//     } catch (error) {
//       console.error("Error saving image to database:", error);
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

//         <div>
         
//           <CldUploadWidget signatureEndpoint="/api/blog/sign-image" onSuccess={onImageUploadHandler}>
//             {({ open }) => {
//               return <button
//               type="button" // Prevents this button from submitting the form
//               onClick={() => open()}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Upload an Image
//             </button>;
//             }}
           
//           </CldUploadWidget>
//         </div>

//         {/* Category Selection */}
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-lg font-medium mb-2">
//             Category
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add New Category */}
//         <div className="mb-4">
//           <label
//             htmlFor="newCategory"
//             className="block text-lg font-medium mb-2"
//           >
//             Add New Category
//           </label>
//           <input
//             id="newCategory"
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="New category name"
//           />
//           <button
//             type="button"
//             onClick={handleAddCategory}
//             className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Add Category
//           </button>
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


"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CldUploadWidget } from 'next-cloudinary';
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }, { font: [] }, "bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const BlogEditor = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageId, setImageId] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/blog/category");
        const data = await response.json();
        if (data.success) {
          setCategories(data.data.map((cat: unknown) => cat.title));
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
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

  const handleAddCategory = async () => {
    if (!newCategory) return alert("Category name is required.");

    const response = await fetch("/api/blog/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newCategory }),
    });

    if (response.ok) {
      alert("Category added!");
      setNewCategory("");
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } else {
      alert("Failed to add category. Try again.");
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
    } catch (error) {
      console.error("Error saving image to database:", error);
    }
  };

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
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

        {/* Image Upload */}
        <div className="mb-6">
          <CldUploadWidget signatureEndpoint="/api/blog/sign-image" onSuccess={onImageUploadHandler}>
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
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Add New Category */}
        <div className="mb-6">
          <label htmlFor="newCategory" className="block text-lg font-medium mb-2">
            Add New Category
          </label>
          <input
            id="newCategory"
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="New category name"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="mt-2 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Category
          </button>
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
    </div>
  );
};

export default BlogEditor;

// "use client";


// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import { CldUploadWidget } from "next-cloudinary";
// import "react-quill/dist/quill.snow.css";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const modules = {
//   toolbar: [
//     [{ header: [1, 2, 3, false] }, { font: [] }, "bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link", "image"],
//     ["clean"],
//   ],
// };

// const BlogEditor = () => {
//   const [title, setTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [imageId, setImageId] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   const [categories, setCategories] = useState<string[]>([]);
//   const [newCategory, setNewCategory] = useState<string>("");

//   // Metadata fields
//   const [metaTitle, setMetaTitle] = useState<string>("");
//   const [metaDescription, setMetaDescription] = useState<string>("");
//   const [openGraphTitle, setOpenGraphTitle] = useState<string>("");
//   const [openGraphDescription, setOpenGraphDescription] = useState<string>("");
//   const [openGraphImage, setOpenGraphImage] = useState<string>("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch("/api/blog/category");
//         const data = await response.json();
//         if (data.success) {
//           setCategories(data.data.map((cat: unknown) => cat.title));
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const blogData = {
//       title,
//       content,
//       category,
//       image_url: imageId,
//       metadata: {
//         metaTitle,
//         metaDescription,
//         openGraphTitle,
//         openGraphDescription,
//         openGraphImage,
//       },
//     };

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
//         setCategory("");
//         setMetaTitle("");
//         setMetaDescription("");
//         setOpenGraphTitle("");
//         setOpenGraphDescription("");
//         setOpenGraphImage("");
//       } else {
//         alert("Failed to upload the blog. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error uploading blog:", error);
//       alert("Something went wrong!");
//     }
//   };

//   const handleAddCategory = async () => {
//     if (!newCategory) return alert("Category name is required.");

//     const response = await fetch("/api/blog/category", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name: newCategory }),
//     });

//     if (response.ok) {
//       alert("Category added!");
//       setNewCategory("");
//       setCategories((prevCategories) => [...prevCategories, newCategory]);
//     } else {
//       alert("Failed to add category. Try again.");
//     }
//   };

//   const onImageUploadHandler = async (result: any) => {
//     const { public_id, secure_url, width, height, format } = result.info;

//     try {
//       const response = await fetch("/api/blog/upload", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           public_id,
//           url: secure_url,
//           width,
//           height,
//           format,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save image to database");
//       }

//       const data = await response.json();
//       setImageId(data.id);
//     } catch (error) {
//       console.error("Error saving image to database:", error);
//     }
//   };

//   return (
//     <div className="p-6 w-full bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">Create a New Blog</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto space-y-6">
//         {/* Blog Title */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-lg font-medium mb-2">
//             Title <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter blog title"
//             required
//           />
//         </div>

//         {/* Blog Content Editor */}
//         <div className="mb-4">
//           <label htmlFor="content" className="block text-lg font-medium mb-2">
//             Content <span className="text-red-500">*</span>
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

//         {/* Image Upload */}
//         <div className="mb-4">
//           <CldUploadWidget signatureEndpoint="/api/blog/sign-image" onSuccess={onImageUploadHandler}>
//             {({ open }) => (
//               <button
//                 type="button"
//                 onClick={() => open()}
//                 className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
//               >
//                 Upload an Image
//               </button>
//             )}
//           </CldUploadWidget>
//         </div>

//         {/* Category Selection */}
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-lg font-medium mb-2">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add New Category */}
//         <div className="mb-4">
//           <label htmlFor="newCategory" className="block text-lg font-medium mb-2">
//             Add New Category
//           </label>
//           <input
//             id="newCategory"
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//             placeholder="New category name"
//           />
//           <button
//             type="button"
//             onClick={handleAddCategory}
//             className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//           >
//             Add Category
//           </button>
//         </div>

//         {/* Meta Data */}
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Meta Data</h3>

//           <div className="mb-4">
//             <label htmlFor="metaTitle" className="block text-lg font-medium mb-2">
//               Meta Title
//             </label>
//             <input
//               id="metaTitle"
//               type="text"
//               value={metaTitle}
//               onChange={(e) => setMetaTitle(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter meta title "
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="metaDescription" className="block text-lg font-medium mb-2">
//               Meta Description
//             </label>
//             <textarea
//               id="metaDescription"
//               value={metaDescription}
//               onChange={(e) => setMetaDescription(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter meta description "
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="openGraphTitle" className="block text-lg font-medium mb-2">
//               Open Graph Title
//             </label>
//             <input
//               id="openGraphTitle"
//               type="text"
//               value={openGraphTitle}
//               onChange={(e) => setOpenGraphTitle(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter Open Graph title (optional)"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="openGraphDescription" className="block text-lg font-medium mb-2">
//               Open Graph Description
//             </label>
//             <textarea
//               id="openGraphDescription"
//               value={openGraphDescription}
//               onChange={(e) => setOpenGraphDescription(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter Open Graph description (optional)"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="openGraphImage" className="block text-lg font-medium mb-2">
//               Open Graph Image URL
//             </label>
//             <input
//               id="openGraphImage"
//               type="text"
//               value={openGraphImage}
//               onChange={(e) => setOpenGraphImage(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter Open Graph image URL (optional)"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Submit Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BlogEditor;
