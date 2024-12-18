// "use client"
// import Image from "next/image";
// import Navbar from "../../../../components/Navbar";
// import NavlinkBar from "../../../../components/NavlinkBar";

// // image
// import mobileBlog from "../../../../public/images/mobile-blog.png";
// import image from "../../../../public/images/lake-image.png";
// import BlogCard from "../../../../components/home/BlogCard";
// import { useState } from "react";

// const blogData = [
//     {
//       id: 1,
//       title: "Discover India's Rich Culture",
//       description:
//         "Experience the diverse traditions, festivals, and history that define India's cultural landscape.",
//       image: image,
//     },
//     {
//       id: 2,
//       title: "Top Places to Visit in North India",
//       description:
//         "From the Himalayas to the Taj Mahal, explore the best destinations in North India.",
//       image: image,
//     },
//     {
//       id: 3,
//       title: "A Culinary Journey Through India",
//       description:
//         "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
//       image: image,
//     },
//     {
//       id: 4,
//       title: "Exploring Spirituality in India",
//       description:
//         "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//       image: image,
//     },
//     {
//       id: 5,
//       title: "A Culinary Journey Through India",
//       description:
//         "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
//       image: image,
//     },
//     {
//       id: 6,
//       title: "Exploring Spirituality in India",
//       description:
//         "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//       image: image,
//     },
//     {
//       id: 7,
//       title: "Exploring Spirituality in India",
//       description:
//         "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//       image: image,
//     },
//   ];

// const Category = () => {
//     const [visibleCount, setVisibleCount] = useState(6);

//     // Show more blogs logic
//     const showMore = () => {
//       setVisibleCount((prevCount) => prevCount + 2);
//     };

//   return (
//     <div className="font-author">

//       <div>
//         <Image src={mobileBlog} alt="Servies" className="sm:hidden"/>
//         <Image src={image} alt="Servies" className="hidden sm:block"/>
//       </div>
//       <div className="w-[90%] md:w-[78%] my-7  mx-auto flex gap-5 uppercase text-main-red text-[16px] md:text-[20px] font-semibold tracking-wider">
//         <div>Home</div>
//         <div>&gt;</div>
//         <div>Categories</div>
//         <div>&gt;</div>
//         <div>India Must Know</div>
//       </div>

//       <div className="mt-4 w-[90%]  md:w-[85%] mx-auto border-[1px] border-main-red"></div>
//       <div className="px-10  flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center">
//         {/* Display blog cards */}
//       {blogData.slice(0, visibleCount).map((blog) => (
//         <BlogCard
//           key={blog.id}
//           title={blog.title}
//           description={blog.description}
//           image={blog.image}
//         />
//       ))}
//       </div>
//       {visibleCount < blogData.length && (
//         <div className="text-center my-10">
//           <button
//             className="px-7 py-[10px] uppercase tracking-wide text-white text-[20px] font-semibold bg-main-red"
//             onClick={showMore}
//           >
//             View More
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Category;

"use client";
import Image from "next/image";

// image
import mobileBlog from "../../../../public/images/mobile-blog.png";
import image from "../../../../public/images/lake-image.png";
import BlogCard from "../../../../components/home/BlogCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// const blogData = [
//     {
//       id: 1,
//       title: "Discover India's Rich Culture",
//       description:
//         "Experience the diverse traditions, festivals, and history that define India's cultural landscape.",
//       image: image,
//     },
//     {
//       id: 2,
//       title: "Top Places to Visit in North India",
//       description:
//         "From the Himalayas to the Taj Mahal, explore the best destinations in North India.",
//       image: image,
//     },
//     {
//       id: 3,
//       title: "A Culinary Journey Through India",
//       description:
//         "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
//       image: image,
//     },
//     {
//       id: 4,
//       title: "Exploring Spirituality in India",
//       description:
//         "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//       image: image,
//     },
//     {
//       id: 5,
//       title: "A Culinary Journey Through India",
//       description:
//         "Discover India's mouth-watering cuisines, from street food to royal delicacies.",
//       image: image,
//     },
//     {
//       id: 6,
//       title: "Exploring Spirituality in India",
//       description:
//         "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//       image: image,
//     },
//     {
//       id: 7,
//       title: "Exploring Spirituality in India",
//       description:
//         "Visit the sacred sites and spiritual retreats that offer a path to inner peace.",
//       image: image,
//     },
//   ];

const Category = () => {
  const { category } = useParams();
  const id = category.split("-").pop();
  // console.log(category.split(/-\d/)[0]);
  const title = category.split(/-\d/)[0];
  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blog?categoryId=${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        if (data.success) {
          console.log(data);
          setBlogData(data.data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [id]); // Re-run when categoryId changes

  const [visibleCount, setVisibleCount] = useState(6);
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Show more or less logic
  const toggleShowMore = () => {
    if (visibleCount >= blogData.length) {
      // Reset to show only initial 6 cards when "Show Less" is clicked
      setVisibleCount(6);
    } else {
      // Show more by adding 4 more cards, up to the total count
      setVisibleCount((prevCount) => Math.min(prevCount + 4, blogData.length));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="font-author">
      <div>
        <Image src={mobileBlog} alt="Services" className="sm:hidden" />
        <Image src={image} alt="Services" className="hidden sm:block" />
      </div>
      <div className="w-[90%] md:w-[78%] my-7 mx-auto flex gap-5 uppercase text-main-red text-[16px] md:text-[20px] font-semibold tracking-wider">
        <Link href="/" className="">
          Home
        </Link>
        <div>&gt;</div>
        <Link href="/blog" className="">
          Categories
        </Link>
        {/* <div>Categories</div> */}
        <div>&gt;</div>

        <div>{title}</div>
      </div>

      <div className="mt-4 w-[90%] md:w-[85%] mx-auto border-[1px] border-main-red"></div>
      <div className="px-10 flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center">
        {/* Display blog cards */}
        {blogData.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            description={blog.content}
            image={blog.image_url.url}
            slug={blog.slug}
          />
        ))}
      </div>
      <div className="text-center my-10">
        {visibleCount < blogData.length && (
          <button
            className="px-7 py-[10px] uppercase tracking-wide text-white text-[20px] font-medium bg-main-red"
            onClick={toggleShowMore}
          >
            {visibleCount >= blogData.length ? "Show Less" : "View More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Category;
