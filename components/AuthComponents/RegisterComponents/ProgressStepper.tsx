import Image from "next/image";
import React from "react";

interface ProgressStepperProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isFirstSectionCompleted: boolean; // To track the completion of the first section
}

const ProgressStepper = ({
  currentStep,
  setCurrentStep,
  isFirstSectionCompleted, // Receiving completion state from parent
}: ProgressStepperProps) => {
  return (
    <div className="flex justify-between items-center mt-8 w-[70%] relative">
      {/* Line connecting the steps */}
      <div className="absolute top-[10px] left-[15%] w-[60%] sm:w-[65%] rounded-sm h-0.5 bg-[#C6C7CA] overflow-hidden">
        {/* Progress bar */}
        <div
          className={`h-0.5 bg-primary transition-all duration-300`}
          style={{ width: currentStep === 1 ? "0%" : "100%" }}
        />
      </div>

      {[1, 2].map((step) => (
        <div
          key={step}
          className="flex flex-col items-center gap-2 cursor-pointer relative z-10"
          onClick={() => {
            if (step === 2 && !isFirstSectionCompleted) {
              return; // Prevent going to step 2 until step 1 is complete
            }
            setCurrentStep(step);
          }} // Add click to change the active step
        >
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border ${
              step === currentStep
                ? "bg-primary text-white ring-2 ring-[#9E77ED] ring-offset-2" // Active step with a custom focus ring color
                : step < currentStep
                ? "bg-primary text-white" // Completed step stays primary color
                : "bg-white border-gray-300 text-gray-500" // Inactive step with gray dot
            }`}
          >
            {step < currentStep ? (
              <Image
                src={"/auth/Tick.svg"}
                alt="tick"
                width={12}
                height={12}
                style={{ width: "auto", height: "auto" }}
              />
            ) : (
              <div
                className={`w-2 h-2 rounded-full ${
                  step === currentStep ? "bg-white" : "bg-gray-300"
                }`}
              />
            )}
          </div>
          {/* Text under each step */}
          <span className="text-sm font-medium text-center">
            {step === 1 ? "المعلومات الشخصية" : "بيانات الشركة"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressStepper;
