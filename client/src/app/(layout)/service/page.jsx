import React from "react";
import TopValue from "@/components/service/TopValue";

export default function Service() {
  return (
    <>
      <div id="mainService" className="flex flex-col py-12">
        <div id="landPage" className="flex flex-row items-center">
          <img
            src="/webp/caligraphy06.webp"
            alt="img landSevice"
            className="aspect-[16/11] w-4/6 rounded-e-2xl md:w-1/2 md:rounded-e-3xl"
            width={1000}
            height={100}
          />
          <div className="flex w-1/2 items-center justify-center">
            <h1 className="item-center justify-center font-ptserif text-xs font-black md:text-3xl">
              Service Part
            </h1>
          </div>
        </div>

        <div id="topValues" className="h-auto">
          <div
            id="titleTop"
            className="mt-14 flex flex-col items-center justify-center md:mt-20"
          >
            <a className="item-center justify-center font-ptserif text-2xl font-black">
              TOP VALUES FOR YOU
            </a>
            <p className="item-center justify-center font-ptserif text-xs font-light tracking-wide">
              Try Variety of benefits when using our service
            </p>
          </div>

          <div className="mt-14 flex max-h-screen items-center justify-center md:mt-20">
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-20 2xl:gap-72">
              <TopValue
                img="booking.svg"
                title="Easy Booking"
                p1="Quick and easy booking of tours for upcoming dates"
              />
              <TopValue
                img="best-price.svg"
                title="Best Price"
                p1="Unbeatable deals, guaranteed value"
              />
              <TopValue
                img="quality.svg"
                title="Quality"
                p1="Premium products, crafted with care"
              />
              <TopValue
                img="by-request.svg"
                title="By Request"
                p1="Tailored to your needs, just ask"
              />
            </div>
          </div>

          <div
            id="contContact"
            className="mt-20 flex h-auto flex-col gap-10 md:flex-row md:items-center md:justify-center md:py-10"
          >
            <div
              id="contTitle"
              className="flex flex-col items-center md:mx-10 md:items-start"
            >
              <a className="font-ptserif text-2xl font-black">Contact Us!</a>
              <p className="item-center justify-center font-ptserif text-xs font-light tracking-wide">
                For More Detail About Our Service
              </p>
            </div>

            <div
              id="contInfo"
              className="flex flex-col items-center justify-center gap-10 md:flex md:w-2/3 md:flex-row md:gap-0 md:rounded-full md:border-2 md:border-[#092928] md:p-5"
            >
              <div
                id="contPhone"
                className="flex flex-row items-center justify-center gap-3 md:flex-1"
              >
                <img
                  src="/svg/icon/email.svg"
                  alt="phone"
                  className="w-7 rounded-full bg-[#092928] p-1"
                  width={40}
                  height={40}
                />
                <a className="text-md font-ptserif">
                  : RaudlatulIrfan@gmail.com
                </a>
              </div>
              <div
                id="contMail"
                className="flex flex-row items-center justify-center gap-3 md:flex-1"
              >
                <img
                  src="/svg/icon/whatsapp.svg"
                  alt="Mail"
                  className="w-7 rounded-full bg-[#FAF1EA]"
                  width={40}
                  height={40}
                />
                <a className="text-md font-ptserif">: +62 812 345 6789</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
