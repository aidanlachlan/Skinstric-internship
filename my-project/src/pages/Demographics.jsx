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
    <div className="h-screen flex flex-col bg-white-custom px-8">
      {/* Header Section */}
      <div className="fixed top-0 flex items-center h-[48px]">
        <Header />
      </div>
      <h1 className="mt-16 font-bold font-roobert">A.I. ANALYSIS</h1>
      <h1 className="text-[60px]">DEMOGRAPHICS</h1>
      <p className="text-[14px]">PREDICTED RACE & AGE</p>

      <div className="flex-grow flex items-center justify-center mt-24">
        <div className="w-full h-full flex">
          {/* LEFT COLUMN */}
          <div className="flex-[3] pr-4 flex flex-col justify-start gap-[2px]">
            {/* RACE */}
            <div
              className={`h-[20%] mb-[8px] border-t border-black flex flex-col p-2 font-semi-bold cursor-pointer ${
                selectedCategory === "race"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("race")}
            >
              <span className="mb-8 font-bold">
                {raceData.length > 0 ? raceData[0].label : "N/A"}
              </span>
              <span className="font-bold">RACE</span>
            </div>

            {/* AGE */}
            <div
              className={`h-[20%] mb-[8px] border-t border-black flex flex-col p-2 font-semi-bold cursor-pointer ${
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
              className={`h-[20%] border-t border-black flex flex-col p-2 font-semi-bold cursor-pointer ${
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

          {/* Middle Column */}
          <div className="flex-[12] p-4 bg-gray-100 border-t border-black relative">
            <div className="text-[32px] font-semi-bold">
              {/* Display the label of the highest race data */}
              <div>
                {selectedData.length > 0
                  ? selectedData[0].label.charAt(0).toUpperCase() +
                    selectedData[0].label.slice(1)
                  : "No data"}
              </div>
              <div className="absolute bottom-4 right-4 w-96 h-96">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle
                    className="text-gray-300"
                    stroke="currentColor"
                    strokeWidth="1" // Thinner stroke
                    fill="none"
                    cx="18"
                    cy="18"
                    r="15.9155"
                  />
                  <circle
                    className="text-black"
                    stroke="currentColor"
                    strokeWidth="1" // Thinner stroke
                    fill="none"
                    strokeDasharray={`${
                      selectedData.length > 0
                        ? selectedData[0].value.replace("%", "")
                        : 0
                    }, 100`} // Use the highest percentage value here
                    transform="rotate(-90 18 18)"
                    cx="18"
                    cy="18"
                    r="15.9155"
                  />
                  <text
                    x="18"
                    y="20.5"
                    className="text-[4px] fill-black font-bold" // Smaller text
                    textAnchor="middle"
                  >
                    {selectedData.length > 0 ? selectedData[0].value : "0%"}{" "}
                    {/* Display percentage */}
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-[5] p-4 bg-gray-100 flex flex-col border-t border-black ml-4 w-full">
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
