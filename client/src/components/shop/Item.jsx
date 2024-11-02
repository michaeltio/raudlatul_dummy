"use client";
import Image from "next/image";

export default function Item({ image, name, price }) {
  return (
    <div className="relative w-32 sm:w-64">
      <div className="relative flex aspect-[9/12] w-full flex-col">
        <Image
          src={`/webp/${image}`}
          alt="Item"
          width={500}
          height={500}
          className="absolute h-full w-full rounded-2xl object-cover sm:rounded-3xl"
        />
        <div className="absolute bottom-[-5px] right-[-5px] flex aspect-square w-10 items-center justify-center rounded-full bg-[#E9B472] hover:cursor-pointer hover:bg-[#C6975D] sm:w-16">
          <Image
            src="/svg/icon/plus.svg"
            alt="Add to cart"
            width={20}
            height={20}
            className="w-1/3"
          />
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-wrap font-semibold">{name}</h1>
        <p>Rp. {price}</p>
      </div>
    </div>
  );
}
