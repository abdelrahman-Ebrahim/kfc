"use client";

import Header from "@/components/AuthComponents/Header";
import EksabLogo from "@/components/SharedComponents/EksabLogo";
import RegisterRedirect from "@/components/AuthComponents/LoginComponents/RegisterRedirect";
import RememberMe from "@/components/AuthComponents/LoginComponents/RememberMe";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const router = useRouter();

  // React hook form initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      email: email || "",
      password: password || "",
    },
  });

  // Toggle visibility for the password field
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  // Check if both inputs have values
  const isButtonDisabled = !email || !password;

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Use NextAuth.js to sign in
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log("SignIn Result:", result); // Log the result

      if (result?.error) {
        // Handle authentication errors
        const errorMessage =
          result.error === "CredentialsSignin"
            ? "Invalid email or password" // Default message
            : result.error; // Custom message from the backend

        setErrorMessage(errorMessage);
      } else {
        // Redirect to the dashboard on success
        router.push("/");
      }
    } catch (error) {
      console.error("Login Failed:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // React Hook Form manages form submission
      className="flex flex-col justify-center items-center w-full max-w-md mx-auto"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        {/* LogoMark */}
        <EksabLogo />

        <Header
          title="تسجيل الدخول"
          subtitle="مرحبًا بك مرة أخرى! الرجاء إدخال تفاصيلك."
        />
      </div>

      {/* Inputs for email and password */}
      <div className="flex flex-col w-full gap-4 mt-8">
        {/* Email Input */}
        <TextInput
          label="البريد الالكتروني"
          type="email"
          value={email}
          {...register("email", {
            required: "البريد الإلكتروني مطلوب",
          })}
          onChange={(e) => {
            setEmail(e.target.value);
            setValue("email", e.target.value); // Update react-hook-form's state
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Password Input */}
        <TextInput
          label="كلمة السر"
          type={showPassword ? "text" : "password"}
          value={password}
          {...register("password", {
            required: "كلمة السر مطلوبة",
          })}
          onChange={(e) => {
            setPassword(e.target.value);
            setValue("password", e.target.value); // Update react-hook-form's state
          }}
          showPassword={showPassword}
          onTogglePassword={handleClickShowPassword}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        {/* Remember Me and Forgot Password */}
        <RememberMe />
      </div>

      {/* Display the error message */}
      {errorMessage && (
        <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
      )}

      {/* Submit Button */}
      <SubmitButton
        disabled={isButtonDisabled}
        type="submit"
        buttonText="تسجيل الدخول"
        loading={isLoading}
      />

      <RegisterRedirect />
    </form>
  );
}
