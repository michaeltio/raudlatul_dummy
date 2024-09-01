import React from "react";
import Image from "next/image";

export default function Service() {
  return (
    <>
      <div id="mainService" className="overflow-x-hidden">
        <div
          id="landPage"
          className="mt-14 flex h-auto w-screen flex-row items-center gap-10"
        >
          <Image
            src="/webp/tester.webp"
            alt="img landSevice"
            className="h-full w-80 rounded-r-lg"
            width={50}
            height={100}
          />
          <a className="item-center justify-center font-ptserif text-xl font-black">
            Service Part
          </a>
        </div>

        <div id="topValues" className="h-auto w-screen">
          <div
            id="titleTop"
            className="mt-24 flex flex-col items-center justify-center"
          >
            <a className="item-center justify-center font-ptserif text-2xl font-black">
              TOP VALUES FOR YOU
            </a>
            <p className="item-center justify-center font-ptserif text-xs font-light tracking-wide">
              Try Variety of benefits when using our service
            </p>
          </div>

          <div
            id="contTop"
            className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-28"
          >
            <div id="listTop1" className="mt-14 flex flex-row gap-28">
              <div id="bookingTop" className="flex flex-col items-center">
                <Image
                  src=""
                  alt="booking"
                  className="rounded-full bg-[#092928]"
                  width={60}
                  height={60}
                />
                <a className="item-center mt-2 justify-center font-ptserif text-lg font-black">
                  Easy Booking
                </a>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  Quick and easy booking of
                </p>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  tours for upcoming dates
                </p>
              </div>
              <div id="priceTop" className="flex flex-col items-center">
                <Image
                  src=""
                  alt="price"
                  className="rounded-full bg-[#092928]"
                  width={60}
                  height={60}
                />
                <a className="item-center mt-2 justify-center font-ptserif text-lg font-black">
                  Best Price
                </a>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  Quick and easy booking of
                </p>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  tours for upcoming dates
                </p>
              </div>
            </div>

            <div id="listTop2" className="mt-14 flex flex-row gap-28">
              <div id="qualityTop" className="flex flex-col items-center">
                <Image
                  src=""
                  alt="quality"
                  className="rounded-full bg-[#092928]"
                  width={60}
                  height={60}
                />
                <a className="item-center mt-2 justify-center font-ptserif text-lg font-black">
                  Quality
                </a>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  Quick and easy booking of
                </p>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  tours for upcoming dates
                </p>
              </div>
              <div id="requestTop" className="flex flex-col items-center">
                <Image
                  src=""
                  alt="request"
                  className="rounded-full bg-[#092928]"
                  width={60}
                  height={60}
                />
                <a className="item-center mt-2 justify-center font-ptserif text-lg font-black">
                  By Request
                </a>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  Quick and easy booking of
                </p>
                <p className="item-center justify-center font-ptserif text-xs font-light">
                  tours for upcoming dates
                </p>
              </div>
            </div>
          </div>

          <div
            id="contContact"
            className="mt-20 flex h-auto w-screen flex-col gap-14 md:mt-44 md:flex-row md:items-center md:justify-center"
          >
            <div
              id="contTitle"
              className="flex flex-col items-center md:items-start"
            >
              <a className="font-ptserif text-2xl font-black">Contact Us!</a>
              <p className="item-center justify-center font-ptserif text-xs font-light tracking-wide">
                For More Detail About Our Service
              </p>
            </div>

            <div
              id="contInfo"
              className="flex flex-col items-center gap-10 md:flex md:flex-row md:gap-28 md:rounded-full md:border-2 md:border-[#092928] md:p-5"
            >
              <div
                id="contPhone"
                className="flex flex-row items-center justify-center gap-5"
              >
                <Image
                  src=""
                  alt="phone"
                  className="rounded-full bg-[#092928]"
                  width={40}
                  height={40}
                />
                <a className="item-center mt-2 justify-center font-ptserif text-lg font-black">
                  : +62 812 345 6789
                </a>
              </div>
              <div
                id="contMail"
                className="flex flex-row items-center justify-center gap-5"
              >
                <Image
                  src=""
                  alt="Mail"
                  className="rounded-full bg-[#092928]"
                  width={40}
                  height={40}
                />
                <a className="item-center mt-2 justify-center font-ptserif text-lg font-black">
                  : RaudlatulIrfan@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
