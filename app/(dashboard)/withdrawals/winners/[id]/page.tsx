"use client";

import PageHeader from "@/components/SharedComponents/PageHeader";
import React from "react";
import { useParams } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Submitbutton from "@/components/SharedComponents/subButton";

const WinnersData = () => {
    const { id } = useParams(); // This may return string | string[]

    // Ensure `id` is a string
    const WinnerId = Array.isArray(id) ? id[0] : id; // Use the first element if `id` is an array

    return (
        <div className="w-full h-full pb-20 space-y-5">
            {/* Page Header */}
            <PageHeader
                mainTitle="بيانات الفائز"
                page="بيانات الفائز"
                badgeText="تفاصيل المسابقة"
                breadcrumbTitle="سحوباتي"
            />

            {/* Winner Details */}
            <div className="space-y-5">
                <div className="flex flex-col space-y-6">
                    <h1 className="font-semibold text-[25px] text-shadeBlack">محمد عبدالسلام القحطاني</h1>
                    <div className="flex items-center gap-56">
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-3">
                                <FaMapMarkerAlt className="text-gray-500" />
                                <h2>مكان المشاركة</h2>
                            </div>
                            <span className="font-semibold text-[20px] text-shadeBlack">الرياض</span>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-3">
                                <FaPhoneAlt className="text-gray-500" />
                                <h2>رقم الهاتف</h2>
                            </div>
                            <span className="font-semibold text-[20px] text-shadeBlack"> 56 646 6966 966</span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-3">
                                <FaEnvelope className="text-gray-500" />
                                <h2>البريد الإلكتروني</h2>
                            </div>
                            <span className="font-semibold text-[20px] text-shadeBlack">Mohammed_857@gmail.com</span>
                        </div>

                    </div>
                </div>



                {/* Prize Details */}
                <div className=" pt-2 space-y-3">
                    <h2 className="font-semibold text-[20px] text-shadeBlack
                    ">تفاصيل الجائزة</h2>
                    <hr />
                    <div className="font-semibold text-[20px] text-shadeBlack"> آيفون 16</div>
                    <div className="text-gray-700"> رام 16 قيقا، الذاكرة 256 قيقا، لون الخلفية ذهبي</div>
                </div>

                {/* Attachments */}
                <div className=" pt-2 space-y-3">
                    <div className="font-semibold text-[20px] text-shadeBlack">المرفقات</div>
                    <hr />
                    <div className="flex gap-7">
                        <Image
                            src={"/dashboard/withdrawals/Placeholder Alt..png"}
                            alt="calendar"
                            width={164}
                            height={140}
                            className="rounded-[16px] border-[2px]"
                        />
                        <Image
                            src={"/dashboard/withdrawals/Placeholder Alt..png"}
                            alt="calendar"
                            width={164}
                            height={140}
                            className="rounded-[16px] border-[2px]"
                        />

                    </div>
                </div>

                {/* Delivery Status */}
                <div className=" pt-5 space-y-3">
                    <div className="font-semibold">تفاصيل التسليم</div>
                    <hr className="pb-2" />
                    <span className="bg-[#CCECFF] border border-[#99D9FF] w-48 px-3 py-1 rounded-full text-[14px] font-bold flex items-center space-x-2 space-x-reverse">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.99935 5V10L13.3327 11.6667M18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10C1.66602 5.39762 5.39698 1.66666 9.99935 1.66666C14.6017 1.66666 18.3327 5.39762 18.3327 10Z"
                                stroke="#0080CC"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p>بانتظار تأكيد الاستلام</p>
                    </span>

                </div>

            
                <div className=" pt-10 ">
                    <hr />
                    <div className="flex flex-col md:flex-row gap-4 justify-end ">

                        <SubmitButton
                            buttonText="تراجع للخلف "
                            fullWidth={false}

                            type="button"
                            onClick={() => console.log("Clicked!")}
                            classContainer="bg-white text-[#70737A] "
                        />
                        <Submitbutton
                            buttonText="طلب استبعاد الفائز"
                            bgColor="#C22221"
                            padding="20px 20px"
                            fontSize="1 rem"
                            height="48px"
                            marginTop="1.5rem"
                            onClick={() => console.log("Clicked!")}
                        />




                    </div>

                </div>

            </div>
        </div>
    );
};

export default WinnersData;
