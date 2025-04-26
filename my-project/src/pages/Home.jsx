import React, { useState } from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import "../animations.css";

export default function Home() {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const getTranslateX = () => {
    if (isRightHovered) {
      return "-32vw"; // Adjust this value as needed
    } else if (isLeftHovered) {
      return "30vw"; // Adjust this value as needed
    } else {
      return "0vw";
    }
  };

  const getInnerSpanTranslateX = () => {
    if (isRightHovered) {
      return "-6vw"; // Adjust this value for the inner span
    } else if (isLeftHovered) {
      return "6vw"; // Adjust this value for the inner span
    } else {
      return "0vw";
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
      <div className="flex items-center justify-between bg-white-custom h-[48px] px-8">
        <Header />
        <button className="bg-black text-white font-roobert px-4 py-2 text-[10px] leading-4 uppercase font-semibold tracking-tight">
          ENTER CODE
        </button>
      </div>
      <main className="flex-1 flex items-center justify-between px-8 relative overflow-hidden">
        {/* Left Button + Border (fades when RIGHT is hovered) */}
        <div
          className={`relative flex items-center justify-center transition-opacity duration-500 ${
            isRightHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`absolute w-[500px] h-[500px] border border-dotted border-[#A0A4AB] rotate-45 -left-[400px] transition-opacity duration-500 ${
              isRightHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <LeftButton
            to="/"
            className="hover:scale-105 transition-transform"
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
          >
            DISCOVER A.I.
          </LeftButton>
        </div>

        {/* Center Text (slides left/right) */}
        <div
          className={`relative z-10 text-center transition-transform duration-700 ease-in-out`}
          style={{ transform: `translateX(${getTranslateX()})` }}
        >
          <h1 className="font-[Roobert TRIAL] font-light text-[100px] text-center leading-[100px] tracking-[-0.07em] px-8">
            <span style={{ transform: `translateX(${getTranslateX()})` }}>
              Sophisticated
            </span>
            <br />
            <span
              className={`block transition-transform duration-700 ease-in-out px-8`}
              style={{ transform: `translateX(${getInnerSpanTranslateX()})` }}
            >
              skincare
            </span>
          </h1>
        </div>

        {/* Right Button + Border (fades when LEFT is hovered) */}
        <div
          className={`relative flex items-center justify-center transition-opacity duration-500 ${
            isLeftHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className={`absolute w-[500px] h-[500px] border border-dotted border-[#A0A4AB] rotate-45 -right-[400px] transition-opacity duration-500 ${
              isLeftHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <RightButton
            to="/testing"
            className="hover:scale-105 transition-transform"
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
          >
            TAKE TEST
          </RightButton>
        </div>
      </main>

      <footer className="pb-8">
        <div className="px-8 w-[316px] h-[72px] text-left">
          <p className="font-[Roobert TRIAL] font-normal text-[14px] leading-[24px] tracking-[0] uppercase">
            Skinstric developed an A.I. that creates a highly-personalised
            routine tailored to what your skin needs.
          </p>
        </div>
      </footer>
    </div>
  );
}
