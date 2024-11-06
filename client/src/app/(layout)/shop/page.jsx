"use client";

import SearchBar from "@/components/shop/SearchBar";
import Item from "@/components/shop/Item";
import React, { useEffect, useState } from "react";
import { getAllData } from "@/api/apiClient";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllData("kaligraphyItem");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col py-12">
      <SearchBar />
      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {items.length > 0 ? (
          items.map((item, i) => (
            <Item
              id={item.id}
              key={i}
              image={item.image}
              name={item.item_name}
              price={item.price}
            />
          ))
        ) : (
          <p>Loading items...</p>
        )}
      </div>
    </div>
  );
}
