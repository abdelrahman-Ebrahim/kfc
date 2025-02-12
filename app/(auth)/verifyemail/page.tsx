"use client";
import Header from "@/components/AuthComponents/Header";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import LoginRedirect from "@/components/AuthComponents/LoginRedirect";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const VerifyEmail = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only numbers
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newCode = [...code];
      if (!newCode[index] && index > 0) {
        const prevInput = document.getElementById(`input-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
      newCode[index] = "";
      setCode(newCode);
    }
  };

  useEffect(() => {
    setIsButtonDisabled(code.some((digit) => digit === ""));
  }, [code]);

  return (
    <form className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <HeaderIcon imgSrc="/auth/key.svg" alt="key" />
        <Header
          title="أدخل رمز التحقق"
          subtitle="قم بإدخال رمز التحقق الذي قمنا بإرساله لك عبر البريد الإلكتروني."
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-8 w-full gap-6">
        {/* Code Input */}
        <div className="grid grid-cols-6 gap-4" dir="ltr">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border border-[#70737A] rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-[32px] font-medium md:w-16 md:h-16"
            />
          ))}
        </div>
        <SubmitButton
          buttonText="تحقق"
          onClick={() => console.log("Code entered:", code.join(""))}
          disabled={isButtonDisabled}
        />
      </div>

      <div className="mt-8 flex justify-center items-center text-sm">
        <p>
          لم تستلم البريد الإلكتروني؟{" "}
          <Link href="/forgotpassword" className="text-primary ms-2">
            انقر لإعادة الإرسال
          </Link>
        </p>
      </div>

      <LoginRedirect />
    </form>
  );
};

export default VerifyEmail;
