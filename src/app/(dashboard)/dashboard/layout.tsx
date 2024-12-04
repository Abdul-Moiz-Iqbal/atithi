import Navbar from "@/components/Dashboard/Navbar";
import "react-quill/dist/quill.snow.css";
// app/dashboard/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex ">
      <Navbar/>

     {children}
    </div>
  );
}
