"use client";
import React from "react";
import FilterButton from "@/components/SharedComponents/FilterButton";
import SearchBar from "@/components/SharedComponents/SearchBar";

interface TabsAndFilterProps {
  activeTab: string;
  switchTab: (tab: string) => void;
}

const TabsAndFilter: React.FC<TabsAndFilterProps> = ({ activeTab, switchTab }) => {
  const tabs = [
    { key: "active", label: "المسابقات السارية" },
    { key: "draft", label: "المسودة" },
    { key: "finished", label: "المسابقات المنتهية" },
  ];

  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-6">
      <div className="grid grid-cols-3 w-full">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className="flex flex-col justify-center items-center gap-3 cursor-pointer"
            onClick={() => switchTab(tab.key)}
            role="button"
            tabIndex={0}
            aria-label={tab.label}
          >
            <p
              className={`text-[12px] text-nowrap md:text-base ${
                activeTab === tab.key ? "text-primary font-semibold" : "text-shadeGray"
              }`}
            >
              {tab.label}
            </p>
            <div
              className={`w-full h-0.5 ${
                activeTab === tab.key ? "bg-primary" : "bg-[#E3E3E4]"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <FilterButton buttonText="ترتيب حسب" />
          <FilterButton buttonText="نوع المسابقة" />
        </div>
      </div>
    </div>
  );
};

export default TabsAndFilter;