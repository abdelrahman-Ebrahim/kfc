"use client";
import Header from "@/components/AuthComponents/Header";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

// Wrap the OTP component in Suspense
const OTPContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to access query parameters
  const email = searchParams.get("email"); // Get the email from query parameters

  const handleButtonClick = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-6">
        <HeaderIcon imgSrc="/auth/mail.svg" alt="mail" />
        <div className="flex flex-col justify-center items-center gap-3">
          <Header title="تحقق من بريدك الإلكتروني" />
          <p className="text-shadeGray text-center">
            لقد أرسلنا رابط التحقق إلى <br />{" "}
            <span className="font-semibold">{email}</span>
          </p>
        </div>
      </div>
      <SubmitButton
        buttonText="العودة الى صفحة تسجيل الدخول"
        onClick={handleButtonClick}
      />
    </div>
  );
};

const OTP = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPContent />
    </Suspense>
  );
};

export default OTP;