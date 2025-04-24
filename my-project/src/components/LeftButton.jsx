import React from "react";
import { Link } from "react-router-dom";

const LeftButton = ({ to, children, onMouseEnter, onMouseLeave, className = "" }) => (
  <Link
    to={to}
    className={`relative flex items-center justify-center ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button className="w-[30px] h-[30px] z-10 relative">
      <img src="assets/skinstric-button-left.png" alt="Left button" />
    </button>
    <span className="text-[10px] pl-2">{children}</span>
  </Link>
);

export default LeftButton;
