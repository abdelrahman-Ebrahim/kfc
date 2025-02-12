import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface SubmitButtonProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
  classContainer?: string;
  rightIcon?: string;
  fullWidth?: boolean;
  loading?: boolean;
  type?: "submit" | "button";
  // البروبس للتعديل على الاستايل
  bgColor?: string;      // لون الخلفية
  padding?: string;      // البادينج الداخلي (مثلاً "26px 10px")
  fontSize?: string | number; // حجم الخط (مثلاً "1.125rem")
  width?: string;        // العرض (مثلاً "100%" أو "200px")
  height?: string;       // الارتفاع (مثلاً "48px")
  marginTop?: string;    // مسافة من فوق (مثلاً "1.5rem")
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  onClick,
  buttonText,
  classContainer,
  rightIcon,
  fullWidth = false, // الافتراضي بقى إن الزر مش هيبقى full width
  loading = false,
  type = "button",
  bgColor,
  padding,
  fontSize,
  width,
  height,
  marginTop,
}) => {
  // القيم الافتراضية للمقاسات
  const defaultBgColor = bgColor || "#3b82f6"; // blue-500
  const defaultPadding = padding || "26px 10px";
  const defaultFontSize = fontSize || "1.125rem";
  const defaultHeight = height || "48px";
  const defaultMarginTop = marginTop || "1.5rem";
  // لو fullWidth true يبقى العرض 100%، ولو false يبقى العرض هو القيمة اللي بتمرر أو "auto" عشان يفي الكلام اللي جواه
  const defaultWidth = fullWidth ? "100%" : (width || "auto");

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={clsx(
        "rounded-full flex items-center justify-center gap-2 text-white transition-colors duration-300",
        disabled || loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90",
        classContainer
      )}
      style={{
        backgroundColor: defaultBgColor,
        padding: defaultPadding,
        fontSize: defaultFontSize,
        height: defaultHeight,
        marginTop: defaultMarginTop,
        width: defaultWidth,
      }}
    >
      {loading ? (
        // Spinner معمول بـ Tailwind
        <div className="w-6 h-6 border-2 border-t-transparent border-white  rounded-full animate-spin"></div>
      ) : (
        rightIcon && <Image src={rightIcon} alt="icon" width={22} height={22} />
      )}
      {buttonText}
    </button>
  );
};

export default SubmitButton;
