import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full transition-colors cursor-pointer shadow-black/20",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        ghost: "bg-transparent hover:bg-gray-100",

        darkToggle:
          "absolute right-10 bottom-6 bg-gray-600 p-4 hover:bg-gray-700",
        lightToggle:
          "absolute right-10 bottom-6 border border-amber-500 bg-[#F9731615] p-4 hover:bg-[#F9731630]",
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}) {
  let icon = null;

  // insert icons automatically based on the variant
  if (variant === "darkToggle") {
    icon = <MoonIcon size={28} color="#ffffff" weight="duotone" />;
  }

  if (variant === "lightToggle") {
    icon = <SunIcon size={28} color="#f97316" weight="duotone" />;
  }

  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    >
      {icon || children}
    </button>
  );
}
