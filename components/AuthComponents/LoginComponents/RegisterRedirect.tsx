import React from "react";
import Link from "next/link";

const RegisterRedirect: React.FC = () => (
  <div className="mt-8 flex justify-center items-center text-sm">
    <p>
      ليس لديك حساب؟{" "}
      <Link href="/register" className="text-primary">
        تسجيل حساب جديد
      </Link>
    </p>
  </div>
);

export default RegisterRedirect;
