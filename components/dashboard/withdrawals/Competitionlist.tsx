"use client";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { useRouter } from "next/navigation";
import React from "react";
interface WinnerslistItem {
  no: number;
  name: string;
  location: string;
  prize: string;
  winnerName: string; 
  Phone: string;      
  date: string;       
  status: string;
}


interface WinnerslistProps {
  Winnerslist: WinnerslistItem[];
}

const Competirionslist: React.FC<WinnerslistProps> = ({ Winnerslist }) => {
    const router = useRouter();
    const groupedContests = Object.values(
      Winnerslist.reduce((acc, contest) => {
            const key = contest.no + "-" + contest.name;
            if (!acc[key]) {
                acc[key] = [contest];
            } else {
                acc[key].push(contest);
            }
            return acc;
        }, {} as Record<string, WinnerslistItem[]>)
    );

    groupedContests.sort((a, b) => {
        if (a[0].no === b[0].no) {
            return a[0].name.localeCompare(b[0].name);
        }
        return a[0].no - b[0].no;
    });
    const handleNavigation = (contestno: number) => {
        router.push(`/withdrawals/winners/${contestno}`);
    };
    return (
        <div className=" flex flex-col gap-4 items-start w-full overflow-x-auto">
            <div className=" w-full flex justify-between">
                <h2 className="font-semibold text-[20px] text-shadeBlack pt-11
                    ">قائمة الجوائز والفائزين في السحب  </h2>
                <SubmitButton
                    rightIcon="/dashboard/competitions/printer.svg"
                    buttonText="اطبع التقارير"
                    fullWidth={false}
                    classContainer=""
                />
            </div>
            <hr className="w-full border-b border-gray-300" />
            <table className="border-collapse table-fixed w-full min-w-[1024px]">
        <colgroup>
          <col style={{ width: "5.3%" }} /> 
          <col style={{ width: "13.3%" }} /> 
          <col style={{ width: "11.3%" }} /> 
          <col style={{ width: "11.3%" }} /> 
          <col style={{ width: "17.3%" }} /> 
          <col style={{ width: "11.3%" }} /> 
          <col style={{ width: "11.3%" }} /> 
          <col style={{ width: "11.3%" }} /> 
          <col style={{ width: "5.7%" }} /> 
        </colgroup>
        <thead>
          <tr className="bg-[#E9E9EA]">
            {[
              "No.",
              "ترتيب السحب",
              "  الفرع",
              " اسم الجائزة",
              "اسم الفائز ",
              " رقم الهاتف",
              "تاريخ  السحب",
              "حالة المسابقة",
              " ",
            ].map((header, idx) => (
              <th
                key={idx}
                className={`px-0 py-3 text-[12px] text-shadeGray ${
                  idx === 0 || idx >= 3 ? "text-center" : "text-right"
                } border-b border-[#C6C7CA]`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupedContests.map((group, groupIndex) => {
          
            const bgClass =
              group.length > 1
                ? "bg-white"
                : groupIndex % 2 === 0
                ? "bg-white"
                : "bg-[#F9F9FA]";

            return group.map((contest, idx) => (
              <tr
                key={`${contest.no}-${contest.location}-${idx}`}
                className={`${bgClass} border-b border-[#C6C7CA]`}
              >
                {
                idx === 0 && (
                  <>
                    <td
                      rowSpan={group.length}
                      className="px-2 py-6 text-center border-r border-[#C6C7CA]"
                    >
                      {String(contest.no).padStart(2, "0")}
                    </td>
                    <td
                      rowSpan={group.length}
                      className="px-2 py-6 text-right border-r border-[#C6C7CA]"
                    >
                      {contest.name}
                    </td>
                  </>
                )}
                <td className="px-2 py-6 text-center border-r border-[#C6C7CA]">
                  {contest.location}
                </td>
                <td className="px-2 py-6 text-center border-r border-[#C6C7CA]">
                  {contest.prize}
                </td>
                <td className="px-2 py-6 text-center border-r border-[#C6C7CA]">
                  {contest.winnerName}
                </td>
                <td className="px-2 py-6 text-center border-r border-[#C6C7CA]">
                  {contest.Phone}
                </td>
                <td className="px-2 py-6 text-center border-r border-[#C6C7CA]">
                  {contest.date}
                </td>
                <td className="px-2 py-6 text-center border-r border-[#C6C7CA]">
                  <span
                    className={`px-4 py-1 rounded-full text-[12px] font-semibold ${
                      contest.status === "تم التسليم"
                        ? "bg-[#E0EAFF] text-[#0066FF]"
                        : "bg-[#D1FADF] text-[#027A48]"
                    }`}
                  >
                    {contest.status}
                  </span>
                </td>
                <td className="px-5 py-6 text-center border-r border-[#C6C7CA]">
                  <button    onClick={() => handleNavigation(contest.no)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_142_3327"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_142_3327)">
                        <path
                          d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H19V12H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z"
                          fill="#434549"
                        />
                      </g>
                    </svg>
                  </button>
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
        </div>
    );
};

export default Competirionslist;
