"use client";
import React from "react";
import Image from "next/image";

export default function Rating({ data }) {
  return (
    <div className="mb-5 flex h-56 rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
      <div className="ms-7 flex w-full flex-row items-center gap-6 md:ms-12">
        <Image
          src={"/webp/caligraphy01.webp"}
          width={100}
          height={100}
          className="h-32 w-32 rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-ptserif text-base font-black md:text-xl">
            {data.item_name}
          </h1>
          <div className="flex flex-row gap-2 tracking-wide">
            <p className="font-ptserif text-sm">{}</p>
            <p className="font-ptserif text-sm font-black">{data.price}</p>
          </div>
        </div>
      </div>
      <div className="my-4 me-5 flex flex-col items-end justify-between md:my-7 md:me-8">
        <div className="flex flex-col items-end">
          <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D] md:text-lg">
            Finished
          </p>
          <p className="font-ptserif text-sm font-black md:text-base">{}</p>
        </div>

        <div className="flex flex-row justify-end gap-3 md:gap-5">
          <button className="w-24 rounded-3xl border-[0.12rem] border-[#092928] p-1 font-ptserif text-sm font-black text-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA] md:w-28 md:text-lg">
            Buy Again
          </button>
          <button className="w-20 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif text-sm font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA] md:w-24 md:text-lg">
            Rate
          </button>
        </div>
      </div>
    </div>
    // <div id="cardOrders" className="flex flex-col p-3">
    //   <div id="contOrder" className="h-56 rounded-3xl bg-[#FAF1EA] shadow-xl">
    //     <p className="flex justify-end p-4 font-ptserif text-sm font-black tracking-wide text-[#C6975D]">
    //       Finished
    //     </p>
    //     <div className="flex flex-row justify-around">
    //       <div className="flex items-center justify-center">
    //         <Image
    //           src={`/webp/${img}`}
    //           alt="img item"
    //           className="h-32 w-32 rounded-lg"
    //           width={32}
    //           height={32}
    //         />
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <h1 className="text-md font-ptserif font-black">{title}</h1>
    //         <div className="flex flex-row gap-2 tracking-wide">
    //           <p className="font-ptserif text-sm">{p1}</p>
    //           <p className="font-ptserif text-sm font-black">{p2}</p>
    //         </div>
    //       </div>
    //       <p className="font-ptserif text-sm font-black">{p3}</p>
    //     </div>
    // <div className="flex flex-row justify-end gap-5">
    //   <button className="w-24 rounded-3xl border-[0.12rem] border-[#092928] p-1 font-ptserif font-black text-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]">
    //     Buy Again
    //   </button>
    //   <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA]">
    //     Rate
    //   </button>
    // </div>
    //   </div>
    // </div>
  );
}
