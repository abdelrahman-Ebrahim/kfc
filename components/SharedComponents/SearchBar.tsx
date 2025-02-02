import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="ابحث عن .."
      fullWidth
      inputProps={{
        style: {
          textAlign: "right",
          fontSize: "1rem",
          direction: "rtl",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#434549" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          borderRadius: "4px",
          border: "1px solid #70737A",
          paddingRight: "8px",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        ".MuiInputBase-input::placeholder": {
          color: "#000000",
        },
        ".MuiOutlinedInput-input": {
          paddingTop: "10px",
          paddingBottom: "10px",
        },
      }}
    />
  );
};

export default SearchBar;
