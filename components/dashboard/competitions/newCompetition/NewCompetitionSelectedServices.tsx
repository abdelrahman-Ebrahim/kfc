import React from "react";
import { Checkbox } from "@mui/material";

interface SelectedServices {
  dataUpload: boolean;
  invoiceVerification: boolean;
  unlimitedChances: boolean;
}

interface ServiceItemProps {
  id: keyof SelectedServices;
  title: string;
  description: string;
  selected: boolean;
  onSelect: (id: keyof SelectedServices) => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  id,
  title,
  description,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`border rounded-lg p-4 flex flex-col gap-2 w-full sm:w-[calc(33%-0.5rem)] ${
        selected ? "border-primary bg-[#D9E1F9]" : "border-[#C6C7CA] bg-white"
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center gap-2">
        <Checkbox checked={selected} color="primary" />
        <p
          className={`font-medium text-[22px] ${
            selected ? "text-[#0D152D]" : "text-shadeGray"
          }`}
        >
          {title}
        </p>
      </div>
      <p className="text-shadeGray text-sm">{description}</p>
    </div>
  );
};

interface NewCompetitionSelectedServicesProps {
  selectedServices: SelectedServices;
  onCheckboxChange: (id: keyof SelectedServices) => void;
}

const NewCompetitionSelectedServices: React.FC<NewCompetitionSelectedServicesProps> = ({
  selectedServices,
  onCheckboxChange,
}) => {
  return (
    <div className="pt-2 flex flex-col gap-6 w-full lg:w-[95%] xl:w-full">
      {/* Title Subsection */}
      <div className="flex flex-col gap-4 w-full">
        <p className="text-shadeBlack font-semibold text-[22px]">خدمات المسابقة</p>
        <hr />
      </div>

      {/* Services Subsection */}
      <div className="flex flex-col md:flex-row gap-4">
        <ServiceItem
          id="dataUpload"
          title="فرص لا محدودة"
          description="تقدم لك هذه الخدمة فرصاً لا محدودة للمتسابقين، بحيث تستطيع استيعاب المسابقة بالكامل مهما كان العدد."
          selected={selectedServices.dataUpload}
          onSelect={onCheckboxChange}
        />

        <ServiceItem
          id="invoiceVerification"
          title="التحقق من الفاتورة"
          description="هذه الخدمة تمنحك خاصية التحقق من الفاتورة للمتسابقين قبل ادراجهم، كما انها تتضمن كذلك عدد لا محدود من المتسابقين كخدمة مضمنة."
          selected={selectedServices.invoiceVerification}
          onSelect={onCheckboxChange}
        />

        <ServiceItem
          id="unlimitedChances"
          title="رفع البيانات"
          description="هذه الخدمة تمنحك خاصية رفع البيانات التي لديك للعملاء للحصول على الجائزة، كما انها تتضمن كذلك عدد لا محدود من المتسابقين كخدمة مضمنة."
          selected={selectedServices.unlimitedChances}
          onSelect={onCheckboxChange}
        />
      </div>
    </div>
  );
};

export default NewCompetitionSelectedServices;
