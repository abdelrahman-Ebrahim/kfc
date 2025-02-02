import React from "react";
import { Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import clsx from "clsx"; // Utility for conditional class merging

interface SubmitButtonProps {
  disabled?: boolean;
  onClick?: (e?: React.FormEvent) => void; // Updated to accept optional event argument
  buttonText: string;
  classContainer?: string;
  rightIcon?: string;
  fullWidth?: boolean;
  loading?: boolean; // New prop for loading state
  type?: "submit" | "button";
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  onClick,
  buttonText,
  classContainer,
  rightIcon,
  fullWidth = true, // default to true for full-width
  loading = false, // default loading state to false
  type,
}) => (
  <Button
    className={clsx("bg-primary", classContainer)} // Merge the default and provided classes
    variant="contained"
    fullWidth
    type={type}
    disabled={disabled || loading} // Disable button if loading
    onClick={onClick}
    sx={{
      paddingInline: { xs: "10px", md: "40px" },
      textWrap: "nowrap",
      paddingBlock: "26px",
      borderRadius: "100px",
      fontSize: { xs: "0.7rem", sm: "1.125rem" },
      fontWeight: { xs: "bold", sm: "medium" },
      height: "48px",
      mt: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      width: fullWidth ? "100%" : "fit-content", // conditional width based on fullWidth prop
    }}
  >
    {loading ? (
      <CircularProgress size={24} color="inherit" /> // Show spinner when loading
    ) : (
      rightIcon && <Image src={rightIcon} alt="icon" width={24} height={24} />
    )}
    {buttonText}
  </Button>
);

export default SubmitButton;
