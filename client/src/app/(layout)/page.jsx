import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-6 py-12 text-center md:py-60">
        <div className="flex flex-row items-center justify-center gap-10">
          <img src="/png/ornament.png" 
          alt="Ornament"
          className="hidden md:block md:w-48 md:h-48 md-transform scale-x-[-1]" />
          <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
            Looking for Beautiful Calligraphy
          </h2>
          <img src="/png/ornament.png" 
          alt="Ornament"
          className="hidden md:block md:w-48 md:h-48" />
        </div>
        
        {/* <div className="flex w-full flex-row justify-center gap-3 px-16 md:gap-6">
          <input
            type="text"
            placeholder=""
            className="h-7 w-60 rounded-full border border-black bg-transparent p-2 md:h-10 md:w-7/12"
          />
          <button className="w-32 rounded-full border border-black p-3 py-1 font-ptserif text-xs font-bold hover:bg-[#092928] hover:text-white md:w-36 md:text-lg">
            Search
          </button>
        </div> */}
        <div className="justify-center">
          <div className="flex items-center justify-center gap-10 text-xs md:gap-28 md:text-xl">
            <h1 className={`inline font-ptserif`}>Naski</h1>
            <h1 className={`inline font-ptserif`}>Tsuluts</h1>
            <h1 className={`inline font-ptserif`}>Farisi</h1>
            <h1 className={`inline font-ptserif`}>Diwani</h1>
          </div>
        </div>
      </div>

      <div id="pembatas" className="grid grid-cols-3">
        <div className="relative col-span-2 h-20 w-full rounded-e-2xl bg-[#092928] md:h-auto">
          <img
            src="/webp/main-building.webp"
            alt="Main Building"
            className="absolute inset-0 h-full w-full rounded-e-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-e-2xl bg-[#092928] opacity-50"></div>
        </div>
        <div className="bg-[#092928]] relative w-full rounded-s-2xl md:aspect-[16/4]">
          <img
            src="/webp/building-certificate.webp"
            alt="Building Certificate"
            className="absolute inset-0 h-full w-full rounded-s-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-s-2xl bg-[#092928] opacity-50"></div>
        </div>
      </div>

      <div id="collections" className="py-12 md:mx-8 md:space-y-6 md:py-52">
        <div className="text-center">
          <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
            Our Collections
          </h2>
        </div>

        <div className="justify-center space-y-3 p-6 md:flex md:gap-3 md:space-x-3 md:space-y-0">
          <div id="3Foto" className="space-y-3 md:flex-1 md:space-y-5">
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <div className="relative col-span-2 w-full rounded-2xl bg-[#092928] py-20 md:aspect-video md:h-96 md:py-32">
                <img
                  src="/webp/caligraphy02.webp"
                  alt="Caligraphy 02"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="relative w-full rounded-2xl bg-[#092928] py-20 md:py-32">
                <img
                  src="/webp/caligraphy03.webp"
                  alt="Caligraphy 03"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="relative w-full rounded-2xl bg-[#092928] p-14 md:h-1/2 md:p-20">
              <img
                src="/webp/caligraphy04.webp"
                alt="Caligraphy 04"
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div id="2Foto" className="space-y-3 md:flex-1 md:space-y-7">
            <div className="relative w-full rounded-2xl bg-[#092928] py-20 md:h-1/2">
              <img
                src="/webp/caligraphy05.webp"
                alt="Caligraphy 05"
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="relative aspect-video w-full rounded-2xl bg-[#014E3E] md:aspect-auto md:h-2/3">
              <img
                src="/webp/caligraphy01.webp"
                alt="Caligraphy 01"
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="getToKnow"
        className="p-6 py-8 md:mx-8 md:flex md:items-center md:justify-center"
      >
        <div className="relative flex aspect-[5/1] w-full flex-col items-center justify-center gap-3 rounded-2xl py-16 md:h-1/2 md:gap-7">
          <img
            src="/webp/main-building-front.webp"
            alt="Main Building Front"
            className="absolute -z-10 h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-[#092928] opacity-50"></div>

          <div className="text-shadow-lg z-10 text-center font-ptserif text-lg text-white md:text-2xl">
            <p>Let’s get to know</p>
            <p>the Raudlatul Irfan</p>
          </div>
          <button className="z-10 rounded-full bg-[#E9B472] px-6 py-1 font-ptserif font-semibold text-white hover:bg-[#C6975D]">
            <Link href="/about-us">Open</Link>
          </button>
        </div>
      </div>
    </>
  );
}
