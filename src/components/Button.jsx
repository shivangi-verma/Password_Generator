import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const buttonStyles = cva(
  "inline-flex items-center justify-center transition-all duration-200",
  {
    variants: {
      variant: {
        copyBtn:
          "flex items-center gap-2 font-[Work_Sans] text-sm font-semibold h-10 px-6 py-6 rounded-full cursor-pointer text-[#393C43] bg-gray-100",
        copyBtnActive:
          "flex items-center gap-2 font-[Work_Sans] text-sm font-semibold h-10 px-6 py-6 rounded-full cursor-pointer text-white bg-[#34C759] shadow-[0_0_0_4px_rgba(52,199,89,0.25)]",
      },
    },
    defaultVariants: {
      variant: "copyBtn",
    },
  }
);

const Button = ({ children, variant, className, disabled, ...props }) => {
  return (
    <motion.button
      className={cn(buttonStyles({ variant }), className)}
      //   whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.94 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
