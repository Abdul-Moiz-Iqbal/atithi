"use client";
import Image from "next/image";
import Navbar from "../../../../../components/Navbar";
import NavlinkBar from "../../../../../components/NavlinkBar";
import BlogCard from "../../../../../components/home/BlogCard";

// image
import lakeImage from "../../../../../public/images/lake-image.png";
import image from "../../../../../public/images/lake-image.png";
import share from "../../../../../public/icons/share.png";

// react icons
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaTwitter } from "react-icons/fa";

//react
import { useState } from "react";
import H4 from "../../../../../ui/heading/H4";

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

const BlogPost = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  // Show more blogs logic
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <div>
        <Image src={lakeImage} alt="Servies" />
      </div>
      {/* blog and Profile section  */}
      <div className="flex gap-6 w-[80%] mx-auto ">
        {/* Blog Section  */}
        <div className="md:w-[70%]">
          <div className="hidden  my-7  mx-auto md:flex gap-5 uppercase text-main-red text-[20px] font-semibold tracking-wider">
            <div>Home</div>
            <div>&gt;</div>
            <div>Categories</div>
            <div>&gt;</div>
            <div>India Must Know </div>
          </div>
          <div className=" mt-4 w-full  md:mx-auto border-[1px] border-main-red"></div>

          <div className="mt-5 text-[18px] leading-tight tracking-wider">
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </div>
          <div className="mt-5 text-[18px] leading-tight tracking-wider">
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </div>
          <div className="mt-5 text-[18px] leading-tight tracking-wider">
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </div>
          <div className="mt-5 text-[18px] leading-tight tracking-wider">
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </div>
        </div>
        {/* profile image section  */}
        <div className="hidden md:block w-[30%] my-7 flex-col">
          <h2 className="text-[20px] text-main-red font-semibold">About me</h2>
          <div className=" mt-2 w-full  md:mx-auto  rounded-full bg-slate-100">
            <div className="h-[3px] w-[30%] bg-main-red"></div>
          </div>

          <div>
            {/* Pr0file image   */}
            <div className="mt-5 mx-auto w-[274px] h-[274px] border border-black rounded-full">
              <Image
                className="rounded-full h-full w-full border border-black"
                src={image}
              />
            </div>
            {/* Profile Bio text   */}
            <div className="mt-5 text-[18px] leading-tight tracking-wider">
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum
            </div>
          </div>
          {/* Social Post Share   */}
          <div className="mt-10">
            <h1 className="ml-5 font-semibold text-[20px]">Social</h1>
            <div className=" mt-2 w-full  md:mx-auto  rounded-full bg-slate-100">
              <div className="h-[3px] w-[30%] bg-main-red"></div>
            </div>

            {/* social icons  */}
            <div className="ml-5 mt-5 flex  gap-5">
              <div className="bg-main-blue p-2 rounded-full h-fit">
                <FaTwitter className="text-white" />
              </div>
              <div className="bg-main-blue p-2 rounded-full h-fit">
                <TiSocialLinkedin className="text-white " />
              </div>
              <div className="bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-500 p-2 rounded-full h-fit">
                <FaInstagram className="text-white " />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="mt-10 px-7 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white text-[20px] font-normal bg-main-red"
                onClick={showMore}
              >
                Start my Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* blog section end  */}
      <div className="mt-10 md:mt-48 w-[80%]  mx-auto">
        <div className=" border  md:border-[2px] border-main-red"></div>
        <div className="md:ml-5 mt-5 flex  items-center gap-5">
          <Image src={share} alt="Servies" />

          <h1 className="font-semibold text-[20px] md:text-[39px]">Share</h1>
          <div className="bg-main-blue p-2 rounded-full h-fit">
            <FaTwitter className="text-white md:text-xl" />
          </div>
          <div className="bg-main-blue p-2 rounded-full h-fit">
            <TiSocialLinkedin className="text-white md:text-xl" />
          </div>
          <div className="bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-500 p-2 rounded-full h-fit">
            <FaInstagram className="text-white md:text-xl" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-10 px-7 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white text-[20px] font-normal bg-main-red"
          onClick={showMore}
        >
          Start my Journey
        </button>
      </div>
      <H4
        title="You may also like"
        className="mt-10 text-main-red font-semibold tracking-wider md:text-[30px]"
      />
      <div className=" px-10 flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center">
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
    </div>
  );
};

export default BlogPost;
