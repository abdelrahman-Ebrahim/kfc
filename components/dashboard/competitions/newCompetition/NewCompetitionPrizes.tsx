import React, { useState } from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import PrizeForm from "./NewCompetitionPrizesForm";

// Define the Prize type
type Prize = {
  id: string;
  name: string;
  description: string;
  quantity: string;
};

const NewCompetitionPrizes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prizeName, setPrizeName] = useState("");
  const [prizeDescription, setPrizeDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [currentPrizeId, setCurrentPrizeId] = useState<string>("");

  // Table headers
  const tableHeaders = [
    { key: "id", label: ".No", align: "center" },
    { key: "name", label: "اسم الجائزة", align: "right" },
    { key: "description", label: "وصف الجائزة", align: "right" },
    { key: "quantity", label: "الكمية", align: "center" },
    { key: "edit", label: "", align: "center" },
    { key: "delete", label: "", align: "center" },
  ];

  const handleOpenModal = (prize?: Prize) => {
    if (prize) {
      setPrizeName(prize.name);
      setPrizeDescription(prize.description);
      setQuantity(prize.quantity);
      setCurrentPrizeId(prize.id);
      setEditMode(true);
    } else {
      setPrizeName("");
      setPrizeDescription("");
      setQuantity("");
      setCurrentPrizeId("");
      setEditMode(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPrizeName("");
    setPrizeDescription("");
    setQuantity("");
    setCurrentPrizeId("");
    setEditMode(false);
  };

  const handleAddOrUpdatePrize = () => {
    if (editMode) {
      const updatedPrizes = prizes.map((prize) =>
        prize.id === currentPrizeId
          ? {
              ...prize,
              name: prizeName,
              description: prizeDescription,
              quantity,
            }
          : prize
      );
      setPrizes(updatedPrizes);
    } else {
      const newPrize: Prize = {
        id: (prizes.length + 1).toString().padStart(2, "0"),
        name: prizeName,
        description: prizeDescription,
        quantity,
      };
      setPrizes([...prizes, newPrize]);
    }
    handleCloseModal();
  };

  const handleDeletePrize = (id: string) => {
    setPrizes(prizes.filter((prize) => prize.id !== id));
  };

  return (
    <div className="mt-4 flex flex-col justify-center items-start gap-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg sm:text-[22px] text-shadeBlack font-semibold">
            قائمة جوائز المسابقة
          </p>
          <SubmitButton
            buttonText="اضافة جائزة جديدة"
            onClick={() => handleOpenModal()}
            rightIcon="/dashboard/competitions/add.svg"
            fullWidth={false}
            classContainer="mt-0"
          />
        </div>
        <hr />

        {/* Table Displaying Prizes */}
        <div className= "overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#E9E9EA]">
                {tableHeaders.map((header) => (
                  <th
                    key={header.key}
                    className={`px-6 py-3 text-[12px] text-shadeGray border-b border-[#C6C7CA] text-${header.align}`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prizes.map((prize, index) => (
                <tr
                  key={prize.id}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
                  } border-b border-[#C6C7CA]`}
                >
                  {tableHeaders.map((header) => {
                    switch (header.key) {
                      case "id":
                        return (
                          <td key={header.key} className="px-6 py-6">
                            {prize.id}
                          </td>
                        );
                      case "name":
                        return (
                          <td key={header.key} className="px-6 text-right">
                            {prize.name}
                          </td>
                        );
                      case "description":
                        return (
                          <td key={header.key} className="px-6 text-right">
                            {prize.description}
                          </td>
                        );
                      case "quantity":
                        return <td key={header.key}>{prize.quantity}</td>;
                      case "edit":
                        return (
                          <td key={header.key} className="w-auto">
                            <button onClick={() => handleOpenModal(prize)}>
                              <Image
                                src={"/dashboard/competitions/Edit.svg"}
                                alt="edit"
                                width={24}
                                height={24}
                              />
                            </button>
                          </td>
                        );
                      case "delete":
                        return (
                          <td key={header.key} className="w-auto">
                            <button onClick={() => handleDeletePrize(prize.id)}>
                              <Image
                                src={"/dashboard/competitions/Delete.svg"}
                                alt="delete"
                                width={24}
                                height={24}
                              />
                            </button>
                          </td>
                        );
                      default:
                        return null;
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 min-w-[280px] max-w-[560px]">
            <div className="mb-4">
              <p className="text-2xl font-semibold text-shadeBlack">
                {editMode ? "تعديل الجائزة" : "إضافة جائزة جديدة"}
              </p>
            </div>
            <PrizeForm
              prizeName={prizeName}
              prizeDescription={prizeDescription}
              quantity={quantity}
              setPrizeName={setPrizeName}
              setPrizeDescription={setPrizeDescription}
              setQuantity={setQuantity}
              handleSubmit={handleAddOrUpdatePrize}
              handleCancel={handleCloseModal}
              editMode={editMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCompetitionPrizes;
