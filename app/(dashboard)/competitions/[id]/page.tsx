"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import NewCompetitionHeader from "@/components/dashboard/competitions/newCompetition/NewCompetitionHeader";
import NewCompetitionMainInfo from "@/components/dashboard/competitions/newCompetition/NewCompetitionMainInfo";
import NewCompetitionOpportunities from "@/components/dashboard/competitions/newCompetition/NewCompetitionOpportunities";
import NewCompetitionPeriod from "@/components/dashboard/competitions/newCompetition/NewCompetitionPeriod";
import NewCompetitionProgress from "@/components/dashboard/competitions/newCompetition/NewCompetitionProgress";
import NewCompetitionSelectedServices from "@/components/dashboard/competitions/newCompetition/NewCompetitionSelectedServices";
import CancelButton from "@/components/SharedComponents/CancelButton";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import NewCompetitionParticipationMethods from "@/components/dashboard/competitions/newCompetition/NewCompetitionParticipationMethods";
import NewCompetitionPrizes from "@/components/dashboard/competitions/newCompetition/NewCompetitionPrizes";
import NewCompetitionWithdrawal from "@/components/dashboard/competitions/newCompetition/NewCompetitionWithdrawal";
import NewCompetitionTerms from "@/components/dashboard/competitions/newCompetition/NewCompetitionTerms";
import NewCompetitionPayment from "@/components/dashboard/competitions/newCompetition/NewCompetitionPayment";
import SuccessfulCreation from "@/components/dashboard/competitions/newCompetition/SuccessfulCreation";
import axios from "axios";
import LoadingSpinner from "@/components/SharedComponents/LoadingSpinner";
import { validCompetitionIds } from "@/utils/validCompetitionIds";

