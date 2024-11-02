"use client";
import React, { useEffect, useState } from "react";
import Adorder from "@/components/admin/OrderAdmin";

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
        const response = await fetch("http://localhost:3001/api/order");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            {/* {orders.map((order) => {
              return <Adorder key={order.id} item={order} />;
            })} */}
          </div>
        </section>
      </div>
    </>
  );
}
