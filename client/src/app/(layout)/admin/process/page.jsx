"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Process() {
  const [process, setProcess] = useState([]);
  const [formData, setFormData] = useState({
    courier_name: "",
    customer_address: "",
    customer_name: "",
    item_name: "",
    price: "",
    quantity: "",
    status: "Pending", // Default status
  });

  useEffect(() => {
    const tempProcess = [
      {
        id: 1,
        courier_name: "John Doe",
        customer_address: "123 Elm St",
        customer_name: "Jane Smith",
        item_name: "Laptop",
        price: "1200",
        quantity: "1",
        status: "Pending", // Default status
      },
      {
        id: 2,
        courier_name: "Mary Johnson",
        customer_address: "456 Oak St",
        customer_name: "Mike Brown",
        item_name: "Phone",
        price: "800",
        quantity: "2",
        status: "Pending", // Default status
      },
      // Add more temporary order objects as needed
    ];

    setProcess(tempProcess);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    setProcess((prevProcess) => prevProcess.filter((item) => item.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setProcess((prevProcess) =>
      prevProcess.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };

  const handleAddProcess = () => {
    // Add new process to the list
    const newProcess = { ...formData, id: Date.now() };
    setProcess((prevProcess) => [...prevProcess, newProcess]);
    setFormData({
      courier_name: "",
      customer_address: "",
      customer_name: "",
      item_name: "",
      price: "",
      quantity: "",
      status: "Pending", // Reset to default status
    });
  };

  console.log(process);

  return (
    <>
      <div className="py-12" id="mainAdminOrder">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Order Process
            </h1>

            <div className="overflow-x-auto rounded-lg shadow-md">
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
                      STATUS
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {process.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
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
                      <td className="px-6 py-4 text-[#092928]">
                        {item.status}
                      </td>
                      <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                        {/* drop down menu*/}
                        <select
                          className="rounded-md bg-[#014E3E] p-2 text-[#FAF1EA]"
                          value={item.status}
                          onChange={(e) =>
                            handleStatusChange(item.id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                        </select>
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
