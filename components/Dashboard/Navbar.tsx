"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBlog, FaWpforms, FaCog, FaPage4 } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/dashboard", icon: <FaHome /> },
    { name: "Blog", path: "/dashboard/blog", icon: <FaBlog /> },
    { name: "Category", path: "/dashboard/category", icon: <FaWpforms /> },
    { name: "form", path: "/dashboard/form", icon: <FaWpforms /> },
    { name: "Meta Data", path: "/dashboard/meta-data", icon: <FaCog /> },
    { name: "Legal edit", path: "/dashboard/legal-edit", icon: <FaPage4 /> },
    { name: "Testimonial", path: "/dashboard/testimonial", icon: <MdReviews /> },
  ];

  return (
    <div
      className={` bg-gray-800  text-white flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
      >
        {isCollapsed ? "→" : "←"}
      </button>

      {/* Menu Items */}
      <nav className="flex-1 mt-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`flex items-center p-3 rounded-md transition-all duration-200 ${
              pathname === item.path
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
