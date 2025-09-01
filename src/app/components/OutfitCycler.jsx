"use client";


import { useState } from "react";

export default function OutfitCycler() {
  const tops = ["/images/tops/T1.png", "/images/tops/T2.png", "/images/tops/T3.png"];
  const bottoms = ["/images/bottoms/B1.png", "/images/bottoms/B2.png"];
  const shoes = ["/images/shoes/S1.png", "/images/shoes/S2.png"];

  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [shoesIndex, setShoesIndex] = useState(0);

  const nextTop = () => setTopIndex((topIndex + 1) % tops.length);
  const nextBottoms = () => setBottomIndex((bottomIndex + 1) % bottoms.length);
  const nextShoes = () => setShoesIndex((shoesIndex + 1) % shoes.length);


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
            <div className="w-64 h-[650px] bg-gray-300 border-2 border-gray-400 rounded-lg flex flex-col items-center justify-between">

                <div className="flex-1 flex items-center justify-center border-b border-gray-600 h-[200px] w-full">
                    <img src={tops[topIndex]} alt="Top" className="block h-full w-auto object-contain " />
                </div>


                <div className="flex-1 flex items-center justify-center border-b border-gray-600 h-[300px] w-full">
                    <img src={bottoms[bottomIndex]} alt="Bottoms" className="block h-full w-auto object-contain" />
                </div>


                <div className="flex-1 flex items-center justify-center h-[150px] w-full">
                    <img src={shoes[shoesIndex]} alt="Shoes" className="block h-full w-auto object-contain" />
                </div>


            </div>
        </div>

      {/* Controls */}
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={nextTop}>Next Top</button>
        <button onClick={nextBottoms}>Next Pants</button>
        <button onClick={nextShoes}>Next Shoes</button>

        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
            Next Outfit
        </button>

      </div> */}

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-10 left-0 right-0 flex justify-between px-10">
            <button className="px-16 py-8 bg-gray-500 text-white rounded-lg hover:bg-gray-600 border-4 border-gray-600 cursor-pointer">
            Back
            </button>
            <button className="px-16 py-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 border-4 border-gray-600 cursor-pointer">
            Next
            </button>
        </div>
    </div>
  );
}
