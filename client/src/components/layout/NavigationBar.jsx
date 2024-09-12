"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

export default function NavigationBar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <>
      <nav className="mb-6 flex w-screen flex-row items-center justify-between px-6 py-4 shadow-[rgba(0,0,15,0.25)_0px_5px_5px_0px] md:px-12 md:py-6">
        <h1 className="font-ptserif text-2xs font-semibold tracking-wide md:text-lg">
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
          <Link href="">
            <h1 className={`inline border-b-2 border-[#E9B472]`}>Home</h1>
          </Link>
          <Link href="/service">
            <h1 className={`inline border-b-2 border-[#E9B472]`}>Service</h1>
          </Link>
          <Link href="/about">
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
              className="fixed right-0 top-0 z-50 flex h-screen w-1/3 flex-col bg-black bg-opacity-10 px-6 font-ptserif text-base font-semibold shadow-[-5px_0_5px_0px_rgba(0,0,15,0.25)] backdrop-blur-sm md:hidden"
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
                  <Link href="">
                    <h1 className={`inline border-b-2 border-[#E9B472]`}>
                      Home
                    </h1>
                  </Link>
                  <Link href="/service">
                    <h1 className={`inline border-b-2 border-[#E9B472]`}>
                      Service
                    </h1>
                  </Link>
                  <Link href="/about">
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
                <Link
                  href="/login"
                  className="w-full rounded-full bg-[#092928] py-1 text-center text-white"
                >
                  Login
                </Link>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}
