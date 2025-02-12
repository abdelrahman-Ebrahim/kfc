"use client";
import PageHeader from "@/components/SharedComponents/PageHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProfilePage = () => {

    const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };
    return (
        <div className="w-full h-full pb-20">
            <PageHeader
                mainTitle="بيانات الشركة"
                breadcrumbTitle="بيانات الشركة"
                buttonText="تعديل البيانات الشخصية"
                secondbutton="تغيير كلمة السر "
                onButtonClick={() => navigateTo("/ChangePass")}
                onsecondButtonClick={() => navigateTo("/Editinfo")}

            />

            <div className="flex items-center w[1104px] h-[314px] gap-[24px] ">
                <Image
                    src={"/upload[.png"}
                    alt="logo"
                    width={352}
                    height={258}
                    className=" "
                />

                <div className="flex flex-col  w-[728px] h-[218px] space-y-6 ">

                    <h1 className="font-semibold text-[24px] text-shadeBlack">
                        اسم الشركة / الوكالة
                    </h1>

                    <div className="flex gap-3">
                        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33398 12C10.9908 12 12.334 10.6569 12.334 9C12.334 7.34315 10.9908 6 9.33398 6C7.67713 6 6.33398 7.34315 6.33398 9C6.33398 10.6569 7.67713 12 9.33398 12Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.33398 21C13.334 17 17.334 13.4183 17.334 9C17.334 4.58172 13.7523 1 9.33398 1C4.91571 1 1.33398 4.58172 1.33398 9C1.33398 13.4183 5.33398 17 9.33398 21Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div>
                        <h2> عنوان الشركة </h2>
                        <p className="text-shadeBlack font-semibold">نص  قابل للتعديل </p>

                        </div>
                        
                    </div>

                    <div className="flex items-center gap-40">
                
                        {/* Phone Number */}
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-2">
                                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.33398 12C10.9908 12 12.334 10.6569 12.334 9C12.334 7.34315 10.9908 6 9.33398 6C7.67713 6 6.33398 7.34315 6.33398 9C6.33398 10.6569 7.67713 12 9.33398 12Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.33398 21C13.334 17 17.334 13.4183 17.334 9C17.334 4.58172 13.7523 1 9.33398 1C4.91571 1 1.33398 4.58172 1.33398 9C1.33398 13.4183 5.33398 17 9.33398 21Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h2> البريد الألكتروني  </h2>
                            </div>
                            <span className="font-semibold text-[16px] pr-8 text-shadeBlack"> info@gmail.com</span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center ">
                            <div className="flex gap-2">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.167 8.33332H1.16699M12.0003 1.66666V4.99999M5.33366 1.66666V4.99999M5.16699 18.3333H12.167C13.5671 18.3333 14.2672 18.3333 14.802 18.0608C15.2724 17.8212 15.6548 17.4387 15.8945 16.9683C16.167 16.4335 16.167 15.7335 16.167 14.3333V7.33332C16.167 5.93319 16.167 5.23313 15.8945 4.69835C15.6548 4.22794 15.2724 3.84549 14.802 3.60581C14.2672 3.33332 13.5671 3.33332 12.167 3.33332H5.16699C3.76686 3.33332 3.0668 3.33332 2.53202 3.60581C2.06161 3.84549 1.67916 4.22794 1.43948 4.69835C1.16699 5.23313 1.16699 5.93319 1.16699 7.33332V14.3333C1.16699 15.7335 1.16699 16.4335 1.43948 16.9683C1.67916 17.4387 2.06161 17.8212 2.53202 18.0608C3.0668 18.3333 3.76686 18.3333 5.16699 18.3333Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h2> رقم الهاتف</h2>
                            </div>
                            <span className="font-semibold text-[16px] pr-6 text-shadeBlack">0566466966</span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProfilePage;
