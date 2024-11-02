"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/components/search-bar/SearchBar";
import ShopCard from "@/components/shop/ShopCard";
import { getAllData } from "@/api/apiClient";

export default function Wishlist() {
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

  console.log(items);

  return (
    <div className="flex flex-col md:gap-8">
      <h1 className="text-center font-ptserif text-xl font-semibold md:text-4xl">
        Wishlist
      </h1>
      <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 md:gap-10">
        {items.map((item) => (
          <ShopCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
