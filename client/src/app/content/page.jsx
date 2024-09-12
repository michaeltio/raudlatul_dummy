import React from 'react';
import Image from "next/image";
import SearchBar from "@/components/search-bar/SearchBar";

function Content() {
  return (
    <div id="mainService" className="flex flex-col gap-8">
        <SearchBar />
      <div className="md:flex md:mx-10">
        <div className="px-9 space-y-4 md:px-6 md:py-0 lg:flex md:flex-1 lg:space-x-6 lg:space-y-0">
        
          <div className="aspect-[16/11] bg-[#092928] rounded-2xl md:aspect-square md:flex-1 lg:aspect-[16/11]">
          <Image 
          src="/webp/caligraphy01.webp"
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-2xl"/>
          </div>
          
          <div className="flex justify-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
            <div className="w-12 aspect-square bg-[#E9B472] rounded lg:w-14"></div>
            <div className="w-12 aspect-square bg-[#014E3E] rounded lg:w-14"></div>
            <div className="w-12 aspect-square bg-[#E9B472] rounded lg:w-14"></div>
            <div className="w-12 aspect-square bg-[#014E3E] rounded lg:w-14"></div>
          </div>
        </div>
        
        <div className="p-9 content-center space-y-10 md:flex-1 md:space-y-20">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-ptserif font-bold">Kaligrafi Surah Yasin 20x40</h2>
              <div className="flex">
              <Image
                  src="/svg/icon/star-yellow.svg"
                  alt="img star"
                  className="w-5 p-1"
                  width={5}
                  height={5}
              />
                <p className="text-sm font-ptserif font-bold">4.9/5</p>
              </div>
            </div>
            <p className="text-lg font-ptserif w-80 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-y-1">
              <p className="text-md font-ptserif"><b>Artist:</b> Joko Anwar</p>
              <p className="text-md font-ptserif mb-8"><b>Created Date:</b> 30 February 2020</p>
            </div>
          </div>

          <div className="relative">
            <a href="#" className="text-md font-bold font-ptserif text-[#E9B472] underline mt-10 mb-6">See Reviews</a>
            <div className="w-44">
              <p className="text-center text-xl font-bold font-ptserif my-3">Rp 1.250.000</p>
              <button className="w-44 py-1 text-lg font-bold font-ptserif border border-black rounded-full">Check Out</button>
            </div>
            <div className="flex absolute bottom-0 right-0 space-x-4">
              <Image
                  src="/svg/icon/love.svg"
                  alt="img love"
                  className="h-10 w-10 bg-[#E9B472] rounded-full p-2"
                  width={10}
                  height={10}
              />
              <Image
                  src="/svg/icon/cart.svg"
                  alt="img cart"
                  className="h-10 w-10 bg-[#014E3E] rounded-full p-2"
                  width={10}
                  height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
