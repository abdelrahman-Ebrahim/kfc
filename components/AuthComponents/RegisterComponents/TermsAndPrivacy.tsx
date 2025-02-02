import Link from "next/link";
import React from "react";

const TermsAndPrivacy = () => {
  return (
    <div className="mt-8 text-center flex flex-col justify-center items-center text-sm font-medium">
      <p className="text-shadeGray">
        عند استخدامك لتطبيق (اسم التطبيق)، فأنت بذلك توافق على
      </p>
      <div className="flex justify-center items-center gap-2">
        <Link href={"/"} className="text-primary">
          سياسة الخصوصية
        </Link>
        <span>&</span>
        <Link href={"/"} className="text-primary">
          شروط الاستخدام
        </Link>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
