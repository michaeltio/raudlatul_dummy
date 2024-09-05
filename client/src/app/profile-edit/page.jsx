import React from "react";

const ProfileEdit = () => {
  return (
    <div class="mx-6 flex flex-col font-ptserif md:mx-28 md:gap-0">
      <div class="flex flex-col gap-16 md:flex-row md:items-center md:gap-32">
        <div class="flex justify-center">
          <div class="flex h-48 w-48 items-end justify-end rounded-[3rem] bg-[#014E3E] md:h-80 md:w-80">
            <div class="absolute h-16 w-16 translate-x-5 translate-y-5 rounded-full bg-[#E9B472] md:h-24 md:w-24"></div>
          </div>
        </div>
        <div>
          <div class="flex gap-10 text-lg md:gap-20 md:text-2xl">
            <div class="flex flex-col gap-8">
              <div class="font-semibold">Username</div>
              <div class="font-semibold">Email</div>
              <div class="font-semibold">No Phone</div>
              <div class="font-semibold">Address</div>
            </div>
            <div class="flex flex-col gap-8 pr-6">
              <div class="flex border-b-2 border-[#C1C1C1]">Oshinobu</div>
              <div class="flex border-b-2 border-[#C1C1C1]">
                Oshinobu@gmail.com
              </div>
              <div class="flex border-b-2 border-[#C1C1C1]">08123456789</div>
              <div class="flex border-b-2 border-[#C1C1C1]">
                Universitas Multimedia Nusantara, Gading Serpong
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-16 md:absolute md:my-20 md:justify-center md:text-2xl">
            <button class="rounded-full border-[0.1rem] border-black px-8 md:h-12">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
