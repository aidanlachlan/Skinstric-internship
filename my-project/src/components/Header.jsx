import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white-custom h-[48px] px-8">
    <div className="flex justify-center items-center gap-2 text-center">
      <h1 className='font-roobert font-bold text-[14px]'>Skinstric</h1>
        <img
          src="assets/Rectangle-2710.svg"
          alt=""
          className="text-skinstric-gray-light h-[17px]"
        />
        <h2 className="font-roobert text-skinstric-gray-light text-[10px] text-bold">INTRO</h2>
        <img
          src="assets/Rectangle-2711.svg"
          alt=""
          className="text-skinstric-gray-light h-[17px]"
        />
    </div>
    <button className="bg-black text-white font-roobert px-4 py-2 text-[10px] leading-4 uppercase font-semibold tracking-tight">
      ENTER CODE
    </button>
  </header>
  )
}
