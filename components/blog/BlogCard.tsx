import Image from "next/image";
import image from "../../public/images/hero-background.png";

const BlogCard = () => {
  return (
    <div className="p-4  flex shadow-card-red rounded-[20px]">
      <div
        className="flex-none w-[314px] h-[254px] rounded-[13px] "
        style={{ background: "blue", position: "relative" }}
      >
        <Image
        alt="Ok"
          fill
          src={image} // Replace with your image path
          className=" h-full w-full rounded-[13px] border-2 border-black  object-cover"
        />
      </div>

      <div className="px-5 relative">
        <h1 className="text-black text-[20px] tracking-wider md:text-[30px] font-medium ">
          India Must Know{" "}
        </h1>
        <div className="mt-5 text-[18px] leading-tight tracking-wider">
          Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          Loreum Ipsum Loreum Ipsum Loreum Ipsum
        </div>
        <p className="absolute pr-5 bottom-0 right-0 text-[20px] font-semibold text-main-red">
          Read Blogs &#8594;
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
