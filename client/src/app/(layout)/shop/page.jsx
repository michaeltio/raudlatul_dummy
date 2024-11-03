"use client";

import SearchBar from "@/components/shop/SearchBar";
import Item from "@/components/shop/Item";
import React, { useEffect, useState } from "react";

export async function getAllData(endpoint) {
  try {
    // Ubah port ke 3001 agar terhubung ke server Express
    const response = await fetch(`http://localhost:3001/read/${endpoint}`);
    const data = await response.json();
    console.log("API Response:", data); // Cek data yang diterima
    return data;
  } catch (error) {
    console.error("Error in getAllData:", error);
  }
}

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllData("kaligraphyItem");
        setItems(response);
        console.log("Fetched items:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Items state updated:", items); // Log setiap kali items di-update
  }, [items]);

  return (
    <div className="flex flex-col py-12">
      <SearchBar />
      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {items.length > 0 ? (
          items.map((item, i) => (
            <Item
              key={item.item_id || i} // Tambahkan fallback untuk key jika item_id tidak tersedia
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
