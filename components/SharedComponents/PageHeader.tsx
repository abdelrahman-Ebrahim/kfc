import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import SubmitButton from "./SubmitButton";

interface PageHeaderProps {
  breadcrumbTitle?: string;
  mainTitle: string;
  badgeText?: string;
  page?: string
  iconSrc?: string;
  buttonText?: string;
  secondbutton?: string;
  onButtonClick?: () => void;
  onsecondButtonClick?: () => void;
  iconPath?: string;
  secondiconPath?: string;

}

const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumbTitle,
  mainTitle,
  badgeText,
  buttonText,
  iconPath,
  secondbutton,
  secondiconPath,
  page,
  onButtonClick,
  onsecondButtonClick,
  iconSrc = "/dashboard/competitions/homeIcon.svg",
}) => {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      <div className="flex items-center gap-2">
        <div className="size-7 flex justify-center items-center">
          <Image src={iconSrc} alt="home" width={15} height={15} />
        </div>
        <ChevronLeftRounded className="text-[#E3E3E4]" />
        <p className="text-[#475467] font-medium text-sm">{breadcrumbTitle}</p>
        {badgeText && (
          <div className="flex items-center gap-2">
            <ChevronLeftRounded className="text-[#E3E3E4]" />
            <div className="bg-[#EEEEEF] px-2 py-1 rounded-md">
              <p className="text-[#344054] text-sm font-semibold">{badgeText}</p>
            </div>
          </div>
        )}
        {page && (
          <div className="flex items-center gap-2">
            <ChevronLeftRounded className="text-[#E3E3E4]" />
            <div className="bg-[#EEEEEF] px-2 py-1 rounded-md">
              <p className="text-[#344054] text-sm font-semibold">{page}</p>
            </div>
          </div>
        )}

      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-full">
        <h2 className="font-semibold text-[30px] text-shadeBlack">{mainTitle}</h2>
        <div className="flex  gap-2">
         
          {secondbutton && (
            <SubmitButton
              rightIcon={secondiconPath}
              buttonText={secondbutton}
              fullWidth={false}
              onClick={onButtonClick}
              classContainer="bg-white text-[#70737A] "
            />
          )
          }
           {buttonText && (
            <SubmitButton
              rightIcon={iconPath}
              buttonText={buttonText}
              fullWidth={false}
              onClick={onsecondButtonClick}
              classContainer=""
            />
          )
          }
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PageHeader;
