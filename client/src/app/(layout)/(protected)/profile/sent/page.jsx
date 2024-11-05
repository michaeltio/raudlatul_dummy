"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sent from "@/components/profile/Sent";
import Link from "next/link";

export default function Service(key) {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "caligraphy01.webp",
      title: "Wireless Headphones",
      p1: "Tracking ID:",
      p2: "1234567890",
      p3: "Expected: Nov 5, 2024",
    },
    {
      id: 2,
      img: "caligraphy01.webp",
      title: "Smartphone Case",
      p1: "Tracking ID:",
      p2: "0987654321",
      p3: "Expected: Nov 7, 2024",
    },
    {
      id: 3,
      img: "caligraphy01.webp",
      title: "Bluetooth Speaker",
      p1: "Tracking ID:",
      p2: "1122334455",
      p3: "Expected: Nov 10, 2024",
    },
  ]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/item");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  console.log(items);

  return (
    <div id="mainSent" className="mx-5 py-12 md:mx-10">
      <div
        id="navShop"
        className="mb-10 flex flex-row items-center justify-between gap-5 md:justify-center md:gap-14"
      >
        <Link href="/profile/order">
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Order
          </button>
        </Link>
        <Link href="/profile/sent">
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Sent
          </button>
        </Link>
        <Link href="/profile/rating">
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Rating
          </button>
        </Link>
      </div>
      {items.map((item) => (
        <Sent key={item.id} item={item} />
      ))}
    </div>
  );
}
