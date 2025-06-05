import React from "react";
import { Link } from "react-router-dom";

const LeftButton = ({
  to,
  children,
  onMouseEnter,
  onMouseLeave,
  className = "",
  disabled = false,
}) => {
  return (
    <Link
      to={disabled ? "#" : to} // Prevent navigation if disabled
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative flex items-center justify-center ${disabled ? "cursor-not-allowed pointer-events-none opacity-50" : ""} ${className}`}
    >
      <div className="w-[40px] h-[40px] z-10 relative">
        <img
          src="assets/skinstric-button-left.png"
          alt="Left button"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-[14px] pl-4">{children}</span>
    </Link>
  );
};

export default LeftButton;