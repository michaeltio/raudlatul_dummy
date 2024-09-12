"use client";
import React from "react";

const Login = () => {
  return (
    <div class="font-ptserif">
      <div class="px-10 py-40">
        <div class="rounded-3xl bg-[#FFFFFF] p-2 text-center shadow-xl">
          <div class="pt-12 text-xl font-bold">Login</div>
          <div class="pt-10">
            <input
              type="text"
              class="box-border h-9 w-80 rounded-full border-2 border-black"
            />
          </div>
          <div class="py-5">
            <input
              type="text"
              class="box-border h-9 w-80 rounded-full border-2 border-black"
            />
          </div>
          <div class="flex items-center justify-center pt-4">
            <div class="h-9 w-20 rounded-3xl bg-[#E9B472]"></div>
          </div>
          <div class="flex items-center justify-center p-10">
            <div class="h-0.5 w-20 rounded-3xl bg-[#092928]"></div>
            <div class="px-8 font-semibold">Or</div>
            <div class="h-0.5 w-20 rounded-3xl bg-[#092928]"></div>
          </div>
          <div class="pb-20">
            <button
              type="button"
              class="box-border h-10 w-80 rounded-3xl border-2 border-black font-semibold"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
