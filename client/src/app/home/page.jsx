import React from 'react';
import Image from "next/image";


function Home() {
  return (
    <div id="mainHome" className="">
      <div className="text-center space-y-6 py-16">
        <h2 className="text-2xl md:text-3xl font-ptserif font-bold">Lorem Ipsum Lorem Ipsum</h2>
        <div className="flex w-full justify-center flex-row gap-6 px-16">
          <input
            type="text"
            placeholder=""
            className="h-8 md:h-10 w-3/4 md:w-7/12 rounded-full border border-black bg-transparent p-2"
          />
          <button className="w-24 md:w-36 py-1 text-md md:text-lg font-bold font-ptserif border border-black rounded-full">Search</button>
        </div>
        <div className="justify-center">
          <div className="justify-center items-center gap-12 flex">
            <h1 className={`inline font-ptserif`}>Home</h1>
            <h1 className={`inline font-ptserif`}>Service</h1>
            <h1 className={`inline font-ptserif`}>About</h1>
            <h1 className={`inline font-ptserif`}>Shop</h1>
          </div>
        </div>
      </div>
      
      <div id="pembatas" className="py-6 md:py-8 grid grid-cols-3">
        <div className="col-span-2 w-full bg-[#092928] rounded-e-2xl"></div>
        <div className="aspect-[16/7] w-full bg-[#E9B472] rounded-s-2xl md:aspect-[16/4]"></div>
      </div>

      <div id="collections" className="py-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-ptserif font-bold">Our Collections</h2>
        </div>
        <div className="justify-center space-y-3 p-6 md:flex md:space-x-3 md:space-y-0">
          <div id="3Foto" className="space-y-3 md:flex-1">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 aspect-[16/12] py-20 w-full bg-[#E9B472] rounded-2xl md:aspect-auto md:py-32"></div>
              <div className="py-20 w-full bg-[#092928] rounded-2xl md:py-32"></div>
            </div>
            <div className="p-14 w-full bg-[#092928] rounded-2xl md:p-20"></div>
          </div>
          <div id="2Foto" className="space-y-3 md:flex-1">
            <div className="w-full py-20 w-full bg-[#E9B472] rounded-2xl"></div>
            <div className="w-full aspect-video bg-[#014E3E] rounded-2xl md:aspect-auto md:h-3/5"></div>
          </div>
        </div>
      </div>

      <div id="getToKnow" className="p-6">
        <div className="py-16 flex flex-col items-center justify-center gap-3 w-full bg-[#092928] rounded-2xl md:gap-7">
          <div className="text-center text-lg text-white font-ptserif md:text-xl">
            <p>Let’s get to know</p>
            <p>the Raudlatul Irfan</p>
          </div>
          <button className="p-3 w-14 bg-[#E9B472] rounded-full md:w-16"></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
