"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { isUserSignedIn } from "@/api/auth";
import axios from "axios";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

export default function NavigationBar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [isSignedIn, setIsSignedIn] = useState();

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
          console.log(response.data.user);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, []);

  console.log("isSignedIn", isSignedIn);

  return (
    <>
      <nav className="fixed z-50 flex w-screen flex-row items-center justify-between bg-primaryWhite bg-opacity-50 px-6 py-4 shadow-[rgba(0,0,15,0.25)_0px_5px_5px_0px] backdrop-blur-sm md:px-12 md:py-6">
        <h1 className="text-2xs font-ptserif font-semibold tracking-wide md:text-lg">
          Raudlatul Irfan
        </h1>
        <button
          className="md:hidden"
          onClick={() => {
            setHamburgerActive(!hamburgerActive);
          }}
        >
          <Image
            src="/svg/icon/hamburger.svg"
            alt="hamburger-icon"
            width={20}
            height={20}
          />
        </button>
        <div className="hidden items-center gap-12 md:flex">
          <Link href="/">
            <h1 className={`inline border-b-2 border-[#E9B472]`}>Home</h1>
          </Link>
          <Link href="/service">
            <h1 className={`inline border-b-2 border-[#E9B472]`}>Service</h1>
          </Link>
          <Link href="/about-us">
            <h1 className={`inline border-b-2 border-[#E9B472]`}>About</h1>
          </Link>
          <Link href="/shop">
            <h1 className={`inline border-b-2 border-[#E9B472]`}>Shop</h1>
          </Link>
          <Link
            href="/login"
            className="w-24 rounded-full bg-[#092928] py-1 text-center text-white"
          >
            Login
          </Link>
          <button
            onClick={handleSignOut}
            className="w-24 rounded-full bg-[#e63946] py-1 text-center text-white"
          >
            Sign Out
          </button>
        </div>
      </nav>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {hamburgerActive && (
            <m.div
              initial={{ right: "-50%" }}
              animate={{ right: "0%" }}
              exit={{ right: "-50%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-1/3 flex-col bg-primaryWhite bg-opacity-50 px-6 font-ptserif text-base font-semibold shadow-[-5px_0_5px_0px_rgba(0,0,15,0.25)] backdrop-blur-sm md:hidden"
            >
              <button
                className="absolute left-0 top-0 px-2 py-4"
                onClick={() => {
                  setHamburgerActive(!hamburgerActive);
                }}
              >
                <Image
                  src="/svg/icon/x-close.svg"
                  alt="x-close-icon.svg"
                  width={10}
                  height={10}
                />
              </button>
              <div className="flex flex-col gap-8">
                <div className="mt-24 flex flex-col gap-4">
                  <Link href="/">
                    <h1 className={`inline border-b-2 border-[#E9B472]`}>
                      Home
                    </h1>
                  </Link>
                  <Link href="/service">
                    <h1 className={`inline border-b-2 border-[#E9B472]`}>
                      Service
                    </h1>
                  </Link>
                  <Link href="/about-us">
                    <h1 className={`inline border-b-2 border-[#E9B472]`}>
                      About
                    </h1>
                  </Link>
                  <Link href="/shop">
                    <h1 className={`inline border-b-2 border-[#E9B472]`}>
                      Shop
                    </h1>
                  </Link>
                </div>
                {!isAuthenticated ? (
                  <Link
                    href="/login"
                    className="w-full rounded-full bg-[#092928] py-1 text-center text-white"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleSignOut}
                    className="w-full rounded-full bg-[#e63946] py-1 text-center text-white"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}
