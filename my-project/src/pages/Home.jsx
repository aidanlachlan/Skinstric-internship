import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-between px-8 relative">
          {/* Left wrapper */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] border border-dotted border-[#A0A4AB] rotate-45 -left-[230px]" />
            <button className="w-[30px] h-[30px] z-10 relative">
              <img src="assets/skinstric-button-left.png" alt="" />
            </button>
            <span className="text-[10px] pl-2">DISCOVER A.I.</span>
          </div>

          {/* Center text */}
          <div className="text-center z-10">
            <h1 className="font-[Roobert TRIAL] font-light text-[64px] leading-[60px] tracking-[-0.07em]">
              Sophisticated
              <br />
              skincare
            </h1>
          </div>

          {/* Right wrapper */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] border border-dotted border-[#A0A4AB] rotate-45 -right-[230px]" />
            <span className="text-[10px] pr-2">TAKE TEST</span>
            <button className="w-[30px] h-[30px] z-10 relative">
              <img src="assets/skinstric-button-right.png" alt="" />
            </button>
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
    </>
  );
}
