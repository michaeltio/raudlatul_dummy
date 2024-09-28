"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";
import Adorder from "@/components/admin-order/Adorder";


export default function AdminOrder() {
  const [items, setItems] = useState([]);
  const [courier, setCourier] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/item");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCourier = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/courier");
        const data = await response.json();
        setCourier(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
    fetchCourier();
  }, []);

  const handleEdit = (item) => {
    setItems({
      
    });
  };

  return (
    <>
      <div id="mainAdminOrder">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Order
            </h1>
            <Adorder
              p1="Nama"
              p2="Item"
              p3="Quantity"
              p4="Alamat"
              p5="Kurir"
              p6="Biaya"
              p7="Action"
            />
          </div>
        </section>
      </div>
    </>
  );
}
