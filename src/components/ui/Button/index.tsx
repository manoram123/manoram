import { VARIANTS } from "@/common/constants";
import { VariantTypes } from "@/types/variants";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "dark" | "light" | "danger" | "default" | "link";
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`rounded-md flex items-center justify-center transition-colors ${className} ${
        VARIANTS[variant as keyof typeof VARIANTS]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
