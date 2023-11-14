import { VariantTypes } from "@/types/variants";

export const VARIANTS: VariantTypes = {
  dark: "text-white bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-800",
  light: "text-neutral-800 hover:bg-gray-100 active:bg-neutral-200",
  danger: "text-white bg-red-500 hover:bg-red-400 active:bg-red-500",
  default: "text-blue-500 hover:text-blue-400",
  link: "text-blue-500 bg-white hover:opacity-80 active:opacity-100",
};
