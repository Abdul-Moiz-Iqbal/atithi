"use client";
import Image from "next/image";

import BlogCard from "../../../../../components/home/BlogCard";

// image
import lakeImage from "../../../../../public/images/lake-image.png";
import mobileImage from "../../../../../public/images/mobile-blog.png";
import image from "../../../../../public/images/lake-image.png";
import share from "../../../../../public/icons/share.png";

// react icons
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaTwitter } from "react-icons/fa";

//react
import { useEffect, useState } from "react";
import H4 from "../../../../../ui/heading/H4";
import Link from "next/link";
import { useParams } from "next/navigation";

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

const BlogPost = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (slug) {
  //     fetch(`/api/blog/${slug}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.success) {
  //           console.log(data.data);
  //           setBlog(data.data);
  //         } else {
  //           setError(data.message);
  //         }
  //       })
  //       .catch((err) => setError("Error fetching blog"));
  //   }
  //   const fetchBlogsByCategory = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(`/api/blog?categoryId=${blog?.category._id}`);

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch blogs');
  //       }

  //       const data = await response.json();
  //       if (data.success) {
  //         console.log(data)
  //         setBlogData(data.data);
  //       } else {
  //         throw new Error(data.message);
  //       }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //     fetchBlogsByCategory();
  // }, [slug]);
  // Show more blogs logic
  useEffect(() => {
    if (slug) {
      fetch(`/api/blog/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data.data);
            setBlog(data.data);
          } else {
            setError(data.message);
          }
        })
        .catch((err) => {
          console.error("Error fetching blog:", err);
          setError("Error fetching blog");
        });
    }
  }, [slug]);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      if (!blog?.category?._id) return; // Ensure category ID exists

      try {
        setLoading(true);
        const response = await fetch(
          `/api/blog?categoryId=${blog.category._id}`
        );

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
  }, [blog]);

  const showMore = () => {
    if (visibleCount >= blogData.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 3, blogData.length));
    }
  };
  if(error) return <p className="text-center text-red-500">{error}</p>
  if(loading) return <p className="text-center">Loading...</p>

  return (
    <div className="font-author">
      <div className="">
        <Image src={lakeImage} alt="Servies" className="hidden sm:block" />
        <Image src={mobileImage} alt="Servies" className="sm:hidden" />
      </div>
      {/* blog and Profile section  */}
      <div className="flex gap-6 w-[80%] mx-auto ">
        {/* Blog Section  */}
        <div className="md:w-[70%]">
          <div className="hidden  my-7  mx-auto md:flex gap-5 uppercase text-main-red text-[20px] font-semibold tracking-wider">
            <div>Home</div>
            <div>&gt;</div>
            <div>{blog?.category.title}</div>
            <div>&gt;</div>
            <div>{blog?.title} </div>
          </div>
          <h1 className="mt-5 sm:hidden text-main-blue text-[20px] font-semibold tracking-wide">
            Blog Name
          </h1>
          <div className=" mt-4 w-full  md:mx-auto border-[1px] border-main-red"></div>

          <div
            className="mt-5 text-[18px] leading-tight tracking-wider"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          ></div>
        </div>
        {/* profile image section  */}
        <div className="hidden md:block w-[30%] my-7 flex-col">
          <h2 className="text-[20px] text-main-red font-semibold">About me</h2>
          <div className=" mt-2 w-full  md:mx-auto  rounded-full bg-slate-100">
            <div className="h-[3px] w-[30%] bg-main-red"></div>
          </div>

          <div>
            {/* Pr0file image   */}
            {/* <div className="mt-5 mx-auto w-[274px] h-[274px] border border-black rounded-full">
              <Image
                alt="profile"
                className="rounded-full h-full w-full border border-black"
                src={image}
              />
            </div> */}

            <div className="mt-5 mx-auto w-[274px] h-[274px] border border-black rounded-full overflow-hidden bg-gray-100">
              <Image
                alt="profile"
                src={image}
                width={274} // Matches the container dimensions
                height={274}
                className="object-cover w-full h-full" // Ensures the image covers the full container
              />
            </div>

            {/* Profile Bio text   */}
            <div className="mt-5 text-[18px] leading-tight tracking-wider">
              Welcome to Incredible India Journeys, your go-to blog for
              exploring the wonders of India! From the snow-capped peaks of the
              Himalayas to the sun-kissed beaches of Goa, we bring you
              captivating stories, travel tips, and cultural insights to fuel
              your wanderlust. Whether you're planning a soulful escape to
              Varanasi, a royal adventure in Rajasthan, or a serene retreat in
              Kerala, we’ve got you covered. Let us inspire your next trip and
              guide you through the vibrant landscapes, rich traditions, and
              unforgettable experiences that make India truly incredible.
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
              <div className="bg-twitter-blue p-2 rounded-full h-fit">
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
              <Link href={"/trip-form"}>
                <button className="mt-10 px-7 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white text-[20px] font-medium bg-main-red">
                  START MY SAFE JOURNEY
                </button>
              </Link>
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
          <div className="bg-twitter-blue p-2 rounded-full h-fit">
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
        <Link href={"/trip-form"}>
          <button className="mt-10 px-7 py-[10px] shadow-btn-shadow uppercase tracking-wider text-white text-[20px] font-medium bg-main-red">
            START MY SAFE JOURNEY
          </button>
        </Link>
      </div>
      <H4
        title="You may also like"
        className="mt-10 text-main-red font-semibold tracking-wider md:text-[30px]"
      />
      <div className=" px-10 flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center">
        {/* Display blog cards */}
        {blogData?.slice(0, visibleCount).map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.content}
            image={blog.image_url.url}
          />
        ))}
      </div>
      {visibleCount < blogData?.length && (
        <div className="text-center my-10">
          <button
            className="px-7 py-[10px] uppercase tracking-wide text-white text-[20px] font-medium bg-main-red"
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