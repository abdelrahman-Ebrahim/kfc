import Image from "next/image";
import React from "react";

interface HeaderIconProps {
  imgSrc: string;
  alt: string;
}

const HeaderIcon = ({ imgSrc, alt }: HeaderIconProps) => {
  return (
    <div className="size-12 border-[0.3px] border-[#E4E7EC] bg-white rounded-xl flex justify-center items-center mb-3 shadow-icon-shadow">
      <Image src={imgSrc} alt={alt} width={24} height={24} />
    </div>
  );
};

export default HeaderIcon;
