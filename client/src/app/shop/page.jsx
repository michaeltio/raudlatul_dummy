"use client";
import React, { useEffect, useState } from "react";
import { getAllData } from "@/api/apiClient";
import ShopCard from "@/components/shop/ShopCard";
import SearchBar from "@/components/search-bar/SearchBar";

export default function Shop() {
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
    <div className="flex flex-col">
      <SearchBar/>
      <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 md:gap-10">
        {items.map((item, index) => (
          <ShopCard key={index} data={item}/>
        ))}
      </div>
    </div>
  );
}
