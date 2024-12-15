import type { Metadata } from "next";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import NavlinkBar from "../../../components/NavlinkBar";
import { FormContextProvider } from "@/src/context/FormContext";



export const metadata: Metadata = {
  title: 'One stop for Trip to India Online Booking',
  description: 'We provide you one stop solution for all your trip related needs for India.',
  openGraph: {
    title: 'Atithi',
    description: 'Atithi Provides you one stop solution for all your trip related needs for India.',
    // image: '/default-image.jpg',
    url: `/`,
  },
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
   <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <FormContextProvider>
      {children}
      </FormContextProvider>
      <Footer />
      </div>
  );
}
