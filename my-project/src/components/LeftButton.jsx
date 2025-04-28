import React from "react";
import { Link } from "react-router-dom";

const LeftButton = ({ to, children, onMouseEnter, onMouseLeave, className = "" }) => (
  <Link
    to={to}
    className={`relative flex items-center justify-center ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button className="w-[40px] h-[40px] z-10 relative">
      <img src="assets/skinstric-button-left.png" alt="Left button" />
    </button>
    <span className="text-[14px] pl-4">{children}</span>
  </Link>
);

export default LeftButton;
