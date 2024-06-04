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
      <div className="h-[100vh] flex items-center justify-center relative">
        <div className="flex antialiased">
          <div className="hidden md:block h-[100vh] p-5 rounded-md">
            <Sidebar />
          </div>
          <div className="p-5 w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
