import Image, { StaticImageData } from "next/image";

// image
import image from "../../public/images/hero-background.png";

// ui
import ShadowCard from "../../ui/Card/ShadowCard";
import H6 from "../../ui/heading/H6";
import P from "../../ui/Paragraph/P";
import React from "react";

interface BlogCardProps {
    title: String;
    description: String;
    image: StaticImageData | String;
    
}

const BlogCard: React.FC<BlogCardProps> = ({title, description, image}) => {
    return (
        <ShadowCard className={"mt-10 p-5 rounded-[20px] md:basis-[40%] lg:basis-[25%] shadow-card-red"}>
        {/* Blog Image */}
        <div className="flex justify-center h-[170px] ">
          <Image
            src={image} // Replace with your image path
            alt={title}
            //   width={300} // Adjust width as needed
              height={350} // Adjust height as needed
            className="rounded-lg border-2 border-black" // Add rounded borders
          />
        </div>

        {/* Blog Title */}
        <H6
          title={`India Must Know`}
          className="tracking-wider text-[30px] font-medium mt-5"
        />

        {/* Blog Description */}
        <P
          className="mt-3 text-start leading-5 font-normal text-[1.22rem]"
          text={
            "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate."
          }
        />

        {/* Learn More Button */}
        <p className="mt-7 uppercase text-center text-main-red text-[20px] font-semibold">
          Read More
        </p>
      </ShadowCard>
    );
}

export default BlogCard