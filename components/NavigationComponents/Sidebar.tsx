"use client";
import navLinks from "@/constants/navLinks";
import navOptions from "@/constants/navOptions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CompanyInfo from "./CompanyInfo";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href; // determine currently active pathname and link
  return (
    <div className="w-[272px] shadow-navbar-shadow bg-white h-full flex flex-col hidden lg:flex">
      {/* الجزء اللي فيه الروابط الرئيسية والخيارات */}
      <div className="pt-6 pb-8 flex-1 flex flex-col items-center">
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
              <div className={`${isActive(href) ? "text-white" : "text-shadeGray"}`}>
                {icon}
              </div>
              <p className="font-semibold text-base">{text}</p>
            </Link>
          </div>
        ))}

        <p className="mt-4 mb-2 px-6 text-shadeGray w-full">
          المزيد من الخيارات
        </p>

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
              <p className="font-semibold text-base">{text}</p>
            </Link>
          </div>
        ))}
      </div>

      <CompanyInfo/>
    </div>
  );
};

export default Sidebar;
