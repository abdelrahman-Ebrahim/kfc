import Image from "next/image";
import React from "react";

interface BillValueCardProps {
  id: string;
}

interface InfoBoxProps {
  icon: string;
  label: string;
  value: string;
}
const InfoBox = ({ icon, label, value }: InfoBoxProps) => (
  <div className="flex items-start gap-1">
    <Image src={icon} alt={label} width={24} height={24} />
    <div className="flex flex-col gap-[6px]">
      <p className="text-shadeBlack text-sm font-medium">{label}</p>
      <p className="text-shadeBlack font-semibold">{value}</p>
    </div>
  </div>
);

const BillValueCard = ({ id }: BillValueCardProps) => {
  // Example data values ==
  const billDetails = [
    { icon: "/dashboard/competitions/download-cloud.svg", label: "البيان", value: "قيمة شراء 20,000 فرصة" },
    { icon: "/dashboard/competitions/download-cloud.svg", label: "التاريخ", value: "16/12/2024" },
    { icon: "/hash.svg", label: "رقم الفاتورة", value: id },
    { icon: "/dashboard/competitions/download-cloud.svg", label: "قيمة الفاتورة", value: "180,402 ر.س" },
    { icon: "/dashboard/competitions/download-cloud.svg", label: "المدفوع", value: "80,402 ر.س" },
    { icon: "/dashboard/competitions/download-cloud.svg", label: "المتبقي", value: "100,000 ر.س" },
  ];

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6 w-full bg-[#F4F4F4] border border-[#C6C7CA] p-6 rounded-lg">
        {/* Header */}
        <div className="flex flex-col gap-[20px]">
          <p className="text-shadeBlack text-lg md:text-[28px] font-semibold">قيمة شراء 20,000 فرصة</p>
          <hr />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          {/* Statement and Date Container */}
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
            {billDetails.slice(0, 2).map((item, index) => (
              <InfoBox key={index} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
          
          {/* Additional Details Container */}
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
            {billDetails.slice(2).map((item, index) => (
              <InfoBox key={index} icon={item.icon} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillValueCard;
