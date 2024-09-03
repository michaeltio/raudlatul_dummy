"use client";
import React, { useEffect, useState } from "react";

const Profile = () => {
    return (
        <>
        {/* <div class="font-ptserif">
            <div class="flex justify-center pt-12 pb-5 gap-5">
                <div class="w-56 h-56 pl-3 rounded-[50px] bg-[#014E3E]">
                </div>
                <div class="text-center justify-center content-center">
                    <div class="flex justify-center gap-4">
                        <div class="w-10 h-10 rounded-full bg-[#E9B472]"></div>
                        <div class="w-10 h-10 rounded-full bg-[#092928]"></div>
                    </div>
                    <div class="w-50 pt-5">
                        <button type="button" class="w-24 h-8 rounded-3xl box-border border-[1px] border-black">Edit</button>
                    </div>
                </div>
            </div>

            <div class="flex p-5 justify-center">
                <div class="pr-5 font-semibold">
                    <p class="py-3 px-4">Username</p>
                    <p class="py-3 px-4">Email</p>
                    <p class="py-3 px-4">No Phone</p>
                    <p class="py-3 px-4">Address</p>
                </div>
                <div class="w-[2px] h-30 bg-[#092928] rounded-3xl"></div>
                <div class="px-5">
                    <p class="p-3">Oshinobu</p>
                    <p class="p-3">Oshinobu@gmail.com</p>
                    <p class="p-3">08123456789</p>
                    <p class="p-3">Universitas Multimedia Nusantara, Gading Serpong</p>
                </div>
            </div>


            <div class="flex justify-center p-8">
                <div class="p-5">
                    <button type="button" class="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
                </div>
                <div class="p-5">
                    <button type="button" class="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
                </div>
                <div class="p-5">
                    <button type="button" class="h-14 w-14 rounded-xl bg-[#E9B472]">Rating</button>
                </div>
            </div>
            


        </div> */}
        <div class="mx-6 font-ptserif">
            <div class="flex flex-row">
                <div class="bg-[#014E3E] min-w-48 w-48 h-48 rounded-[3rem]"></div>
                <div class="w-full flex flex-col items-center justify-center gap-5">
                    <div class="flex flex-row justify-center gap-5">
                        <div class="bg-[#E9B472] w-10 h-10 rounded-full"></div>
                        <div class="bg-[#092928] w-10 h-10 rounded-full"></div>
                    </div>
                    <button class="border-black border-[0.1rem] rounded-full px-8">Edit</button>
                </div>
            </div>
            <div class="flex bg-slate-600 gap-5">
                <div class="flex flex-col">
                    <div>Username</div>
                    <div>Email</div>
                    <div>No Phone</div>
                    <div>Address</div>
                </div>
                <div class="w-0.5 h-30 bg-[#092928]"></div>
                <div class="flex flex-col">
                    <div>Oshinobu</div>
                    <div>Oshinobu@gmail.com</div>
                    <div>08123456789</div>
                    <div>Universitas Multimedia Nusantara, Gading Serpong</div>
                </div>
            </div>
            <div></div>
        </div>
        </>
    );
}

export default Profile;
