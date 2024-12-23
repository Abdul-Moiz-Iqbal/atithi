// import Image from "next/image";

// // image
// import image from "../../public/images/hero-background.png";

// // ui
// import H4 from "../../ui/heading/H4";

// import BlogCard from "./BlogCard";
// const Blog = () => {
//   return (
//     <div className="py-5 px-5">
//       <H4 title="India's Must know" className="text-main-red" />

//       <div className="mt-4 w-full border-[1px] border-main-red"></div>
//     <BlogCard title={} description={} image={}/>
//       <div className="px-5">

//       </div>

//     </div>
//   );
// };

// export default Blog;
"use client";
import React, { useEffect, useState } from "react";


// ui
import H4 from "../../ui/heading/H4";
import BlogCard from "./BlogCard";

// Blog Data
// const blogData = [
//   {
//     id: 1,
//     pathName:"/blog",
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
  const initialVisibleCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [blogData, setBlogData] = useState([]);

  // Show more blogs logic
  const showMore = () => {
    if (visibleCount >= blogData.length) {
      // Show less when all items are already visible
      setVisibleCount(initialVisibleCount);
    } else {
      // Show 2 more items
      setVisibleCount((prevCount) => prevCount + 2);
    }
  };

  return (
    <div className="py-10 sm:py-10 px-5">
      <H4
        title="India's Must Know"
        className="text-main-red tracking-wider md:text-[35px]"
      />

      <div className="mt-4 w-full md:w-[85%] md:mx-auto border-[1px] border-main-red"></div>

      <div className="px-8 sm:px-0 flex flex-col sm:gap-[40px] md:flex-row md:flex-wrap justify-center">
        {/* Display blog cards */}
        {blogData.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image_url.url}  
          />
        ))}
      </div>

      {/* Show More / Show Less button */}
      {blogData.length > 6 && <div className="text-center my-10">
        <button
          className="px-7 py-[10px] uppercase tracking-wide text-white text-base sm:text-[20px] sm:tracking-[0.4px] font-medium bg-main-red"
          onClick={showMore}
        >
          {visibleCount >= blogData.length ? "Show Less" : "View More"}
        </button>
      </div>}
      
    </div>
  );
};

export default Blog;
