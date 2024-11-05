"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Order from "@/components/profile/Order";
import Link from "next/link";

export default function Service(key) {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Calligraphy Art",
      price: "$100",
      orderNumber: "Order #12345",
      image: "/webp/caligraphy01.webp",
    },
    {
      id: 2,
      title: "Handmade Pottery",
      price: "$75",
      orderNumber: "Order #12346",
      image: "/webp/caligraphy01.webp",
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

  return (
    <div id="mainOrder" className="mx-5 py-12 md:mx-10">
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
      <div>
        {items.map((item) => (
          <Order key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
