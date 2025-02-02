"use client";
import React, { useState } from "react";
import Header from "@/components/AuthComponents/Header";
import CustomTabs from "@/components/AuthComponents/RegisterComponents/CustomTabs";
import EksabLogo from "@/components/SharedComponents/EksabLogo";
import { useRouter } from "next/navigation";
import TermsAndPrivacy from "@/components/AuthComponents/RegisterComponents/TermsAndPrivacy";
import AlreadyRegistered from "@/components/AuthComponents/RegisterComponents/AlreadyRegistered";
import ProgressStepper from "@/components/AuthComponents/RegisterComponents/ProgressStepper";
import PersonalInformation from "@/components/AuthComponents/RegisterComponents/PersonalInformation";
import CompanyDetails from "@/components/AuthComponents/RegisterComponents/CompanyDetails";
import axios from "axios";

interface TabSpecificLabels {
  companyNameArabic: string;
  companyNameEnglish: string;
  commercialRegistration: string;
  vatCertificate: string;
  commercialFileUpload: string;
  vatFileUpload: string;
}

const Register = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+966");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [companyNameArabic, setCompanyNameArabic] = useState("");
  const [companyNameEnglish, setCompanyNameEnglish] = useState("");
  const [commercialRegistration, setCommercialRegistration] = useState("");
  const [commercialRegistrationFile, setCommercialRegistrationFile] =
    useState<File | null>(null);
  const [vatCertificate, setVatCertificate] = useState("");
  const [vatCertificateFile, setVatCertificateFile] = useState<File | null>(
    null
  );
  const [activeTab, setActiveTab] = useState(0);
  const [isFirstSectionCompleted, setIsFirstSectionCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitButton = async () => {
    try {
      setIsLoading(true);
      const combinedPhone = `${countryCode}${phoneNumber}`; // Combine phone number and country code

      // Function to upload the file and get the file ID
      const uploadFile = async (file: File | null) => {
        if (!file) return 0; // Return 0 if no file is selected

        const formData = new FormData();
        formData.append("Image", file); // Append the file to the form data

        try {
          const response = await axios.post(
            "https://mohasel.net/api/Client/Files/UploadFile", // File upload URL
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          // Return the file ID from the API response
          return response.data.id;
        } catch (error: any) {
          console.error("Error uploading file", error);
          return 0; // Return 0 if upload failed
        }
      };

      // Upload both the commercial registration file and the VAT certificate file
      const commercialRegistrationFileId = await uploadFile(
        commercialRegistrationFile
      );
      const vatCertificateFileId = await uploadFile(vatCertificateFile);

      // Create the payload for registration
      const payload = {
        user: {
          phoneNumber: combinedPhone,
          email: email,
          name: name,
          password: password,
          confirmPassword: confirmPassword,
        },
        organization: {
          organizationType: "Client",
          organizationName: companyNameArabic,
          organizationNameEn: companyNameEnglish,
          organizationCRNumber: commercialRegistration,
          organizationCRDocumentFileId: commercialRegistrationFileId,
          organizationVATNumber: vatCertificate,
          organizationVATCertificateFileId: vatCertificateFileId,
        },
      };

      console.log(payload);

      // Call registration API
      const response = await axios.post(
        "https://mohasel.net/api/Client/Auth/Register",
        payload
      );

      if (response.status === 200) {
        setIsLoading(false);
        const { id, message } = response.data;
        console.log(id, message);
        router.push("/login"); // Redirect to login
      }
    } catch (error: any) {
      console.log("Error", error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      alert(errorMessage);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const isNextButtonDisabled =
    !phoneNumber || !email || !password || !confirmPassword || !name;

  const isSubmitButtonDisabled =
    !companyNameArabic ||
    !companyNameEnglish ||
    !commercialRegistration ||
    !vatCertificate;

  const tabSpecificLabels: Record<number, TabSpecificLabels> = {
    0: {
      companyNameArabic: "اسم الشركة (عربي)",
      companyNameEnglish: "اسم الشركة (انجليزي)",
      commercialRegistration: "رقم السجل التجاري",
      vatCertificate: "رقم شهادة ضريبة القيمة المضافة",
      commercialFileUpload: "أرفق ملف السجل التجاري",
      vatFileUpload: "أرفق ملف شهادة ضريبة القيمة المضافة",
    },
    1: {
      companyNameArabic: "اسم الوكالة (عربي)",
      companyNameEnglish: "اسم الوكالة (انجليزي)",
      commercialRegistration: "رقم تسجيل الوكالة",
      vatCertificate: "رقم شهادة ضريبة القيمة المضافة للوكالة",
      commercialFileUpload: "أرفق ملف تسجيل الوكالة",
      vatFileUpload: "أرفق ملف شهادة الضريبة للوكالة",
    },
  };

  return (
    <form className="flex flex-col justify-center items-center w-full max-w-md mx-auto p-4 mt-32">
      {/* Logo and Header */}
      <div className="flex flex-col justify-center items-center gap-3">
        <EksabLogo />
        <Header
          title="تسجيل حساب جديد"
          subtitle="سعيدين جداً بانضمامك لنا! الرجاء إدخال تفاصيلك."
        />
      </div>

      {/* Progress stepper */}
      <ProgressStepper
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isFirstSectionCompleted={isFirstSectionCompleted} // Pass completion state
      />

      {/* Tabs */}
      <CustomTabs onTabChange={setActiveTab} />

      {/* Conditional rendering of the form based on active step */}
      {/* Personal Information Form */}
      {currentStep === 1 ? (
        <PersonalInformation
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          showConfirmPassword={showConfirmPassword}
          handleClickShowConfirmPassword={handleClickShowConfirmPassword}
          isNextButtonDisabled={isNextButtonDisabled}
          setIsFirstSectionCompleted={setIsFirstSectionCompleted}
          setCurrentStep={setCurrentStep}
        />
      ) : (
        <CompanyDetails
          tabSpecificLabels={tabSpecificLabels}
          activeTab={activeTab}
          companyNameArabic={companyNameArabic}
          setCompanyNameArabic={setCompanyNameArabic}
          companyNameEnglish={companyNameEnglish}
          setCompanyNameEnglish={setCompanyNameEnglish}
          commercialRegistration={commercialRegistration}
          setCommercialRegistration={setCommercialRegistration}
          commercialRegistrationFile={commercialRegistrationFile}
          setCommercialRegistrationFile={setCommercialRegistrationFile}
          vatCertificate={vatCertificate}
          setVatCertificate={setVatCertificate}
          vatCertificateFile={vatCertificateFile}
          setVatCertificateFile={setVatCertificateFile}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
          handleSubmitButton={handleSubmitButton}
          isLoading={isLoading}
        />
      )}

      {/* Already Registered Row */}
      <AlreadyRegistered />

      {/* Terms & Privacy */}
      <TermsAndPrivacy />
    </form>
  );
};

export default Register;
