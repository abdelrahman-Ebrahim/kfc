import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

interface NewCompetitionHeaderProps {
  title: string;
}

const NewCompetitionHeader = ({ title }: NewCompetitionHeaderProps) => {
  return (
    <div>
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
          <ChevronLeftRounded className="text-[#E3E3E4]" />
          <div className="bg-[#EEEEEF] flex justify-center items-center px-2 py-1 rounded-md">
            <p className="text-shadeGray font-semibold text-sm">
              انشاء مسابقة جديدة
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h2 className="font-semibold text-lg md:text-[30px] text-shadeBlack">{title}</h2>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default NewCompetitionHeader;
