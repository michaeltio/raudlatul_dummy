import React from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";

export default function Service() {
  return (
    <>
      <div id="mainRating" className="">
        <div
          id="navShop"
          className="mb-10 flex flex-row items-center justify-center gap-8"
        >
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Order
          </button>
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Sent
          </button>
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Rating
          </button>
        </div>
        <Rating
          img="caligraphy01.webp"
          title="Kaligrafi Surah Yasin 20x40"
          p1="Total 1 Product:"
          p2="Rp 1.250.000"
          p3="1x"
        />
        <Rating
          img="caligraphy01.webp"
          title="Kaligrafi Surah Al-Fatihah 40x40"
          p1="Total 2 Product:"
          p2="Rp 4.250.000"
          p3="3x"
        />
      </div>
    </>
  );
}
