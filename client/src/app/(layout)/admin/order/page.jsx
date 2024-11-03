"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    courier_name: "",
    customer_address: "",
    customer_name: "",
    item_name: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const tempOrders = [
      {
        id: 1,
        courier_name: "John Doe",
        customer_address: "123 Elm St",
        customer_name: "Jane Smith",
        item_name: "Laptop",
        price: "1200",
        quantity: "1",
      },
      {
        id: 2,
        courier_name: "Mary Johnson",
        customer_address: "456 Oak St",
        customer_name: "Mike Brown",
        item_name: "Phone",
        price: "800",
        quantity: "2",
      },
      // Add more temporary order objects as needed
    ];

    setOrders(tempOrders);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  console.log(orders);

  return (
    <>
      <div className="py-12" id="mainAdminOrder">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Order
            </h1>

            <div className="w-3/5 overflow-x-scroll rounded-lg shadow-md 2xl:overflow-hidden">
              <table className="w-full text-left font-ptserif text-sm tracking-wide text-[#FAF1EA]">
                <thead className="bg-[#014E3E] text-xs uppercase text-[#FAF1EA]">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-6 py-3">
                      NAME
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
                  {orders.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <label
                            htmlFor={`checkbox-table-search-${item.id}`}
                            className="sr-only"
                          >
                            checkbox
                          </label>
                          <input
                            type="checkbox"
                            id={`checkbox-table-search-${item.id}`}
                            className="h-5 w-5"
                          />
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-[#092928]"
                      >
                        {item.customer_name}
                      </th>
                      <td className="px-6 py-4 text-[#092928]">
                        {item.item_name}
                      </td>
                      <td className="px-6 py-4 text-[#092928]">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4 text-[#092928]">
                        {item.customer_address}
                      </td>
                      <td className="px-6 py-4 text-[#092928]">
                        {item.courier_name}
                      </td>
                      <td className="px-6 py-4 text-[#092928]">{item.price}</td>
                      <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                        <input
                          type="checkbox"
                          id={`checkbox-table-search-${item.id}`}
                          className="h-5 w-5"
                        />
                        <Image
                          onClick={() => handleDelete(item.id)}
                          src={`/svg/icon/delete.svg`}
                          alt="delete"
                          className="cursor-pointer"
                          width={25}
                          height={25}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
