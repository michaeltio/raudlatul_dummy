import React from "react";

const Profile = () => {
  return (
    <>
      <div className="mx-6 flex flex-col gap-10 font-ptserif md:justify-center md:px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="flex flex-row justify-center md:flex-col md:gap-5">
            <div className="aspect-square w-48 min-w-48 rounded-3xl bg-[#014E3E] md:w-64">

            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 md:hidden md:w-0">
              <div className="flex flex-row justify-center gap-6">
                <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
                <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
              </div>
              <button className="rounded-full border border-black px-10 py-1 md:text-2xl">
                Edit
              </button>
            </div>
            <div className="hidden flex-row justify-center gap-10 md:relative md:bottom-0 md:flex">
              <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
              <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
            </div>
          </div>
          <div className="relative w-full gap-14">
            <div className="flex gap-10 md:items-center md:text-2xl">
              <div className="flex flex-col justify-center gap-8 py-5 md:py-5">
                <div className="font-semibold text-lg md:text-2xl">Username</div>
                <div className="font-semibold text-lg md:text-2xl">Email</div>
                <div className="font-semibold text-lg md:text-2xl">No Phone</div>
                <div className="font-semibold text-lg md:text-2xl">Address</div>
              </div>
              <div className="flex flex-col gap-10 border-l-2 border-black py-5 ps-8 md:py-5 md:ps-12">
                <div className="md:text-xl">Oshinobu</div>
                <div className="md:text-xl">Oshinobu@gmail.com</div>
                <div className="md:text-xl">08123456789</div>
                <div className="md:text-xl">Universitas Multimedia Nusantara, Gading Serpong</div>
              </div>
            </div>
            <div className="md:flex md:pt-5">
              <div className="hidden justify-center md:flex md:justify-center md:text-2xl">
                <button className="rounded-full border border-black px-10 md:h-12">
                  Edit
                </button>
              </div>
              <div className="hidden bottom-0 right-0 justify-between md:absolute md:flex md:w-56">
                <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
                <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
                <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Rating</button>
              </div>
            </div>
          </div>
          <div className="mx-14 flex justify-around md:hidden md:w-56">
            <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
            <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
            <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Rating</button>
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
//       <div className="mx-6 flex flex-col gap-10 font-ptserif md:mx-28">
//         <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-32">
//           <div className="flex flex-row justify-center md:flex-col md:gap-14">
//             <div className="aspect-square w-48 min-w-48 rounded-[3rem] bg-[#014E3E]">

//             </div>
//             <div className="flex w-full flex-col items-center justify-center gap-5 md:hidden md:w-0">
//               <div className="flex flex-row justify-center gap-6">
//                 <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
//                 <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
//               </div>
//               <button className="rounded-full border border-black px-10 py-1 md:text-2xl">
//                 Edit
//               </button>
//             </div>
//             <div className="hidden flex-row justify-center gap-5 bg-red-500 md:relative md:bottom-0 md:flex">
//               <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
//               <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
//             </div>
//           </div>
//           <div className="relative w-full gap-14 md:flex-1">
//             <div className="flex gap-10 bg-red-600 md:items-center md:gap-16 md:text-2xl">
//               <div className="flex flex-col gap-5 py-8">
//                 <div className="font-semibold">Username</div>
//                 <div className="font-semibold">Email</div>
//                 <div className="font-semibold">No Phone</div>
//                 <div className="font-semibold">Address</div>
//               </div>
//               <div className="flex flex-col gap-5 border-l-2 border-black py-8 pl-8 md:px-16">
//                 <div>Oshinobu</div>
//                 <div>Oshinobu@gmail.com</div>
//                 <div>08123456789</div>
//                 <div>Universitas Multimedia Nusantara, Gading Serpong</div>
//               </div>
//             </div>
//             <div className="md:flex">
//               <div className="hidden justify-center md:flex md:justify-center md:text-2xl">
//                 <button className="rounded-full border-[0.1rem] border-black px-8 md:h-12">
//                   Edit
//                 </button>
//               </div>
//               <div className="hidden bottom-0 right-0 justify-between bg-red-700 md:absolute md:flex md:w-56">
//                 <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
//                 <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
//                 <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Rating</button>
//               </div>
//             </div>
//           </div>
//           <div className="mx-14 flex justify-around md:hidden md:w-56">
//             <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
//             <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
//             <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Rating</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

// import React from "react";

// const Profile = () => {
//   return (
//     <>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="flex md:justify-center">
//           <div className="h-48 w-48 min-w-48 rounded-[3rem] bg-[#014E3E] md:h-80 md:w-80"></div>
//         </div>

//         <div className="col-span-2 flex gap-10 bg-red-600 md:gap-16 md:text-2xl">
//           <div className="flex flex-col gap-5 py-9">
//             <div className="font-semibold">Username</div>
//             <div className="font-semibold">Email</div>
//             <div className="font-semibold">No Phone</div>
//             <div className="font-semibold">Address</div>
//           </div>
//           <div className="flex flex-col gap-5 border-l-2 border-black py-9 pl-8 md:px-16">
//             <div>Oshinobu</div>
//             <div>Oshinobu@gmail.com</div>
//             <div>08123456789</div>
//             <div>Universitas Multimedia Nusantara, Gading Serpong</div>
//           </div>
//         </div>

//         <div className="flex">
//           <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
//           <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
//         </div>

//         <div className="relative col-span-2">
//           <button className="rounded-full border-[0.1rem] border-black px-8 md:h-12">
//             Edit
//           </button>
//           <div className="bottom-0 right-0 hidden justify-between bg-red-700 md:absolute md:flex md:w-56">
//             <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
//             <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
//             <button className="h-14 w-14 rounded-xl bg-[#E9B472]">rating</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;
