"use client";
import React from "react";
import Image from "next/image";

export default function Order({ item }) {
  return (
    <>
      <div className="mb-5 flex h-56 rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
        <div className="ms-7 flex w-full flex-row items-center gap-6 md:ms-12">
          <Image
            src="/webp/caligraphy01.webp"
            width={100}
            height={100}
            className="h-32 w-32 rounded-lg"
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-ptserif text-base font-black md:text-xl">
              {title}
            </h1>
            <div className="flex flex-row gap-2 tracking-wide">
              <p className="font-ptserif text-sm">{}</p>
              <p className="font-ptserif text-sm font-black">{item.price}</p>
            </div>
          </div>
        </div>
        <div className="my-4 me-5 flex flex-col items-end justify-between md:my-7 md:me-8">
          <div className="flex flex-col items-end">
            <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D] md:text-lg">
              Waiting
            </p>
            <p className="font-ptserif text-sm font-black md:text-base">{p3}</p>
          </div>

          <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA] md:w-28 md:text-lg">
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
