import Image from "next/image";
import React from "react";

interface WalletInfoCardProps {
  title: string;
  value: string;
  valueColor: string;
  iconBgColor: string;
  iconSrc: string;
}

const WalletInfoCard: React.FC<WalletInfoCardProps> = ({
  title,
  value,
  valueColor,
  iconBgColor,
  iconSrc,
}) => {
  return (
    <div className="flex items-center gap-4 bg-[#F4F4F4] border border-[#C6C7CA] rounded-lg p-6 shadow-card-shadow">
      <div
        className={`flex justify-center items-center ${iconBgColor} rounded-lg size-14`}
      >
        <Image src={iconSrc} alt="icon" width={32} height={32} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <p className="text-shadeGray text-sm font-medium">{title}</p>
          <Image
            src={"/dots-vertical.svg"}
            alt="vertical dots"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <p className={`font-semibold text-2xl ${valueColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default WalletInfoCard;
