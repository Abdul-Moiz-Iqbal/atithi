import Hero from "../../components/home/hero";
import TravelExpert from "../../components/home/travelExpert";
import Challenges from "../../components/home/Challenges";
import WhatWeDo from "../../components/home/WhatWeDo";
import Testimonial from "../../components/home/Testimonial";
import Blog from "../../components/home/Blog";
import Trips from "../../components/home/Trips";
import Navbar from "@/components/Navbar";
import NavlinkBar from "@/components/NavlinkBar";
import Footer from "@/components/Footer";

// pages/[slug].tsx or app/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  try {
    // Fetch metadata for the given slug from your API or DB
    const response = await fetch(`/api/metaData/home`);
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

export default function Home() {


  return (
    <div className="font-author">
        <Navbar/>
        <NavlinkBar/>
        <Hero />
        <TravelExpert />
        <Challenges />
        <WhatWeDo />
        <Testimonial />
        <Blog />
        <Trips />
        <Footer/>

    </div>
  );
}
