import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import image from "../../public/images/hero-background.png";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  id: number;
}
const formatTitle = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove extra hyphens
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  const pathName = usePathname();
  const formattedTitle = formatTitle(title); // Format title for SEO-friendly URL
  console.log("Key", id);
  return (
    <div className="p-4  flex shadow-card-red rounded-[20px]">
      <div
        className="flex-none w-[314px] h-[254px] rounded-[13px] "
        style={{ position: "relative" }}
      >
        <Image
          alt="Image"
          // width={300}
          // height={300}
          fill
          src={image} // Replace with your image path
          className=" h-full w-full rounded-[13px] border-2 border-black  object-cover"
        />
      </div>

      <div className="px-5 w-full relative ">
        <h1 className="text-black text-[18px] tracking-wider md:text-[30px] font-medium ">
          {title}
        </h1>
        {/* <div className="mt-5 w-full  text-base sm:text-[18px] leading-tight tracking-[0.8px] sm:tracking-[0.9px]">
         {description}
        </div> */}
        <div
          className="mt-5 w-full text-base sm:text-[18px] leading-tight tracking-[0.8px] sm:tracking-[0.9px]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <Link
          href={`${pathName}/${formattedTitle}-${id}`}
          className="absolute pr-5 bottom-0 right-0 text-[16px] font-semibold text-main-red"
        >
          View More &#8594;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
