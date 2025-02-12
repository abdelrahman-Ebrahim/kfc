"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const CompanyInfo: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full border-t border-shadeGray relative">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-12 h-12 flex items-center justify-center rounded">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-shadeGray font-medium">مرحبًا بك!</p>
          <p className="text-sm font-semibold">اسم الشركة / الوكالة</p>
        </div>
        <button
          className="text-gray-500 text-2xl hover:text-gray-700 ml-auto"
          style={{ writingMode: "vertical-lr" }}
          onClick={() => setDropdownOpen(prev => !prev)}
        >
          ...
        </button>
      </div>
      {dropdownOpen && (
        <div 
          ref={dropdownRef} 
          className="absolute right-0 bottom-[75px] w-[88%] mx-3 bg-[#F9F9FA] shadow-lg rounded  border-shadeGray z-10"
        >
          <ul className="py-2">
            <li>
            <Link href="/profile" className="block px-4 py-2 hover:bg-[#EEEEEF]">
                بيانات الشركة
              </Link>
            </li>
            <li>
              <Link href="/login" className="block px-4 py-2 hover:bg-[#EEEEEF]">
                <p className="">تسجيل الخروج</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
