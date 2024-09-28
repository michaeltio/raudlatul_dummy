"use client";
import React from "react";
import Image from "next/image";

export default function Sent({ item })
{
    return (
        <div id="cardOrders" className="flex flex-col p-3">
                <div id="contOrder" className=" bg-[#FAF1EA] shadow-xl rounded-3xl h-56">
                    <p className="font-black font-ptserif text-sm text-[#C6975D] flex justify-end p-4 tracking-wide">On The Way</p>
                    <div className="flex flex-row justify-around">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/webp/caligraphy01.webp"
                                alt="img item"
                                className="rounded-lg w-32 h-32"
                                width={32}
                                height={32}
                            />
                        </div> 
                        <div className="flex flex-col gap-3">
                            <h1 className="font-black font-ptserif text-md">{item.item_name}</h1>
                            <div className="flex flex-row tracking-wide gap-2">
                                <p className="font-ptserif text-sm">{}</p>
                                <p className="font-ptserif text-sm font-black">{item.price}</p>
                            </div>
                        </div>
                        <p className="font-black font-ptserif text-sm">{}</p>   
                    </div>
                    <div className="flex justify-end">
                        <button className="text-[#C11313] font-black font-ptserif underline hover:text-black">Courier Detail</button>
                    </div>  
                </div>
            </div>
    )
}