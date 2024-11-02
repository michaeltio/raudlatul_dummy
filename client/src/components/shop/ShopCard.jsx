"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShopCard({ data }) {
  return (
    <div className="font-ptserif">
      <div className="relative flex aspect-[5/6] w-14 items-end justify-end rounded-2xl bg-[#092928] md:w-80">
        <Image
          src={"/webp/caligraphy01.webp"}
          width={100}
          height={100}
          className="h-full w-full rounded-2xl object-cover"
        />
          <Link href={`shop/content?id=0${data.id}`} passHref>
            <button className="absolute aspect-square w-12 -translate-x-6 -translate-y-6 rounded-full bg-[#E9B472]">
              <Image
                src="/svg/icon/plus.svg"
                width={100}
                height={100}
                className="w-full p-4"
                alt="Plus icon"
              />
            </button>
          </Link>
      </div>
      <h1 className="font-semibold md:text-2xl">{data.item_name}</h1>
      <p className="text-xs md:text-xl">{data.price}</p>
    </div>
  );
}
