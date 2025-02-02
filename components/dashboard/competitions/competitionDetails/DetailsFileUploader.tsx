import { FileUpload } from "@/components/AuthComponents/RegisterComponents/FileUpload";
import React from "react";

const DetailsFileUploader = () => {
  return (
    <div className="flex flex-col gap-6 min-w-[352px] h-fit items-start shadow-card-shadow bg-white border border-[#C6C7CA] p-6 rounded-lg">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 w-full">
        <p className="text-shadeBlack font-semibold text-[22px]">
          ارفاق ملف التصريح
        </p>
        <hr className="w-full" />
      </div>
      {/* Uploader */}
      <div className="px-6 py-4 bg-[#F9F9FA] border border-[#C6C7CA] rounded-xl">
        <FileUpload
          label=""
          classContainer="flex-col border-none p-0"
          textClass="text-center items-center"
        />
      </div>
    </div>
  );
};

export default DetailsFileUploader;
