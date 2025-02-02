import WalletHeader from "@/components/dashboard/wallet/WalletHeader";
import WalletInfoCard from "@/components/dashboard/wallet/WalletInfoCard";
import BillsList from "@/components/dashboard/wallet/BillsList";
import React from "react";

const walletData = [
  {
    title: "الفرص التي تم شراءها",
    value: "50,000",
    valueColor: "text-shadeBlack",
    iconBgColor: "bg-[#D9E1F9]",
    iconSrc: "/dashboard/competitions/shapes.svg",
  },
  {
    title: "الفرص المصروفة",
    value: "50,000",
    valueColor: "text-[#C22221]",
    iconBgColor: "bg-[#D9E1F9]",
    iconSrc: "/dashboard/competitions/shapes.svg",
  },
  {
    title: "محفظة فرصك",
    value: "45,000",
    valueColor: "text-[#28A428]",
    iconBgColor: "bg-[#D9E1F9]",
    iconSrc: "/dashboard/competitions/shapes.svg",
  },
];

const billsData = [
  {
    date: "16/12/2024",
    description: "شراء باقة مميزة",
    amount: "- 35,000",
    remaining: "استعراض الفاتورة",
  },
  {
    date: "17/12/2024",
    description: "شراء باقة عادية",
    amount: "+ 5,000",
    remaining: "استعراض الفاتورة",
  },
  {
    date: "18/12/2024",
    description: "رسوم تجديد الاشتراك",
    amount: "+ 80,000",
    remaining: "استعراض الفاتورة",
  },
];

const Page: React.FC = () => {
  return (
    <div className="w-full h-full pb-20">
      {/* Page Header */}
      <WalletHeader />
      {/* Wallet Information */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {walletData.map((item, index) => (
          <WalletInfoCard
            key={index}
            title={item.title}
            value={item.value}
            valueColor={item.valueColor}
            iconBgColor={item.iconBgColor}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      {/* Bills List */}
      <BillsList bills={billsData} />
    </div>
  );
};

export default Page;
