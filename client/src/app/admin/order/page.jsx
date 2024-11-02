"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";
import Adorder from "@/components/admin-order/Adorder";
import { postData, getAllData, deleteData, updateData } from "@/api/apiClient";

export default function AdminOrder() {
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
    const fetchOrders = async () => {
      try {
        const response = await getAllData("Order");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, []);

  console.log(orders);

  return (
    <>
      <div id="mainAdminOrder">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Order
            </h1>
            {orders.map((order) => {
              return (
                <Adorder key={order.id} item={order} onDelete={handleDelete} />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
