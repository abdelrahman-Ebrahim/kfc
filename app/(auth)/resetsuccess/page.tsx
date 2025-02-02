"use client"
import Header from "@/components/AuthComponents/Header";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ResetSuccess = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/login");
  };
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-6">
        <Image
          src={"/auth/success.svg"}
          alt="sucess"
          width={120}
          height={120}
        />
        <div className="flex flex-col justify-center items-center gap-3">
          <Header title="تم تغيير كلمة السر بنجاح" />
          <p className="text-shadeGray text-center">
            لقد قمت بتغيير كلمة السر بنجاح ، يرجى العودة الى
            <br />
            صفحة تسجيل الدخول
          </p>
        </div>
      </div>
      <SubmitButton
        buttonText="العودة الي صفحة تسجيل الدخول"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default ResetSuccess;
