"use client";
import navLinks from "@/constants/navLinks";
import navOptions from "@/constants/navOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href; // determine currently active pathname and link
  return (
    <div className="w-[272px] shadow-navbar-shadow bg-white h-full justify-center items-start hidden lg:flex">
      {/* display main navigation navLinks */}
      <div className="pt-6 pb-8 w-full flex flex-col justify-start items-center">
        {navLinks.map(({ href, text, icon }) => (
          <div
            key={href}
            className={`flex justify-center items-center w-full h-14 px-6 ${
              isActive(href) ? "bg-primary" : "bg-white"
            }`}
          >
            <Link
              href={href}
              className={`w-full flex items-center gap-2 ${
                isActive(href) ? "text-white" : "text-shadeBlack"
              }`}
            >
              <div
                className={`${
                  isActive(href) ? "text-white" : "text-shadeGray"
                }`}
              >
                {icon}
              </div>
              <p className={`font-semibold text-base`}>{text}</p>
            </Link>
          </div>
        ))}
        <p className="mt-4 mb-2 px-6 text-shadeGray w-full">
          المزيد من الخيارات
        </p>

        {/* display option navLinks about us and support */}
        {navOptions.map(({ href, text, icon }) => (
          <div
            key={href}
            className={`flex justify-center items-center w-full h-14 px-6 ${
              isActive(href) ? "bg-primary" : "bg-white"
            }`}
          >
            <Link
              href={href}
              className={`w-full flex items-center gap-2 ${
                isActive(href) ? "text-white" : "text-shadeBlack"
              }`}
            >
              {icon}
              <p className={`font-semibold text-base`}>{text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
