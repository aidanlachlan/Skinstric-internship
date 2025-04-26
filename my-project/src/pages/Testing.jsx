import React from "react";
import Header from "../components/Header";

const Testing = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-white-custom h-[48px] px-8">
        <Header />
      </div>
      <main className="w-screen h-screen overflow-hidden">
        {/* Decorative Dotted Diamonds */}
        <div className="absolute w-[600px] h-[600px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 spin-slow " />
        <div className="absolute w-[500px] h-[500px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />

        {/* Absolute Centered Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[58%] z-10 flex flex-col items-center">
          <div className="caption mb-4 text-sm text-gray-500">CLICK TO TYPE</div>
          <form>
            <input
              type="text"
              placeholder="Introduce Yourself"
              className="px-4 py-2 border-b border-black text-center text-[36px] text-black placeholder:text-black bg-transparent outline-none focus:ring-0"
            />
          </form>
        </div>


      </main>
    </>
  );
};

export default Testing;