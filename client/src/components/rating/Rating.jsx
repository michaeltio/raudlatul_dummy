"use client";
import React from "react";
import Image from "next/image";

export default function Rating({ item }) {
  return (
    <div id="cardOrders" className="flex flex-col p-3">
      <div id="contOrder" className="h-56 rounded-3xl bg-[#FAF1EA] shadow-xl">
        <p className="flex justify-end p-4 font-ptserif text-sm font-black tracking-wide text-[#C6975D]">
          Finished
        </p>
        <div className="flex flex-row justify-around">
          <div className="flex items-center justify-center">
            <Image
              src="/webp/caligraphy01.webp"
              alt="img item"
              className="h-32 w-32 rounded-lg"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-md font-ptserif font-black">{item.item_name}</h1>
            <div className="flex flex-row gap-2 tracking-wide">
              <p className="font-ptserif text-sm">{}</p>
              <p className="font-ptserif text-sm font-black">{item.price}</p>
            </div>
          </div>
          <p className="font-ptserif text-sm font-black">{}</p>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button className="w-24 rounded-3xl border-[0.12rem] border-[#092928] p-1 font-ptserif font-black text-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]">
            Buy Again
          </button>
          <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA]">
            Rate
          </button>
        </div>
      </div>
    </div>
  );
}
