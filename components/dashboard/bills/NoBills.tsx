import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import React, { useState } from "react";
import CompetitionPrompt from "../competitions/CompetitionPrompt";
import CompetitionServicesModal from "../competitions/CompetitionServicesModal";

const NoBills = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpenFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const handleCloseFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const handleOpenSecondModal = () => {
    handleCloseFirstModal(); // Close the first modal when opening the second
    setIsSecondModalOpen(true);
  };

  const handleCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full mt-40">
      {/* Icon Section */}
      <div className="w-16 h-16">
        <Image
          src={"/navIcons/award.svg"}
          alt="award"
          width={60}
          height={60}
          priority={true}
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-[32px] font-semibold text-shadeBlack">
          ليس لديك اي فواتير قابلة للعرض!
        </h3>
        <p className="text-shadeGray text-base font-medium">
          قم بالبدء في انشاء مسابقاتك معنا و مشاركتها مع المتسابقين بطريقة سهله
          و بسيطة.
        </p>
      </div>

      {/* Add Competition Button */}
      <SubmitButton
        rightIcon="/dashboard/competitions/add.svg"
        buttonText="إضافة مسابقة جديدة"
        fullWidth={false}
        onClick={handleOpenFirstModal}
      />

      {/* First Modal */}
      {isFirstModalOpen && (
        <CompetitionPrompt
          handleCloseModal={handleCloseFirstModal}
          handleContinue={handleOpenSecondModal} // Pass handler for second modal
        />
      )}

      {/* Second Modal */}
      {isSecondModalOpen && (
        <CompetitionServicesModal handleCloseModal={handleCloseSecondModal} />
      )}
    </div>
  );
};

export default NoBills;
