import React from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";
import Adrating from "@/components/admin-rating/Adrating";

export default function AdminRating() {
  return (
    <>
      <div id="mainAdminProcess">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Rating
            </h1>
            <Adrating p1="Nama" p2="Item" p3="Review" p4="Rating" />
          </div>
        </section>
      </div>
    </>
  );
}
