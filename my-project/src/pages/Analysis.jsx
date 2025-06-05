import React, { useRef, useState } from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";
import "../animations.css";
import { Link, useNavigate } from "react-router-dom";

const Analysis = () => {
  const fileInputRef = useRef(null);
  const [demographicData, setDemographicData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraLoading, setIsCameraLoading] = useState(false);
  const navigate = useNavigate();

  const handleCameraClick = async () => {
    setIsCameraLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Stop the stream immediately – we'll re-request it on the camera page
      stream.getTracks().forEach((track) => track.stop());

      setTimeout(() => {
        setIsCameraLoading(false);
        navigate("/camera");
      }, 1000); 
    } catch (error) {
      console.error("Camera access failed:", error);
      setIsCameraLoading(false);
    }
  };

  const handleGalleryClick = () => {
    fileInputRef.current.click(); // Open the hidden file input
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1]; // remove data:image/... prefix

      setIsLoading(true);
      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: base64Image }),
          }
        );

        const result = await response.json();
        console.log("AI Response:", result);

        if (result.success) {
          setDemographicData(result.data);
          sessionStorage.setItem(
            "demographicData",
            JSON.stringify(result.data)
          );

          setTimeout(() => {
            setIsLoading(false);
            navigate("/select");
          }, 1000);
        } else {
          console.warn("API response was not successful:", result);
          setIsLoading(false); // ensure loading ends even on unexpected result
        }
      } catch (error) {
        console.error("Upload failed:", error);
      }
    };

    reader.readAsDataURL(file); // Convert image to Base64
  };

  if (isCameraLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white-custom">
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-fast" />
          <div className="absolute w-[350px] h-[350px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin" />
          <div className="absolute w-[300px] h-[300px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center">
            <img
              src="assets/skinstric-camera-icon.png"
              alt="Camera Icon"
              className="w-[60px] h-[60px] mx-auto mb-2"
            />
            <div className="font-bold text-lg">SETTING UP CAMERA...</div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white-custom">
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-fast" />
          <div className="absolute w-[350px] h-[350px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin" />
          <div className="absolute w-[300px] h-[300px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg text-center">
            PREPARING YOUR
            <br />
            ANALYSIS...
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 px-8 bg-white-custom z-10">
        <div className="flex items-center justify-between h-[48px]">
          <Header subtitleText='INTRO'/>
        </div>
        <h1 className="mt-8 font-bold">TO START ANALYSIS</h1>
      </div>

      {/* Full-screen layout */}
      <div className="flex h-screen max-xl:flex-col">
        {/* Left Half */}
        <div className="w-1/2 flex items-center justify-center relative max-xl:w-full max-xl:h-1/2">
          {/* Decorative diamonds */}
          <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-fast max-xl:w-[300px] max-xl:h-[300px]" />
          <div className="absolute w-[350px] h-[350px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin max-xl:w-[250px] max-xl:h-[250px]" />
          <div className="absolute w-[300px] h-[300px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow max-xl:w-[200px] max-xl:h-[200px]" />

          <button className="relative z-10" onClick={handleCameraClick}>
            <img
              src="assets/skinstric-camera-icon.png"
              className="w-[100px] h-[100px]"
              alt="Camera Icon"
            />
          </button>

          <div className="absolute left-[calc(50%+60px)] top-1/2 transform -translate-y-1/2 z-10 flex items-center gap-2">
            <div className="w-[100px] h-[2px] bg-black max-md:w-[50px]" />
            <span className="text-lg font-roobert font-semi-bold max-md:text-sm">
              ACCESS <br/> CAMERA
            </span>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-1/2 flex items-center justify-center relative max-xl:w-full max-xl:h-1/2">
          {/* Decorative diamonds */}
          <div className="absolute w-[400px] h-[400px] border border-dotted border-[2px] border-[#E5E7EB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-fast max-xl:w-[300px] max-xl:h-[300px]" />
          <div className="absolute w-[350px] h-[350px] border border-dotted border-[2px] border-[#D1D5DB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin max-xl:w-[250px] max-xl:h-[250px]" />
          <div className="absolute w-[300px] h-[300px] border border-dotted border-[2px] border-[#A0A4AB] rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 spin-slow max-xl:w-[200px] max-xl:h-[200px]" />

          <button className="relative z-10" onClick={handleGalleryClick}>
            <img
              src="assets/skinstric-gallery-icon.png"
              className="w-[100px] h-[100px]"
              alt="Gallery Icon"
            />
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <div className="absolute right-[calc(50%+60px)] top-1/2 transform -translate-y-1/2 z-10 flex items-center gap-2 flex-row-reverse text-right">
            <div className="w-[100px] h-[2px] bg-black max-md:w-[50px]" />
            <span className="text-lg font-roobert font-semi-bold max-md:text-sm">
              ACCESS <br/> GALLERY
            </span>
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
