import React from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";

const Demographics = () => {
  return (
    <div className="h-screen flex flex-col bg-white-custom px-8">
      {/* Header Section */}
      <div className="flex items-center h-[48px]">
        <Header />
      </div>
      <h1 className="mt-8 font-bold font-roobert">A.I. ANALYSIS</h1>
      <h1 className="text-[60px]">DEMOGRAPHICS</h1>
      <p className="text-[14px]">PREDICTED RACE & AGE</p>

      <div className="flex-grow flex items-center justify-center mt-24">
        <div className="w-full h-full flex border">
          {/* Left Column */}
          <div className="flex-[3] pr-4 flex flex-col justify-start gap-[2px]">
            <div className="h-[20%] mb-[8px] bg-gray-200 border-t border-black flex flex-col p-2 font-semi-bold">
              <span className="mb-8 font-bold">EAST ASIAN</span>
              <span className="font-bold">RACE</span>
            </div>
            <div className="h-[20%] mb-[8px] bg-gray-200 border-t border-black flex flex-col p-2 font-semi-bold">
              <span className="mb-8 font-bold">20-29</span>
              <span className="font-bold">AGE</span>
            </div>
            <div className="h-[20%] bg-gray-200 border-t border-black flex flex-col p-2">
              <span className="mb-8 font-bold">FEMALE</span>
              <span className="font-bold">SEX</span>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex-[12] p-4 bg-gray-200 border-t border-black">
            <div className="text-[32px] font-semi-bold">East asian</div>
          </div>

          {/* Right Column */}
          <div className="flex-[5] p-4 bg-gray-100 flex flex-col border-t border-black ml-4">
            <div className="flex items-center justify-between">
              <span>RACE</span>
              <span>A.I. CONFIDENCE</span>
            </div>
            <div>
              <img src="" alt="" />
              <div className="flex items-center justify-between">
                <span>East Asian</span>
                <span>96%</span>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div className="flex items-center justify-between">
                <span>White</span>
                <span>6%</span>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <span>Black</span>
              <span>3%</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>South Asian</span>
              <span>2%</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Latino Hispanic</span>
              <span>0%</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>South East Asian</span>
              <span>0%</span>
            </div>
            <div>
              <img src="" alt="" />
              <span>Middle Eastern</span>
              <span>0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-28 ">
        <div className="absolute bottom-0 left-0 px-8 pb-8">
          <LeftButton to="/analysis">BACK</LeftButton>
        </div>
      </footer>
    </div>
  );
};

export default Demographics;
