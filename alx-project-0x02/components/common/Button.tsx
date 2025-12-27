import { type ButtonProps } from "@/interfaces";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

const Button: React.FC<
  ButtonProps & { children: ReactNode; className?: string }
> = ({ size = "medium", shape = "rounded-md", children, className, onClick }) => {
  const cName = cn(
    "bg-gray-100",
    {
      "px-2 py-1": size === "small",
      "px-6 py-3": size === "medium",
      "px-8 py-4": size === "large",
    },
    {
      "rounded-full": shape === "rounded-full",
      "rounded-md": shape === "rounded-md",
      "rounded-sm": shape === "rounded-sm",
    },
    className
  );
  return (
    <button onClick={onClick} className={cName}>
      {children}
    </button>
  );
};

export default Button;
