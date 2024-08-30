"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

export default function NavigationBar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <>
      <nav className="flex w-screen flex-row items-center justify-between px-6 py-4 shadow-[rgba(0,0,15,0.25)_0px_5px_5px_0px]">
        <h1 className="font-ptserif text-xs font-semibold">Raudlatul Irfan</h1>
        <button
          onClick={() => {
            setHamburgerActive(!hamburgerActive);
          }}
        >
          <Image
            src="/svg/icon/hamburger-icon.svg"
            alt="hamburger-icon"
            width={20}
            height={20}
          />
        </button>
      </nav>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {hamburgerActive && (
            <m.div
              initial={{ right: "-50%" }}
              animate={{ right: "0%" }}
              exit={{ right: "-50%" }}
              transition={{ duration: 0.3 }}
              className="font-ptserif fixed right-0 top-0 z-50 flex h-screen w-1/3 flex-col bg-black bg-opacity-10 px-6 text-base font-semibold shadow-[-5px_0_5px_0px_rgba(0,0,15,0.25)] backdrop-blur-sm"
            >
              <button
                className="absolute left-0 top-0 px-2 py-4"
                onClick={() => {
                  setHamburgerActive(!hamburgerActive);
                }}
              >
                <Image
                  src="/svg/icon/x-close-icon.svg"
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
