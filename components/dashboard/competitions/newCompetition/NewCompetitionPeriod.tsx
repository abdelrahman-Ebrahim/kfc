import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { addDays } from "date-fns";

const NewCompetitionPeriod = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const calculateDays = (start: Date | null, end: Date | null) => {
    if (!start || !end) return 0;

    const timeDifference = end.getTime() - start.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
  };

  const numberOfDays = calculateDays(startDate, endDate);

  const handleEndDateChange = (date: Date | null) => {
    if (startDate && date) {
      const minEndDate = addDays(startDate, 28);
      if (date < minEndDate) {
        setErrorMessage(
          "تاريخ النهاية يجب أن يكون بعد 28 يوم من تاريخ البداية."
        );
        setEndDate(null);
      } else {
        setErrorMessage("");
        setEndDate(date);
      }
    }
  };

  return (
    <div className="pt-2 flex flex-col gap-6 w-full">
      {/* Title Section */}
      <div className="flex flex-col gap-4 w-full">
        <p className="text-shadeBlack font-semibold text-[22px]">
          فترة المسابقة
        </p>
        <hr />
      </div>

      {/* Date Selection Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Start Date Picker */}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
              <Image
                src="/dashboard/competitions/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
              />
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => {
                setStartDate(date);
                setEndDate(null);
                setErrorMessage("");
              }}
              dateFormat="yyyy/MM/dd"
              className="w-full border rounded p-4 pl-10 text-right"
              placeholderText="من تاريخ (ميلادي)"
            />
          </div>
        </div>

        {/* End Date Picker */}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
              <Image
                src="/dashboard/competitions/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
              />
            </div>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy/MM/dd"
              className="w-full border rounded p-4 pl-10 text-right"
              placeholderText="إلى تاريخ (ميلادي)"
              minDate={startDate ? addDays(startDate, 28) : undefined}
              disabled={!startDate}
            />
          </div>
        </div>

        {/* Days Calculation */}
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex gap-2 items-center">
            <Image
              src="/dashboard/competitions/calendar.svg"
              alt="calendar"
              width={24}
              height={24}
            />
            <p className="font-medium text-shadeGray">عدد الايام</p>
          </div>
          <p className="font-semibold text-[22px] text-shadeBlack">
            {numberOfDays} يوماً
          </p>
        </div>
      </div>

      {/* عرض رسالة الخطأ */}
      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
      )}
    </div>
  );
};

export default NewCompetitionPeriod;
