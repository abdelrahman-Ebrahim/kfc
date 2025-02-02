import React from "react";

interface CompetitionPromptProps {
  handleCloseModal: () => void;
  handleContinue: () => void; // Add this prop
}

const CompetitionPrompt = ({
  handleCloseModal,
  handleContinue,
}: CompetitionPromptProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-white w-[90%] min-w-[280px] max-w-[560px] p-6 rounded-3xl">
        <div className="flex flex-col gap-4 justify-start items-start mb-4">
          <p className="font-semibold text-lg text-shadeBlack text-center">
            استكمال انشاء مسابقة
          </p>
          <p className="text-sm text-shadeGray font-normal">
            لقد قمت بالتوقف عن انشاء مسابقة في جزئية تحديد السحوبات هل تريد
            استكمال ما بدأت فيه ؟
          </p>
        </div>

        <hr />

        <div className="flex justify-between items-center mt-2">
          {/* Delete */}
          <button
            className="text-red-500 text-sm font-medium hover:underline"
            onClick={handleCloseModal}
          >
            حذف المسابقة
          </button>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-2">
            <button
              className="px-2 py-1 bg-white text-shadeBlack rounded-[100px] border border-shadeGray font-medium hover:bg-gray-100 md:px-4 md:py-2"
              onClick={handleCloseModal}
            >
              الغاء
            </button>
            <button
              className="px-2 py-1 bg-primary text-white rounded-[100px] font-medium md:px-4 md:py-2"
              onClick={handleContinue} // Open second modal
            >
              استكمال إنشاء المسابقة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPrompt;
