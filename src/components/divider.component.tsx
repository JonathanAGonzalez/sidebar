import { dividerClasses } from "@constants/divider.constants";

interface DividerProps {
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Divider = ({
  variant = "horizontal",
  size = "md",
  className = "",
}: DividerProps) => {
  const baseClass = dividerClasses.base;
  const variantClass = dividerClasses[variant];
  const sizeClass = dividerClasses[size];

  return (
    <div
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
};
