import { FC } from "react";

// Main eksab logo icon component
const EksabLogo: FC = () => (
  <div className="bg-miniGrid size-12 rounded-xl shadow-icon-shadow">  {/* Outer container with background, size, and shadow */}
    <div className="size-12 border-[0.3px] border-borderColor rounded-xl flex justify-center items-center mb-3 shadow-icon-shadow relative"> 
      {/* Inner container with border, flex for centering, shadow, and positioning */}
      <div className="size-6 rounded-full bg-violet-gradient shadow-icon-shadow" />  {/* Circular violet gradient element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl bg-blurColor backdrop-blur-[7.5px] shadow-icon-shadow" />  
      {/* Half-circle at the bottom with background blur and shadow */}
    </div>
  </div>
);

export default EksabLogo;
