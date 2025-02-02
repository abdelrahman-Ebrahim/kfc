import React, { useEffect } from "react";
import CancelButton from "@/components/SharedComponents/CancelButton";
import DatePickerInput from "@/components/SharedComponents/DatePickerInput";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";

type PrizeEntry = {
  prizeName: string;
  quantity: string;
};

type WithdrawalFormProps = {
  withdrawalBranch: string;
  prizes: PrizeEntry[];
  withDrawalDate: Date | null;
  setWithdrawalBranch: React.Dispatch<React.SetStateAction<string>>;
  setPrizes: React.Dispatch<React.SetStateAction<PrizeEntry[]>>;
  setWithdrawalDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleSubmit: () => void;
  handleCancel: () => void;
  editMode: boolean;
};

const branchOptions = ["Branch 1", "Branch 2", "Branch 3"];
const prizeOptions = ["Prize 1", "Prize 2", "Prize 3"];

const WithdrawalForm: React.FC<WithdrawalFormProps> = ({
  withdrawalBranch,
  prizes,
  withDrawalDate,
  setWithdrawalBranch,
  setPrizes,
  setWithdrawalDate,
  handleSubmit,
  handleCancel,
  editMode,
}) => {
  // Handle adding a new prize entry
  const handleAddPrize = () => {
    setPrizes((prev) => [...prev, { prizeName: "", quantity: "" }]);
  };

  // Handle changes to specific prize entries
  const handlePrizeChange = (
    index: number,
    field: "prizeName" | "quantity",
    value: string
  ) => {
    setPrizes((prev) =>
      prev.map((prize, idx) =>
        idx === index ? { ...prize, [field]: value } : prize
      )
    );
  };

  // Ensure there's at least one prize entry on component mount
  useEffect(() => {
    if (prizes.length === 0) {
      setPrizes([{ prizeName: "", quantity: "" }]);
    }
  }, [prizes, setPrizes]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-shadeGray">
        الحوار هو نوع من النوافذ المنبثقة التي تظهر أمام محتوى التطبيق لتوفير
        معلومات مهمة أو المطالبة باتخاذ قرار.
      </p>
      <div className="flex items-center gap-4 w-full">
        {/* Choose Branch */}
        <div className="w-full">
          <TextInput
            label="اختر الفرع"
            value={withdrawalBranch}
            onChange={(e) => setWithdrawalBranch(e.target.value)}
            type="text"
            options={branchOptions}
            required
          />
        </div>
      </div>
      {/* Choose Date */}
      <div className="w-full z-10">
        <DatePickerInput
          selected={withDrawalDate}
          placeholderText="ادخل تاريخ السحب"
          onChange={(date) => setWithdrawalDate(date)}
        />
      </div>
      {/* Main Prize and Quantity Inputs */}
      <div className="flex flex-col gap-2">
        {prizes.map((prize, index) => (
          <div key={index} className="flex gap-4 items-center mb-2">
            {/* Prize Name */}
            <div className="flex-1">
              <TextInput
                label="اختر الجائزة"
                value={prize.prizeName}
                onChange={(e) =>
                  handlePrizeChange(index, "prizeName", e.target.value)
                }
                type="text"
                options={prizeOptions}
                required
              />
            </div>
            {/* Quantity */}
            <div className="flex-1">
              <TextInput
                label="الكمية"
                value={prize.quantity}
                onChange={(e) =>
                  handlePrizeChange(index, "quantity", e.target.value)
                }
                type="number"
                required
              />
            </div>
          </div>
        ))}
      </div>
      <hr />
      {/* Add Additional Prize Button */}
      <SubmitButton
        buttonText="أضافة جائزة إضافية"
        onClick={handleAddPrize}
        rightIcon="/dashboard/competitions/blueAdd.svg"
        classContainer="mt-0 !bg-white !text-primary"
      />
      <hr />
      {/* Action Buttons */}
      <div className="w-full flex items-center gap-4 justify-end">
        <CancelButton
          buttonText="إلغاء"
          onClick={handleCancel}
          fullWidth={false}
        />
        <SubmitButton
          buttonText={editMode ? "تعديل السحب" : "إضافة سحب"}
          onClick={handleSubmit}
          fullWidth={false}
          disabled={!withdrawalBranch || prizes.length === 0}
        />
      </div>
    </div>
  );
};

export default WithdrawalForm;
