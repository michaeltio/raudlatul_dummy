"use client";
import React, { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";
import { getAllData } from "@/api/apiClient";
import Rating from "@/components/profile/Rating";
import Link from "next/link";

export default function RatingPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const user = await isUserSignedIn();
        const userId = user.uid;
        const reviewDataResponse = await getAllData(`users/${userId}/review`);
        const userReview = reviewDataResponse.data.map((review) => ({
          userId: userId,
          reviewId: review.id,
          ...review,
        }));
        setItems(userReview);
      } catch (error) {
        console.error("Error fetching users with sent:", error);
      }
    };

    fetchRating();
  }, []);

  return (
    <>
      <div id="mainRating" className="mx-5 py-12 md:mx-10">
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
          <Rating key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
