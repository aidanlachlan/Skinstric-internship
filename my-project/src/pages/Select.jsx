import React from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const navigate = useNavigate();
  const buttons = [
    { pos: "top", label: "DEMOGRAPHICS" },
    { pos: "right", label: "COSMETIC\nCONCERNS" },
    { pos: "left", label: "SKIN TYPE\n DETAILS" },
    { pos: "bottom", label: "WEATHER" },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 right-0 px-8 bg-white-custom z-10">
        <div className="flex items-center justify-between h-[48px]">
          <Header />
        </div>
        <h1 className="mt-8 mb-4 font-bold font-roobert">A.I. ANALYSIS</h1>
        <p className="font-roobert">
          A.I. HAS ESTIMATED THE FOLLOWING. <br />
          FIX ESTIMATED INFORMATION IF NEEDED
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        {/* Group wraps both buttons and diamonds */}
        <div className="relative w-[400px] h-[400px] rotate-45 group">
          {/* Dotted Diamonds */}
          <div className="pointer-events-none">
            <div className="absolute w-[600px] h-[600px] border border-dotted border-[2px] border-[#E5E7EB] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[0ms]" />
            <div className="absolute w-[550px] h-[550px] border border-dotted border-[2px] border-[#D1D5DB] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[100ms]" />
            <div className="absolute w-[500px] h-[500px] border border-dotted border-[2px] border-[#A0A4AB] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[200ms]" />
          </div>

          {/* Buttons — the only elements that accept pointer events */}
          {buttons.map(({ pos, label }, i) => (
            <button
              key={i}
              onClick={() => {
                if (label === "DEMOGRAPHICS") navigate("/demographics");
              }}
              className={`diamond-button absolute w-[200px] h-[200px] bg-gray-100 border border-white border-4 transform hover:bg-gray-300 transition-all
      ${pos === "top" ? "-top-[2px] -left-[2px]" : ""}
      ${pos === "right" ? "-top-[2px] right-[2px]" : ""}
      ${pos === "left" ? "bottom-[2px] -left-[2px]" : ""}
      ${pos === "bottom" ? "bottom-[2px] right-[2px]" : ""}
    `}
            >
              <span className="block transform -rotate-45 font-roobert font-bold whitespace-pre-line">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute left-8 bottom-8">
        <LeftButton
          to="/analysis"
          className="hover:scale-105 transition-transform"
        >
          BACK
        </LeftButton>
      </div>
      <div className="absolute right-8 bottom-8">
        <RightButton
          to="/demographics"
          className="hover:scale-105 transition-transform"
        >
          GET SUMMARY
        </RightButton>
      </div>
    </>
  );
};

export default Select;
