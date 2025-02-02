import Image from "next/image";
import React from "react";
import { SlLocationPin } from "react-icons/sl";

interface CompetitionCardProps {
  id: string;
  status: string;
  statusColor: string;
  title: string;
  location: string;
  competitors: number;
  timeLeft: number;
  dateRange: string;
  imageSrc: string | null; // Allow imageSrc to be null
}

const CompetitionCard = ({
  id,
  status,
  statusColor,
  title,
  location,
  competitors,
  timeLeft,
  dateRange,
  imageSrc,
}: CompetitionCardProps) => {
  return (
    <div className="flex gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
      {/* Render the image only if imageSrc is valid */}
      <div className="flex justify-center items-center border-[2px] border-[#EBEDF0] rounded-2xl w-[168px] h-[176px]">
        {imageSrc ? (
          <div className="size-12 flex justify-center items-center rounded-lg">
            <Image
              src={imageSrc}
              alt={title}
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
        ) : (
          <Image
            src={"/dashboard/competitions/placeholderImg.svg"}
            alt={title}
            width={50}
            height={50}
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-4 self-start">
        {/* card header */}
        <div className="flex flex-col justify-start items-start gap-1">
          <div
            className={`rounded-lg px-2 py-1 flex justify-center items-center w-fit text-nowrap ${statusColor}`}
          >
            <p className="text-sm text-[#331C0D]">
              {status === "Active"
                ? "مسابقة سارية"
                : status === "Draft"
                ? "مسودة"
                : "مسابقة منتهية"}
            </p>
          </div>
          <h3 className="text-base font-semibold text-shadeBlack max-w-[324px]">
            {title}
          </h3>
          <div className="flex justify-center items-center gap-2 text-primary mt-1">
            <SlLocationPin size={20} />
            <p className="text-sm font-medium">{location}</p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/dashboard/competitions/users.svg"}
                alt="users"
                width={16}
                height={16}
              />
              <p className="text-shadeGray text-sm font-medium text-nowrap">
                {competitors} مشترك
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/dashboard/competitions/clock.svg"}
                alt="clock"
                width={16}
                height={16}
              />
              <p className="text-shadeGray text-sm font-medium text-nowrap">
                {timeLeft} يوما
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <Image
              src={"/dashboard/competitions/calendar.svg"}
              alt="calendar"
              width={16}
              height={16}
            />
            <p className="text-shadeGray font-medium text-sm">{dateRange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
