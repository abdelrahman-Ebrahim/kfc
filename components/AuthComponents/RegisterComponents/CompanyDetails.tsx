import TextInput from "@/components/SharedComponents/TextInput";
import React from "react";
import { FileUpload } from "./FileUpload";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { useForm } from "react-hook-form";

interface CompanyDetailsProps {
  tabSpecificLabels: {
    [key: string]: {
      companyNameArabic: string;
      companyNameEnglish: string;
      commercialRegistration: string;
      commercialFileUpload: string;
      vatCertificate: string;
      vatFileUpload: string;
    };
  };
  activeTab: number;
  companyNameArabic: string;
  setCompanyNameArabic: React.Dispatch<React.SetStateAction<string>>;
  companyNameEnglish: string;
  setCompanyNameEnglish: React.Dispatch<React.SetStateAction<string>>;
  commercialRegistration: string;
  setCommercialRegistration: React.Dispatch<React.SetStateAction<string>>;
  commercialRegistrationFile: File | null;
  setCommercialRegistrationFile: React.Dispatch<
    React.SetStateAction<File | null>
  >;
  vatCertificate: string;
  setVatCertificate: React.Dispatch<React.SetStateAction<string>>;
  vatCertificateFile: File | null;
  setVatCertificateFile: React.Dispatch<React.SetStateAction<File | null>>;
  isSubmitButtonDisabled: boolean;
  handleSubmitButton: () => void;
  isLoading: boolean;
}

const CompanyDetails = ({
  tabSpecificLabels,
  activeTab,
  companyNameArabic,
  setCompanyNameArabic,
  companyNameEnglish,
  setCompanyNameEnglish,
  commercialRegistration,
  setCommercialRegistration,
  commercialRegistrationFile,
  setCommercialRegistrationFile,
  vatCertificate,
  setVatCertificate,
  vatCertificateFile,
  setVatCertificateFile,
  isSubmitButtonDisabled,
  handleSubmitButton,
  isLoading,
}: CompanyDetailsProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyNameArabic: companyNameArabic || "",
      companyNameEnglish: companyNameEnglish || "",
      commercialRegistration: commercialRegistration || "",
      commercialRegistrationFile: commercialRegistrationFile || null,
      vatCertificate: vatCertificate || "",
      vatCertificateFile: vatCertificateFile || null,
    },
  });

  const onFileUpload = (file: File | null, type: "commercialRegistration" | "vatCertificate") => {
    if (type === "commercialRegistration") {
      setCommercialRegistrationFile(file);
    } else if (type === "vatCertificate") {
      setVatCertificateFile(file);
    }
  };

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("companyNameArabic", data.companyNameArabic);
    formData.append("companyNameEnglish", data.companyNameEnglish);
    formData.append("commercialRegistration", data.commercialRegistration);
    formData.append("vatCertificate", data.vatCertificate);
    if (commercialRegistrationFile) {
      formData.append("commercialRegistrationFile", commercialRegistrationFile);
    }
    if (vatCertificateFile) {
      formData.append("vatCertificateFile", vatCertificateFile);
    }
    handleSubmitButton();
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-4 mt-8"
    >
      {/* Company/Agency Name in Arabic */}
      <TextInput
        label={tabSpecificLabels[activeTab].companyNameArabic}
        type="text"
        value={companyNameArabic}
        {...register("companyNameArabic", {
          required: "اسم الشركة باللغة العربية مطلوب",
          minLength: {
            value: 3,
            message: "اسم الشركة باللغة العربية يجب أن يكون على الأقل 3 أحرف",
          },
          pattern: {
            value: /^[\u0600-\u06FF0-9\s]+$/, // Arabic letters and Arabic/English numbers only
            message: "اسم الشركة يجب أن يحتوي على حروف عربية وأرقام فقط",
          },
        })}
        onChange={(e) => {
          setCompanyNameArabic(e.target.value);
          setValue("companyNameArabic", e.target.value);
        }}
      />
      {errors.companyNameArabic && (
        <p className="text-red-500 text-xs">
          {errors.companyNameArabic.message}
        </p>
      )}

      {/* Company/Agency Name in English */}
      <TextInput
        label={tabSpecificLabels[activeTab].companyNameEnglish}
        type="text"
        value={companyNameEnglish}
        {...register("companyNameEnglish", {
          required: "اسم الشركة باللغة الانجليزية مطلوب",
          minLength: {
            value: 3,
            message:
              "اسم الشركة باللغة الإنجليزية يجب أن يكون على الأقل 3 أحرف",
          },
          pattern: {
            value: /^[A-Za-z0-9\s]+$/, // English letters and numbers, and spaces
            message: "اسم الشركة يجب أن يحتوي على حروف وأرقام إنجليزية فقط",
          },
        })}
        onChange={(e) => {
          setCompanyNameEnglish(e.target.value);
          setValue("companyNameEnglish", e.target.value);
        }}
      />
      {errors.companyNameEnglish && (
        <p className="text-red-500 text-xs">
          {errors.companyNameEnglish.message}
        </p>
      )}

      {/* Commercial Registration Number */}
      <TextInput
        label={tabSpecificLabels[activeTab].commercialRegistration}
        type="text"
        value={commercialRegistration}
        {...register("commercialRegistration", {
          required: "رقم السجل التجاري مطلوب",
          pattern: {
            value: /^[A-Za-z0-9]{8,20}$/, // Allow both letters and digits with a length of 8 to 20
            message: "رقم السجل التجاري يجب أن يكون بين 8 و 20 حرف أو رقم",
          },
        })}
        onChange={(e) => {
          setCommercialRegistration(e.target.value);
          setValue("commercialRegistration", e.target.value);
        }}
      />
      {errors.commercialRegistration && (
        <p className="text-red-500 text-xs">
          {errors.commercialRegistration.message}
        </p>
      )}

      {/* Upload Commercial Registration File */}
      <FileUpload
        label={tabSpecificLabels[activeTab].commercialFileUpload}
        onFileUpload={(file) => onFileUpload(file, "commercialRegistration")}
      />

      {/* VAT Certificate Number */}
      <TextInput
        label={tabSpecificLabels[activeTab].vatCertificate}
        type="text"
        value={vatCertificate}
        {...register("vatCertificate", {
          required: "رقم التعريف الضريبي مطلوب",
          pattern: {
            value: /^[A-Za-z0-9]{8,15}$/, // Valid VAT numbers are usually between 8 and 15 characters, allowing letters and numbers
            message: "رقم التعريف الضريبي يجب أن يكون بين 8 و 15 حرف أو رقم",
          },
        })}
        onChange={(e) => {
          setVatCertificate(e.target.value);
          setValue("vatCertificate", e.target.value);
        }}
      />
      {errors.vatCertificate && (
        <p className="text-red-500 text-xs">{errors.vatCertificate.message}</p>
      )}

      {/* Upload VAT Certificate File */}
      <FileUpload
        label={tabSpecificLabels[activeTab].vatFileUpload}
        onFileUpload={(file) => onFileUpload(file, "vatCertificate")}
      />

      {/* Register Account Button */}
      <SubmitButton
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmit(onSubmit)}
        buttonText="تسجيل حساب جديد"
        loading={isLoading}
      />
    </div>
  );
};

export default CompanyDetails;
