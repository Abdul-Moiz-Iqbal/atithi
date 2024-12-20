"use client";
import BlogCard from "./BlogCard";
import BlogCardHome from "../home/BlogCard";

import { useEffect, useState } from "react";

// const blogData = [
//   {
//     id: 1,
//     title: "Discover India's Rich Culture",
//     description:
//       "Experience the diverse traditions, festivals, and history that define India's cultural landscape.",
//     image: image,
//   },
//   {
//     id: 2,
//     title: "Top Places to Visit in North India",
//     description:
//       "From the Himalayas to the Taj Mahal, explore the best destinations in North India.",
//     image: image,
//   },
//   {
//     id: 3,
//     title: "A Culinary Journey Through India",
//     description:
//       "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
//     image: image,
//   },
//   {
//     id: 4,
//     title: "Exploring Spirituality in India",
//     description:
//       "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//     image: image,
//   },
//   {
//     id: 5,
//     title: "A Culinary Journey Through India",
//     description:
//       "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
//     image: image,
//   },
//   {
//     id: 6,
//     title: "Exploring Spirituality in India",
//     description:
//       "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//     image: image,
//   },
//   {
//     id: 7,
//     title: "Exploring Spirituality in India",
//     description:
//       "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//     image: image,
//   },
// ];

const Blog = () => {
  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch("/api/blog/category");
  
        const data = await res.json();
        console.log(data);
        setBlogData(data.data);
      } catch (err) {
        console.log("Cant Fetch Blogs, ", err);
      }
      
    };
    fetchBlogData()
  }, []);
  const [visibleCount, setVisibleCount] = useState(4);
  const [blogData, setBlogData] = useState([]);

  // Toggle between showing more and showing less blogs
  const toggleShowMore = () => {
    if (visibleCount >= blogData.length) {
      setVisibleCount(4); // Reset to show only the first 4 cards
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 4, blogData.length)); // Show 4 more cards, up to the total count
    }
  };

  return (
    <div className="w-[80%] mx-auto">
     <div className="hidden mt-5 sm:flex flex-col gap-8">
      s
        {blogData.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            description={blog.content}
            image={blog.image_url.url}
          />
        ))}
      </div>
      <div className="flex flex-col sm:gap-[40px] sm:hidden justify-center">
        {blogData.slice(0, visibleCount).map((blog) => (
          <BlogCardHome
            key={blog._id}
            id={blog._id}
            slug={blog.title}
            
            title={blog.title}
            description={blog.content}
            image={blog.image_url.url}
          />
        ))}
      </div>

      <div className="mb-16 flex justify-center">
        {visibleCount < blogData.length && (

        <button
          className="mt-10 px-10 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white  text-base sm:text-xl font-semibold sm:font-medium bg-main-red"
          onClick={toggleShowMore}
        >
          {visibleCount >= blogData.length ? "Show Less" : "See More"}
        </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
