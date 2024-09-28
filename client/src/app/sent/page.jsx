import React from "react";
import Image from "next/image";
import Sent from "@/components/sent/Sent";

export default function Service() {
  return (
    <>
        <div id="mainSent" className="mx-10">
            <div id="navShop" className="mb-10 flex flex-row items-center justify-between gap-10 md:gap-14 md:justify-center">
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Order</button>
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Sent</button>
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Rating</button>
            </div>
            <Sent img="caligraphy01.webp" title="Kaligrafi Surah Yasin 20x40" p1="Total 1 Product:" p2="Rp 1.250.000" p3="1x"/>
            <Sent img="caligraphy01.webp" title="Kaligrafi Surah Al-Fatihah 40x40" p1="Total 2 Product:" p2="Rp 4.250.000" p3="2x"/>
        </div>
    </>
  );
}