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
  const VARIANTS: VariantTypes = {
    dark: "text-white bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-800",
    light:
      "text-neutral-800 dark:text-neutral-300 hover:bg-gray-100 active:bg-neutral-200 dark:hover:bg-neutral-800",
    danger: "text-white bg-red-500 hover:bg-red-400 active:bg-red-500",
    default: "text-blue-500 hover:text-blue-400",
    link: "text-blue-500 bg-white hover:opacity-80 active:opacity-100",
  };
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
