import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center relative">
        <div className="flex antialiased">
          <div className="hidden md:block h-[100vh] p-5 rounded-md">
            <Sidebar />
          </div>
          <div className="p-5 w-[100%]">
            {children}
        </div>
        </div>
      </div>
    </>
  );
}
