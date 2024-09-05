import React from "react";

const Profile = () => {
  return (
    <>
      <div class="mx-6 flex flex-col gap-10 font-ptserif md:mx-28">
        <div class="flex flex-col gap-16 md:flex-row md:items-center md:gap-32">
          <div class="flex flex-row md:flex-col md:gap-14">
            <div class="h-48 w-48 min-w-48 rounded-[3rem] bg-[#014E3E] md:h-80 md:w-80"></div>
            <div class="flex w-full flex-col items-center justify-center gap-5 md:hidden md:w-0 md:flex-row">
              <div class="flex flex-row justify-center gap-5 bg-red-500">
                <div class="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
                <div class="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
              </div>
              <button class="rounded-full border-[0.1rem] border-black px-8 md:text-2xl">
                Edit
              </button>
            </div>
            <div class="hidden flex-row justify-center gap-5 bg-red-500 md:relative md:bottom-0 md:flex">
              <div class="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
              <div class="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
            </div>
          </div>
          <div class="relative w-full gap-14">
            <div class="flex h-80 gap-10 bg-red-600 md:items-center md:gap-16 md:text-2xl">
              <div class="flex flex-col gap-5 py-9">
                <div class="font-semibold">Username</div>
                <div class="font-semibold">Email</div>
                <div class="font-semibold">No Phone</div>
                <div class="font-semibold">Address</div>
              </div>
              <div class="flex flex-col gap-5 border-l-2 border-black py-10 pl-8 md:px-16">
                <div>Oshinobu</div>
                <div>Oshinobu@gmail.com</div>
                <div>08123456789</div>
                <div>Universitas Multimedia Nusantara, Gading Serpong</div>
              </div>
            </div>
            <div class="md:flex">
              <div class="hidden justify-center md:flex md:justify-center md:text-2xl">
                <button class="rounded-full border-[0.1rem] border-black px-8 md:h-12">
                  Edit
                </button>
              </div>
              <div class="bottom-0 right-0 hidden justify-between bg-red-700 md:absolute md:flex md:w-56">
                <button class="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
                <button class="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
                <button class="h-14 w-14 rounded-xl bg-[#E9B472]">
                  rating
                </button>
              </div>
            </div>
          </div>
          <div class="mx-14 flex justify-between bg-red-700 md:hidden md:w-56">
            <button class="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
            <button class="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
            <button class="h-14 w-14 rounded-xl bg-[#E9B472]">rating</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

// import React from "react";

// const Profile = () => {
//   return (
//     <>
//       <div class="grid grid-cols-3 gap-4">
//         <div class="flex md:justify-center">
//           <div class="h-48 w-48 min-w-48 rounded-[3rem] bg-[#014E3E] md:h-80 md:w-80"></div>
//         </div>

//         <div class="col-span-2 flex gap-10 bg-red-600 md:gap-16 md:text-2xl">
//           <div class="flex flex-col gap-5 py-9">
//             <div class="font-semibold">Username</div>
//             <div class="font-semibold">Email</div>
//             <div class="font-semibold">No Phone</div>
//             <div class="font-semibold">Address</div>
//           </div>
//           <div class="flex flex-col gap-5 border-l-2 border-black py-9 pl-8 md:px-16">
//             <div>Oshinobu</div>
//             <div>Oshinobu@gmail.com</div>
//             <div>08123456789</div>
//             <div>Universitas Multimedia Nusantara, Gading Serpong</div>
//           </div>
//         </div>

//         <div class="flex">
//           <div class="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
//           <div class="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
//         </div>

//         <div class="relative col-span-2">
//           <button class="rounded-full border-[0.1rem] border-black px-8 md:h-12">
//             Edit
//           </button>
//           <div class="bottom-0 right-0 hidden justify-between bg-red-700 md:absolute md:flex md:w-56">
//             <button class="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
//             <button class="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
//             <button class="h-14 w-14 rounded-xl bg-[#E9B472]">rating</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;
