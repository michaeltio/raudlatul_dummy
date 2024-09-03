"use client";
import React, { useEffect, useState } from "react";

const ProfileEdit = () => {
    return (
        <div class="font-ptserif">
            <div class="p-5 bg-[#092928] ">
                <div class="w-56 h-56 bg-[#014E3E] rounded-[50px]"></div>
                <div class="w-14 h-14 -mt-10 bg-[#E9B472] rounded-full "></div>
            </div>


            <div class="flex p-5 justify-center">
                <div class="pr-5 font-semibold">
                    <p class="py-4 px-4">Username</p>
                    <p class="py-4 px-4">Email</p>
                    <p class="py-4 px-4">No Phone</p>
                    <p class="py-4 px-4">Address</p>
                </div>
                <div class="px-2">
                    <p class="pl-3 pt-3">Oshinobu</p>
                    <div class="w-60 h-px bg-[#C1C1C1] rounded-3xl"></div>
                    <p class="pl-3 pt-8">Oshinobu@gmail.com</p>
                    <div class="w-60 h-px bg-[#C1C1C1] rounded-3xl"></div>
                    <p class="pl-3 pt-8">08123456789</p>
                    <div class="w-60 h-px bg-[#C1C1C1] rounded-3xl"></div>
                    <p class="pl-3 pt-8">Universitas Multimedia Nusantara, Gading Serpong</p>
                    <div class="w-60 h-px bg-[#C1C1C1] rounded-3xl"></div>
                </div>
            </div>
            <div class="flex justify-center p-8">
                <button type="button" class="w-28 h-9 rounded-3xl box-border border-[1px] border-black">Save</button>
            </div>
        </div>
    );
}

export default ProfileEdit;
