import CancelButton from "@/components/SharedComponents/CancelButton";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";

// Common Modal Form for Adding or Editing Prizes
const PrizeForm = ({
  prizeName,
  prizeDescription,
  quantity,
  setPrizeName,
  setPrizeDescription,
  setQuantity,
  handleSubmit,
  editMode,
  handleCancel,
}: {
  prizeName: string;
  prizeDescription: string;
  quantity: string;
  setPrizeName: React.Dispatch<React.SetStateAction<string>>;
  setPrizeDescription: React.Dispatch<React.SetStateAction<string>>;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  editMode: boolean;
  handleCancel: () => void;
}) => (
  <div className="flex flex-col gap-4">
    <p className="text-sm text-shadeGray">قم بإنشاء أو تعديل جائزة.</p>
    <div className="flex items-center gap-4 w-full">
      <div className="sm:min-w-[365px]">
        <TextInput
          label="اسم الجائزة"
          value={prizeName}
          onChange={(e) => setPrizeName(e.target.value)}
          type="text"
          required
        />
      </div>
      <div className="w-full">
        <TextInput
          label="الكمية"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          required
        />
      </div>
    </div>
    <div className="w-full">
      <TextInput
        label="وصف الجائزة"
        value={prizeDescription}
        onChange={(e) => setPrizeDescription(e.target.value)}
        type="text"
        multiline
        minRows={3}
        required
      />
    </div>
    <hr />
    <div className="w-full flex items-center gap-4 justify-end">
      <CancelButton
        buttonText="إلغاء"
        onClick={handleCancel} // Cancel button calls handleCance
        fullWidth={false}
      />
      <SubmitButton
        buttonText={editMode ? "تعديل الجائزة" : "إضافة جائزة"}
        onClick={handleSubmit}
        fullWidth={false}
        disabled={!prizeName || !prizeDescription || !quantity}
      />
    </div>
  </div>
);

export default PrizeForm;
