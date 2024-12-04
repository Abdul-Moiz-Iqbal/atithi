import Image, { StaticImageData } from "next/image";

// image

// ui
import ShadowCard from "../../ui/Card/ShadowCard";
import H6 from "../../ui/heading/H6";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./BlogCard.css";
interface BlogCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  id: number;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
 
  title,
  description = "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate.",
  image,
  slug = null,
}) => {
  const pathName = usePathname();

  return (
    <ShadowCard
      className={
        "mt-8 sm:mt-10 p-5 rounded-[20px] md:basis-[40%] lg:basis-[25%] shadow-card-red"
      }
    >
      {/* Blog Image */}
      <div className="flex justify-center h-[170px] ">
        <Image
          src={image} // Replace with your image path
          alt={title}
          width={300} // Adjust width as needed
          height={350} // Adjust height as needed
         
          className="rounded-lg border-2 border-black" // Add rounded borders
        />
      </div>

      {/* Blog Title */}
      <div className="flex flex-col justify-between">
        <H6
          title={`India Must Know`}
          className="tracking-wider text-lg sm:text-[30px] font-medium mt-5"
        />

        {/* Blog Description */}
        {/* <P
          className="mt-3 text-start leading-5 tracking-[0.8px] sm:tracking-[0.9px] font-normal text-base sm:text-lg"
          text={description}
        /> */}
        
{/* <div
          className="mt-5 w-full text-base sm:text-[18px] leading-tight tracking-[0.8px] sm:tracking-[0.9px]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div> */}
        <div
          className="mt-5 w-full text-base sm:text-[18px] leading-tight tracking-[0.8px] sm:tracking-[0.9px] truncate-lines"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        {/* Learn More Button */}
        <Link
          // href={`${pathName}/${id}`}
          href={`${slug !== null ? `${pathName}/${slug}` : `blog`}`}
          className="mt-7 uppercase text-center text-main-red text-[16px] sm:text-[20px] font-semibold"
        >
          Read More
        </Link>
      </div>
    </ShadowCard>
  );
};

export default BlogCard;
