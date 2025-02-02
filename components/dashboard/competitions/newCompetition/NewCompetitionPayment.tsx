import React, { useState } from "react";
import TabSwitch from "@/components/SharedComponents/TabSwitch";
import TextInput from "@/components/SharedComponents/TextInput";
import Image from "next/image";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles
import DatePickerInput from "@/components/SharedComponents/DatePickerInput";
import { FileUpload } from "@/components/AuthComponents/RegisterComponents/FileUpload";

const NewCompetitionPayment = () => {
  const tabs = ["دفع بنكي", "P.O"];
  const [activeTab, setActiveTab] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState(""); // Name on card
  const [cardNumber, setCardNumber] = useState(""); // Card number
  const [expirationDate, setExpirationDate] = useState<Date | null>(null); // Date input state
  const [cvv, setCvv] = useState(""); // CVV state

  // Toggle visibility for the password field
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Handle input changes for name, card number, expiration date, and CVV
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 w-full">
      {/* Payment Method Section */}
      <div className="flex flex-col items-start gap-4 shadow-card-shadow bg-white border border-[#C6C7CA] p-6 rounded-lg flex-1 w-full md:w-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <h2 className="text-2xl font-semibold text-shadeBlack">
            اختر طريقة الدفع
          </h2>
          <hr className="w-full" />
          {/* Selecting Payment Method */}
          <TabSwitch
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        {/* Electronic Payment DISABLED FOR NOW */}
        {activeTab === 1000000 && (
          <>
            <div className="flex flex-col items-start justify-start gap-6 w-full">
              <div className="flex items-center gap-6">
                <div className="flex justify-center items-center bg-white border border-[#C6C7CA] rounded-lg px-[10px] py-3 w-[168px] h-[68px]">
                  <Image
                    src={"/dashboard/competitions/Mastercard.svg"}
                    alt="mastercard"
                    width={52}
                    height={52}
                  />
                </div>
                <div className="flex justify-center items-center bg-primary border border-[#C6C7CA] rounded-lg px-[10px] py-3 w-[168px] h-[68px]">
                  <Image
                    src={"/dashboard/competitions/Mada.svg"}
                    alt="mada"
                    width={52}
                    height={52}
                  />
                </div>
                <div className="flex justify-center items-center bg-white border border-[#C6C7CA] rounded-lg px-[10px] py-3 w-[168px] h-[68px]">
                  <Image
                    src={"/dashboard/competitions/Visa.svg"}
                    alt="visa"
                    width={52}
                    height={52}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {/* Payment Details Header */}
                <div className="flex flex-col gap-2">
                  <p className="text-shadeBlack font-semibold flex flex-col gap-2">
                    تفاصيل طريقة الدفع:
                  </p>
                  <hr />
                </div>
                {/* Payment Details Form */}
                <div className="flex flex-col gap-4">
                  {/* Name Input */}
                  <TextInput
                    label="الاسم علي البطاقة"
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange(e, setName)} // Update name on change
                    required
                  />
                  {/* Card Number Input */}
                  <TextInput
                    label="رقم البطاقة"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => handleInputChange(e, setCardNumber)} // Update card number on change
                    required
                  />
                  <div className="flex items-center gap-6">
                    {/* Date Input */}
                    <DatePickerInput
                      selected={expirationDate}
                      onChange={(date) => setExpirationDate(date)}
                      placeholderText="تاريخ انتهاء البطاقة"
                    />

                    {/* CVV Input */}
                    <TextInput
                      label="CVV"
                      type={showPassword ? "text" : "password"}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)} // Update CVV on change
                      showPassword={showPassword}
                      onTogglePassword={handleClickShowPassword}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Bank Payment */}
        {activeTab === 0 && (
          <>
            <div className="flex flex-col items-start justify-start gap-6 w-full">
              {/* Section Header */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-shadeBlack font-semibold">
                    تفاصيل طريقة الدفع:
                  </p>
                  <hr />
                </div>
              </div>
              {/* FileUploader */}
              <div className="flex flex-col gap-3 w-full">
                <p className="text-shadeBlack font-medium text-sm">
                  أرفق إيصال الدفع
                </p>
                <FileUpload
                  label=""
                  textClass="text-center items-center"
                  classContainer="w-full flex flex-col items-center justify-center text-center !bg-[#F9F9FA]"
                />
              </div>
            </div>
          </>
        )}

        {/* P.O Payment */}
        {activeTab === 1 && (
          <>
            <div className="flex flex-col items-start justify-start gap-6 w-full">
              {/* Section Header */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-shadeBlack font-semibold">
                    تفاصيل طريقة الدفع:
                  </p>
                  <hr />
                </div>
              </div>
              {/* FileUploader */}
              <div className="flex flex-col gap-3 w-full">
                <p className="text-shadeBlack font-medium text-sm">
                  أرفق ملف طلب الشراء (P.O)
                </p>
                <FileUpload
                  label=""
                  textClass="text-center items-center"
                  classContainer="w-full flex flex-col items-center justify-center text-center !bg-[#F9F9FA]"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bill Amount Section*/}
      <div className="flex flex-col gap-6 min-w-[352px] items-start shadow-card-shadow bg-white border border-[#C6C7CA] p-6 rounded-lg w-full md:w-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="text-shadeBlack font-semibold text-[22px]">
            قيمة الفاتورة
          </p>
          <hr className="w-full" />
        </div>
        {/* Bill Details */}
        <div className="flex flex-col gap-4 text-shadeGray font-medium w-full">
          {/* Main Details */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <p>رسوم المسابقة</p>
              <p>5,000 ر.س</p>
            </div>
            <div className="flex justify-between items-center">
              <p>خدمة الكوبونات اللامحدودة</p>
              <p>70,000 ر.س</p>
            </div>
          </div>
          <hr />
          {/* Taxes Details */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <p>الإجمالي قبل الضريبة</p>
              <p>75,000 ر.س</p>
            </div>
            <div className="flex justify-between items-center">
              <p>ضريبة القيمة المضافة</p>
              <p>11,250 ر.س</p>
            </div>
          </div>
          <hr />
          {/* Total Bills */}
          <div className="flex justify-between items-center text-shadeBlack font-semibold text-[22px]">
            <p>الإجمالي</p>
            <p>86,250 ر.س</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCompetitionPayment;
