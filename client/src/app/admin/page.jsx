import React from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";

export default function Admin() {
  return (
    <>
      <div id="mainAdmin" className="mx-6">
        <section
          id="contOPR"
          className="flex w-full flex-row items-center justify-between"
        >
          <div
            id="Order"
            className="relative flex aspect-square w-3/12 items-center justify-center rounded-3xl bg-[#092928]"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA]">
                Order
              </p>
              <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                12
              </p>
            </div>
          </div>
          <div
            id="Process"
            className="relative flex aspect-square w-3/12 items-center justify-center rounded-3xl bg-[#092928]"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA]">
                Process
              </p>
              <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                12
              </p>
            </div>
          </div>
          <div
            id="Rating"
            className="relative flex aspect-square w-3/12 items-center justify-center rounded-3xl bg-[#092928]"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA]">
                Rating
              </p>
              <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
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
          className="mt-5 flex w-full items-center justify-center"
        >
          <div className="flex aspect-[16/8] w-full flex-col items-center justify-center gap-3 rounded-[3rem] bg-[#014E3E]">
            <Image
              src="/svg/icon/plus.svg"
              className=""
              width={30}
              height={20}
            />
            <p className="font-ptserif text-sm font-black tracking-wide text-[#FAF1EA]">
              Add Item
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
