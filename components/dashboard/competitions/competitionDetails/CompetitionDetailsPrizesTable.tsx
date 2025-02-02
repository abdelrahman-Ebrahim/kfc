import React from "react";

interface DetailPrizesTable {
  prizeName: string;
  prizeDescription: string;
  quantity: string;
}

interface DetailsPrizesTableProps {
  prizes: DetailPrizesTable[];
}

const CompetitionDetailsPrizesTable = ({ prizes }: DetailsPrizesTableProps) => {
  return (
    <div className="flex flex-col gap-6 overflow-x-auto">
      <table className="w-full border-collapse table-fixed min-w-[840px] sm:min-w-full">
        <thead>
          <tr className="bg-[#E9E9EA]">
            {[".No", "اسم الجائزة", "وصف الجائزة", "الكمية"].map(
              (header, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-3 text-[12px] text-shadeGray ${
                    idx === 1 || idx === 2 ? "text-right" : "text-center"
                  } border-b border-[#C6C7CA] ${
                    idx === 2 ? "w-[45%]" : "w-[20%]"
                  }`} // Adjust column width here
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {prizes.map((prize, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
              } border-b border-[#C6C7CA] text-sm text-nowrap`}
            >
              <td className="px-6 py-6 text-center">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="px-6 text-right">{prize.prizeName}</td>
              <td className="px-6 text-right">{prize.prizeDescription}</td>
              <td className="px-6 text-center">{prize.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitionDetailsPrizesTable;
