"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";
import Adrating from "@/components/admin-rating/Adrating";

export default function AdminRating() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchReviews();
  }, []);
  console.log(reviews)

  return (
    <>
      <div id="mainAdminProcess">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Rating
            </h1>
            <Adrating reviews={reviews}/>
          </div>
        </section>
      </div>
    </>
  );
}
