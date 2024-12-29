'use client'
import Image from "next/image";

// image
import mobileImage from "../../../public/images/mobile-blog.png";

import Blog from "../../../components/blog/Blog";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "../loading";


export default function BlogPage() {
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBannerImage = async () => {
      try {
        const response = await fetch(`/api/page/banner/blog`, {
          method: "GET",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch banner image.");
        }

        const data = await response.json();
        console.log(data.data);
        setBannerImage(data.data); // The `data` field contains the `bannerImage`.
        
      } catch (err: unknown) {
        console.error("Error fetching banner image:", err.message);
        
      } finally {
    
      }
    };

    fetchBannerImage();
  }, []);
  return (
    <div className="font-author">
      <div className="">
        <Image src={bannerImage?.image_url.url} sizes="100vh" width={0} height={0} alt="Servies" className="w-full h-[70vh] object-cover lg:object-center hidden sm:block" />
        <Image src={mobileImage} alt="Servies" className="sm:hidden" />
      </div>
      <div className="w-[78%] my-7  mx-auto flex gap-5 uppercase text-main-red text-[20px] font-semibold tracking-wider">
        <Link href="/" className="">
          Home
        </Link>
        {/* <div>Home</div> */}
        <div>&gt;</div>
        <div>Categories</div>
      </div>

      <div className="mt-4 w-full md:w-[85%] md:mx-auto border-[1px] border-main-red"></div>
      <Suspense fallback={<LoadingSpinner />}>
        <Blog />
      </Suspense>
    </div>
  );
}
