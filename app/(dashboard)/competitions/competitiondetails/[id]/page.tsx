"use client";
import CompetitionDetailsCardContent from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsCardContent";
import CompetitionDetailsHeader from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsHeader";
import CompetitionDetailsPrizesTable from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsPrizesTable";
import CompetitionDetailsWithdrawalTable from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsWithdrawalTable";
import DetailsFileUploader from "@/components/dashboard/competitions/competitionDetails/DetailsFileUploader";
import DetailsPaymentInfo from "@/components/dashboard/competitions/competitionDetails/DetailsPaymentInfo";
import DetailsTermsAndConditions from "@/components/dashboard/competitions/competitionDetails/DetailsTermsAndConditions";
import ParticipationWay from "@/components/dashboard/competitions/competitionDetails/ParticipationWay";
import TabSwitch from "@/components/SharedComponents/TabSwitch";
import Image from "next/image";
import React, { useState } from "react";

const CompetitionDetailsPage = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleMoreDetails = () => setShowMoreDetails((prev) => !prev);
  const [showFileUploader, setShowFileUploader] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // This function is passed down to DetailsPaymentInfo to trigger showing the file uploader
  const handlePaymentClick = () => {
    setShowFileUploader(true);
    setShowButton(false);
  };

  const tabs = ["الجوائز", "السحوبات", "طريقة المشاركة", "الشروط و الأحكام"];
  const mockPrizes = [
    {
      prizeName: "ايفون 16",
      prizeDescription: "رام 16 قيقا, الذاكرة 256 قيقا , لون الخلفية ذهبي",
      quantity: "2",
    },
    {
      prizeName: "ايفون 16",
      prizeDescription: "رام 16 قيقا, الذاكرة 256 قيقا , لون الخلفية ذهبي",
      quantity: "2",
    },
    {
      prizeName: "ايفون 16",
      prizeDescription: "رام 16 قيقا, الذاكرة 256 قيقا , لون الخلفية ذهبي",
      quantity: "2",
    },
  ];
  const mockWithdrawals = [
    {
      date: "16/12/2024",
      name: "ايفون 16",
      quantity: "2",
    },
    {
      date: "16/12/2024",
      name: "ايفون 16",
      quantity: "2",
    },
    {
      date: "16/12/2024",
      name: "ايفون 16",
      quantity: "2",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full h-full pb-20">
      <CompetitionDetailsHeader />
      <div className="mt-8 flex flex-col xl:flex-row gap-6">
        {/* MAIN RIGHT SECTION WITH CARD AND TABS */}
        <div className="flex flex-col gap-4">
          {/* TOP CARD */}
          <div className="flex gap-6 p-6 bg-white border border-[#C6C7CA] rounded-lg shadow-card-shadow">
            {/* MAIN IMAGE SECTION */}
            <div className="flex justify-center items-center w-[184px] h-[168px] rounded-[10px] border-[2px] border-[#C6C7CA]">
              <Image
                src={"/dashboard/competitions/placeholderImg.svg"}
                alt="placeholder"
                width={74}
                height={68}
              />
            </div>
            {/* DETAILS CARD CONTENT */}
            <CompetitionDetailsCardContent
              showMoreDetails={showMoreDetails}
              toggleMoreDetails={toggleMoreDetails}
            />
          </div>
          {/* Tabs Switcher */}
          <div>
            <TabSwitch
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          {/* CONDITIONALLY RENDER COMPONENTS BASED ON ACTIVE TAB */}
          {/* Prizes Table */}
          {activeTab === 0 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <CompetitionDetailsPrizesTable prizes={mockPrizes} />
            </div>
          )}
          {/* Withdrawal Table */}
          {activeTab === 1 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <CompetitionDetailsWithdrawalTable
                withdrawals={mockWithdrawals}
              />
            </div>
          )}
          {/* Participation Way */}
          {activeTab === 2 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <ParticipationWay />
            </div>
          )}
          {/* Terms & Conditions */}
          {activeTab === 3 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <DetailsTermsAndConditions />
            </div>
          )}
        </div>
        {/* LEFT SECTION WITH BILL AND FILE UPLOADER */}
        <div className="flex flex-col gap-8">
          {/* Payment Bill */}
          <DetailsPaymentInfo
            showButton={showButton}
            handlePaymentClick={handlePaymentClick}
          />
          {/* File Uploader Section */}
          {showFileUploader && <DetailsFileUploader />}
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetailsPage;
