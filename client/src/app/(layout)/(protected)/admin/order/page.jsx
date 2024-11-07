"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllData, deleteData } from "@/api/apiClient";
import SideBar from "@/components/admin/SideBar";

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const usersResponse = await getAllData("users");
        const users = usersResponse.data;

        const allOrders = [];

        for (const user of users) {
          const userId = user.id;
          const orderDataResponse = await getAllData(
            "users/" + userId + "/order",
          );

          const userOrders = orderDataResponse.data.map((order) => ({
            userId: userId,
            orderId: order.id,
            ...order,
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
      await deleteData(`users/${userId}/order`, orderId);
      console.log("Order deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <>
      <SideBar />
      <div className="py-12" id="mainAdminOrder">
        <div className="sm:ml-48">
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
                        NAMA
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ITEM
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ALAMAT
                      </th>
                      <th scope="col" className="px-6 py-3">
                        HARGA
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PEMBAYARAN
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="p-4 text-center text-black">
                          No orders found
                        </td>
                      </tr>
                    ) : (
                      orders.map((item) => (
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
                            {item.user_name}
                          </th>
                          <td className="px-6 py-4 text-[#092928]">
                            {item.item_name}
                          </td>
                          <td className="px-6 py-4 text-[#092928]">
                            {item.user_address}
                          </td>
                          <td className="px-6 py-4 text-[#092928]">
                            {`Rp ${item.item_price.toLocaleString("id-ID")}`}
                          </td>
                          <td className="px-6 py-4 text-[#092928]">
                            <img
                              src={item.image}
                              alt="Payment"
                              className="h-32 w-32"
                            />
                          </td>
                          <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                            <input
                              type="checkbox"
                              id={`checkbox-table-search-${item.orderId}`}
                              className="h-5 w-5"
                            />
                            <Image
                              onClick={() =>
                                handleDelete(item.orderId, item.userId)
                              }
                              src={`/svg/icon/delete.svg`}
                              alt="delete"
                              className="cursor-pointer"
                              width={25}
                              height={25}
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
