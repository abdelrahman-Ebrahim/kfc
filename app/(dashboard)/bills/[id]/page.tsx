"use client";

import BillDetailsHeader from "@/components/dashboard/bills/billdetails/BillDetailsHeader";
import BillPaymentTable from "@/components/dashboard/bills/billdetails/BillPaymentTable";
import BillValueCard from "@/components/dashboard/bills/billdetails/BillValueCard";
import { useParams } from "next/navigation";
import React from "react";

const BillDetails = () => {
  const mockBills = [
    {
      billNumber: "INV-001",
      date: "2025-01-13",
      description: "قسط من قيمة المسابقة",
      billamount: "500.00 SAR",
      paid: "400.00 SAR",
    },
    {
      billNumber: "INV-002",
      date: "2025-01-14",
      description: "قسط من قيمة المسابقة",
      billamount: "200.00 SAR",
      paid: "200.00 SAR",
    },
    {
      billNumber: "INV-003",
      date: "2025-01-15",
      description: "قسط من قيمة المسابقة",
      billamount: "750.00 SAR",
      paid: "500.00 SAR",
    },
  ];
  const { id } = useParams(); // This may return string | string[]

  // Ensure `id` is a string
  const billId = Array.isArray(id) ? id[0] : id; // Use the first element if `id` is an array

  return (
    <div className="h-full w-full pb-20">
      {/* Page Header */}
      <BillDetailsHeader />
      {/* Bill Value Card */}
      {billId ? (
        <BillValueCard id={billId} />
      ) : (
        <p className="text-shadeBlack font-semibold">Loading...</p>
      )}
      {/* Bill Payment table */}
      {billId ? (
        <BillPaymentTable bills={mockBills} />
      ) : (
        <p className="text-shadeBlack font-semibold">Loading...</p>
      )}
    </div>
  );
};

export default BillDetails;
