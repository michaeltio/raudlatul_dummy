"use client";
import React from "react";
import Image from "next/image";

export default function Sent({ item }) {
  console.log(item);

  return (
    <div className="mb-5 flex rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
      <div className="m-5 flex w-full flex-row items-center gap-3 md:m-6 md:my-5 md:gap-6">
        <img
          src={item.item_image}
          width={100}
          height={100}
          className="aspect-square w-20 rounded-lg md:w-32"
        />
        <div className="flex w-full flex-row gap-1">
          <div className="flex flex-col gap-1">
            <h1 className="line-clamp-2 font-ptserif text-base font-black md:text-xl">
              {item.item_name}
            </h1>
          </div>

          <div className="flex w-full flex-col gap-1">
            <div className="flex flex-col items-end">
              <p
                className={`font-ptserif text-sm font-black tracking-wide md:text-lg ${
                  item.status === "Pending"
                    ? "text-yellow-500"
                    : item.status === "Processing"
                      ? "text-blue-500"
                      : item.status === "Shipped"
                        ? "text-purple-500"
                        : item.status === "Delivered"
                          ? "text-green-500"
                          : "text-[#C6975D]"
                }`}
              >
                {item.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
