import React from "react";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "w-[130px] h-[45px] py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const variationClasses = {
  primary: "bg-primary ",
  secondary: "bg-secondary ",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const Button = ({
  type = "button",
  size = "medium",
  variation = "primary",
  className = "",
  children = "Button",
  ...props
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;
  const variationClass =
    variationClasses[variation] || variationClasses.primary;

  return (
    <button
      type={type}
      className={`${sizeClass} ${variationClass} rounded-full transition-colors cursor-pointer duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
