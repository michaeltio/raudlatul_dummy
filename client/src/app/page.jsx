"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/api/apiClient";
import ShopCard from "@/components/shop/ShopCard";
import Adrating from "@/components/admin-rating/Adrating";
import TopValue from "@/components/service/TopValue";
import Rating from "@/components/rating/Rating";
import Adorder from "@/components/admin-order/Adorder";
import Order from "@/components/order/Order";
import Sent from "@/components/sent/Sent";
import SearchBar from "@/components/search-bar/SearchBar";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section>Test</section>
      <ShopCard />
      <Adorder p1="1" p2="2" p3="3" p4="4" p5="5" p6="6" p7="7" />
      <Adrating />
      <Order img="" title="Test" p1="1" p2="2" p3="3" />
      <Rating />
      <Sent img="" title="Test" p1="1" p2="2" p3="3" />
      <TopValue />
      <SearchBar />
    </>
  );
}
