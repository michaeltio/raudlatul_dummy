"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/shop/Item";

export async function getAllData(uid) {
  try {
    // Ubah port ke 3001 agar terhubung ke server Express
    const response = await fetch(`http://localhost:3001/read/cart/${uid}`);
    const data = await response.json();
    console.log("API Response:", data); // Cek data yang diterima
    return data;
  } catch (error) {
    console.error("Error in getAllData:", error);
  }
}

export default function Cart() {
  const [cartItems, setCartItems] = useState([]); // Initialize as an empty array
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = "qvZGpjCH8HTrGNPsoaov0UjIHEu1";
        const response = await getAllData(userId); 
        setCartItems(response); 
        console.log("Fetched items:", response); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  console.log("Cart items:", cartItems);

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-center text-4xl font-bold">Cart</h1>
      <div className="mx-auto mt-12 flex w-1/3 flex-row justify-between rounded-full bg-[#092928] px-16 py-2 text-white">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold">Rp. {total.toLocaleString()}</h1>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {cartItems.map((item, i) => (
          <Item
            key={item.id || i}
            image={item.image}
            name={item.name}
            price={item.price.toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
}
