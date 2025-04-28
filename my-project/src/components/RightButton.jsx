import React from "react";
import { Link } from "react-router-dom";

const RightButton = ({ to, children, onMouseEnter, onMouseLeave, className = "" }) => (
  <Link
    to={to}
    className={`relative flex items-center justify-center ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="text-[14px] pr-4">{children}</span>
    <button className="w-[40px] h-[40px] z-10 relative">
      <img src="assets/skinstric-button-right.png" alt="Right button" />
    </button>
  </Link>
);

export default RightButton;
