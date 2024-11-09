"use client";

import Image from "next/image";
import ItemAdmin from "@/components/admin/ItemAdmin";
import SideBar from "@/components/admin/SideBar";
import React, { useEffect, useState } from "react";
import { deleteData, getAllData, postData } from "@/api/apiClient";

export default function Admin() {
  const [orderCount, setOrderCount] = useState(0);
  const [processCount, setProcessCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  // useEffect(() => {
  //   // Fetch data dari API
  //   async function fetchCounts() {
  //     try {
  //       const response = await fetch("admin"); // Sesuaikan endpoint API
  //       const data = await response.json();
  //       setOrderCount(data.order);
  //       setProcessCount(data.process);
  //       setItemCount(data.item);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchCounts();

  //   const interval = setInterval(fetchCounts, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const orderDataResponse = await getAllData("orders");
        const orderData = orderDataResponse.data;
        setOrderCount(orderData.length);

        const processDataResponse = await getAllData("process");
        const processData = processDataResponse.data;
        setProcessCount(processData.length);

        const itemDataResponse = await getAllData("items");
        const itemData = itemDataResponse.data;
        setItemCount(itemData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <SideBar />
      <div id="mainAdmin" className="mx-8 py-12 md:mx-16">
        <div className="p-4 sm:ml-52">
          <section
            id="contOPR"
            className="flex w-full flex-row items-center justify-center gap-12"
          >
            <div
              id="Order"
              className="relative flex aspect-square w-3/12 items-center justify-center rounded-2xl bg-[#092928] shadow-lg md:aspect-[16/10] md:rounded-3xl dark:shadow-gray-600"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA] md:text-lg">
                  Order
                </p>
                <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                  {orderCount}
                </p>
              </div>
            </div>
            <div
              id="Process"
              className="relative flex aspect-square w-3/12 items-center justify-center rounded-2xl bg-[#092928] shadow-lg md:aspect-[16/10] md:rounded-3xl dark:shadow-gray-600"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA] md:text-lg">
                  Process
                </p>
                <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                  {processCount}
                </p>
              </div>
            </div>
            <div
              id="Item"
              className="relative flex aspect-square w-3/12 items-center justify-center rounded-2xl bg-[#092928] shadow-lg md:aspect-[16/10] md:rounded-3xl dark:shadow-gray-600"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA] md:text-lg">
                  Item
                </p>
                <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                  {itemCount}
                </p>
              </div>
            </div>
          </section>

          <section
            id="addItem"
            className="relative mt-10 flex w-full flex-col justify-center gap-6 md:flex-row md:justify-start"
          >
            {/* <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-[3rem] bg-[#014E3E] md:aspect-[6/16] md:w-2/12 md:rounded-3xl">
              <Image
                src="/svg/icon/plus.svg"
                className=""
                width={30}
                height={20}
              />
              <p className="font-ptserif text-sm font-black tracking-wide text-[#FAF1EA]">
                Add Item
              </p>
            </div> */}
            {/* <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll">
              <ItemAdmin />
              <ItemAdmin />
              <ItemAdmin />
              <ItemAdmin />
            </div> */}
          </section>
        </div>
      </div>
    </>
  );
}
