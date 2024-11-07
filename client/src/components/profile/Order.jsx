"use client";
import React from "react";
import Image from "next/image";
import { isUserSignedIn } from "@/api/auth";
import { deleteData } from "@/api/apiClient";

export default function Order({ item }) {
  // Ensure item properties are handled safely
  const title = item?.item_name || "Default Item Title";
  const price = item?.item_price || "$50";
  const imageSrc = item?.item_image || "/webp/caligraphy01.webp"; // Default image

  return (
    <div className="mb-5 flex rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
      <div className="m-6 my-5 flex w-full flex-row items-center gap-6">
        <Image
          src={imageSrc}
          alt="Item Image"
          width={100}
          height={100}
          className="aspect-square w-24 rounded-lg md:w-32"
        />
        <div className="flex w-full flex-col gap-3">
          <div className="items-end">
            <div className="flex flex-col items-end">
              <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D] md:text-lg">
                Waiting
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="line-clamp-1 font-ptserif text-base font-black md:text-xl">
              {title}
            </h1>
            <div className="flex flex-row gap-2 tracking-wide">
              <p className="font-ptserif text-xs font-black md:text-sm">
                Rp. {price}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end"></div>
        </div>
      </div>
    </div>
  );
}
