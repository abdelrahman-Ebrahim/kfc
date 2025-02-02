import Link from "next/link";
import React from "react";

const AlreadyRegistered = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 text-sm font-medium">
      <p className="text-shadeGray">لديك حساب بالفعل؟</p>
      <Link href={"/login"} className="text-primary">
        تسجيل دخول
      </Link>
    </div>
  );
};

export default AlreadyRegistered;
