import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const SupportHeader = () => {
  return (
    // Page Header
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
        <p className="text-[#475467] font-medium text-sm"> الدعم</p>
        <ChevronLeftRounded className="text-[#E3E3E4]" />
      </div>
      <h2 className="font-semibold text-[30px] text-shadeBlack"> الدعم</h2>
      <hr />
    </div>
  );
};

export default SupportHeader;
