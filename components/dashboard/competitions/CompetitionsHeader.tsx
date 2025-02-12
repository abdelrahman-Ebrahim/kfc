"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";
import CompetitionServicesModal from "./CompetitionServicesModal";

const CompetitionsHeader = () => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpenSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <div className="flex items-center gap-2">
        <div className="size-7 flex justify-center items-center">
          <Image
            src={"/dashboard/competitions/homeIcon.svg"}
            alt="home"
            width={15}
            height={15}
          />
        </div>
        <ChevronLeftRounded className="text-[#E3E3E4]" />
        <div className="bg-[#F4F4F4] flex justify-center items-center px-2 py-1 rounded-md">
          <p className="text-shadeGray font-semibold text-sm">مسابقاتي</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-full">
        <h2 className="font-semibold text-2xl sm:text-[30px] text-shadeBlack">
          مسابقاتي
        </h2>
        <SubmitButton
          rightIcon="/dashboard/competitions/add.svg"
          buttonText="إضافة مسابقة جديدة"
          fullWidth={false}
          onClick={handleOpenSecondModal} // Open the second modal directly
          classContainer="mt-0"
        />
      </div>
      <hr />

      {/* Second Modal */}
      {isSecondModalOpen && (
        <CompetitionServicesModal handleCloseModal={handleCloseSecondModal} />
      )}
    </div>
  );
};

export default CompetitionsHeader;
