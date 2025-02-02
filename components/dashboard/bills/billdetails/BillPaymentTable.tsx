import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import React from "react";

interface BillsDetailsTable {
  billNumber: string;
  date: string;
  description: string;
  billamount: string;
  paid: string;
}

interface BillsTableProps {
  bills: BillsDetailsTable[];
}

const BillPaymentTable = ({ bills }: BillsTableProps) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[#101828] text-lg md:text-[22px] font-semibold">
              قائمة المدفوعات للفاتورة
            </p>
            <SubmitButton
              buttonText="طباعة"
              onClick={() => {}}
              fullWidth={false}
              classContainer="bg-white text-shadeGray mt-0 py-2 px-6"
              rightIcon="/printer.svg"
            />
          </div>
          <hr />
        </div>
        {/* INFO TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-fixed min-w-[1024px]">
            <thead>
              <tr className="bg-[#E9E9EA]">
                {[
                  ".No",
                  "رقم الفاتورة",
                  "التاريخ",
                  "الوصف",
                  "قيمة الفاتورة",
                  "المدفوع",
                  "",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className={`px-6 py-3 text-[12px] text-shadeGray ${
                      idx === 1 || idx === 2 || idx === 3
                        ? "text-right"
                        : "text-center"
                    } border-b border-[#C6C7CA]`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
                  } border-b border-[#C6C7CA] text-sm text-nowrap`}
                >
                  <td className="px-6 py-6 text-center">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-6 text-right">{bill.billNumber}</td>
                  <td className="px-6 text-right">{bill.date}</td>
                  <td className="px-6 text-right">{bill.description}</td>
                  <td className="px-6 text-center">{bill.billamount}</td>
                  <td className="px-6 text-center">{bill.paid}</td>
                  <td className="px-6 py-6 text-center">
                    <button>
                      <Image
                        src={"/dashboard/competitions/download-cloud.svg"}
                        alt="go"
                        width={24}
                        height={24}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillPaymentTable;
