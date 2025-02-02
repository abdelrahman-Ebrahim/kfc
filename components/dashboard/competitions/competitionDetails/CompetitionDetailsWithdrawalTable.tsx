import React from "react";

interface DetailsWithdrawalsTable {
  date: string;
  name: string;
  quantity: string;
}

interface DetailsWithdrawalTableProps {
  withdrawals: DetailsWithdrawalsTable[];
}

const CompetitionDetailsWithdrawalTable = ({
  withdrawals,
}: DetailsWithdrawalTableProps) => {
  return (
    <div className="flex flex-col gap-6 overflow-x-auto">
      <table className="w-full border-collapse table-fixed min-w-[840px] sm:min-w-full">
        <thead>
          <tr className="bg-[#E9E9EA]">
            {[".No", "تاريخ السحب", "اسم الجائزة", "عدد الجوائز"].map(
              (header, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-3 text-[12px] text-shadeGray ${
                    idx === 1 || idx === 2 ? "text-right" : "text-center"
                  } border-b border-[#C6C7CA]`}
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {withdrawals.map((withdrawal, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
              } border-b border-[#C6C7CA] text-sm text-nowrap`}
            >
              <td className="px-6 py-6 text-center">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="px-6 text-right">{withdrawal.date}</td>
              <td className="px-6 text-right">{withdrawal.name}</td>
              <td className="px-6 text-center">{withdrawal.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitionDetailsWithdrawalTable;
