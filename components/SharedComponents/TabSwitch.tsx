import React from "react";

interface TabSwitchProps {
  tabs: string[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  containerClass?: string;
}

const TabSwitch = ({ tabs, activeTab, setActiveTab }: TabSwitchProps) => {
  return (
    <div className="w-full flex mb-4">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-3 w-full"
        >
          <div
            onClick={() => setActiveTab(index)} // Toggle tabs on click
            className={`text-[10px] sm:text-sm text-nowrap font-semibold cursor-pointer ${
              index == activeTab ? "text-primary" : "text-shadeGray"
            }`}
          >
            {tab}
          </div>
          <div
            className={`border-t-[4px] w-full ${
              index == activeTab ? "border-primary" : "border-[#C6C7CA]"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default TabSwitch;
