import Image from "next/image";
// import image from "../../public/images/hero-background.png";


interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, description, image }) => {
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

      <div className="px-5 w-full relative ">
        <h1 className="text-black text-[18px] tracking-wider md:text-[30px] font-medium ">
          {title}
        </h1>
        <div className="mt-5 w-full  text-base sm:text-[18px] leading-tight tracking-[0.8px] sm:tracking-[0.9px]">
         {description}
        </div>
        <p className="absolute pr-5 bottom-0 right-0 text-[16px] font-semibold text-main-red">
          Read Blogs &#8594;
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
