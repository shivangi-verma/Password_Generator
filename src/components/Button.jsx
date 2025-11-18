import React from "react";

function Button({ variant = "primary", children }) {
  const baseClasses =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 font-[Work_Sans] text-sm font-semibold bg-gray-100 h-10 px-6 py-6 rounded-full cursor-pointer ";
  let variantClasses = "";

  if (variant === "isNotActive") {
    variantClasses = "bg-blue-500 hover:bg-blue-700 text-white";
  } else if (variant === "isActive") {
    variantClasses = "bg-gray-200 hover:bg-gray-300 text-gray-800";
  }
  return (
    <>
      <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
    </>
  );
}

export default Button;
