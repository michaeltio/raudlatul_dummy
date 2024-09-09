import React from 'react';
import Image from "next/image";


function Home() {
  return (
    <div id="mainHome" className="">
      <div className="text-center">
        <h2 className="text-xl font-ptserif font-bold">Lorem Ipsum Lorem Ipsum</h2>
      </div>
      
      <div id="pembatas" className="py-10 grid grid-cols-3">
        <div className="col-span-2 w-full bg-[#092928] rounded-e-2xl"></div>
        <div className="aspect-[16/7] w-full bg-[#E9B472] rounded-s-2xl md:aspect-[16/4]"></div>
      </div>

      <div id="collections" className="">
        <div className="text-center">
          <h2 className="text-xl font-ptserif font-bold">Our Collections</h2>
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
