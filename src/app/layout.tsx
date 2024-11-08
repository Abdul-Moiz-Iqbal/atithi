import type { Metadata } from "next";
import "./globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NavlinkBar from "../../components/NavlinkBar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head />
    <body>
      <Navbar />
      <NavlinkBar />
      {children}
      <Footer />
    </body>
  </html>
  );
}
