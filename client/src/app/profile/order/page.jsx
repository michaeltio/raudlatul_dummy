"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Order from "@/components/order/Order";
import { getAllData } from "@/api/apiClient";

export default function Service() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllData("KaligraphyItem");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <div id="mainOrder" className="mx-10">
        <div
          id="navShop"
          className="mb-10 flex flex-row items-center justify-between gap-10 md:justify-center md:gap-14"
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
        <div className="">
          {items.map((item) => (
            <Order key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
