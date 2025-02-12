import React, { useRef, useState } from "react";
import Image from "next/image";

interface FileUploadProps {
  label: string;
  onFileUpload?: (file: File | null) => void; // Pass the file (or null on error) to the parent
  classContainer?: string;
  textClass?: string;
}

export const FileUpload = ({
  label,
  onFileUpload,
  classContainer = "",
  textClass = "",
}: FileUploadProps) => {
  const [fileName, setFileName] = useState<string | null>(null); // Track the uploaded file name
  const [error, setError] = useState<string | null>(null); // Track validation errors
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Hidden file input reference

  const handleFileSelect = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];

      // Validate file type
      const allowedTypes = ["application/pdf"];
      if (!allowedTypes.includes(file.type)) {
        const errorMsg = "Only PDF files are allowed.";
        setError(errorMsg);
        setFileName(null);
        if (onFileUpload) onFileUpload(null); // Notify parent of invalid file
        return;
      }

      // Validate file size (less than 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        const errorMsg = "File size should not exceed 10MB.";
        setError(errorMsg);
        setFileName(null);
        if (onFileUpload) onFileUpload(null); // Notify parent of invalid file
        return;
      }

      setError(null); // No errors
      setFileName(file.name);
      if (onFileUpload) onFileUpload(file); // Notify parent of valid file
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent browser default drag-and-drop behavior
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileSelect(files);
  };

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click(); // Trigger hidden file input
  };

  return (
    <div
      className={`flex items-center gap-4 rounded-xl border border-[#E4E7EC] bg-white p-4 cursor-pointer ${classContainer}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center size-10 border border-[#E4E7EC] rounded-lg shadow-icon-shadow">
        <Image src="/auth/UploadIcon.svg" alt="Upload" width={20} height={20} />
      </div>

      <div
        className={`flex flex-col justify-center items-start text-start ${textClass}`}
      >
        <p className="text-[12px] font-bold">{label}</p>
        <div className="flex justify-center items-center gap-1">
          <p className="text-[#6941C6] font-semibold text-[12px]">
            انقر للتحميل
          </p>
          <p className="font-normal text-[#475467] text-[12px]">
            أو اسحب وأفلِت
          </p>
        </div>
        {fileName && (
          <p className="text-[10px] text-green-500 mt-2">
            Uploaded: {fileName}
          </p>
        )}
        {error && <p className="text-[10px] text-red-500 mt-2">{error}</p>}
        <p className="text-[#70737A] text-[12px] text-center">
          PDF (max. 10MB)
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFileSelect(e.target.files)}
      />
    </div>
  );
};
