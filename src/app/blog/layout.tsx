import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavlinkBar from "@/components/NavlinkBar";
import "react-quill/dist/quill.snow.css";
// app/dashboard/layout.tsx

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar/>
      <NavlinkBar/>

     {children}
     <Footer/>
    </div>
  );
}
