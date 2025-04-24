import React from "react";
import { Link } from "react-router-dom";

const RightButton = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`relative flex items-center justify-center ${className}`}
  >
    <button className="w-[30px] h-[30px] z-10 relative">
      <img src="assets/skinstric-button-right.png" alt="Right button" />
    </button>
    <span className="text-[10px] pl-2">{children}</span>
  </Link>
);

export default RightButton;
