import TextInput from "@/components/SharedComponents/TextInput";
import Image from "next/image";

interface NewCompetitionOpportunitiesProps {
    isInputDisabled: boolean;
    opportunities: string;
    setOpportunities: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const NewCompetitionOpportunities: React.FC<NewCompetitionOpportunitiesProps> = ({ isInputDisabled, opportunities, setOpportunities }) => {
    return (
      <div className="pt-2 flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <p className="text-shadeBlack font-semibold text-[22px]">فرص المسابقة</p>
          <p className="text-shadeGray font-medium text-sm">
            <span className="underline text-red-600">*ملحوظة: </span>
            عند اختيار أي من خدمات المسابقة سيتم الغاء هذا الجزء...
          </p>
        </div>
        <hr />
        <div className="flex items-center gap-6">
          <div className="min-w-[352px]">
            <TextInput
              value={opportunities}  // Bind this input to the opportunities state
              onChange={(e) => setOpportunities(e.target.value)}  // Update state on input change
              label="عدد فرص المسابقة"
              type="text"
              disabled={isInputDisabled}
            />
          </div>
  
          <div className="flex flex-col gap-1 items-center justify-center min-w-[352px]">
            <div className="flex gap-2 items-center">
              <div className={`${isInputDisabled ? "opacity-50" : ""}`}>
                <Image src={"/navIcons/wallet-05.svg"} alt="wallet" width={24} height={24} />
              </div>
              <p className={`text-base text-shadeGray font-medium ${isInputDisabled ? "opacity-50" : ""}`}>رصيد المحفظة لديك</p>
            </div>
            <p className={`text-shadeBlack font-semibold text-[22px] ${isInputDisabled ? "opacity-50" : ""}`}>100,000 فرصة</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewCompetitionOpportunities;
  