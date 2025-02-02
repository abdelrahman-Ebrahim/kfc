"use client";

import Header from "@/components/AuthComponents/Header";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState(""); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
  const router = useRouter();

  // Toggle visibility for the password field
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickConfirmShowPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const isButtonDisabled = !password || !confirmPassword;

  const handleSubmitButtonClick = () => {
    router.push("/resetsuccess");
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto"
      onSubmit={handleSubmitButtonClick} // Handles form submission
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <HeaderIcon imgSrc="/auth/key.svg" alt="key" />
        <Header
          title="نسيت كلمة السر؟"
          subtitle="لا تقلق، سنرسل لك تعليمات إعادة الضبط."
        />
      </div>

      <div className="flex flex-col gap-4 w-full mt-8">
        {/* Password Input */}
        <TextInput
          label="كلمة السر الجديدة"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
          showPassword={showPassword}
          onTogglePassword={handleClickShowPassword}
        />
        {/* Confirm Password Input */}
        <TextInput
          label="تأكيد كلمة السر الجديدة"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
          showPassword={showConfirmPassword}
          onTogglePassword={handleClickConfirmShowPassword}
        />
      </div>

      {/* Submit Button */}
      <SubmitButton
        buttonText="إعادة تعيين كلمة المرور"
        onClick={handleSubmitButtonClick}
        disabled={isButtonDisabled}
      />
    </form>
  );
};

export default ChangePassword;
