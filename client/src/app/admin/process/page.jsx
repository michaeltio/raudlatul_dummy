import React from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";
import Adorder from "@/components/adminOrder/Adorder";

export default function AdminProcess() {
  return (
    <>
      <div id="mainAdminProcess">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Process
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
