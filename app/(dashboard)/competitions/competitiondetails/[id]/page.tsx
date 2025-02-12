"use client";
import CompetitionDetailsCardContent, { CompetitionDetails } from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsCardContent";
import CompetitionDetailsHeader from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsHeader";
import CompetitionDetailsPrizesTable from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsPrizesTable";
import CompetitionDetailsWithdrawalTable from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsWithdrawalTable";
import DetailsFileUploader from "@/components/dashboard/competitions/competitionDetails/DetailsFileUploader";
import DetailsPaymentInfo from "@/components/dashboard/competitions/competitionDetails/DetailsPaymentInfo";
import DetailsTermsAndConditions from "@/components/dashboard/competitions/competitionDetails/DetailsTermsAndConditions";
import ParticipationWay from "@/components/dashboard/competitions/competitionDetails/ParticipationWay";
import TabSwitch from "@/components/SharedComponents/TabSwitch";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const CompetitionDetailsPage = () => {
  // Get the competition ID from the URL parameters
  const { id } = useParams();

  // State to store competition details, loading status, and errors
  const [competitionDetails, setCompetitionDetails] = useState<CompetitionDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get the user session for authentication
  const { data: session, status } = useSession();

  // State for tab management
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["الجوائز ", "السحوبات", " طريقة المشاركة", " الشروط والاحكام "];

  // Mock data for prizes and withdrawals (fallback to empty arrays if no data is available)
  const mockPrizes = competitionDetails?.prizes || [];
  const mockWithdrawals = (competitionDetails as any)?.withdrawals || [];

  // State for file uploader and payment button visibility
  const [showFileUploader, setShowFileUploader] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const handlePaymentClick = () => {
    setShowFileUploader(true);
    setShowButton(false);
  };

  // State to toggle "more details" section
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleMoreDetails = () => setShowMoreDetails((prev) => !prev);

  // Fetch competition details when the component mounts or when the session changes
  useEffect(() => {
    const fetchCompetitionDetails = async () => {
      // Check if the user is authenticated
      if (!session?.accessToken) {
        setError("You must be logged in to view competition details.");
        setLoading(false);
        return;
      }

      try {
        // Fetch competition details from the API
        const response = await axios.post(
          "https://mohasel.net/api/Client/Competitions/GetCompetition",
          { id: Number(id) },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        setCompetitionDetails(response.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch competition details");
      } finally {
        setLoading(false);
      }
    };

    // Fetch details only if the user is authenticated and the ID is available
    if (id && status === "authenticated" && session?.accessToken) {
      fetchCompetitionDetails();
    }
  }, [id, session?.accessToken, status]);

  // Display loading state while fetching data
  if (loading) return <div>Loading...</div>;

  // Display error message if there's an error
  if (error) return <div>Error: {error}</div>;

  // Display a message if no competition details are found
  if (!competitionDetails) return <div>No competition details found.</div>;

  return (
    <div className="w-full h-full pb-20">
      {/* Competition header */}
      <CompetitionDetailsHeader />

      {/* Main content section */}
      <div className="mt-8 flex flex-col xl:flex-row gap-6">
        {/* Right section: Competition details card and tabs */}
        <div className="flex flex-col gap-4">
          {/* Top card with competition image and details */}
          <div className="flex gap-6 p-6 bg-white border border-[#C6C7CA] rounded-lg shadow-card-shadow">
            {/* Image section */}
            <div className="flex justify-center items-center w-[184px] h-[168px] rounded-[10px] border-[2px] border-[#C6C7CA]">
              <Image
                src={"/dashboard/competitions/placeholderImg.svg"}
                alt="placeholder"
                width={74}
                height={68}
              />
            </div>

            {/* Competition details content */}
            <CompetitionDetailsCardContent
              details={competitionDetails}
              showMoreDetails={showMoreDetails}
              toggleMoreDetails={toggleMoreDetails}
            />
          </div>

          {/* Tab switcher */}
          <div>
            <TabSwitch
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {/* Conditionally render content based on the active tab */}
          {activeTab === 0 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <CompetitionDetailsPrizesTable prizes={mockPrizes} />
            </div>
          )}
          {activeTab === 1 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <CompetitionDetailsWithdrawalTable withdrawals={mockWithdrawals} />
            </div>
          )}
          {activeTab === 2 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <ParticipationWay />
            </div>
          )}
          {activeTab === 3 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <DetailsTermsAndConditions />
            </div>
          )}
        </div>

        {/* Left section: Payment info and file uploader */}
        <div className="flex flex-col gap-8">
          <DetailsPaymentInfo
            showButton={showButton}
            handlePaymentClick={handlePaymentClick}
          />
          {showFileUploader && <DetailsFileUploader />}
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetailsPage;