import React, { ForwardedRef } from "react";
import { TextField, InputAdornment, MenuItem, Select, FormControl } from "@mui/material";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryCode: string;
  onCountryCodeChange: (value: string) => void;
  errorMessage?: string;
}

const PhoneInput = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      countryCode,
      onCountryCodeChange,
      errorMessage,
    }: PhoneInputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    return (
      <TextField
        inputRef={ref} // Forwards ref to the actual input field
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        required
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        InputLabelProps={{
          sx: {
            "& .MuiInputLabel-asterisk": {
              color: "red",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* Use Select component for country code dropdown */}
              <FormControl sx={{ minWidth: "60px" }}>
                <Select
                  value={countryCode}
                  onChange={(e) => onCountryCodeChange(e.target.value)}
                  disableUnderline
                  variant="standard"
                  sx={{
                    paddingLeft: "4px",
                    textAlign: "center",
                    color: "#3454B4",
                    "& .MuiSelect-icon": {
                      color: "#3454B4",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none", // To remove border around the Select
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        direction: "rtl", // RTL alignment
                      },
                    },
                  }}
                >
                  <MenuItem value="+966">966+</MenuItem>
                  <MenuItem value="+91">91+</MenuItem>
                  <MenuItem value="+20">20+</MenuItem>
                </Select>
              </FormControl>
            </InputAdornment>
          ),
          sx: {
            "& input": {
              textAlign: "left", // Adjust text align in the main input box
            },
          },
        }}
        sx={{
          "& label": {
            left: "unset",
            right: "1.75rem",
            transformOrigin: "right",
          },
          "& legend": {
            textAlign: "right", // Ensure label position is aligned in RTL
          },
        }}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput"; // Set the display name for debugging purposes

export default PhoneInput;
