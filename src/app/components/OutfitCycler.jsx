"use client";


import { useState } from "react";

export default function OutfitCycler() {
    const tops = ["/images/tops/T1.png", "/images/tops/T2.png", "/images/tops/T3.png", "/images/tops/T4.png", "/images/tops/T5.png"];
    const bottoms = ["/images/bottoms/B1.png", "/images/bottoms/B2.png", "/images/bottoms/B3.png", 
    "/images/bottoms/B4.png", "/images/bottoms/B5.png"];
    const shoes = ["/images/shoes/S1.png", "/images/shoes/S2.png", "/images/shoes/S3.png", "/images/shoes/S4.png", "/images/shoes/S5.png"];
    const outerwear = ["/images/outer/O1.png", "/images/outer/O2.png", "/images/outer/O3.png"];
    const headwear = ["/images/headwear/H1.png", "/images/headwear/H2.png", "/images/headwear/H3.png", "/images/headwear/H4.png"];

    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);
    const [shoesIndex, setShoesIndex] = useState(0);
    const [outerIndex, setOuterIndex] = useState(0);
    const [headIndex, setHeadIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(null); // "top", "bottom", "shoes"

  const next = () => {
    if (selectedCategory === "top") setTopIndex((i) => (i + 1) % tops.length);
    else if (selectedCategory === "bottom") setBottomIndex((i) => (i + 1) % bottoms.length);
    else if (selectedCategory === "shoes") setShoesIndex((i) => (i + 1) % shoes.length);
    else if (selectedCategory === "outer") setOuterIndex((i) => (i + 1) % outerwear.length);
    else if (selectedCategory === "head") setHeadIndex((i) => (i + 1) % headwear.length);
  };

  const back = () => {
    if (selectedCategory === "top") setTopIndex((i) => (i - 1 + tops.length) % tops.length);
    else if (selectedCategory === "bottom") setBottomIndex((i) => (i - 1 + bottoms.length) % bottoms.length);
    else if (selectedCategory === "shoes") setShoesIndex((i) => (i - 1 + shoes.length) % shoes.length);
    else if (selectedCategory === "outer") setOuterIndex((i) => (i - 1 + outerwear.length) % outerwear.length);
    else if (selectedCategory === "head") setHeadIndex((i) => (i - 1 + headwear.length) % headwear.length);
  };

  return (    
    
    <div style={{ 
        // display: "flex", 
        // flexDirection: "column", 
        // alignItems: "center", 
        // gap: "20px", 
        // minHeight: "50vh",       // makes it fill screen height
        // overflow: "hidden"        // prevents scrollbars if you want
        backgroundImage: "url('/images/bg.jpeg')"
      }} className="flex items-center justify-center h-screen w-screen bg-cover bg-no-repeat"
      >
        <div className="font-y2k absolute top-5 left-7 text-4xl text-black drop-shadow-[2px_2px_0px_white]">
          StyleStaples
        </div>



        <div className="flex items-center justify-center"> 
            <div className="w-64 h-[700px] bg-white border-5 border-[#f8c5fc] rounded-lg flex flex-col items-center justify-between">

                <div className={`flex-1 flex items-center justify-center border-gray-600 h-[200px] w-full cursor-pointer
                                hover:bg-blue-100
                                ${selectedCategory === "top" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("top")}
                                >
                    <img src={tops[topIndex]} alt="Top" className="block h-full w-auto object-contain " />
                </div>


                <div className={`flex-1 flex items-center justify-center border-gray-600 h-[300px] w-full cursor-pointer
                                hover:bg-blue-100
                                ${selectedCategory === "bottom" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("bottom")}
                                
                                >
                
                    <img src={bottoms[bottomIndex]} alt="Bottoms" className="block h-full w-auto object-contain" />
                </div>


                <div className={` flex items-center justify-center border-gray-600 h-[150px] w-full cursor-pointer
                                hover:bg-blue-100
                                ${selectedCategory === "shoes" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("shoes")}
                                >

                    <img src={shoes[shoesIndex]} alt="Shoes" className="block h-full w-auto object-contain"/>
                </div>

            </div>
        </div>

        {/* headwear box positioned to the right */}
        <div className={`absolute left-[25%] top-25 w-40 h-40 bg-white border-5 border-[#f8c5fc] 
                                rounded-lg flex items-center justify-center cursor-pointer
                                hover:bg-blue-100
                                ${selectedCategory === "head" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("head")}
                                >
            <img src={headwear[headIndex]} alt="Headwear" className="p-3 h-full w-auto object-contain" />
        </div>

        <label className="absolute left-[66%] top-30 items-center gap-2 cursor-pointer">
            <input type="checkbox" id="outerwearToggle" className="w-4 h-4 p-4"></input>
            <span className="text-white font-bold px-4">Include Outerwear</span>
        </label>

          {/* Outerwear box positioned to the right */}
        <div className={`absolute left-[65%] top-50 w-52 h-[300px] bg-white border-5 border-[#f8c5fc] rounded-lg 
                                flex items-center justify-center cursor-pointer
                                hover:bg-blue-100
                                ${selectedCategory === "outer" ? "border-gray-600 border-4" : ""}`}
                                onClick={() => setSelectedCategory("outer")}
                                >
            <img src={outerwear[outerIndex]} alt="Outerwear" className="p-2 h-full w-auto object-contain" />
        </div>


        <button className="fixed bottom-10 left-10 font-bold font-y2k text-2xl px-8 py-5 
            bg-gray-300 text-black hover:bg-gray-600 border-7 border-gray-800 cursor-pointer"

            onClick={back}
            style={{ textShadow:
                 "2px 2px 0px white"
                 }}

            >
            &lt;
            </button>


        <button className="fixed bottom-10 right-10 font-bold font-y2k text-2xl px-8 py-5
            bg-gray-300 text-black hover:bg-blue-300 border-7 border-gray-800 cursor-pointer"

            onClick={next}
            style={{ textShadow: "2px 2px 0px white" }}

            >
            &gt;
        </button>
    </div>
  );
}
