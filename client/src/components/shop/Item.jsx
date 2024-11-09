"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";
import { deleteData, updateData } from "@/api/apiClient";
import NextLink from "next/link";

export default function Item({ item, cart }) {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await isUserSignedIn();
      if (!user) return;
      setUserId(user.uid);
    };

    fetchUser();
  }, []);

  const addToCart = async () => {
    try {
      const response = await updateData(`users/${userId}/cart`, item.id, item);
      console.log("Item added to cart:", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const addToContent = async () => {
    try {
      localStorage.setItem("selectedItemId", id);
      window.location.href = "/content";
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const removeFromCart = async () => {
    try {
      const response = await deleteData(`users/${userId}/cart`, item.id);
      console.log("Item removed from cart:", response.data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative w-32 rounded-2xl sm:w-64">
      <div className="relative flex aspect-[9/12] w-full flex-col">
        <NextLink href={`/content/${item.id}`}>
          <div>
            <img
              src={item.image}
              alt="Item"
              width={500}
              height={500}
              className="absolute h-full w-full rounded-2xl object-cover sm:rounded-3xl"
              onClick={addToContent}
            />
          </div>
        </NextLink>

        <div
          onClick={cart ? removeFromCart : addToCart}
          className="absolute bottom-[-5px] right-[-5px] flex aspect-square w-10 items-center justify-center rounded-full bg-[#E9B472] shadow-lg hover:cursor-pointer hover:bg-[#C6975D] sm:w-16 dark:shadow-gray-600"
        >
          <Image
            src={cart ? "/svg/icon/minus.svg" : "/svg/icon/plus.svg"} // Toggle icon based on cart status
            alt={cart ? "-" : "+"}
            width={20}
            height={20}
            className="w-1/3"
          />
        </div>
      </div>
      <div className="pt-4">
        <h1
          className="max-w-[240px] overflow-hidden truncate text-ellipsis whitespace-nowrap font-semibold"
          title={item.name}
        >
          {item.name}
        </h1>
        <p>Rp. {item.price}</p>
      </div>
    </div>
  );
}
