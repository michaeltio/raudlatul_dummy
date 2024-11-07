"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllData, deleteData } from "@/api/apiClient";
import SideBar from "@/components/admin/SideBar";

export default function Process() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    const fetchProcess = async () => {
      try {
        const usersResponse = await getAllData("users");
        const users = usersResponse.data;

        const allProcess = [];

        for (const user of users) {
          const userId = user.id;
          const processDataResponse = await getAllData(
            "users/" + userId + "/process",
          );

          const userProcess = processDataResponse.data.map((process) => ({
            userId: userId,
            processId: process.id,
            ...process,
          }));

          allProcess.push(...userProcess);
        }

        setProcess(allProcess);
      } catch (error) {
        console.error("Error fetching users with process:", error);
      }
    };

    fetchProcess();
  }, []);

  const handleDelete = async (processId, userId) => {
    try {
      console.log(`Deleting processId: ${processId} for userId: ${userId}`);
      await deleteData(`users/${userId}/process`, processId);
      console.log("Process deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting process:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      // Update the status in the local state
      setProcess((prevProcess) =>
        prevProcess.map((item) =>
          item.processId === id ? { ...item, status } : item,
        ),
      );

      // Update the status in the database
      const processToUpdate = process.find((item) => item.processId === id);
      if (processToUpdate) {
        await updateData(`users/${processToUpdate.userId}/process/${id}`, {
          status,
        });
        console.log("Status updated successfully");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      <SideBar />
      <div className="py-12" id="mainAdminOrder">
        <section>
          <div class="p-4 sm:ml-64">
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
                    {process.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="p-4 text-center text-black">
                          No process found
                        </td>
                      </tr>
                    ) : (
                      process.map((item) => (
                        <tr
                          key={item.processId}
                          className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]"
                        >
                          <td className="w-4 p-4">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id={`checkbox-table-search-${item.processId}`}
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
                          <td className="px-6 py-4 text-[#092928]">
                            {item.price}
                          </td>
                          <td className="px-6 py-4 text-[#092928]">
                            {item.status}
                          </td>
                          <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                            <select
                              className="rounded-md bg-[#014E3E] p-2 text-[#FAF1EA]"
                              value={item.status}
                              onChange={(e) =>
                                handleStatusChange(
                                  item.processId,
                                  e.target.value,
                                )
                              }
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                            <Image
                              onClick={() =>
                                handleDelete(item.processId, item.userId)
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
          </div>
        </section>
      </div>
    </>
  );
}
