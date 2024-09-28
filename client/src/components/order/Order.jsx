"use client";
import React from "react";
import Image from "next/image";

export default function Order({ item }) {
  return (
    <>
      <div className="flex h-56 rounded-3xl bg-slate-500 shadow-xl">
        <div className="flex w-full flex-row items-center">
          <Image
            src="/webp/caligraphy01.webp"
            width={100}
            height={100}
            className="h-32 w-32 rounded-lg"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-md font-ptserif font-black">{item.item_name}</h1>
            <div className="flex flex-row gap-2 tracking-wide">
              <p className="font-ptserif text-sm">{}</p>
              <p className="font-ptserif text-sm font-black">{item.price}</p>
            </div>
          </div>
        </div>
        <div className="mx-6 my-8 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D]">
              Waiting
            </p>
            <p className="font-ptserif text-sm font-black">{}</p>
          </div>

          <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA]">
            Cancel
          </button>
        </div>
      </div>
      {/* <div id="cardOrders" className="flex flex-col">
                <div id="cardOrder" className="bg-slate-500 shadow-xl rounded-3xl h-56 flex flex-row">
                    <div className="items-center justify-center flex">
                        <Image
                            src={`/webp/${img}`}
                            alt="img item"
                            className="rounded-lg w-32 h-32"
                            width={100}
                            height={100}
                        />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-black font-ptserif text-md">{title}</h1>
                            <div className="flex flex-row tracking-wide gap-2">
                                <p className="font-ptserif text-sm">{p1}</p>
                                <p className="font-ptserif text-sm font-black">{p2}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div> */}
    </>
  );
}
