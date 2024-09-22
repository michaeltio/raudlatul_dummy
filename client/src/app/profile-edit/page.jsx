import React from "react";

const ProfileEdit = () => {
  return (
    <div className="mx-6 flex flex-col font-ptserif md:mx-28 md:gap-0">
      <div className="flex flex-col gap-16 md:flex-row md:items-center md:gap-32">
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-end justify-end rounded-[3rem] bg-[#014E3E] md:h-80 md:w-80">
            <div className="absolute h-16 w-16 translate-x-5 translate-y-5 rounded-full bg-[#E9B472] md:h-24 md:w-24"></div>
          </div>
        </div>
        <div className="justify-center">
          <div className="flex justify-center gap-10 text-lg md:gap-20 md:text-2xl">
            <div className="flex flex-col gap-8">
              <div className="font-semibold">Username</div>
              <div className="font-semibold">Email</div>
              <div className="font-semibold">No Phone</div>
              <div className="font-semibold">Address</div>
            </div>
            <div className="flex flex-col gap-8 pr-6">
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"/>
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"/>
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"/>
              <input type="text" className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"/>
            </div>
          </div>
          <div className="flex justify-center mt-16 md:absolute md:my-20 md:justify-center md:text-2xl">
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
