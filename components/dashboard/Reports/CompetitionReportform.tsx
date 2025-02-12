import React, { useState } from "react";
import TextInput from "../../SharedComponents/TextInput";
import DatePickerInput from "../../SharedComponents/DatePickerInput";
import SubmitButton from "../../SharedComponents/SubmitButton"; 

const CompetitionReportForm: React.FC = () => {
  const [paidParticipants, setPaidParticipants] = useState(100);
  const [freeParticipants, setFreeParticipants] = useState(100);
  const [competitionType, setCompetitionType] = useState("الكل");
  const [competitionLocation, setCompetitionLocation] = useState("جدة");
  const [branchLocation, setBranchLocation] = useState("جدة");
  const [withdrawLocation, setWithdrawLocation] = useState("جدة");
  const [startDate, setStartDate] = useState<Date | null>(new Date("2024-04-24"));
  const [endDate, setEndDate] = useState<Date | null>(new Date("2024-04-24"));

  const clearFields = () => {
    setPaidParticipants(0);
    setFreeParticipants(0);
    setCompetitionType("");
    setCompetitionLocation("");
    setBranchLocation("");
    setWithdrawLocation("");
    setStartDate(null);
    setEndDate(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      paidParticipants,
      freeParticipants,
      competitionType,
      competitionLocation,
      branchLocation,
      withdrawLocation,
      startDate,
      endDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6 mt-7 rounded-lg border-2">
    <h2 className="text-xl font-bold mb-6">اطبع التقارير حسب:</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
      <TextInput
        label="نوع المسابقة"
        type="text"
        value={competitionType}
        onChange={(e) => setCompetitionType(e.target.value)}
        options={["الكل", "نوع 1", "نوع 2"]}
      />
      <TextInput
        label="عدد المشاركين بالمجان   "
        type="number"
        value={paidParticipants}
        onChange={(e) => setPaidParticipants(Number(e.target.value))}
      />
      <TextInput
        label="عدد المشاركين المدفوعين  "
        type="number"
        value={freeParticipants}
        onChange={(e) => setFreeParticipants(Number(e.target.value))}
      />
      <TextInput
        label="مكان المسابقة"
        type="text"
        value={competitionLocation}
        onChange={(e) => setCompetitionLocation(e.target.value)}
        options={["جدة", "الرياض", "مكة"]}
      />
      <TextInput
        label="مكان الفرع "
        type="text"
        value={branchLocation}
        onChange={(e) => setBranchLocation(e.target.value)}
        options={["جدة", "الرياض", "مكة"]}
      />
    
      <TextInput
        label=" مكان  السحب"
        type="text"
        value={withdrawLocation}
        onChange={(e) => setWithdrawLocation(e.target.value)}
        options={["جدة", "الرياض", "مكة"]}
      />
      <DatePickerInput
        label="من تاريخ"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="اختار التاريخ"
      />
      <DatePickerInput
        label="الى تاريخ"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="اختار التاريخ"
      />
    </div>

    <hr className="font-bold trxe-[10px]" />

    
    <div className="flex flex-col md:flex-row gap-4 justify-end">
    <SubmitButton
       buttonText="مسح الحقول" 
       fullWidth={false}
       rightIcon="/dashboard/competitions/Delete.svg"
       type="button"
        onClick={clearFields}
        classContainer="bg-white text-[#70737A] "
         />
      <SubmitButton
       buttonText="اطبع التقرير"
       fullWidth={false}
       rightIcon="/dashboard/competitions/printer.svg" 
       type="submit"
       />
     
        
    </div>
  </form>
  );
};

export default CompetitionReportForm;
