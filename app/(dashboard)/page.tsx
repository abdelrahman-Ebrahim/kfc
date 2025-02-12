"use client";
import Dashboard from "@/components/dashboard/Home/Dashboard";
import PageHeader from "@/components/SharedComponents/PageHeader";

import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full pb-20">
    {/* Page Header */}
    <PageHeader
    mainTitle="الرئيسية"
  />
  <Dashboard/>
  </div>
  );
};

export default HomePage;
