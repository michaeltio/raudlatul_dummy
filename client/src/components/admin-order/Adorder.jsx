"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Adorder({ item }) {
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await fetch("http://localhost:3001/delete/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  
  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-left font-ptserif text-sm tracking-wide text-[#FAF1EA]">
          <thead className="bg-[#014E3E] text-xs uppercase text-[#FAF1EA]">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                NAME{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                ITEM
              </th>
              <th scope="col" className="px-6 py-3">
                QUANTITY
              </th>
              <th scope="col" className="px-6 py-3">
                ADDRESS
              </th>
              <th scope="col" className="px-6 py-3">
                COURIER
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-[#092928]"
              >
                {item.customer_name}
              </th>
              <td className="px-6 py-4 text-[#092928]">{item.item_name}</td>
              <td className="px-6 py-4 text-[#092928]">{item.quantity}</td>
              <td className="px-6 py-4 text-[#092928]">
                {item.customer_address}
              </td>
              <td className="px-6 py-4 text-[#092928]">{item.courier_name}</td>
              <td className="px-6 py-4 text-[#092928]">{item.price}</td>
              <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                <Image
                  src={`/svg/icon/edit.svg`}
                  alt="edit"
                  className=""
                  width={25}
                  height={25}
                />
                <Image
                  onClick={() => handleDelete(item.id)}
                  src={`/svg/icon/delete.svg`}
                  alt="delete"
                  className=""
                  width={25}
                  height={25}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
