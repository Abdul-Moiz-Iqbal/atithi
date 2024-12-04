// import Image from "next/image";


// import HowWeWorkComponent from "../../../../components/HowWeWork";
// // image
// import lakeImage from "../../../../public/images/lake-image.png";
// import mobileImage from "../../../../public/images/mobile-blog.png";
// import Pricing from "../../../../components/sections/pricing";
// import WhatWeDo from "../../../../components/home/WhatWeDo";
// import Link from "next/link";
// import Button from "../../../../ui/Button/Button";

// export const HowWeWork = () => {
//   return (
//     <div className="font-author">

//       <div className="">
//         <Image src={lakeImage} alt="Servies" className="hidden sm:block" />
//         <Image src={mobileImage} alt="Servies" className="sm:hidden" />
//       </div>
    
//       <HowWeWorkComponent />
//       <Pricing />
//       <WhatWeDo title="What we do" showButton={false} />
//       <div className="flex justify-center">
//         <Link href={"/trip-form"} className="">
//           <Button
//             text="START MY SAFE
// JOURNEY"
//             className="w-fit tracking-wider  my-8  font-medium   shadow-none"
//           />
//         </Link>
//       </div>
        
//     </div>
//   );
// };

// export default HowWeWork;

import Image from "next/image";
import HowWeWorkComponent from "../../../../components/HowWeWork";
// images
import lakeImage from "../../../../public/images/lake-image.png";
import mobileImage from "../../../../public/images/mobile-blog.png";
import Pricing from "../../../../components/sections/pricing";
import WhatWeDo from "../../../../components/home/WhatWeDo";
import Link from "next/link";
import Button from "../../../../ui/Button/Button";
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  try {
    // Fetch metadata for the given slug from your API or DB
    const response = await fetch(`/api/metaData/how-we-work`);
    const metadata = await response.json();

    if (!metadata || metadata.error) {
      return {
        title: 'One stop for Trip to India Online Booking',
        description: 'We provide you one stop solution for all your trip related needs for India.',
        openGraph: {
          title: 'Atithi',
          description: 'Atithi Provides you one stop solution for all your trip related needs for India.',
          // image: '/default-image.jpg',
          url: `/`,
        },
      };
    }

    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        title: metadata.openGraph?.title || metadata.title,
        description: metadata.openGraph?.description || metadata.description,
        image: metadata.openGraph?.image || '/default-image.jpg',
        url: metadata.openGraph?.url || `/pages/${slug}`,
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'One stop for Trip to India Online Booking',
      description: 'We provide you one stop solution for all your trip related needs for India.',
      openGraph: {
        title: 'Atithi',
        description: 'Atithi Provides you one stop solution for all your trip related needs for India.',
        // image: '/default-image.jpg',
        url: `/`,
      },
    };
  }
}

const HowWeWork = () => {
  return (
    <div className="font-author">
      <div className="">
        <Image src={lakeImage} alt="Services" className="hidden sm:block" />
        <Image src={mobileImage} alt="Services" className="sm:hidden" />
      </div>
      <HowWeWorkComponent />
      <Pricing />
      <WhatWeDo title="What we do" showButton={false} />
      <div className="flex justify-center">
        <Link href={"/trip-form"} className="">
          <Button
            text="START MY SAFE JOURNEY"
            className="w-fit tracking-wider my-8 font-medium shadow-none"
          />
        </Link>
      </div>
    </div>
  );
};

export default HowWeWork;
