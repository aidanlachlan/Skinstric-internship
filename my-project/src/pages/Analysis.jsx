import React from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";
import "../animations.css";

const Analysis = () => {
  return (
    <>
      {/* Top bar container: Header + Heading */}
      <div className="absolute top-0 left-0 right-0 px-8 bg-white-custom z-10">
        <div className="flex items-center justify-between h-[48px]">
          <Header />
        </div>
        <h1 className="mt-8 font-bold">TO START ANALYSIS</h1>
      </div>

      {/* Full-screen image layout */}
      <div className="flex h-screen">
        {/* Left Half */}
        <div className="w-1/2 flex items-center justify-center relative">
          {/* Spinning Decorative Diamonds (Left) */}
          <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-fast" />
          <div className="absolute w-[350px] h-[350px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin" />
          <div className="absolute w-[300px] h-[300px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow" />

          <button className="relative z-10">
            <img
              src="assets/skinstric-camera-icon.png"
              className="w-[100px] h-[100px]"
              alt="Camera Icon"
            />
          </button>

          {/* Flex container for line and label (Left) */}
          <div className="absolute left-[calc(50%+60px)] top-1/2 transform -translate-y-1/2 z-10 flex items-center gap-2">
            <div className="w-[100px] h-[2px] bg-black" />
            <span className="text-md font-roobert font-semi-bold">Take a photo to begin</span>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-1/2 flex items-center justify-center relative">
          {/* Spinning Decorative Diamonds (Right) */}
          <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-fast" />
          <div className="absolute w-[350px] h-[350px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin" />
          <div className="absolute w-[300px] h-[300px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow" />

          <button className="relative z-10">
            <img
              src="assets/skinstric-gallery-icon.png"
              className="w-[100px] h-[100px]"
              alt="Gallery Icon"
            />
          </button>

          {/* Flex container for line and label (Right) */}
          <div className="absolute right-[calc(50%+60px)] top-1/2 transform -translate-y-1/2 z-10 flex items-center gap-2 flex-row-reverse text-right">
            <div className="w-[100px] h-[2px] bg-black" />
            <span className="text-md font-roobert font-semi-bold">Upload from gallery</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="absolute left-8 bottom-8">
        <LeftButton
          to="/testing"
          className="hover:scale-105 transition-transform"
        >
          BACK
        </LeftButton>
      </div>
    </>
  );
};

export default Analysis;


