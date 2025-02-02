import React from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  selected,
  onChange,
  placeholderText,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
        <Image
          src="/dashboard/competitions/calendar.svg"
          alt="calendar"
          width={20}
          height={20}
        />
      </div>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy/MM/dd"
        className="w-full border border-[#C6C7CA] rounded p-4 pl-10 text-right focus:outline-[#1976d2]"
        placeholderText={placeholderText}
        required
      />
    </div>
  );
};

export default DatePickerInput;
