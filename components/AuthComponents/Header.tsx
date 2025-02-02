import React from "react";
import { Typography } from "@mui/material";

// Define the type for the component's props
interface HeaderProps {
  title: string;  // Title of the header
  subtitle?: string;  // Subtitle of the header
}

// Functional component that displays a header with title and subtitle
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <div className="flex flex-col justify-center items-center gap-3">
    {/* Title with specific styling */}
    <Typography
      variant="h4"
      component="h1"
      align="center"
      className="text-shadeBlack text-2xl md:text-[32px]"
      fontWeight={700}
    >
      {title} {/* Display the title */}
    </Typography>

    {/* Subtitle with specific styling */}
    <Typography
      variant="body1"
      component="p"
      align="center"
      className="text-shadeGray font-normal"
    >
      {subtitle} {/* Display the subtitle */}
    </Typography>
  </div>
);

export default Header;
