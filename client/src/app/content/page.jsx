import React from 'react';
import Image from "next/image";


function Content() {
  return (
    <div id="mainService" className="">
      <div className="p-9">
        <div className="h-64 bg-[#092928] rounded-2xl"></div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <div className="h-10 w-10 bg-[#E9B472] rounded"></div>
          <div className="h-10 w-10 bg-[#014E3E] rounded"></div>
          <div className="h-10 w-10 bg-[#E9B472] rounded"></div>
          <div className="h-10 w-10 bg-[#014E3E] rounded"></div>
        </div>
      </div>
      
      <div className="px-9">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-ptserif font-bold">Kaligrafi Surah Yasin 20x40</h2>
          <p className="text-sm font-ptserif font-bold">4.9/5</p>
        </div>
        <p className="text-xs font-ptserif w-80 mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-xs font-ptserif"><b>Artist:</b> Joko Anwar</p>
        <p className="text-xs font-ptserif mb-8"><b>Created Date:</b> 30 February 2020</p>
        <a href="#" className="text-xs font-bold font-ptserif text-[#E9B472] underline mb-6">See Reviews</a>
      </div>

      <div className="relative p-9">
        <div className="w-48">
          <p className="text-center text-xl font-bold font-ptserif mb-4">Rp 1.250.000</p>
          <button className="w-48 py-1 text-lg font-bold font-ptserif border-2 border-black rounded-full">Check Out</button>
        </div>
        <div className="flex absolute bottom-9 right-9 space-x-4">
          <div className="h-10 w-10 bg-[#E9B472] rounded-full"></div>
          <div className="h-10 w-10 bg-[#014E3E] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
