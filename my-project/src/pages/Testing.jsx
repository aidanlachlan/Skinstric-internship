import React, { useState } from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";
import { useNavigate } from "react-router-dom";

const Testing = () => {
  const questions = ["Introduce Yourself", "Where are you from?"];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [caption, setCaption] = useState("CLICK TO TYPE");
  const [placeholder, setPlaceholder] = useState(questions[0]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()

  const handleFocus = () => {
    setCaption(placeholder);
    setPlaceholder("");
  };

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setCaption("CLICK TO TYPE");
      setPlaceholder(questions[currentQuestionIndex]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Answer to "${questions[currentQuestionIndex]}": ${inputValue}`);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCaption("CLICK TO TYPE");
      setPlaceholder(questions[nextIndex]);
      setInputValue("");
    } else {
      console.log("All questions answered!");
      navigate('/analysis')
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex items-center justify-between bg-white-custom h-[48px] px-8">
        <Header />
      </div>
      <h1 className="ml-8 mt-8 font-bold">TO START ANALYSIS</h1>

      <main className="flex-1 relative overflow-hidden">
        {/* Decorative Dotted Diamonds */}
        <div className="absolute w-[500px] h-[500px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow" />
        <div className="absolute w-[450px] h-[450px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slower" />
        <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slowest" />

        {/* Absolute Centered Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[58%] z-10 flex flex-col items-center">
          <div className="caption mb-4 text-[16px] text-gray-500">{caption.toUpperCase()}</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              placeholder={placeholder}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="py-2 border-b border-black text-center text-[40px] text-black placeholder:text-black bg-transparent outline-none focus:ring-0"
              style={{
                display: "inline-block",
                width: "auto",
                minWidth: "1ch",
              }}
              size={18}
            />
          </form>
        </div>
      </main>

      <footer className="relative w-full h-[64px]">
        <div className="absolute left-8 bottom-8">
          <LeftButton to="/" className="hover:scale-105 transition-transform">
            BACK
          </LeftButton>
        </div>
      </footer>
    </div>
  );
};

export default Testing;
