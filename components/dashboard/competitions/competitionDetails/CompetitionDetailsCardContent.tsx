
// Import necessary modules
import Image from "next/image";
import React from "react";

// Interface definitions for data structures
export interface City {
  id: number;
  name: string;
  nameEn: string;
}

export interface Chamber {
  id: number;
  name: string;
  nameEn: string;
}

export interface CompetitionDetails {
  status: string;
  name: string;
  fromDate: string;
  toDate: string;
  numberOfDays: number;
  competitionType: string;
  prizes: any[];
  draws: any[];
  city: City;
  chamber: Chamber;
}

// Props interface for the component
interface CompetitionDetailsCardContentProps {
  details: CompetitionDetails;
  showMoreDetails: boolean;
  toggleMoreDetails: () => void;
}

const CompetitionDetailsCardContent = ({
  details,
  showMoreDetails,
  toggleMoreDetails,
}: CompetitionDetailsCardContentProps) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        {/* Competition status and name section */}
        <div className="flex flex-col items-start gap-2">
          <div className="px-2 py-[2px] bg-[#FFE8D9] text-[#331C0D] rounded-lg text-sm sm:text-base">
            {details.status}
          </div>
          <div className="text-shadeBlack font-semibold text-sm sm:text-2xl">
            {details.name}
          </div>
        </div>

        {/* Main details grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full">
          {/* Start date section */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="flex items-start">
                <Image
                  src={"/dashboard/competitions/calendar.svg"}
                  alt="calendar"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-shadeGray text-[12px] font-medium"> من تاريخ </p>
                <p className="text-sm text-[#243757] font-medium">
                  {new Date(details.fromDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* End date section */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="flex items-start">
                <Image
                  src={"/dashboard/competitions/calendar.svg"}
                  alt="calendar"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-shadeGray text-[12px] font-medium">إلى تاريخ</p>
                <p className="text-sm text-[#243757] font-medium">
                  {new Date(details.toDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Competition duration section */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="flex items-start">
                <Image
                  src={"/dashboard/competitions/clock.svg"}
                  alt="clock"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-shadeGray text-[12px] font-medium"> مدة المسابقة</p>
                <p className="text-sm text-[#243757] font-medium">
                  {details.numberOfDays} days
                </p>
              </div>
            </div>
          </div>

          {/* Competition type section (conditionally shown) */}
          <div className={`flex-col ${showMoreDetails ? "flex" : "hidden"}`}>
            <div className="flex gap-2">
              <div className="flex items-start">
                <Image src={"/gift.svg"} alt="competitiontype" width={20} height={20} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-shadeGray text-[12px] font-medium">نوع المسابقة</p>
                <p className="text-sm text-[#243757] font-medium">
                  {details.competitionType}
                </p>
              </div>
            </div>
          </div>

          {/* Secondary details grid (conditionally shown) */}
          <div
            className={`sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 ${
              showMoreDetails ? "grid" : "hidden"
            }`}
          >
            {/* Chamber information */}
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-start">
                  <Image src={"/pin.svg"} alt="commercialroom" width={20} height={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-shadeGray text-[12px] font-medium"> الغرفة التجارية</p>
                  <p className="text-sm text-[#243757] font-medium">
                    {details.chamber.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Coupons count */}
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-start">
                  <Image src={"/tag.svg"} alt="coupons" width={20} height={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-shadeGray text-[12px] font-medium">عدد الكوبونات</p>
                  <p className="text-sm text-[#243757] font-medium">
                    {details.prizes.length}
                  </p>
                </div>
              </div>
            </div>

            {/* City information */}
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-start">
                  <Image src={"/pin.svg"} alt="location" width={20} height={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-shadeGray text-[12px] font-medium">المدينة</p>
                  <p className="text-sm text-[#243757] font-medium">
                    {details.city.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expand/collapse section */}
        <div className="flex flex-col gap-2 w-full">
          <div
            className="flex justify-between items-center w-full cursor-pointer"
            onClick={toggleMoreDetails}
          >
         <p className="text-[#0080CC] font-semibold">المزيد من التفاصيل</p>
            <Image
              src={"/blue-chevron-down.svg"}
              alt="chevron"
              width={24}
              height={24}
            />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetailsCardContent;