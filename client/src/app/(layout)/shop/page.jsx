"use client";

import Link from "next/link";
import Item from "@/components/shop/Item";
import React, { useEffect, useState } from "react";
import { getAllData } from "@/api/apiClient";
import Image from "next/image";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllData("kaligraphyItem");
        setItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(
          (item) =>
            item.name && item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
  }, [search, items]);

  return (
    <>
      <div className="flex flex-col py-12">
        <div className="flex w-full flex-row gap-3 px-8 md:gap-6 md:px-16">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="h-8 w-full rounded-full border border-black bg-transparent p-2 px-6 shadow-lg md:h-10 dark:shadow-gray-300"
          />
          <Link
            href="/cart"
            className="aspect-square h-8 rounded-full bg-[#092928] shadow-lg hover:bg-black md:h-10 dark:shadow-gray-600"
          >
            <Image
              src="/svg/icon/cart.svg"
              width={100}
              height={100}
              className="w-full p-2"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, i) => <Item key={i} item={item} />)
          ) : (
            <p>Loading items...</p>
          )}
        </div>
      </div>
    </>
  );
}
