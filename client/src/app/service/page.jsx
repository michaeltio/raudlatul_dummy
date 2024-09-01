"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/api/apiClient";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="mainService" className="overflow-x-hidden">
        <div id="landPage" className="flex flex-row gap-10 w-screen h-auto mt-14 items-center">
          <Image src="/service/tester.webp" alt="img landSevice" className="rounded-r-lg w-80 h-full" width={50} height={100}/>
          <a className="text-xl font-black font-ptserif item-center justify-center">Service Part</a>
        </div>

        <div id="topValues" className="w-screen h-auto">
          <div id="titleTop" className="flex flex-col items-center justify-center mt-24">
            <a className="text-2xl font-black font-ptserif item-center justify-center">TOP VALUES FOR YOU</a>
            <p className="text-xs font-light font-ptserif item-center justify-center tracking-wide">Try Variety of benefits when using our service</p>
          </div>

          <div id="contTop" className="flex flex-col gap-5 items-center md:justify-center md:flex-row md:gap-28">
            <div id="listTop1" className="flex flex-row gap-28 mt-14">
              <div id="bookingTop" className="flex flex-col items-center">
                <Image src="" alt="booking" className="bg-[#092928] rounded-full" width={60} height={60}/>
                <a className="text-lg font-black font-ptserif item-center justify-center mt-2">Easy Booking</a>
                <p className="text-xs font-light font-ptserif item-center justify-center">Quick and easy booking of</p>
                <p className="text-xs font-light font-ptserif item-center justify-center">tours for upcoming dates</p>
              </div>
              <div id="priceTop" className="flex flex-col items-center">
                <Image src="" alt="price" className="bg-[#092928] rounded-full" width={60} height={60}/>
                <a className="text-lg font-black font-ptserif item-center justify-center mt-2">Best Price</a>
                <p className="text-xs font-light font-ptserif item-center justify-center">Quick and easy booking of</p>
                <p className="text-xs font-light font-ptserif item-center justify-center">tours for upcoming dates</p>
              </div>
            </div>

            <div id="listTop2" className="flex flex-row gap-28 mt-14"> 
              <div id="qualityTop" className="flex flex-col items-center">
                <Image src="" alt="quality" className="bg-[#092928] rounded-full" width={60} height={60}/>
                <a className="text-lg font-black font-ptserif item-center justify-center mt-2">Quality</a>
                <p className="text-xs font-light font-ptserif item-center justify-center">Quick and easy booking of</p>
                <p className="text-xs font-light font-ptserif item-center justify-center">tours for upcoming dates</p>
              </div>
              <div id="requestTop" className="flex flex-col items-center">
                <Image src="" alt="request" className="bg-[#092928] rounded-full" width={60} height={60}/>
                <a className="text-lg font-black font-ptserif item-center justify-center mt-2">By Request</a>
                <p className="text-xs font-light font-ptserif item-center justify-center">Quick and easy booking of</p>
                <p className="text-xs font-light font-ptserif item-center justify-center">tours for upcoming dates</p>
              </div>
            </div>
          </div>

          <div id="contContact" className="w-screen h-auto flex flex-col gap-14 mt-20 md:justify-center md:flex-row md:mt-44 md:items-center">
            <div id="contTitle" className="flex flex-col items-center md:items-start ">
              <a className="text-2xl font-black font-ptserif">Contact Us!</a>
              <p className="text-xs font-light font-ptserif item-center justify-center tracking-wide">For More Detail About Our Service</p>
            </div>

            <div id="contInfo" className="flex flex-col gap-10 items-center md:flex md:flex-row md:gap-28 md:p-5 md:border-2 md:border-[#092928] md:rounded-full">
              <div id="contPhone" className="flex flex-row items-center gap-5 justify-center ">
                <Image src="" alt="phone" className="bg-[#092928] rounded-full" width={40} height={40}/>
                <a className="text-lg font-black font-ptserif item-center justify-center mt-2">: +62 812 345 6789</a>
              </div>
              <div id="contMail" className="flex flex-row items-center gap-5 justify-center">
                <Image src="" alt="Mail" className="bg-[#092928] rounded-full" width={40} height={40}/>
                <a className="text-lg font-black font-ptserif item-center justify-center mt-2">: RaudlatulIrfan@gmail.com</a>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}
