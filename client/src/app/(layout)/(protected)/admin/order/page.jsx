"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const usersResponse = await axios.get("http://localhost:3001/read/users");
        const users = usersResponse.data;

        const allOrders = [];

        for (const user of users) {
          const userId = user.id;
          const cartDataResponse = await axios.get(`http://localhost:3001/read/order/${userId}`);

          const userOrders = cartDataResponse.data.map(order => ({
            userId: userId,
            orderId: order.id,
            ...order
          }));

          allOrders.push(...userOrders);
        }

        setOrders(allOrders);
      } catch (error) {
        console.error("Error fetching users with orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId, userId) => {
    try {
      console.log(`Deleting orderId: ${orderId} for userId: ${userId}`);
      await axios.post(`http://localhost:3001/delete/order/${userId}/${orderId}`);
      setOrders(orders.filter(order => order.orderId !== orderId));
      console.log("Order deleted successfully");
    } catch (error) {
      console.error("Error deleting order:", error);
    }
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
                        <div className="flex items-center"></div>
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
                      <td className="px-6 py-4 text-[#092928]">{item.price}</td>
                      <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                        <input
                          type="checkbox"
                          id={`checkbox-table-search-${item.orderId}`}
                          className="h-5 w-5"
                        />
                        <Image
                          onClick={() => handleDelete(item.orderId, item.userId)}
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
