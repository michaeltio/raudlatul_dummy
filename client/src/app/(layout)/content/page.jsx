"use client";

import SearchBar from "@/components/shop/SearchBar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

// export async function getAllData(endpoint) {
//   try {
//     // Ubah port ke 3001 agar terhubung ke server Express
//     const response = await fetch(`http://localhost:3001/read/${endpoint}`);
//     const data = await response.json();
//     console.log("API Response:", data); // Cek data yang diterima
//     return data;
//   } catch (error) {
//     console.error("Error in getAllData:", error);
//   }
// }

export default function Content() {
  const [items, setItems] = useState([]);
  const [uid, setUid] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const selectedItemId = localStorage.getItem("selectedItemId");
      try {
        const userResponse = await axios.get("http://localhost:3001/user", {
          headers: {
            Authorization: `${token}`,
          },
        });
        const userId = userResponse.data.user.uid;
        // setUid(userId);

        const [contentDataResponse, kaligraphyItems] = await Promise.all([
          axios.get(`http://localhost:3001/read/content/${userId}`),
          axios.get(`http://localhost:3001/read/kaligraphyItem`),
        ]);

        // const filteredItems = kaligraphyItems.data.filter((item) =>
        //   contentDataResponse.data.some(
        //     (cartItem) => cartItem.item_id === item.id,
        //   ),
        // );
        // setCartItems(filteredItems);

        if (
          Array.isArray(contentDataResponse.data) &&
          Array.isArray(kaligraphyItems.data)
        ) {
          const filteredItems = kaligraphyItems.data.filter((item) =>
            contentDataResponse.data.some(
              (cartItem) => cartItem.item_id === item.id,
            ),
          );
          setItems(filteredItems);
        } else {
          console.error("Data format is incorrect.");
        }

        console.log("Content Data Response:", contentDataResponse.data);
        console.log("Kaligraphy Items:", kaligraphyItems.data);

        // const selectedItemId = localStorage.getItem("selectedItemId");
        if (selectedItemId) {
          // Cari item dengan id yang sesuai
          const item = response.find((item) => item.id === selectedItemId);
          setSelectedItem(item);
        }

        console.log("Fetched items:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="mainService" className="flex flex-col gap-8 py-12">
      <SearchBar />
      <div className="md:mx-10 md:flex">
        <div className="space-y-4 px-9 md:flex-1 md:px-6 md:py-0 xl:flex xl:space-x-6 xl:space-y-0">
          {items.map((item, index) => (
            <div className="aspect-[16/11] rounded-2xl bg-[#092928] md:aspect-square md:flex-1 2xl:aspect-[16/11]">
              <Image
                src={`/webp/${item.image}`}
                width={1000}
                height={1000}
                className="object-fit h-full w-full rounded-2xl"
              />
            </div>
          ))}
        </div>

        <div className="content-center space-y-10 p-9 md:flex-1 md:space-y-20">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              {items.map((item, index) => (
                <h2 key={index} className="font-ptserif text-3xl font-bold">
                  {item.item_name}
                </h2>
              ))}

              <div className="flex">
                <Image
                  src="/svg/icon/star-yellow.svg"
                  alt="img star"
                  className="w-8 p-1"
                  width={5}
                  height={5}
                />
                <p className="font-ptserif text-2xl font-bold">4.9/5</p>
              </div>
            </div>
            {items.map((item, index) => (
              <p key={index} className="mb-7 font-ptserif text-lg">
                {item.description}
              </p>
            ))}

            <div className="space-y-1">
              {items.map((item, index) => (
                <p key={index} className="text-md font-ptserif">
                  <b>Artist:</b> {item.artist_name}
                </p>
              ))}
              {items.map((item, index) => (
                <p key={index} className="text-md mb-8 font-ptserif">
                  <b>Created Date:</b>{" "}
                  {item.created_date
                    ? new Date(
                        item.created_date.seconds * 1000,
                      ).toLocaleString()
                    : "No Date Available"}
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <a
              href="#"
              className="text-md mb-6 mt-10 font-ptserif font-bold text-[#E9B472] underline"
            >
              See Reviews
            </a>
            <div className="w-44">
              {items.map((item, index) => (
                <p
                  key={index}
                  className="my-3 text-center font-ptserif text-xl font-bold"
                >
                  {item.price}
                </p>
              ))}
              <Link href="/cart">
                <button className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold hover:border-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
