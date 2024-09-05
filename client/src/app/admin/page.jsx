import React from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";

export default function Admin() {
  return (
    <>
      <div id="mainAdmin" className="">
        <section
          id="contOPR"
          className="flex flex-row items-center justify-center gap-9"
        >
          <div
            id="Order"
            className="relative flex aspect-square w-1/4 items-center justify-center rounded-3xl bg-[#092928]"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA]">
                Order
              </p>
              <p className="font-ptserif text-5xl font-black text-[#FAF1EA]">
                12
              </p>
            </div>
          </div>
          <div
            id="Process"
            className="relative flex aspect-square w-1/4 items-center justify-center rounded-3xl bg-[#092928]"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA]">
                Process
              </p>
              <p className="font-ptserif text-5xl font-black text-[#FAF1EA]">
                12
              </p>
            </div>
          </div>
          <div
            id="Rating"
            className="relative flex aspect-square w-1/4 items-center justify-center rounded-3xl bg-[#092928]"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA]">
                Rating
              </p>
              <p className="font-ptserif text-5xl font-black text-[#FAF1EA]">
                4.8
              </p>
              <div
                id="custRat"
                className="absolute bottom-0 my-2 flex flex-row gap-1"
              >
                <p className="font-ptserif text-2xs font-light text-[#FAF1EA]">
                  15
                </p>
                <p className="font-ptserif text-2xs font-light text-[#FAF1EA]">
                  customer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="addItem"
          className="flex w-4/6 items-center justify-center bg-[#014E3E]"
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/svg/icon/plus.svg"
              className=""
              width={20}
              height={60}
            />
          </div>
        </section>
      </div>
    </>
  );
}
