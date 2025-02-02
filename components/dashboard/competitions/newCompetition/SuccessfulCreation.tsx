import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessfulCreation = () => {
  const router = useRouter();

  const handleFileDownload = () => {
    const fileUrl = "Placeholder-PDF.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Tech design requirements.pdf"; // This sets the default name of the downloaded file
    link.click();
  };

  return (
    <div className="w-full h-full mt-[98px] flex flex-col max-w-[480px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex flex-col justify-center items-center w-full gap-6">
          <Image
            src={"/auth/success.svg"}
            alt="success"
            width={120}
            height={120}
          />
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-bold text-shadeBlack text-[32px] text-center">
              لقد تم عمل مسابقة بنجاح!
            </p>
            <p className="text-shadeGray text-center">
              لقد قمت بعمل مسابقة بنجاح، لكن يتبقى خطوة اخيره لك من اجل ان
              يستطيع المتسابقين الاشتراك فيها وهي الحصول على التصريح من مكتب
              الغرفة التجارية. <br /> لقد قمنا بالتسهيل عليك و عمل خطاب تستطيع
              من خلاله طلب التصريح، سوف يتم ارسال هذا الخطاب عبر بريدك
              الإلكتروني و أيضاً تستطيع تحميله من الاسفل.
            </p>
          </div>
          {/* Downloadable File Section */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl w-full">
            <button
              className="text-primary hover:text-primary-dark self-start"
              onClick={handleFileDownload}
            >
              <Image
                src="/dashboard/competitions/download-cloud.svg"
                alt="Download"
                width={24}
                height={24}
              />
            </button>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-[#344054] font-medium text-sm">
                  Tech design requirements.pdf
                </p>
                <p className="text-[#344054] text-sm text-left">200KB - 100% uploaded</p>
              </div>
              <Image
                src="/dashboard/competitions/PDF.svg"
                alt="PDF Icon"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
      <SubmitButton
        buttonText="العودة الي الصفحة الرئيسية"
        onClick={() => {
          router.push("/");
        }}
      />
    </div>
  );
};

export default SuccessfulCreation;
