import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // add at top of file

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null); // for capturing photo
  const [photo, setPhoto] = useState(null); // (optional) store captured image
  const navigate = useNavigate();

  const handleProceed = async () => {
    if (!photo) return;
  
    const base64Image = photo.split(",")[1]; // Strip data:image/... prefix
    try {
      const response = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });
  
      const result = await response.json();
      console.log("AI Response:", result);
  
      if (result.success) {
        sessionStorage.setItem("demographicData", JSON.stringify(result.data));
        navigate("/demographics");
      } else {
        console.warn("API responded with error:", result);
      }
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };  

  useEffect(() => {
    let stream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL("image/png");
      setPhoto(dataURL);

      // Stop camera stream
      const stream = video.srcObject;
      const tracks = stream?.getTracks?.();
      tracks?.forEach((track) => track.stop());
      video.srcObject = null; // Clear the video feed
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hidden canvas used to capture photo */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {photo && (
        <img
          src={photo}
          alt="Captured"
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
        />
      )}

      {/* Header */}
      <div className="absolute top-0 left-0 px-8 z-10">
        <div className="flex items-center justify-between h-[48px]">
          <div className="flex justify-center items-center gap-2 text-white">
            <h1 className="font-roobert font-bold text-[14px]">SKINSTRIC</h1>
            <h2 className="font-roobert text-[12px] font-bold">[ ANALYSIS ]</h2>
          </div>
        </div>
      </div>

      {photo && (
        <div className="absolute left-1/2 top-1/3 transform -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-white">GREAT SHOT!</h1>
        </div>
      )}

      {/* Capture Button */}
      {!photo && (
        <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-end items-center px-8">
          <span className="text-white">TAKE PICTURE</span>
          <img
            src="assets/white-camera.png"
            alt="Take Photo"
            onClick={handleCapture}
            className="w-12 h-12 cursor-pointer ml-4"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full z-10 p-4">
        <div className="absolute bottom-8 left-8">
          <Link to="/analysis">
            <button className="mr-auto">
              <img
                src="assets/buttin-icon-white.png"
                alt=""
                className="w-10 h-10"
              />
            </button>
          </Link>
        </div>
        <div className=" flex flex-col items-center text-white text-center mt-4 mb-8">
          <div className="mb-2">TO GET BETTER RESULTS MAKE SURE TO HAVE</div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <img src="assets/Rectangle-2681.png" alt="" className="w-5 h-5" />
              <span className="ml-2">NEUTRAL EXPRESSION</span>
            </div>
            <div className="flex items-center">
              <img src="assets/Rectangle-2681.png" alt="" className="w-5 h-5" />
              <span className="ml-2">FRONTAL POSE</span>
            </div>
            <div className="flex items-center">
              <img src="assets/Rectangle-2681.png" alt="" className="w-5 h-5" />
              <span className="ml-2">ADEQUATE LIGHTING</span>
            </div>
          </div>
        </div>
        {photo && (
          <div className="absolute bottom-8 right-8 z-10">
            <button
              onClick={handleProceed}
              className="flex items-center text-white"
            >
              <span className="pr-4">PROCEED</span>
              <img
                src="assets/buttin-icon-whiteR.png"
                alt=""
                className="w-10 h-10"
              />
            </button>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Camera;
