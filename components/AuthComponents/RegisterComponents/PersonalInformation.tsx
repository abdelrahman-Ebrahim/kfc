"use client";
import PhoneInput from "@/components/SharedComponents/PhoneInput";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import React from "react";
import { useForm } from "react-hook-form";

// Interface for form data
interface RegisterFormData {
  phoneNumber: string;
  countryCode: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Interface for PersonalInformation props
interface PersonalInformationProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  showConfirmPassword: boolean;
  handleClickShowConfirmPassword: () => void;
  isNextButtonDisabled: boolean;
  setIsFirstSectionCompleted: (value: boolean) => void;
  setCurrentStep: (step: number) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  handleClickShowPassword,
  showConfirmPassword,
  handleClickShowConfirmPassword,
  isNextButtonDisabled,
  setIsFirstSectionCompleted,
  setCurrentStep,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      phoneNumber: phoneNumber || "",
      countryCode: countryCode || "+966",
      name: name || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    // Combine countryCode with phone
    const combinedPhone = `${data.countryCode}${data.phoneNumber}`;

    // Use spread operator to exclude countryCode
    const { countryCode, ...updatedData } = {
      ...data,
      phone: combinedPhone,
    };

    setIsFirstSectionCompleted(true);
    setCurrentStep(2); // Move to the next step
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="flex-col w-full gap-4 mt-8 flex"
    >
      {/* Phone Input */}
      <PhoneInput
        label="رقم الهاتف"
        value={phoneNumber}
        {...register("phoneNumber", {
          required: "رقم الهاتف مطلوب",
          minLength: {
            value: 7, // Minimum length for a valid phone number
            message: "رقم الهاتف قصير جدًا",
          },
          maxLength: {
            value: 15, // Maximum length for a valid phone number
            message: "رقم الهاتف طويل جدًا",
          },
          pattern: {
            value: /^[1-9][0-9]*$/, // Prevents leading zeros and allows only numeric input
            message: "يجب أن يتكون رقم الهاتف من أرقام فقط ولا يبدأ بصفر",
          },
        })}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          setValue("phoneNumber", e.target.value); // Update react-hook-form's state
        }}
        countryCode={countryCode}
        onCountryCodeChange={(value: string) => {
          setCountryCode(value);
          setValue("countryCode", value); // Update react-hook-form's state
        }}
      />
      {errors.phoneNumber && (
        <p className="text-red-500">{errors.phoneNumber.message}</p>
      )}

      {/* Name Input */}
      <TextInput
        label="الاسم"
        type="text"
        value={name}
        {...register("name", { required: "الاسم مطلوب" })}
        onChange={(e) => {
          setName(e.target.value);
          setValue("name", e.target.value); // Update react-hook-form's state
        }}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {/* Password Input */}
      <TextInput
        label="كلمة السر"
        type={showPassword ? "text" : "password"}
        value={password}
        {...register("password", {
          required: "كلمة السر مطلوبة",
          minLength: {
            value: 6,
            message: "يجب أن تكون كلمة السر مكونة من 6 أحرف على الأقل",
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d])(?=.*[0-9]).{6,}$/,
            message:
              "يجب أن تحتوي كلمة السر على حرف كبير وحرف صغير وحرف خاص ورقم",
          },
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

      {/* Confirm Password Input */}
      <TextInput
        label="تأكيد كلمة السر"
        type={showConfirmPassword ? "text" : "password"}
        value={confirmPassword}
        {...register("confirmPassword", {
          required: "تأكيد كلمة السر مطلوب",
          validate: (value) =>
            value === getValues("password") || "كلمة السر غير متطابقة",
        })}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setValue("confirmPassword", e.target.value); // Update react-hook-form's state
        }}
        showPassword={showConfirmPassword}
        onTogglePassword={handleClickShowConfirmPassword}
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword.message}</p>
      )}

      {/* Next Button */}
      <SubmitButton
        disabled={isNextButtonDisabled}
        onClick={handleSubmit(onSubmit)} // Handle validation and submission on click
        buttonText="التالي"
      />
    </div>
  );
};

export default PersonalInformation;
