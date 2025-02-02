"use client";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import Header from "@/components/AuthComponents/Header";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginRedirect from "@/components/AuthComponents/LoginRedirect";
import { useForm } from "react-hook-form";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // State for email input
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Success message state

  const isButtonDisabled = !email || isLoading;

  // React hook form initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      email: email || "",
    },
  });

  // Submit button call to api
  const handleSubmitButtonClick = async (data: any) => {
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null); // Clear any previous success message
    try {
      const payload = {
        email: data.email,
      };

      console.log(payload);

      const response = await axios.post(
        "https://mohasel.net/api/Client/Auth/ForgotPassword",
        payload
      );

      if (response.status === 200) {
        const { message } = response.data;
        setIsLoading(false);

        console.log(response.data.message);

        // Set success message
        setSuccessMessage("تم إرسال تعليمات إعادة التعيين إلى بريدك الإلكتروني.");

        // Redirect to OTP page after a short delay
        setTimeout(() => {
          router.push(`/otp?email=${encodeURIComponent(data.email)}`); // Pass email as query parameter
        }, 2000); // 2-second delay to show the success message
      }
    } catch (error: any) {
      console.log("Error:", error);
      // Extract the error message from the server response
      const serverErrors = error.response?.data?.errors;
      // Handle API errors
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          // Handle validation errors
          const errorMessages = Object.values(data.errors).flat().join(", ");
          setErrorMessage(errorMessages || "Invalid email address.");
        } else {
          // Handle other errors
          setErrorMessage(
            data.title || "Something went wrong. Please try again."
          );
        }
      } else {
        // Handle network errors
        setErrorMessage("Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitButtonClick)}
      className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <HeaderIcon imgSrc="/auth/key.svg" alt="key" />
        <Header
          title="نسيت كلمة السر؟"
          subtitle="لا تقلق، سنرسل لك تعليمات إعادة الضبط."
        />
      </div>

      <div className="w-full mt-8">
        {/* Email Input */}
        <TextInput
          label="البريد الالكتروني"
          type="email"
          value={email}
          {...register("email", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "أدخل بريدًا إلكترونيًا صحيحًا",
            },
          })}
          onChange={(e) => {
            setEmail(e.target.value);
            setValue("email", e.target.value); // Update react-hook-form's state
          }}
        />
        {errors.email && (
          <p className="text-red-500 mt-2">{errors.email.message}</p>
        )}
      </div>

      {/* Display success message */}
      {successMessage && (
        <p className="text-green-500 mt-4 text-center">{successMessage}</p>
      )}

      {/* Display error message */}
      {errorMessage && (
        <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
      )}

      {/* Submit Button */}
      <SubmitButton
        disabled={isButtonDisabled}
        buttonText={isLoading ? "جاري الإرسال..." : "إعادة تعيين كلمة المرور"}
        loading={isLoading}
        type="submit"
      />

      <LoginRedirect />
    </form>
  );
};

export default ForgotPassword;