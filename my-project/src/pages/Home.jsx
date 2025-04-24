import React, { useState } from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";
import RightButton from "../components/RightButton";
import "../animations.css";

export default function Home() {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-between px-8 relative">
        {/* Left Button + Border (fades when RIGHT is hovered) */}
        <div className={`relative flex items-center justify-center transition-opacity duration-500 ${isRightHovered ? "opacity-0" : "opacity-100"}`}>
          <div className={`absolute w-[300px] h-[300px] border border-dotted border-[#A0A4AB] rotate-45 -left-[230px] transition-opacity duration-500 ${isRightHovered ? "opacity-0" : "opacity-100"}`} />
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
          className={`relative z-10 text-center transition-all duration-700 ease-in-out transform ${
            isRightHovered
              ? "-translate-x-40" // Slide left on right hover
              : isLeftHovered
              ? "translate-x-40"  // Slide right on left hover
              : "translate-x-0"
          }`}
        >
          <h1 className="font-[Roobert TRIAL] font-light text-[64px] leading-[60px] tracking-[-0.07em]">
            Sophisticated
            <br />
            skincare
          </h1>
        </div>

        {/* Right Button + Border (fades when LEFT is hovered) */}
        <div className={`relative flex items-center justify-center transition-opacity duration-500 ${isLeftHovered ? "opacity-0" : "opacity-100"}`}>
          <div className={`absolute w-[300px] h-[300px] border border-dotted border-[#A0A4AB] rotate-45 -right-[230px] transition-opacity duration-500 ${isLeftHovered ? "opacity-0" : "opacity-100"}`} />
          <RightButton
            to="/"
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
          <p className="font-[Roobert TRIAL] font-normal text-[10px] leading-[24px] tracking-[0] uppercase">
            Skinstric developed an A.I. that creates a highly-personalised
            routine tailored to what your skin needs.
          </p>
        </div>
      </footer>
    </div>
  );
}
