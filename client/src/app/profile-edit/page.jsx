import React from "react";

const ProfileEdit = () => {
  return (
    <div className="mx-6 flex flex-col font-ptserif md:justify-center md:px-5 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center md:gap-10 lg:gap-14">
        <div className="flex justify-center md:flex-col md:gap-5">
          <div className="flex items-end justify-end aspect-square w-48 min-w-48 rounded-3xl bg-[#014E3E] md:w-64">
            <div className="absolute h-16 w-16 translate-x-5 translate-y-5 rounded-full bg-[#E9B472] md:h-24 md:w-24"></div>
          </div>
        </div>
        <div className="justify-center">
          <div className="flex justify-center px-8 gap-10 text-lg md:ps-0 md:text-2xl">
            <div className="flex flex-col justify-center gap-8 py-5 md:py-5">
              <div className="font-semibold">Username</div>
              <div className="font-semibold">Email</div>
              <div className="font-semibold">No Phone</div>
              <div className="font-semibold">Address</div>
            </div>
            <div className="flex flex-col gap-8 border-l-2 border-black py-6 ps-8 md:w-full md:py-5 md:ps-12">
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA] w-full"/>
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA] w-full"/>
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA] w-full"/>
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA] w-full"/>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:absolute md:my-20 md:justify-center md:text-2xl">
            <button className="rounded-full border-[0.1rem] border-black px-8 md:h-12">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
