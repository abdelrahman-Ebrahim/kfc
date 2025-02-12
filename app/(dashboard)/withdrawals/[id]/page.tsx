"use client";

import PageHeader from "@/components/SharedComponents/PageHeader";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Competirionslist from "@/components/dashboard/withdrawals/Competitionlist";
const mockData = [
    {
        no: 1,
        name: "الأول 1",
        location: "فرع الرياض",
        prize: "ايفون",
        winnerName: "محمد عبدالسلام القحطاني",
        Phone: "056668525856",
        date: "2025-09-25 ",
        status: "تم التسليم",
    },
    {
      no: 1,
      name: "الأول 1",
      location: "فرع الرياض",
      prize: "ايفون",
      winnerName: "محمد عبدالسلام القحطاني",
      Phone: "056668525856",
      date: "2025-09-25 ",
      status: "تم التسليم",
    },
    {
        no: 1,
        name: "الأول 1",
        location: "فرع الرياض",
        prize: "ايفون",
        winnerName: "محمد عبدالسلام القحطاني",
        Phone: "056668525856",
        date: "2025-09-25 ",
        status: "تم التسليم",
    },
    {
        no: 2,
        name: "الأول 1",
        location: "فرع الرياض",
        prize: "ايفون",
        winnerName: "محمد عبدالسلام القحطاني",
        Phone: "056668525856",
        date: "2025-09-25 ",
        status: "تم التسليم",
    },
  ];

const WinnersData = () => {
    const { id } = useParams(); // This may return string | string[]

    // Ensure `id` is a string
    const WinnerId = Array.isArray(id) ? id[0] : id; // Use the first element if `id` is an array

    return (
        <div className="w-full h-full pb-20 space-y-">
            {/* Page Header */}
            <PageHeader
                mainTitle=" تفاصيل المسابقة"
                badgeText="تفاصيل المسابقة"
                breadcrumbTitle="سحوباتي"
            />

            {/* competition Details */}
            <div className="flex items-center w[1104px] h-[314px] gap-[24px] ">
                <Image
                    src={"/dashboard/withdrawals/Placeholder Alt..png"}
                    alt="calendar"
                    width={352}
                    height={314}
                    className=" border-[3px] rounded-[10px]"
                />

                <div className="flex flex-col  w-[728px] h-[218px] space-y-3 ">
                    <span className="bg-[#D6F5D6] border border-[#ADEBAD] w-[77px] px-2 py-1 rounded-full text-[14px]  flex items-center space-x-2 space-x-reverse">

                        <p>  تم السحب</p>
                    </span>

                    <h1 className="font-semibold text-[24px] text-shadeBlack">شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة و مميزة لأجلك</h1>

                    <div className="flex gap-3">
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 9H3.6C3.03995 9 2.75992 9 2.54601 9.10899C2.35785 9.20487 2.20487 9.35785 2.10899 9.54601C2 9.75992 2 10.0399 2 10.6V19M15.5 9H18.4C18.9601 9 19.2401 9 19.454 9.10899C19.6422 9.20487 19.7951 9.35785 19.891 9.54601C20 9.75992 20 10.0399 20 10.6V19M15.5 19V4.2C15.5 3.0799 15.5 2.51984 15.282 2.09202C15.0903 1.71569 14.7843 1.40973 14.408 1.21799C13.9802 1 13.4201 1 12.3 1H9.7C8.57989 1 8.01984 1 7.59202 1.21799C7.21569 1.40973 6.90973 1.71569 6.71799 2.09202C6.5 2.51984 6.5 3.0799 6.5 4.2V19M21 19H1M10 5H12M10 9H12M10 13H12" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h2> شركة قوافل</h2>
                    </div>

                    <div className="flex items-center gap-32">
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 5V21M11 5H7.46429C6.94332 5 6.4437 4.78929 6.07533 4.41421C5.70695 4.03914 5.5 3.53043 5.5 3C5.5 2.46957 5.70695 1.96086 6.07533 1.58579C6.4437 1.21071 6.94332 1 7.46429 1C10.2143 1 11 5 11 5ZM11 5H14.5357C15.0567 5 15.5563 4.78929 15.9247 4.41421C16.293 4.03914 16.5 3.53043 16.5 3C16.5 2.46957 16.293 1.96086 15.9247 1.58579C15.5563 1.21071 15.0567 1 14.5357 1C11.7857 1 11 5 11 5ZM19 10V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21L6.2 21C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V10M1 6.6L1 8.4C1 8.96005 1 9.24008 1.10899 9.45399C1.20487 9.64215 1.35785 9.79513 1.54601 9.89101C1.75992 10 2.03995 10 2.6 10L19.4 10C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V6.6C21 6.03995 21 5.75992 20.891 5.54601C20.7951 5.35785 20.6422 5.20487 20.454 5.10899C20.2401 5 19.9601 5 19.4 5L2.6 5C2.03995 5 1.75992 5 1.54601 5.10899C1.35785 5.20487 1.20487 5.35785 1.10899 5.54601C1 5.75992 1 6.03995 1 6.6Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h2>عدد الجوائز </h2>
                            </div>
                            <span className="font-semibold text-[20px] text-shadeBlack pr-8">15 جائزة</span>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-2">
                                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.33398 12C10.9908 12 12.334 10.6569 12.334 9C12.334 7.34315 10.9908 6 9.33398 6C7.67713 6 6.33398 7.34315 6.33398 9C6.33398 10.6569 7.67713 12 9.33398 12Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.33398 21C13.334 17 17.334 13.4183 17.334 9C17.334 4.58172 13.7523 1 9.33398 1C4.91571 1 1.33398 4.58172 1.33398 9C1.33398 13.4183 5.33398 17 9.33398 21Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h2>مكان السحب </h2>
                            </div>
                            <span className="font-semibold text-[20px] text-shadeBlack"> الرياض</span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-2">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.167 8.33332H1.16699M12.0003 1.66666V4.99999M5.33366 1.66666V4.99999M5.16699 18.3333H12.167C13.5671 18.3333 14.2672 18.3333 14.802 18.0608C15.2724 17.8212 15.6548 17.4387 15.8945 16.9683C16.167 16.4335 16.167 15.7335 16.167 14.3333V7.33332C16.167 5.93319 16.167 5.23313 15.8945 4.69835C15.6548 4.22794 15.2724 3.84549 14.802 3.60581C14.2672 3.33332 13.5671 3.33332 12.167 3.33332H5.16699C3.76686 3.33332 3.0668 3.33332 2.53202 3.60581C2.06161 3.84549 1.67916 4.22794 1.43948 4.69835C1.16699 5.23313 1.16699 5.93319 1.16699 7.33332V14.3333C1.16699 15.7335 1.16699 16.4335 1.43948 16.9683C1.67916 17.4387 2.06161 17.8212 2.53202 18.0608C3.0668 18.3333 3.76686 18.3333 5.16699 18.3333Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h2> اماكن المشاركة</h2>
                            </div>
                            <span className="font-semibold text-[20px] text-shadeBlack">الرياض</span>
                        </div>

                    </div>

                </div>
            </div>
            <Competirionslist Winnerslist={mockData}/>
        </div>
    );
};

export default WinnersData;
