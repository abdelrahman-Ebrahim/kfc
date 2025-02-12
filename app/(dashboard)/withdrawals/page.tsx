"use client";
import WithdrawLslist from "@/components/dashboard/withdrawals/withdrawlslist";
import PageHeader from "@/components/SharedComponents/PageHeader";
import WithdrawalsFilters from "@/components/SharedComponents/WithdrawalsFilters";
import React from "react";
const mockData = [
    {
      no: 1,
      name: "مسابقة 1",
      location: "فرع الرياض",
      draws: 5,
      prizes: 10,
      drawDate: "2025-09-25",
      status: "تم التسليم",
    },
    {
      no: 1,
      name: "مسابقة 1",
      location: "فرع جدة",
      draws: 5,
      prizes: 10,
      drawDate: "2025-09-25",
      status: "تم التسليم",
    },
    {
      no: 2,
      name: "مسابقة 2",
      location: "فرع جدة",
      draws: 3,
      prizes: 8,
      drawDate: "2025-09-25",
      status: "جاهزة للسحب",
    },
  ];
  
  

const withdrawalsPage = () => {
    return (
        <div className="w-full h-full pb-20 space-y-5">
            {/* Page Header */}
            <PageHeader
                mainTitle="سحوباتي"
                breadcrumbTitle="سحوباتي"
                buttonText="طباعة التقارير"
                iconPath="/dashboard/competitions/printer.svg"
            />
            <WithdrawalsFilters/>

            <WithdrawLslist WithdrawLslist={mockData} />;

        </div>
    );
};

export default withdrawalsPage;
