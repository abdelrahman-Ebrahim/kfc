import React, { useState } from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import WithdrawalForm from "./NewCompetitionWithdrawalForm";

type PrizeEntry = {
  prizeName: string;
  quantity: string;
};

type Withdrawal = {
  id: string;
  branch: string;
  prizes: PrizeEntry[];
  date: string;
};

const ordinalArabic = [
  "الأول",
  "الثاني",
  "الثالث",
  "الرابع",
  "الخامس",
  "السادس",
  "السابع",
  "الثامن",
  "التاسع",
  "العاشر",
];

const NewCompetitionWithdrawal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawalBranch, setWithdrawalBranch] = useState("");
  const [prizes, setPrizes] = useState<PrizeEntry[]>([]);
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [currentWithdrawalId, setCurrentWithdrawalId] = useState<string>("");
  const [withDrawalDate, setWithDrawalDate] = useState<Date | null>(null);

  const resetForm = () => {
    setWithdrawalBranch("");
    setPrizes([]);
    setWithDrawalDate(null);
    setCurrentWithdrawalId("");
    setEditMode(false);
  };

  const handleOpenModal = (withdrawal?: Withdrawal) => {
    if (withdrawal) {
      setWithdrawalBranch(withdrawal.branch);
      setPrizes(withdrawal.prizes);
      setCurrentWithdrawalId(withdrawal.id);
      setWithDrawalDate(new Date(withdrawal.date));
      setEditMode(true);
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const handleAddOrUpdateWithdrawal = () => {
    if (editMode) {
      setWithdrawals((prev) =>
        prev.map((withdrawal) =>
          withdrawal.id === currentWithdrawalId
            ? {
                ...withdrawal,
                branch: withdrawalBranch,
                prizes,
                date: withDrawalDate?.toISOString() || "",
              }
            : withdrawal
        )
      );
    } else {
      const newWithdrawal: Withdrawal = {
        id: (withdrawals.length + 1).toString().padStart(2, "0"),
        branch: withdrawalBranch,
        prizes,
        date: withDrawalDate?.toISOString() || "",
      };
      setWithdrawals((prev) => [...prev, newWithdrawal]);
    }
    handleCloseModal();
  };

  const handleDeleteWithdrawal = (id: string) => {
    setWithdrawals((prev) => prev.filter((withdrawal) => withdrawal.id !== id));
  };

  const renderTableRows = () =>
    withdrawals.map((withdrawal, index) => (
      <tr
        key={withdrawal.id}
        className={`text-center ${
          index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
        } border-b border-[#C6C7CA]`}
      >
        <td className="px-6">{withdrawal.id}</td>
        <td className="px-6 text-right">{`السحب ${ordinalArabic[index]}`}</td>
        <td className="text-center">
          {withdrawal.prizes.map((prize, idx) => (
            <div
              key={idx}
              className={`py-2 ${
                idx === withdrawal.prizes.length - 1
                  ? ""
                  : "border-b border-[#C6C7CA]"
              }`}
            >
              {prize.prizeName}
            </div>
          ))}
        </td>
        <td className="text-center">
          {withdrawal.prizes.map((prize, idx) => (
            <div
              key={idx}
              className={`py-2 ${
                idx === withdrawal.prizes.length - 1
                  ? ""
                  : "border-b border-[#C6C7CA]"
              }`}
            >
              {prize.quantity}
            </div>
          ))}
        </td>
        <td>{withdrawal.branch}</td>
        <td>{new Date(withdrawal.date).toLocaleDateString()}</td>
        <td className="w-auto">
          <button className="py-6" onClick={() => handleOpenModal(withdrawal)}>
            <Image
              src={"/dashboard/competitions/Edit.svg"}
              alt="edit"
              width={24}
              height={24}
            />
          </button>
        </td>
        <td className="w-auto">
          <button onClick={() => handleDeleteWithdrawal(withdrawal.id)}>
            <Image
              src={"/dashboard/competitions/Delete.svg"}
              alt="delete"
              width={24}
              height={24}
            />
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="mt-4 flex flex-col justify-center items-start gap-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm sm:text-[22px] text-shadeBlack font-semibold">
            قائمة السحوبات
          </p>
          <SubmitButton
            buttonText="اضافة سحب جديد"
            onClick={() => handleOpenModal()}
            rightIcon="/dashboard/competitions/add.svg"
            fullWidth={false}
            classContainer="mt-0"
          />
        </div>
        <hr />

        {/* Table Displaying Withdrawals */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E9E9EA]">
                {[
                  ".No",
                  "السحب",
                  "الجائزة",
                  "الكمية",
                  "الفرع",
                  "تاريخ السحب",
                  "",
                  "",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className={`px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA] ${
                      idx === 1 ? "text-right" : "text-center"
                    } ${idx === 2 || idx === 3 ? "w-[15%] px-0" : "w-auto"}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 min-w-[280px] max-w-[560px]">
            <div className="mb-4">
              <p className="text-2xl font-semibold text-shadeBlack">
                {editMode ? "تعديل السحب" : "إضافة سحب جديد"}
              </p>
            </div>
            <WithdrawalForm
              withdrawalBranch={withdrawalBranch}
              prizes={prizes}
              withDrawalDate={withDrawalDate}
              setWithdrawalBranch={setWithdrawalBranch}
              setPrizes={setPrizes}
              setWithdrawalDate={setWithDrawalDate}
              handleSubmit={handleAddOrUpdateWithdrawal}
              handleCancel={handleCloseModal}
              editMode={editMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCompetitionWithdrawal;
