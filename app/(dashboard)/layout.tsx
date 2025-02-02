"use client";

import Footer from "@/components/Footer/Footer";
import ThemeWrapper from "../ThemeWrapper";
import Sidebar from "@/components/NavigationComponents/Sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeWrapper>
      {/* Dashboard-specific layout components*/}
      <main className="w-full min-h-screen flex bg-[#F9F9FA] overflow-hidden">
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="px-8 pt-6 w-full h-full relative">
            {children}
            <div className="w-full absolute bottom-0 left-0">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </ThemeWrapper>
  );
}
