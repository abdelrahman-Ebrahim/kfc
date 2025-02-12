"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import CompetitionCard from "@/components/dashboard/competitions/CompetitionCard";
import CompetitionsHeader from "@/components/dashboard/competitions/CompetitionsHeader";
import NoCompetitions from "@/components/dashboard/competitions/NoCompetitions";
import TabsAndFilter from "@/components/dashboard/competitions/TabsAndFilter";
import LoadingSpinner from "@/components/SharedComponents/LoadingSpinner";
import CompetitionPrompt from "@/components/dashboard/competitions/CompetitionPrompt";
import { useRouter } from "next/navigation";


type Competition = {
  id: number;
  name: string;
  cityId: number;
  logoId: number;
  fromDate: string;
  toDate: string;
  status: string;
  numberOfDays: number;
  numberOfParticipantions: number;
};
type City = {
  id: number;
  name: string;
};

const CompetitionsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cityOptions, setCityOptions] = useState<City[]>([]);
  const [logoUrls, setLogoUrls] = useState<Record<number, string>>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const { data: session, status } = useSession();

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };
  const onCompetitionCardClick = (competition: Competition) => {
    if (competition.status === "Active") {
      router.push(`/competitions/competitiondetails/${competition.id}`);
    } else {
      openModal();
    }
  };
  
  // Fetch competitions
  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        if (status === "loading") return;

        if (!session?.accessToken) {
          throw new Error("User is not authenticated");
        }

        const response = await axios.post(
          "https://mohasel.net/api/Client/Competitions/GetAllCompetitions",
          {
            pageIndex: 0,
            pageSize: 10,
            orderBy: "fromDate",
            isOrderByASC: true,
            search: {
              name: "",
              status:
                activeTab === "active"
                  ? "Active"
                  : activeTab === "draft"
                  ? "Draft"
                  : "Expired",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        setCompetitions(response.data.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch competitions");
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, [activeTab, session, status]);

  // Fetch cities
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://mohasel.net/api/Client/Lookups/GetAllCities"
        );
        setCityOptions(response.data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    fetchCities();
  }, []);

  // Fetch logo by ID
  const fetchLogoUrl = async (logoId: number) => {
    if (logoUrls[logoId]) return;

    try {
      const response = await axios.get(
        `https://mohasel.net/api/Client/Files/DownloadFile/${logoId}`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      );

      const imageUrl = URL.createObjectURL(response.data);
      setLogoUrls((prev) => ({ ...prev, [logoId]: imageUrl }));
    } catch (error) {
      console.error(`Failed to fetch logo with ID ${logoId}:`, error);
    }
  };

  // Map cityId to city name
  const getCityNameById = (cityId: number) => {
    const city = cityOptions.find((city) => city.id === cityId);
    return city ? city.name : "Unknown City";
  };

  // وظيفة فتح الموديل
  const openModal = () => {
    setIsModalOpen(true);
  };
  // وظيفة غلق الموديل
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Continue and perform action when clicking on continue
  const handleContinue = () => {
    console.log("استكمال إنشاء المسابقة");
  };

  if (status === "loading" || loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-full pb-20">
      <CompetitionsHeader />
      <TabsAndFilter activeTab={activeTab} switchTab={switchTab} />
      <div className="mt-10 w-full h-full">
        {competitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((competition) => {
  if (competition.logoId) {
    fetchLogoUrl(competition.logoId);
  }
  return (
    <CompetitionCard
      key={competition.id}
      id={competition.id.toString()}
      status={competition.status}
      statusColor={
        competition.status === "Active"
          ? "bg-[#D6F5D6]"
          : competition.status === "Draft"
          ? "bg-[#E3E3E4]"
          : "bg-[#FFE8D9]"
      }
      title={competition.name}
      location={`فرع ${getCityNameById(competition.cityId)}`}
      competitors={competition.numberOfParticipantions}
      timeLeft={competition.numberOfDays}
      dateRange={`${new Date(competition.fromDate).toLocaleDateString()} - ${new Date(competition.toDate).toLocaleDateString()}`}
      imageSrc={logoUrls[competition.logoId] || null}
      onClick={() => onCompetitionCardClick(competition)}  
    />
  );
})}

          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[50%]">
            <NoCompetitions />
          </div>
        )}
      </div>
   
      {isModalOpen && (
        <CompetitionPrompt
          handleCloseModal={closeModal}
          handleContinue={handleContinue}
        />
      )}
    </div>
  );
};

export default CompetitionsPage;
