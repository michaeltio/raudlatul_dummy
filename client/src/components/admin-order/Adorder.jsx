"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { deleteData } from "@/api/apiClient";

export default function Adorder({ item }) {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    courier_name: "",
    customer_address: "",
    customer_name: "",
    item_name: "",
    item_id: "",
    price: "",
    quantity: "",
  });

  const handleDelete = async (id) => {
    try {
      const response = await deleteData("Order", { id });
      setItems(response.data);
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
                {/* <Image
                  onClick={() => handleEdit(item)}
                  src={`/svg/icon/edit.svg`}
                  alt="edit"
                  className=""
                  width={25}
                  height={25}
                /> */}
                {/* <Image
                  onClick={() => handleDelete(item.item_id)}
                  src={`/svg/icon/delete.svg`}
                  alt="delete"
                  className=""
                  width={25}
                  height={25}
                /> */}
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="rounded-full bg-[#E9B472] px-2 text-[#FAF1EA]"
                  >
                    Delete
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
