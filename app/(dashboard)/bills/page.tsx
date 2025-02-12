"use client";
import React from "react";
import BillsHeader from "@/components/dashboard/bills/BillsHeader";
import BillsTable from "@/components/dashboard/bills/BillsTable";
import NoBills from "@/components/dashboard/bills/NoBills";
import BillsFilters from "@/components/SharedComponents/billsFilters";

const mockBills = [
  {
    billNumber: "INV-001",
    date: "2025-01-13",
    statment: "شراء لوازم مكتبية",
    payment: "بطاقة ائتمان",
    billamount: "500.00 SAR",
    paid: "400.00 SAR",
    remaining: "100.00 SAR",
  },
  {
    billNumber: "INV-002",
    date: "2025-01-14",
    statment: "صيانة كهربائية",
    payment: "نقداً",
    billamount: "200.00 SAR",
    paid: "200.00 SAR",
    remaining: "0.00 SAR",
  },
  {
    billNumber: "INV-003",
    date: "2025-01-15",
    statment: "شراء قطع غيار",
    payment: "تحويل بنكي",
    billamount: "750.00 SAR",
    paid: "500.00 SAR",
    remaining: "250.00 SAR",
  },
];

const page = () => {
  return (
    <div className="w-full h-full pb-20">
      {/* Page Header */}
      <BillsHeader />
      {/*  Filter, Search & BillsTable OR No bills available */}
      <div className="mt-6 flex flex-col gap-6">
        <BillsFilters />
        {mockBills.length > 0 ? <BillsTable bills={mockBills} /> : <NoBills />}
      </div>
    </div>
  );
};

export default page;
