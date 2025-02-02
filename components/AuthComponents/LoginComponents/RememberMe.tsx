import React from "react";
import { Checkbox, Typography } from "@mui/material";
import Link from "next/link";

const RememberMe: React.FC = () => (
  <div className="mt-2 flex justify-between items-center text-sm">
    <div className="flex items-center">
      <Checkbox />
      <Typography variant="body2" component="p" className="text-shadeGray">
        تذكر لمدة 30 يوما
      </Typography>
    </div>
    <Link href="/forgotpassword" className="text-primary">
      نسيت كلمة السر
    </Link>
  </div>
);

export default RememberMe;