const CompetitionDetailPage = () => {
  const { id } = useParams(); // Get the competition ID from the URL
  const searchParams = useSearchParams(); // Access query parameters
  const [competitionTitle, setCompetitionTitle] = useState(
    "إنشاء مسابقة جديدة (مسابقتك الخاصة)"
  );
  const router = useRouter();

  const steps = [
    "البيانات الأساسية",
    "طريقة المشاركة",
    "جوائز المسابقة",
    "تحديد السحوبات",
    "الشروط والأحكام",
    "الدفع",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [progressVisible, setProgressVisible] = useState(true); // Manage progress visibility
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false); // Manage payment success component visibility
  const [selectedOption, setSelectedOption] = useState("platform");
  const [room, setRoom] = useState("");
  const [city, setCity] = useState("");
  const [competitionNameEn, setCompetitionNameEn] = useState("");
  const [competitionNameAr, setCompetitionNameAr] = useState("");
  const [chamberOptions, setChamberOptions] = useState<string[]>([]); // State to store chamber names
  const [cityOptions, setCityOptions] = useState<string[]>([]); // State to store city names
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({
    dataUpload: false,
    invoiceVerification: false,
    unlimitedChances: false,
  });
  const [opportunities, setOpportunities] = useState("");

  const handleCheckboxChange = (service: keyof SelectedServices) => {
    setSelectedServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const isInputDisabled = Object.values(selectedServices).some(
    (value) => value === true
  );

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleCancelClick = () => {
    router.push("/competitions");
  };

  const handlePaymentSubmit = () => {
    setProgressVisible(false); // Hide the progress steps
    setShowPaymentSuccess(true); // Show the payment success component
  };

  // Function to get all chambers names from api
  const getAllChambers = async () => {
    try {
      const response = await axios.get(
        "https://mohasel.net/api/Client/Lookups/GetAllChambers"
      );

      const chamberOptions = response.data;

      // Extract the `name` property from each object
      const chamberNames = chamberOptions.map(
        (chamber: Chamber) => chamber.name
      );
      setChamberOptions(chamberNames); // Store the names in state
    } catch (error) {
      console.log(error);
    }
  };

  // Function to get all cities names from the api
  const getAllCities = async () => {
    try {
      const response = await axios.get(
        "https://mohasel.net/api/Client/Lookups/GetAllCities"
      );
      const cityOptions = response.data;
      // Extract the 'name property from each object
      const cityNames = cityOptions.map((city: City) => city.name);
      setCityOptions(cityNames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllChambers();
  }, []);

  useEffect(() => {
    getAllCities();
  });

  useEffect(() => {
    // Retrieve the title from the query parameters
    const title = searchParams.get("title");
    if (title) {
      setCompetitionTitle(decodeURIComponent(title));
    }
  }, [searchParams]);

   // Check if the ID is valid
   useEffect(() => {
    if (!validCompetitionIds.includes(id as string)) {
      // Redirect to a not found page if ID is invalid
      router.push("/notfound");
    }
  }, [id, router]);

  // If the ID is invalid, don't render the page
  if (!validCompetitionIds.includes(id as string)) {
    return null;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="h-full w-full pb-20">
        <NewCompetitionHeader
          title={`انشاء مسابقة جديدة (${competitionTitle})`}
        />

        {progressVisible && (
          <NewCompetitionProgress steps={steps} activeStep={activeStep} />
        )}

        {!showPaymentSuccess ? (
          <>
            <form
              className={`${
                activeStep === 0 && "mt-4"
              } flex flex-col justify-center items-start gap-6`}
            >
              {activeStep === 0 && (
                <>
                  <NewCompetitionMainInfo
                    chamberOptions={chamberOptions}
                    cityOptions={cityOptions}
                    selectedOption={selectedOption}
                    room={room}
                    city={city}
                    competitionNameEn={competitionNameEn}
                    competitionNameAr={competitionNameAr}
                    onSelectedOptionChange={setSelectedOption}
                    onRoomChange={setRoom}
                    onCityChange={setCity}
                    onCompetitionNameEnChange={setCompetitionNameEn}
                    onCompetitionNameArChange={setCompetitionNameAr}
                  />
                  <NewCompetitionSelectedServices
                    selectedServices={selectedServices}
                    onCheckboxChange={handleCheckboxChange}
                  />
                  <NewCompetitionOpportunities
                    opportunities={opportunities}
                    setOpportunities={setOpportunities}
                    isInputDisabled={isInputDisabled}
                  />
                  <NewCompetitionPeriod />
                </>
              )}
            </form>
            <form
              className={`${
                activeStep == 1 && "mt-4"
              } flex flex-col justify-center items-start gap-8`}
            >
              {activeStep === 1 && (
                <>
                  <NewCompetitionParticipationMethods
                    label="خطوات او طريقة المشاركة في المسابقة (باللغة العربية)"
                    placeholder="قم بكتابة خطوات المشاركة.."
                    dir="rtl"
                  />
                  <NewCompetitionParticipationMethods
                    label="خطوات او طريقة المشاركة في المسابقة (باللغة الإنجليزية)"
                    placeholder="Write the participation steps.."
                    dir="ltr"
                  />
                </>
              )}
            </form>
            <div
              className={`${
                activeStep == 2 && "mt-4"
              } flex flex-col justify-center items-start gap-8`}
            >
              {activeStep === 2 && (
                <div className="w-full">
                  <NewCompetitionPrizes />
                </div>
              )}
            </div>
            <div
              className={`${
                activeStep == 3 && "mt-4"
              } flex flex-col justify-center items-start gap-8`}
            >
              {activeStep === 3 && (
                <div className="w-full">
                  <NewCompetitionWithdrawal />
                </div>
              )}
            </div>
            <div
              className={`${
                activeStep == 4 && "mt-4"
              } flex flex-col justify-center items-start gap-8`}
            >
              {activeStep === 4 && (
                <div className="w-full">
                  <NewCompetitionTerms />
                </div>
              )}
            </div>
            <div
              className={`${
                activeStep == 5 && "mt-4"
              } flex flex-col justify-center items-start gap-8`}
            >
              {activeStep === 5 && (
                <div className="w-full">
                  <NewCompetitionPayment />
                </div>
              )}
            </div>
            {/* Buttons Section */}
            <div className="mt-8 flex flex-col gap-6 w-full">
              <hr />
              <div className="flex justify-between gap-2 md:gap-4 items-center w-full">
                <div className="w-full">
                  {activeStep > 0 && activeStep !== 5 && (
                    <SubmitButton
                      buttonText="الخطوة السابقة"
                      onClick={handlePreviousStep}
                      fullWidth={false}
                      classContainer="bg-white text-shadeBlack border"
                    />
                  )}
                  {activeStep === 5 && (
                    <SubmitButton
                      buttonText="التعديل علي المسابقة"
                      onClick={() => {
                        setActiveStep(0);
                      }}
                      fullWidth={false}
                      classContainer="bg-white text-shadeBlack border"
                    />
                  )}
                </div>
                <div className="flex w-full items-center gap-2 md:gap-4 justify-end">
                  {activeStep !== 5 && (
                    <CancelButton
                      buttonText={activeStep === 0 ? "الغاء" : "حفظ كمسودة"}
                      onClick={
                        activeStep === 0
                          ? handleCancelClick
                          : handlePreviousStep
                      }
                      fullWidth={false}
                    />
                  )}
                  <SubmitButton
                    buttonText={
                      activeStep === steps.length - 1
                        ? "ادفع"
                        : "الخطوة التالية"
                    }
                    onClick={
                      activeStep === steps.length - 1
                        ? handlePaymentSubmit
                        : handleNextStep
                    }
                    fullWidth={false}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <SuccessfulCreation />
        )}
      </div>
    </Suspense>
  );
};

export default CompetitionDetailPage;
