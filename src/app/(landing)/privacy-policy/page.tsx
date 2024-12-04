

import { Metadata } from 'next';
import Content from "@/components/privacy-policy/Content";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  try {
    // Fetch metadata for the given slug from your API or DB
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/metaData/privacy-policy`);
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

export default function PrivacyPolicy() {
  
  return (
    <Content/>
  );
}
