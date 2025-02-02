import Image from "next/image";
import React from "react";

interface CompetitionDetailsCardContentProps {
  showMoreDetails: boolean;
  toggleMoreDetails: () => void;
}

const CompetitionDetailsCardContent = ({
  showMoreDetails,
  toggleMoreDetails,
}: CompetitionDetailsCardContentProps) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-2">
          <div className="px-2 py-[2px] bg-[#FFE8D9] text-[#331C0D] rounded-lg text-sm sm:text-base">
            بانتظار عملية الدفع
          </div>
          <div className="text-shadeBlack font-semibold text-sm sm:text-2xl">
            شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على
            جوائز قيمة
          </div>
        </div>
        {/* DETAILS GRID CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full">
          {/* DETAILS ITEM FROM DATE */}
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
                <p className="text-shadeGray text-[12px] font-medium">
                  من تاريخ
                </p>
                <p className="text-sm text-[#243757] font-medium">
                  هـ 09/04 - م 12/10
                </p>
              </div>
            </div>
          </div>
          {/* DETAILS ITEM TO DATE */}
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
                <p className="text-shadeGray text-[12px] font-medium">
                  إلى تاريخ
                </p>
                <p className="text-sm text-[#243757] font-medium">
                  هـ 09/04 - م 12/10
                </p>
              </div>
            </div>
          </div>
          {/* DETAILS ITEM COMPETITION DURATION */}
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
                <p className="text-shadeGray text-[12px] font-medium">
                  مدة المسابقة
                </p>
                <p className="text-sm text-[#243757] font-medium">60 يوماً</p>
              </div>
            </div>
          </div>
          {/* DETAILS ITEM COMPETITION TYPE*/}
          <div className={`flex-col ${showMoreDetails ? "flex" : "hidden"}`}>
            <div className="flex gap-2">
              <div className="flex items-start">
                <Image
                  src={"/gift.svg"}
                  alt="competitiontype"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-shadeGray text-[12px] font-medium">
                  نوع المسابقة
                </p>
                <p className="text-sm text-[#243757] font-medium">
                  باركود قياسي
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS GRID CONTAINER 2 */}
          <div
            className={`sm:col-span-3 grid grdi-cols-1 sm:grid-cols-3 gap-4 ${
              showMoreDetails ? "grid" : "hidden"
            }`}
          >
            {/* DETAILS ITEM COMMERCIAL ROOM */}
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-start">
                  <Image
                    src={"/pin.svg"}
                    alt="commercialroom"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-shadeGray text-[12px] font-medium">
                    الغرفة التجارية
                  </p>
                  <p className="text-sm text-[#243757] font-medium">
                    الغرفة التجارية بجدة
                  </p>
                </div>
              </div>
            </div>
            {/* DETAILS ITEM COUPONS NUMBER */}
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-start">
                  <Image
                    src={"/tag.svg"}
                    alt="coupons"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-shadeGray text-[12px] font-medium">
                    عدد الكوبونات
                  </p>
                  <p className="text-sm text-[#243757] font-medium">لا محدود</p>
                </div>
              </div>
            </div>
            {/* DETAILS ITEM CITY */}
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="flex items-start">
                  <Image
                    src={"/pin.svg"}
                    alt="location"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-shadeGray text-[12px] font-medium">
                    المدينة
                  </p>
                  <p className="text-sm text-[#243757] font-medium">جدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MORE DETAILS */}
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
