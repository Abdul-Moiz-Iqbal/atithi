// "use client"
// import { useState } from 'react';

// export default function CreateTestimonial() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [userName, setUserName] = useState('');
//   const [userCountry, setUserCountry] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const testimonial = { title, content, userName, userCountry };

//     try {
//       // Replace with your API endpoint or logic for saving testimonials
//       const response = await fetch('/api/testimonials', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(testimonial),
//       });

//       if (response.ok) {
//         setMessage('Testimonial created successfully!');
//         setTitle('');
//         setContent('');
//         setUserName('');
//         setUserCountry('');
//       } else {
//         setMessage('Failed to create testimonial.');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred while creating the testimonial.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Create a Testimonial</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//             Title
//           </label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label htmlFor="content" className="block text-sm font-medium text-gray-700">
//             Content/Review
//           </label>
//           <textarea
//             id="content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
//             User Name
//           </label>
//           <input
//             id="userName"
//             type="text"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label htmlFor="userCountry" className="block text-sm font-medium text-gray-700">
//             User Country
//           </label>
//           <input
//             id="userCountry"
//             type="text"
//             value={userCountry}
//             onChange={(e) => setUserCountry(e.target.value)}
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <button
//           type="submit"
//           className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Submit
//         </button>
//       </form>

//       {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
//     </div>
//   );
// }
"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function TestimonialManager() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [message, setMessage] = useState('');
  const [testimonials, setTestimonials] = useState<unknown[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<unknown | null>(null);

  useEffect(() => {
    // Fetch testimonials when the component mounts
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        } else {
          setMessage('Failed to load testimonials.');
        }
      } catch (error) {
        console.error(error);
        setMessage('An error occurred while loading testimonials.');
      }
    };
    fetchTestimonials();
  }, []);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const testimonial = { title, content, userName, userCountry };

  //   try {
  //     const method = editingTestimonial ? 'PUT' : 'POST';
  //     const endpoint = editingTestimonial
  //       ? `/api/testimonials`
  //       : '/api/testimonials';
  //     const response = await fetch(endpoint, {
  //       method, 
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({...testimonial ,id:testimonial._id},),
  //     });

  //     if (response.ok) {
  //       setMessage(editingTestimonial ? 'Testimonial updated successfully!' : 'Testimonial created successfully!');
  //       setTitle('');
  //       setContent('');
  //       setUserName('');
  //       setUserCountry('');
  //       setEditingTestimonial(null);
  //       // Re-fetch testimonials to update the list
  //       const updatedTestimonials = await response.json();
  //       setTestimonials(updatedTestimonials);
  //     } else {
  //       setMessage('Failed to save testimonial.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setMessage('An error occurred while saving the testimonial.');
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const testimonial = { title, content, userName, userCountry };
  
    try {
      const method = editingTestimonial ? 'PUT' : 'POST';
      const endpoint = '/api/testimonials'; // Use the base endpoint for PUT
  
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...testimonial,
          id: editingTestimonial ? editingTestimonial._id : undefined, // Include the ID for PUT requests
        }),
      });
  
      if (response.ok) {
        setMessage(editingTestimonial ? 'Testimonial updated successfully!' : 'Testimonial created successfully!');
        setTitle('');
        setContent('');
        setUserName('');
        setUserCountry('');
        setEditingTestimonial(null);
        // Re-fetch testimonials to update the list
        router.refresh()
        // const updatedTestimonials = await response.json();
        // setTestimonials(updatedTestimonials);
      } else {
        setMessage('Failed to save testimonial.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while saving the testimonial.');
    }
  };
  
  const handleEdit = (testimonial: unknown) => {
    setEditingTestimonial(testimonial);
    setTitle(testimonial.title);
    setContent(testimonial.content);
    setUserName(testimonial.userName);
    setUserCountry(testimonial.userCountry);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/testimonials`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        }),
      });
      if (response.ok) {
        setMessage('Testimonial deleted successfully!');
        // setTestimonials((prevTestimonials) => prevTestimonials.filter((testimonial) => testimonial._id !== id));
        router.refresh()
      } else {
        setMessage('Failed to delete testimonial.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while deleting the testimonial.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Testimonial Manager</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content/Review
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="userCountry" className="block text-sm font-medium text-gray-700">
            User Country
          </label>
          <input
            id="userCountry"
            type="text"
            value={userCountry}
            onChange={(e) => setUserCountry(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editingTestimonial ? 'Update' : 'Submit'}
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Existing Testimonials</h2>
        {testimonials.length > 0 ? (
          <ul className="space-y-4">
            {testimonials.map((testimonial) => (
              <li key={testimonial._id} className="border p-4 rounded-md">
                <h3 className="text-lg font-semibold">{testimonial.title}</h3>
                <p>{testimonial.content}</p>
                <p><strong>{testimonial.userName}</strong> from {testimonial.userCountry}</p>
                <div className="mt-2 flex space-x-4">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No testimonials found.</p>
        )}
      </div>
    </div>
  );
}
