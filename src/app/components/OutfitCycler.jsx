"use client";


import { useState } from "react";

export default function OutfitCycler() {
    const tops = ["/images/tops/T1.png", "/images/tops/T2.png", "/images/tops/T3.png"];
    const bottoms = ["/images/bottoms/B1.png", "/images/bottoms/B2.png", "/images/bottoms/B3.png", 
    "/images/bottoms/B4.png", "/images/bottoms/B5.png"];
    const shoes = ["/images/shoes/S1.png", "/images/shoes/S2.png", "/images/shoes/S3.png"];

    const outerwear = ["/images/outer/O1.png", "/images/outer/O2.png", "/images/outer/O3.png"];

    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);
    const [shoesIndex, setShoesIndex] = useState(0);
    const [outerIndex, setOuterIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(null); // "top", "bottom", "shoes"

  const next = () => {
    if (selectedCategory === "top") setTopIndex((i) => (i + 1) % tops.length);
    else if (selectedCategory === "bottom") setBottomIndex((i) => (i + 1) % bottoms.length);
    else if (selectedCategory === "shoes") setShoesIndex((i) => (i + 1) % shoes.length);
    else if (selectedCategory === "outer") setOuterIndex((i) => (i + 1) % outerwear.length);
  };

  const back = () => {
    if (selectedCategory === "top") setTopIndex((i) => (i - 1 + tops.length) % tops.length);
    else if (selectedCategory === "bottom") setBottomIndex((i) => (i - 1 + bottoms.length) % bottoms.length);
    else if (selectedCategory === "shoes") setShoesIndex((i) => (i - 1 + shoes.length) % shoes.length);
    else if (selectedCategory === "outer") setOuterIndex((i) => (i - 1 + outerwear.length) % outerwear.length);
  };

  return (    
    <div style={{ 
        // display: "flex", 
        // flexDirection: "column", 
        // alignItems: "center", 
        // gap: "20px", 
        // minHeight: "50vh",       // makes it fill screen height
        // overflow: "hidden"        // prevents scrollbars if you want
        
      }} className="flex items-center justify-center h-screen w-screen">

        <div className="flex items-center justify-center"> 
            <div className="w-64 h-[650px] bg-white border-2 border-gray-400 rounded-lg flex flex-col items-center justify-between">

                <div className={`flex-1 flex items-center justify-center border-gray-600 h-[200px] w-full cursor-pointer
                ${selectedCategory === "top" ? "border-gray-600 border-4" : ""}`}
                onClick={() => setSelectedCategory("top")}
                >
                    <img src={tops[topIndex]} alt="Top" className="block h-full w-auto object-contain " />
                </div>


                <div className={`flex-1 flex items-center justify-center border-gray-600 h-[300px] w-full cursor-pointer
                                ${selectedCategory === "bottom" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("bottom")}
                                >
                
                    <img src={bottoms[bottomIndex]} alt="Bottoms" className="block h-full w-auto object-contain" />
                </div>


                <div className={`flex-1 flex items-center justify-center border-gray-600 h-[150px] w-full cursor-pointer
                                ${selectedCategory === "shoes" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("shoes")}
                                >

                    <img src={shoes[shoesIndex]} alt="Shoes" className="block h-full w-auto object-contain pointer-events-none"/>
                </div>

            </div>
        </div>

          {/* Outerwear box positioned to the right */}
        <div className={`absolute left-[65%] top-50 w-52 h-[300px] bg-white border-2 border-gray-400 rounded-lg flex items-center justify-center cursor-pointer
                                ${selectedCategory === "outer" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("outer")}
                                >
            <img src={outerwear[outerIndex]} alt="Outerwear" className="h-full w-auto object-contain" />
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-10 left-0 right-0 flex justify-between px-10">
            <button className="px-16 py-8 bg-gray-500 text-white rounded-lg hover:bg-gray-600 border-4 border-gray-600 cursor-pointer"
            onClick={back}
            >
            Back
            </button>
            <button className="px-16 py-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 border-4 border-gray-600 cursor-pointer"
            onClick={next}
            >
            Next
            </button>
        </div>
    </div>
  );
}
