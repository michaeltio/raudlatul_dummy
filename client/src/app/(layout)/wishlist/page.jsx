"use client";

import Item from "@/components/shop/Item";
import { isUserSignedIn } from "@/api/auth";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [uid, setUid] = useState("");

  useEffect(() => {
    console.log("isUserSigned", isUserSignedIn());
    const fetchWishlistData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userResponse = await axios.get("http://localhost:3001/user", {
            headers: {
              Authorization: `${token}`,
            },
          });
          const userId = userResponse.data.user.uid;
          setUid(userId);

          const wishlistDataResponse = await axios.get(
            `http://localhost:3001/read/wishlist/${userId}`,
          );
          console.log("wishlistDataResponse", wishlistDataResponse);
          setWishlistItems(wishlistDataResponse.data);
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
        }
      }
    };

    fetchWishlistData();
  }, []);

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-center text-4xl font-bold">Wishlist</h1>
      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item, i) => (
            <Item
              key={item.item_id || i}
              image={item.image}
              name={item.item_name}
              price={item.price.toLocaleString()} // Ensure this is the correct format
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}
