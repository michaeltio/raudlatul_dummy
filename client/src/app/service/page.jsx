import React from "react";
import Image from "next/image";
import TopValue from "@/components/service/TopValue";

export default function Service() {
  return (
    <>
      <div id="mainService" className="flex flex-col">
        <div
          id="landPage"
          className="flex flex-row items-center bg-red-500"
        >
          <Image
            src="/webp/tester.webp"
            alt="img landSevice"
            className="w-1/3 rounded-r-lg"
            width={50}
            height={100}
          />
          <div className="flex w-1/2 items-center justify-center">
          <h1 className="item-center justify-center font-ptserif text-xl font-black">
            Service Part
          </h1>
          </div>
          
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
              <TopValue img="booking.svg" title="Easy Booking" p1="Quick and easy booking of" p2="tours for upcoming dates"/>
              <TopValue img="best-price.svg" title="Best Price" p1="Quick and easy booking of" p2="tours for upcoming dates"/>
            </div>
            <div id="listTop2" className="mt-14 flex flex-row gap-28">
              <TopValue img="quality.svg" title="Quality" p1="Quick and easy booking of" p2="tours for upcoming dates"/>
              <TopValue img="by-request.svg" title="By Request" p1="Quick and easy booking of" p2="tours for upcoming dates"/>
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
                  src="/svg/icon/email.svg"
                  alt="phone"
                  className="rounded-full p-1 bg-[#092928]"
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
                  src="/svg/icon/whatsapp.svg"
                  alt="Mail"
                  className="rounded-full bg-[#FAF1EA]"
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
