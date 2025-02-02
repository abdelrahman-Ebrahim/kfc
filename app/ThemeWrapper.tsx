"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles"; // Importing the ThemeProvider and createTheme for theme customization
import CssBaseline from "@mui/material/CssBaseline"; // CssBaseline normalizes CSS styles globally

// Creating a custom theme
const theme = createTheme({
  // Customizing the color palette
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#dc004e",
    },
  },
  // Setting custom typography
  typography: {
    fontFamily: `"NotoSans", sans-serif`, // Changing the default font to NotoSans
  },
});

// Wrapper component for applying the theme globally
export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    // ThemeProvider makes the theme available throughout the application
    <ThemeProvider theme={theme}>
      {/* CssBaseline component applies global styles to reset CSS */}
      <CssBaseline />
      {/* Rendering children components inside the theme wrapper */}
      {children}
    </ThemeProvider>
  );
}
