import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const LoginRedirect = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <GoArrowRight className="size-5" />
      <Link href={"/login"} className="text-shadeGray text-sm font-medium">
        العودة لصفحة تسجيل الدخول
      </Link>
    </div>
  );
};

export default LoginRedirect;
