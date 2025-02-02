import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CompetitionServiceCardProps {
  imageSrc: string;
  bgColor: string;
  title: string;
  description: React.ReactNode;
  competitionId: string;
}

const CompetitionServiceCard = ({
  imageSrc,
  bgColor,
  title,
  description,
  competitionId,
}: CompetitionServiceCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    // Navigate to the competition page and pass the title as a query parameter
    router.push(`/competitions/${competitionId}?title=${encodeURIComponent(title)}`);
  };

  return (
    <div
      className="p-4 border rounded-2xl gap-4 bg-[#F9F9FA] flex flex-col items-start cursor-pointer"
      onClick={handleCardClick}
    >
      <div className={`size-12 ${bgColor} flex justify-center items-center rounded-lg`}>
        <Image src={imageSrc} alt={title} width={24} height={24} />
      </div>
      <div className="flex flex-col justify-center gap-1 items-start">
        <p className="text-shadeBlack text-[22px] font-semibold">{title}</p>
        <p className="text-shadeGray text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

export default CompetitionServiceCard;