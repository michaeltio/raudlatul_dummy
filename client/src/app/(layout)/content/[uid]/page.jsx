"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { getData } from "@/api/apiClient";
import { useEffect, useState } from "react";

export default function Content({ params }) {
  const [selectedItem, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData("kaligraphyItem", params.uid);
        setSelectedItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="mainService" className="flex flex-col gap-8 py-12">
      {selectedItem ? (
        <div className="content-center space-y-10 p-9 md:flex-1 md:space-y-20">
          <div className="space-y-3">
            <h2 className="font-ptserif text-3xl font-bold">
              {selectedItem.name}
            </h2>
            <div className="flex items-center">
              <Image
                src="/svg/icon/star-yellow.svg"
                alt="img star"
                className="w-8 p-1"
                width={5}
                height={5}
              />
              <p className="font-ptserif text-2xl font-bold">4.9/5</p>
            </div>
            <p className="mb-7 font-ptserif text-lg">
              {selectedItem.description}
            </p>
            <div className="space-y-1">
              <p className="text-md font-ptserif">
                <b>Artist:</b> {selectedItem.artist_name}
              </p>
              <p className="text-md mb-8 font-ptserif">
                <b>Created Date:</b> {selectedItem.created_date}
              </p>
            </div>
            <div className="relative">
              <p className="my-3 text-center font-ptserif text-xl font-bold">
                {selectedItem.price}
              </p>
              <button className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold hover:border-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
