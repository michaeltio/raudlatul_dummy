"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";
import { postData } from "@/api/apiClient";

export default function Item({ item }) {
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
      const response = await postData(`users/${userId}/cart`, item);
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

  return (
    <div className="relative w-32 rounded-2xl sm:w-64">
      <div className="relative flex aspect-[9/12] w-full flex-col">
        <Image
          src={`/webp/${item.image}`}
          alt="Item"
          width={500}
          height={500}
          className="absolute h-full w-full rounded-2xl object-cover sm:rounded-3xl"
          onClick={addToContent}
        />
        <div
          onClick={addToCart}
          className="absolute bottom-[-5px] right-[-5px] flex aspect-square w-10 items-center justify-center rounded-full bg-[#E9B472] hover:cursor-pointer hover:bg-[#C6975D] sm:w-16"
        >
          <Image
            src={"/svg/icon/plus.svg"} // Toggle icon based on cart status
            alt="test"
            width={20}
            height={20}
            className="w-1/3"
          />
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-wrap font-semibold">{item.name}</h1>
        <p>Rp. {item.price}</p>
      </div>
    </div>
  );
}
