"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface BillsTable {
  billNumber: string;
  date: string;
  statment: string;
  payment: string;
  billamount: string;
  paid: string;
  remaining: string;
}

interface BillsTableProps {
  bills: BillsTable[];
}

const BillsTable = ({ bills }: BillsTableProps) => {
  const router = useRouter();

  const handleNavigation = (billNumber: string) => {
    router.push(`/bills/${billNumber}`);
  };

  return (
    <div className="flex flex-col gap-6 overflow-x-auto">
      <table className="w-full min-w-[1024px] border-collapse table-fixed">
        <thead>
          <tr className="bg-[#E9E9EA]">
            {[".No", "رقم الفاتورة", "التاريخ", "البيان", "نوع الدفع", "قيمة الفاتورة", "المدفوع", "المتبقى", ""].map(
              (header, idx) => (
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
              )
            )}
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
              <td className="px-6 text-right">{bill.statment}</td>
              <td className="px-6 text-center">{bill.payment}</td>
              <td className="px-6 text-center">{bill.billamount}</td>
              <td className="px-6 text-center">{bill.paid}</td>
              <td className="px-6 text-center text-[#C22221]">
                {bill.remaining}
              </td>
              <td className="px-6 py-6 text-center">
                <button
                  onClick={() => handleNavigation(bill.billNumber)}
                  className="flex justify-center items-center"
                >
                  <Image src={"/go.svg"} alt="go" width={24} height={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillsTable;
