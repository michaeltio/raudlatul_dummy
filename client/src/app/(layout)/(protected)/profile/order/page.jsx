"use client";
import React, { useEffect, useState } from "react";
import Order from "@/components/profile/Order";
import Link from "next/link";
import { getAllData } from "@/api/apiClient";
import { isUserSignedIn } from "@/api/auth";

export default function OrderPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = await isUserSignedIn();
        const userId = user.uid;
        const orderDataResponse = await getAllData(`users/${userId}/order`);
        const userOrders = orderDataResponse.data.map((order) => ({
          userId: userId,
          orderId: order.id,
          ...order,
        }));
        setItems(userOrders);
      } catch (error) {
        console.error("Error fetching users with orders:", error);
      }
    };

    fetchOrders();
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
