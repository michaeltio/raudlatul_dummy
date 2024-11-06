"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";

export default function Item({
  image,
  name,
  price,
  isInCart,
  onToggleCart,
  quantity,
  id,
}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("isUserSignedIn", isUserSignedIn());
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:3001/user", {
            headers: {
              Authorization: `${token}`,
            },
          });

          setUser(response.data.user);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleToggleCart = () => {
    try {
      const response = axios.post(
        `http://localhost:3001/create/${user.uid}/cart`,
        {
          item_id: id,
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative w-32 rounded-2xl hover:bg-[#EADFD7] sm:w-64">
      <div className="relative flex aspect-[9/12] w-full flex-col">
        <Image
          src={`/webp/${image}`}
          alt="Item"
          width={500}
          height={500}
          className="absolute h-full w-full rounded-2xl object-cover sm:rounded-3xl"
        />
        <div
          onClick={handleToggleCart}
          className="absolute bottom-[-5px] right-[-5px] flex aspect-square w-10 items-center justify-center rounded-full bg-[#E9B472] hover:cursor-pointer hover:bg-[#C6975D] sm:w-16"
        >
          <Image
            src={isInCart ? "/svg/icon/minus.svg" : "/svg/icon/plus.svg"} // Toggle icon based on cart status
            alt={isInCart ? "Remove from cart" : "Add to cart"}
            width={20}
            height={20}
            className="w-1/3"
          />
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-wrap font-semibold">{name}</h1>
        <p>Rp. {price}</p>
        {isInCart && <p>Quantity: {quantity}</p>}
      </div>
    </div>
  );
}
