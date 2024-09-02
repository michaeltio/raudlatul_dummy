import React from "react";
import Image from "next/image";
import TopValue from "@/components/service/TopValue";

export default function Service() {
  return (
    <>
        <div id="mainOrder" className="">
            <div id="navShop" className="flex flex-row gap-8 items-center justify-center">
                <button className="bg-[#E9B472] p-2 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Order</button>
                <button className="bg-[#E9B472] p-2 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Sent</button>
                <button className="bg-[#E9B472] p-2 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Rating</button>
            </div>
            <div id="cardOrders" className="flex flex-col mt-14 p-5">
                <div id="cardOrder" className="flex flex-row bg-[#FAF1EA] shadow-lg rounded-3xl h-52">
                    <div className="p-5 items-center justify-center">
                        <Image
                            src="/webp/tester.webp"
                            alt="img item"
                            className="rounded-lg"
                            width={50}
                            height={50}
                        />
                    </div>

                    <div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  );
}