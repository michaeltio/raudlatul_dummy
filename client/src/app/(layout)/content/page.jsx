"use client";

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
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const selectedItemId = localStorage.getItem("selectedItemId");
      console.log("Selected Item ID from localStorage:", selectedItemId); // Log untuk verifikasi

      try {
        const kaligraphyItems = await axios.get(
          "http://localhost:3001/read/kaligraphyItem",
        );

        if (Array.isArray(kaligraphyItems.data)) {
          const selectedItem = kaligraphyItems.data.find(
            (item) => item.id === selectedItemId,
          );

          if (selectedItem) {
            setSelectedItem(selectedItem); // Set item yang dipilih
          } else {
            console.error("Selected item not found.");
          }
        } else {
          console.error("Data format is incorrect. Expected array format.");
        }
        const token = localStorage.getItem("token");
        if (token) {
          const userResponse = await axios.get("http://localhost:3001/user", {
            headers: {
              Authorization: `${token}`,
            },
          });
          setUser(userResponse.data.user); // Set the user data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleToggleCart = async () => {
    if (!user) {
      console.error("User is not logged in.");
      return;
    }

    try {
      // Ensure that the item ID is valid and user is set before making the request
      const response = await axios.post(
        `http://localhost:3001/create/${user.uid}/cart`,
        {
          item_id: selectedItem.id, // Ensure that `selectedItem.id` is used here
        },
      );
      console.log("Item added to cart", response.data);
    } catch (e) {
      console.error("Error adding item to cart", e);
    }
  };

  return (
    <div id="mainService" className="flex flex-col gap-8 py-12">
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
          {selectedItem ? (
            <div className="space-y-3">
              <h2 className="font-ptserif text-3xl font-bold">
                {selectedItem.item_name}
              </h2>

              <div className="flex items-center">
                <Image
                  src="/svg/icon/star-yellow.svg"
                  alt="img star"
                  className="w-8 p-1"
                  width={5}
                  height={5}
                />
                <p className="font-ptserif text-2xl font-bold">4.9/5</p>
              </div>

              <p className="mb-7 font-ptserif text-lg">
                {selectedItem.description}
              </p>

              <div className="space-y-1">
                <p className="text-md font-ptserif">
                  <b>Artist:</b> {selectedItem.artist_name}
                </p>
                <p className="text-md mb-8 font-ptserif">
                  <b>Created Date:</b>{" "}
                  {selectedItem.created_date
                    ? new Date(
                        selectedItem.created_date.seconds * 1000,
                      ).toLocaleString()
                    : "No Date Available"}
                </p>
              </div>

              <div className="relative">
                <a
                  href="#"
                  className="text-md mb-6 mt-10 font-ptserif font-bold text-[#E9B472] underline"
                >
                  See Reviews
                </a>
                <div className="w-44">
                  <p className="my-3 text-center font-ptserif text-xl font-bold">
                    {selectedItem.price}
                  </p>
                  <button
                    onClick={handleToggleCart}
                    className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold hover:border-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
