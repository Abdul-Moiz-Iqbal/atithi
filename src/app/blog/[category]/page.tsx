"use client"
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import NavlinkBar from "../../../../components/NavlinkBar";

// image 
import mobileBlog from "../../../../public/images/mobile-blog.png";
import image from "../../../../public/images/lake-image.png";
import BlogCard from "../../../../components/home/BlogCard";
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

const Category = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    // Show more blogs logic
    const showMore = () => {
      setVisibleCount((prevCount) => prevCount + 2);
    };

  return (
    <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <div>
        <Image src={mobileBlog} alt="Servies"/>
      </div>
      <div className="w-[90%] md:w-[78%] my-7  mx-auto flex gap-5 uppercase text-main-red text-[16px] md:text-[20px] font-semibold tracking-wider">
        <div>Home</div>
        <div>&gt;</div>
        <div>Categories</div>
        <div>&gt;</div>
        <div>India Must Know</div>
      </div>
      
      <div className="mt-4 w-[90%]  md:w-[85%] mx-auto border-[1px] border-main-red"></div>
      <div className="px-10  flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center">
        {/* Display blog cards */}
      {blogData.slice(0, visibleCount).map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        />
      ))}
      </div>
      {visibleCount < blogData.length && (
        <div className="text-center my-10">
          <button
            className="px-7 py-[10px] uppercase tracking-wide text-white text-[20px] font-semibold bg-main-red"
            onClick={showMore}
          >
            View More
          </button>
        </div>
      )}
      
      

      <div className="h-[100vh]">s</div>

      
    </div>
  );
};

export default Category;
