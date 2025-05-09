import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LeftButton from "../components/LeftButton";

const Demographics = () => {
  const [demographicData, setDemographicData] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("race");

  useEffect(() => {
    const stored = sessionStorage.getItem("demographicData");
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log("Fetched demographic data: ", parsed); // Log the full object
      setDemographicData(parsed); // Directly set parsed (no longer nested under 'data')
    }
  }, []);

  const getRaceData = (demographicData) => {
    if (!demographicData || !demographicData.race) return [];

    // Convert percentages to numbers for sorting
    const sortedRaceData = Object.entries(demographicData.race)
      .map(([key, value]) => ({
        label: key.replace(/\b\w/g, (l) => l.toUpperCase()), // Capitalize first letter of each word
        value: Math.round(value * 100), // Convert to percentage as a number
      }))
      .sort((a, b) => b.value - a.value); // Sort in descending order

    // Convert value back to percentage for display
    return sortedRaceData.map((item) => ({
      ...item,
      value: `${item.value}%`, // Format value as percentage
    }));
  };
  const raceData = getRaceData(demographicData);

  const getAgeData = (data) => {
    if (!data?.age) return [];
    return Object.entries(data.age)
      .map(([key, value]) => ({
        label: key,
        value: `${Math.round(value * 100)}%`,
      }))
      .sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
  };
  const ageData = getAgeData(demographicData);

  const getSexData = (data) => {
    if (!data?.gender) return [];
    return Object.entries(data.gender)
      .map(([key, value]) => ({
        label: key,
        value: `${Math.round(value * 100)}%`,
      }))
      .sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
  };
  const sexData = getSexData(demographicData);

  const getSelectedData = () => {
    if (selectedCategory === "race") return raceData;
    else if (selectedCategory === "age") return ageData;
    else if (selectedCategory === "sex") return sexData;
    else return [];
  };
  const selectedData = getSelectedData();

  return (
    <div className="h-screen flex flex-col bg-white-custom px-8 relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white-custom px-8 h-[48px] flex items-center">
        <Header />
      </div>
  
      {/* Top Text */}
      <div className="mt-16 font-bold font-roobert">A.I. ANALYSIS</div>
      <h1 className="text-[60px] max-md:text-[40px]">DEMOGRAPHICS</h1>
      <p className="text-[14px]">PREDICTED RACE & AGE</p>
  
      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto max-lg:h-screen pb-32 mt-12">
        <div className="w-full flex lg:flex-row flex-col gap-4">
          {/* LEFT COLUMN */}
          <div className="lg:flex-[3] flex flex-col gap-[8px]">
            {/* RACE */}
            <div
              className={`max-lg:flex-row max-lg:justify-between flex flex-col h-[20%] border-t border-black p-2 font-semi-bold cursor-pointer ${
                selectedCategory === "race"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("race")}
            >
              <span className="mb-8 font-bold ma">
                {raceData.length > 0 ? raceData[0].label.toUpperCase() : "N/A"}
              </span>
              <span className="font-bold">RACE</span>
            </div>
  
            {/* AGE */}
            <div
              className={`max-lg:flex-row max-lg:justify-between flex flex-col h-[20%] border-t border-black p-2 font-semi-bold cursor-pointer ${
                selectedCategory === "age"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("age")}
            >
              <span className="mb-8 font-bold">
                {ageData.length > 0 ? ageData[0].label : "N/A"}
              </span>
              <span className="font-bold">AGE</span>
            </div>
  
            {/* SEX */}
            <div
              className={`max-lg:flex-row max-lg:justify-between flex flex-col h-[20%] border-t border-black p-2 font-semi-bold cursor-pointer ${
                selectedCategory === "sex"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("sex")}
            >
              <span className="mb-8 font-bold">
                {sexData.length > 0 ? sexData[0].label.toUpperCase() : "N/A"}
              </span>
              <span className="font-bold">SEX</span>
            </div>
          </div>
  
          {/* MIDDLE COLUMN */}
          <div className="lg:flex-[12] p-4 bg-gray-100 border-t border-black relative flex flex-col items-center justify-center">
            <div className="text-[32px] font-semi-bold mb-8 w-[100%] relative top-0">
              {selectedData.length > 0
                ? selectedData[0].label.charAt(0).toUpperCase() +
                  selectedData[0].label.slice(1)
                : "No data"}
            </div>
            <div className="w-96 h-96 max-lg:w-64 max-lg:h-64 max-sm:w-48 max-sm:h-48">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15.9155"
                />
                <circle
                  className="text-black"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray={`${
                    selectedData.length > 0
                      ? selectedData[0].value.replace("%", "")
                      : 0
                  }, 100`}
                  transform="rotate(-90 18 18)"
                  cx="18"
                  cy="18"
                  r="15.9155"
                />
                <text
                  x="18"
                  y="20.5"
                  className="text-[4px] fill-black font-bold"
                  textAnchor="middle"
                >
                  {selectedData.length > 0 ? selectedData[0].value : "0%"}
                </text>
              </svg>
            </div>
          </div>
  
          {/* RIGHT COLUMN */}
          <div className="lg:flex-[5] p-4 bg-gray-100 border-t border-black flex flex-col w-full">
            <div className="flex items-center justify-between py-2 font-bold">
              <span>{selectedCategory.toUpperCase()}</span>
              <span>A.I. CONFIDENCE</span>
            </div>
  
            {selectedData.length === 0 ? (
              <p>No {selectedCategory} data available</p>
            ) : (
              selectedData.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between hover:bg-gray-300 cursor-pointer px-2 py-4 transition-colors duration-200 w-full"
                  onClick={() => console.log(`Clicked ${label}`)}
                >
                  <div className="flex items-center">
                    <img
                      src="/assets/diamond-button.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <span className="px-2">
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </span>
                  </div>
                  <span>{value}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
  
      {/* Fixed Back Button */}
      <div className="fixed bottom-8 left-8 z-10">
        <LeftButton to="/analysis">BACK</LeftButton>
      </div>
    </div>
  );
  
};

export default Demographics;
