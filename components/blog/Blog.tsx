// "use client";
// import BlogCard from "./BlogCard";
// import image from "../../public/images/lake-image.png";
// import { useState } from "react";

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
// const Blog = () => {
//   const [visibleCount, setVisibleCount] = useState(3);

//   // Show more blogs logic
//   const showMore = () => {
//     setVisibleCount((prevCount) => prevCount + 2);
//   };
//   return (
//     <div className="hidden md:block w-[80%] mx-auto">
//       <div className="hidden mt-5 md:flex flex-col gap-8">
//         {blogData.map((blog) => (
//           <BlogCard
//             key={blog.id}
//             title={blog.title}
//             description={blog.description}
//             image={blog.image}
//           />
//         ))}

//       </div>

//       <div className=" md:hidden px-10 flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center">

//         {blogData.slice(0, visibleCount).map((blog) => (
//           <BlogCard
//             key={blog.id}
//             title={blog.title}
//             description={blog.description}
//             image={blog.image}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center">
//         <button
//           className="mt-10 px-7 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white text-[20px] font-normal bg-main-red"
//           onClick={showMore}
//         >
//           Start my Journey
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Blog;

"use client";
import BlogCard from "./BlogCard";
import BlogCardHome from "../home/BlogCard";
import image from "../../public/images/lake-image.png";
import { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Discover India's Rich Culture",
    description:
      "Experience the diverse traditions, festivals, and history that define India's cultural landscape.",
    image: image,
  },
  {
    id: 2,
    title: "Top Places to Visit in North India",
    description:
      "From the Himalayas to the Taj Mahal, explore the best destinations in North India.",
    image: image,
  },
  {
    id: 3,
    title: "A Culinary Journey Through India",
    description:
      "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
    image: image,
  },
  {
    id: 4,
    title: "Exploring Spirituality in India",
    description:
      "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
    image: image,
  },
  {
    id: 5,
    title: "A Culinary Journey Through India",
    description:
      "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
    image: image,
  },
  {
    id: 6,
    title: "Exploring Spirituality in India",
    description:
      "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
    image: image,
  },
  {
    id: 7,
    title: "Exploring Spirituality in India",
    description:
      "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
    image: image,
  },
];

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(4);

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
        {blogData.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
      <div className="flex flex-col sm:gap-[40px] sm:hidden justify-center">
        {blogData.slice(0, visibleCount).map((blog) => (
          <BlogCardHome
            key={blog.id}
            
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>

      <div className="mb-16 flex justify-center">
        <button
          className="mt-10 px-10 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white  text-base sm:text-xl font-semibold sm:font-medium bg-main-red"
          onClick={toggleShowMore}
        >
          {visibleCount >= blogData.length ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Blog;
