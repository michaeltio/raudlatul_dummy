"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/shop/Item";
import { isUserSignedIn } from "@/api/auth";
import { getAllData, getData, postData, deleteData } from "@/api/apiClient";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to manage client-side rendering

  useEffect(() => {
    const fetchCartData = async () => {
      const user = await isUserSignedIn();
      if (user !== null) {
        try {
          const userId = user.uid;

          const [cartDataResponse, kaligraphyItems] = await Promise.all([
            getAllData(`users/${userId}/cart`),
            getAllData("kaligraphyItem"),
          ]);

          // Filter cart items based on user cart data
          const filteredItems = kaligraphyItems.data.filter((item) =>
            cartDataResponse.data.some((cartItem) => cartItem.id === item.id),
          );

          setCartItems(filteredItems);

          const totalPrice = filteredItems.reduce(
            (acc, item) => acc + parseInt(item.price, 10),
            0,
          );
          setTotal(totalPrice);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      }
      setLoading(false); // Mark loading as false once data is loaded
    };

    fetchCartData();
  }, []);

  const handleCheckout = async () => {
    // for every item in the cart, make a post request to the orders endpoint with the data item.id, item.name, item.price, user.id, user.address, user.name
    const user = await isUserSignedIn();
    const userResponse = await getData("users", user.uid);
    const userData = userResponse.data;

    if (user !== null) {
      const userId = user.uid;

      const orderData = cartItems.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_price: item.price,
        item_image: item.image,
        user_id: userId,
        user_address: userData.address,
        user_name: userData.username,
      }));

      try {
        await Promise.all(
          orderData.map((data) => postData(`users/${userId}/order`, data)),
        );
        await Promise.all(
          cartItems.map((item) => deleteData(`users/${userId}/cart`, item.id)),
        );
        alert("Order placed successfully!");
        window.location.reload();
      } catch (error) {
        console.error("Error placing order:", error);
      }
    }
  };

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-center text-4xl font-bold">Cart</h1>
      {!toggle && (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-end justify-center">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="mb-32 flex w-3/5 min-w-96 flex-row justify-between rounded-full bg-[#092928] px-12 py-2 text-white sm:px-16"
          >
            <h1 className="text-lg font-bold sm:text-xl">Total</h1>
            <h1 className="text-lg font-bold sm:text-xl">Rp. {total}</h1>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 place-items-center gap-16 px-4 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:px-16">
        {loading ? (
          <p className="text-center text-gray-500">Loading your cart...</p>
        ) : cartItems.length > 0 ? (
          cartItems.map((item, i) => <Item key={i} item={item} cart={true} />)
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
      {toggle && (
        <div className="flex w-full justify-end px-12">
          <table className="w-96 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Item Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    Rp. {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  Total
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  Rp. {total}
                </td>
              </tr>
              <tr>
                <td></td>
                <td
                  colSpan="1"
                  className="flex whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                >
                  <button
                    onClick={handleCheckout}
                    className="rounded-full bg-[#092928] px-4 py-2 text-white"
                  >
                    Checkout
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
