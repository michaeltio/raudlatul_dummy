import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div id="mainHome" className="">
      <div className="space-y-6 py-16 text-center">
        <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
          Looking for Beautiful Calligraphy
        </h2>
        <div className="flex w-full flex-row justify-center gap-6 px-16">
          <input
            type="text"
            placeholder=""
            className="h-8 w-3/4 rounded-full border border-black bg-transparent p-2 md:h-10 md:w-7/12"
          />
          <button className="text-md w-24 rounded-full border border-black py-1 font-ptserif font-bold md:w-36 md:text-lg">
            Search
          </button>
        </div>
        <div className="justify-center">
          <div className="flex items-center justify-center gap-12">
            <h1 className={`inline font-ptserif`}>Home</h1>
            <h1 className={`inline font-ptserif`}>Service</h1>
            <h1 className={`inline font-ptserif`}>About</h1>
            <h1 className={`inline font-ptserif`}>Shop</h1>
          </div>
        </div>
      </div>

      <div id="pembatas" className="grid grid-cols-3 py-6 md:py-8">
        <div className="relative col-span-2 w-full rounded-e-2xl bg-[#092928]">
          <Image
            src="/webp/main-building.webp"
            layout="fill"
            objectFit="cover"
            className="rounded-e-2xl"
          />
          <div className="absolute inset-0 rounded-e-2xl bg-[#092928] opacity-50"></div>
        </div>
        <div className="relative aspect-[16/7] w-full rounded-s-2xl bg-[#E9B472] md:aspect-[16/4]">
          <Image
            src="/webp/building-certificate.webp"
            layout="fill"
            objectFit="cover"
            className="rounded-s-2xl"
          />
          <div className="absolute inset-0 rounded-s-2xl bg-[#092928] opacity-50"></div>
        </div>
      </div>

      <div id="collections" className="py-8">
        <div className="text-center">
          <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
            Our Collections
          </h2>
        </div>
        <div className="justify-center space-y-3 p-6 md:flex md:space-x-3 md:space-y-0">
          <div id="3Foto" className="space-y-3 md:flex-1">
            <div className="grid grid-cols-3 gap-3">
              <div className="relative col-span-2 aspect-[16/12] w-full rounded-2xl bg-[#092928] py-20 md:aspect-auto md:py-32">
                <Image
                  src="/webp/caligraphy02.webp"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="relative w-full rounded-2xl bg-[#092928] py-20 md:py-32">
                <Image
                  src="/webp/caligraphy03.webp"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="relative w-full rounded-2xl bg-[#092928] p-14 md:p-20">
              <Image
                src="/webp/caligraphy04.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div id="2Foto" className="space-y-3 md:flex-1">
            <div className="relative w-full rounded-2xl bg-[#092928] py-20">
              <Image
                src="/webp/caligraphy05.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <div className="relative aspect-video w-full rounded-2xl bg-[#014E3E] md:aspect-auto md:h-3/5">
              <Image
                src="/webp/caligraphy01.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="getToKnow" className="p-6">
        <div className="relative flex aspect-[5/1] w-full flex-col items-center justify-center gap-3 rounded-2xl py-16 md:gap-7">
          <Image
            src="/webp/main-building-front.webp"
            width={1000}
            height={1000}
            className="absolute -z-10 h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-[#092928] opacity-50"></div>

          <div className="z-10 text-center font-ptserif text-lg text-white md:text-2xl">
            <p>Let’s get to know</p>
            <p>the Raudlatul Irfan</p>
          </div>
          <button className="z-10 rounded-full bg-[#E9B472] px-6 py-1 font-ptserif font-semibold text-white">
            Open
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
