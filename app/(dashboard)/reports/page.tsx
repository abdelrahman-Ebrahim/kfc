'use client'
import React, { useState } from "react";
import CompetitionReportform from "@/components/dashboard/Reports/CompetitionReportform";
import ParticipantReportsForm from "@/components/dashboard/Reports/ParticipantReportsForm";
import ReportsHeader from "@/components/dashboard/Reports/ReportsHeader";
import ReportsTabs from "@/components/dashboard/Reports/ReportsTabs";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("active");

  return (
    <div className="w-full h-full pb-20">
      {/* Page Header */}
      <ReportsHeader />

      <ReportsTabs activeTab={activeTab} switchTab={setActiveTab} />

      {activeTab === "active" && <CompetitionReportform />}
      {activeTab === "draft" && <ParticipantReportsForm />}
    </div>
  );
};

export default ReportsPage;


