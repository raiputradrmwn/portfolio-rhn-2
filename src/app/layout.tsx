import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/style/font";
import Navbar from "@/components/Navbar";
import { FloatingDockDemo } from "@/components/FloatingDock";


export const metadata: Metadata = {
  title: "Rhn.",
  description: "Rhn. Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#F5F5F5]`}
      >
        <Navbar/>
        {children}
        <FloatingDockDemo />
      </body>
    </html>
  );
}
