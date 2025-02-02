"use client";
import React, { useEffect, useState } from "react";
import EksabLogo from "../SharedComponents/EksabLogo";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import SubmitButton from "../SharedComponents/SubmitButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "@/constants/navLinks";
import navOptions from "@/constants/navOptions";

const Navbar = () => {
  const { data: session } = useSession(); // Get the session
  const [isOpen, setIsOpen] = useState(false); // Mobile Toggler state
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href; // determine currently active pathname and link

  const handleSignOut = () => {
    setIsOpen(false);
    signOut({ callbackUrl: "/login" }); // Sign out and redirect to the login page
  };

  // Control body margin when the navigation menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open"); // Add class when menu is open
    } else {
      document.body.classList.remove("menu-open"); // Remove when closed
    }
  }, [isOpen]);

  return (
    <header className="w-full overflow-x-hidden z-50">
      <nav className="fixed top-0 left-0 w-full h-20 max-w-screen-2xl flex justify-between items-center px-8 bg-white shadow-navbar-shadow z-50">
        <div className="flex items-center gap-4">
          {/* Small Screen Navbar Menu Toggler */}
          <div className="lg:hidden flex items-center justify-end pr-4 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* Logo */}
          <EksabLogo />
          {/* Conditionally render the sign-out button */}
          {session && (
            <div className="hidden lg:block">
              <SubmitButton
                buttonText="تسجيل الخروج"
                rightIcon="/logout.svg"
                onClick={handleSignOut}
                fullWidth={false}
                classContainer="hover:bg-red-600 !mt-0"
              />
            </div>
          )}
        </div>
        <div className="size-12 p-1">
          <div className="size-10 flex justify-center items-center">
            <Image
              src={"/navIcons/globe.svg"}
              alt="globe"
              width={24}
              height={24}
            />
          </div>
        </div>
      </nav>
      {/* Animated Full-width Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? "max-h-screen opacity-100 pt-20" : "max-h-0 opacity-0"
        } w-full bg-white shadow-navbar-shadow transition-all duration-500 ease-in-out overflow-hidden`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        {/* display main navigation links */}
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
                onClick={() => setIsOpen(false)}
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

          {/* More Options */}
          <p className="mt-4 mb-2 px-6 text-shadeGray w-full">
            المزيد من الخيارات
          </p>

          {/* display option links about us and support */}
          {navOptions.map(({ href, text, icon }) => (
            <div
              key={href}
              className={`flex justify-center items-center w-full h-14 px-6 ${
                isActive(href) ? "bg-primary" : "bg-white"
              }`}
            >
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-2 ${
                  isActive(href) ? "text-white" : "text-shadeBlack"
                }`}
              >
                {icon}
                <p className={`font-semibold text-base`}>{text}</p>
              </Link>
            </div>
          ))}

          {/* Mobile Sign Out Button */}
          {session && (
            <div className="block lg:hidden">
              <SubmitButton
                buttonText="تسجيل الخروج"
                rightIcon="/logout.svg"
                onClick={handleSignOut}
                fullWidth={false}
                classContainer="hover:bg-red-600 !mt-0"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
