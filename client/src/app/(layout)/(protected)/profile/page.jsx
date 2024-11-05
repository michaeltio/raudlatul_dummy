"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getData } from "@/api/apiClient";
import { isUserSignedIn } from "@/api/auth";
import axios from "axios";
import Image from "next/image";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [uid, setUid] = useState("");

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
          const userId = response.data.user.uid;
          setUid(userId);
          const userDataResponse = await getData("users", userId);

          setUserData({
            ...userDataResponse.data,
            email: response.data.user.email,
          });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="mx-6 flex flex-col gap-10 py-12 font-ptserif md:justify-center md:px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="flex flex-row justify-center gap-2 md:flex-col md:gap-5">
            <div className="aspect-square w-48 min-w-48 rounded-3xl bg-[#014E3E] md:w-64">
              {/* Profile Picture */}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 md:hidden md:w-0">
              <div className="flex flex-row justify-center gap-6">
                {/* <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div> */}
                <Link href="/cart">
                  <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14">
                    <Image
                      src="/svg/icon/cart.svg"
                      width={100}
                      height={100}
                      className="w-full p-2"
                    />
                  </div>
                </Link>
              </div>
              <button className="rounded-full border border-black px-10 py-1 md:text-2xl">
                Edit
              </button>
            </div>
            <div className="hidden flex-row justify-center gap-10 md:relative md:bottom-0 md:flex">
              {/* <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div> */}
              <Link href="/cart">
                <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14">
                  <Image
                    src="/svg/icon/cart.svg"
                    width={100}
                    height={100}
                    className="w-full p-3"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-full gap-14">
            <div className="flex gap-10 md:items-center md:text-2xl">
              <div className="flex flex-col justify-center gap-8 py-5 md:py-5">
                <div className="text-lg font-semibold md:text-2xl">
                  Username
                </div>
                <div className="text-lg font-semibold md:text-2xl">Email</div>
                <div className="text-lg font-semibold md:text-2xl">
                  No Phone
                </div>
                <div className="text-lg font-semibold md:text-2xl">Address</div>
              </div>

              <div className="flex flex-col gap-6 border-l-2 border-black py-8 ps-8 md:py-5 md:ps-12">
                <div className="md:text-xl">{userData.username}</div>
                <div className="md:text-xl">{userData.email}</div>
                <div className="md:text-xl">{userData.phoneNumber}</div>
                <div className="md:text-xl">{userData.address}</div>
              </div>
            </div>
            <div className="md:flex md:pt-5">
              <div className="hidden justify-center md:flex md:justify-center md:text-2xl">
                <button className="rounded-full border border-black px-10 md:h-12">
                  <Link href="/profile/edit">Edit</Link>
                </button>
              </div>
              <div className="bottom-0 right-0 hidden justify-between md:absolute md:flex md:w-56">
                <Link href="/profile/order">
                  <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                    Order
                  </button>
                </Link>
                <Link href="/profile/sent">
                  <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                    Sent
                  </button>
                </Link>
                <Link href="/profile/rating">
                  <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                    Rating
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 md:hidden md:w-56">
            <Link href="/profile/order">
              <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                Order
              </button>
            </Link>
            <Link href="/profile/sent">
              <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                Sent
              </button>
            </Link>
            <Link href="/profile/rating">
              <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                Rating
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
