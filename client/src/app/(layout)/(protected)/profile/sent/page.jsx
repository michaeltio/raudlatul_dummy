"use client";
import React, { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";
import { getAllData } from "@/api/apiClient";
import Sent from "@/components/profile/Sent";
import Link from "next/link";

export default function SentPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchSent = async () => {
      try {
        const user = await isUserSignedIn();
        const userId = user.uid;
        const sentDataResponse = await getAllData(`users/${userId}/process`);
        const userSent = sentDataResponse.data.map((sent) => ({
          userId: userId,
          sentId: sent.id,
          ...sent,
        }));
        setItems(userSent);
      } catch (error) {
        console.error("Error fetching users with sent:", error);
      }
    };

    fetchSent();
  }, []);

  return (
    <div id="mainSent" className="mx-5 py-12 md:mx-10">
      <div
        id="navShop"
        className="mb-10 flex flex-row items-center justify-center gap-5 md:justify-center md:gap-14"
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
      </div>
      {items.map((item) => (
        <Sent key={item.id} item={item} />
      ))}
    </div>
  );
}
