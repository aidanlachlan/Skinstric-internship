import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to='/'>
        <div className="flex justify-center items-center gap-2 text-center">
          <h1 className="font-roobert font-bold text-[14px]">SKINSTRIC</h1>
          <img
            src="assets/Rectangle-2710.svg"
            alt=""
            className="text-skinstric-gray-light h-[17px]"
          />
          <h2 className="font-roobert text-skinstric-gray-light text-[10px] text-bold">
            INTRO
          </h2>
          <img
            src="assets/Rectangle-2711.svg"
            alt=""
            className="text-skinstric-gray-light h-[17px]"
          />
        </div>
      </Link>
    </>
  );
}
