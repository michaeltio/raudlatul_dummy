"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/shop/Item";
import { isUserSignedIn } from "@/api/auth";
import { getAllData } from "@/api/apiClient";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(true); // Loading state to manage client-side rendering

  useEffect(() => {
    const fetchCartData = async () => {
      const user = await isUserSignedIn();
      if (user !== null) {
        try {
          const userId = user.uid;
          setUid(userId);

          const [cartDataResponse, kaligraphyItems] = await Promise.all([
            getAllData(`users/${userId}/cart`),
            getAllData("kaligraphyItem"),
          ]);

          // Filter cart items based on user cart data
          const filteredItems = kaligraphyItems.data.filter((item) =>
            cartDataResponse.data.some((cartItem) => cartItem.id === item.id),
          );

          setCartItems(filteredItems);

          // Calculate total price
          const totalPrice = filteredItems.reduce(
            (sum, item) => sum + item.price,
            0,
          );
          setTotal(totalPrice);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      }
      setLoading(false); // Mark loading as false once data is loaded
    };

    fetchCartData();
  }, []);

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-center text-4xl font-bold">Cart</h1>
      <div className="mx-auto mt-12 flex w-1/3 flex-row justify-between rounded-full bg-[#092928] px-16 py-2 text-white">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold">Rp. {total.toLocaleString()}</h1>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {loading ? (
          <p className="text-center text-gray-500">Loading your cart...</p>
        ) : cartItems.length > 0 ? (
          cartItems.map((item, i) => <Item key={i} item={item} />)
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
