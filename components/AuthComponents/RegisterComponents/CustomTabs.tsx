"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

interface CustomTabsProps {
  onTabChange: (tabIndex: number) => void;
}

export default function CustomTabs({ onTabChange }: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState(0); // Manage the active tab state

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    onTabChange(newValue); // Notify the parent component when the tab changes
  };

  return (
    <div className="flex justify-center items-center w-full bg-white mt-8">
      <Tabs
        value={activeTab}
        onChange={handleChange}
        textColor="primary"
        variant="fullWidth" // Make tabs stretch to full width
        TabIndicatorProps={{
          style: {
            backgroundColor: "#3454B4", // Customize the underline color
            height: 2, // Adjust the underline height
          },
        }}
        sx={{
          width: "100%",
          "& .MuiTab-root": {
            fontSize: "16px",
            fontWeight: "500",
            color: "#434549", // Inactive color
          },
          "& .Mui-selected": {
            color: "#3454B4", // Active color
          },
        }}
      >
        <Tab label="شركة" />
        <Tab label="وكالة" />
      </Tabs>
    </div>
  );
}
