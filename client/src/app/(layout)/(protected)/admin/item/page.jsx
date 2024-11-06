"use client";
import { getAllData, postData } from "@/api/apiClient";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EditItem() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    artist_name: "",
    created_date: "",
    price: "",
    image: null, // Handling file input
    category: "",
    is_available: true,
    quantity: "",
  });
  const [error, setError] = useState(null); // To handle error messages

  // Fetch data from the API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllData("kaligraphyItem");
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch items. Please try again.");
      }
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input for image
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0], // Store the file object
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await postData("kaligraphyItem", formDataToSubmit, {
        "Content-Type": "multipart/form-data",
      });
      console.log("Item added:", response.data);
      setFormData({
        item_name: "",
        description: "",
        artist_name: "",
        created_date: "",
        price: "",
        image: null,
        category: "",
        is_available: true,
        quantity: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Failed to submit data. Please try again.");
    }
  };

  const handleEdit = (item) => {
    setFormData({
      item_name: item.item_name,
      description: item.description,
      artist_name: item.artist_name,
      created_date:
        item.created_date && item.created_date.seconds
          ? new Date(item.created_date.seconds * 1000)
              .toISOString()
              .split("T")[0]
          : "",
      price: item.price,
      image: item.image,
      category: item.category,
      is_available: item.is_available,
      item_id: item.item_id,
      review: item.review,
      quantity: item.quantity,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:3001/delete/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log("Item deleted:", data);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
      setError("Failed to delete item. Please try again.");
    }
  };

  return (
    <div className="mx-10 flex flex-col gap-16 py-12 font-ptserif">
      <div className="flex justify-center">
        <h1 className="text-2xl font-black">Item</h1>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mx-10 flex flex-col items-center gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Item Name"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Description"
          />
          <div className="flex gap-10">
            <input
              type="text"
              name="artist_name"
              value={formData.artist_name}
              onChange={handleChange}
              className="w-1/2 flex-1 border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
              placeholder="Artist"
            />
            <input
              type="date"
              name="created_date"
              value={formData.created_date || ""}
              onChange={handleChange}
              className="w-1/2 flex-1 border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
              placeholder="Created Date"
            />
          </div>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Price"
          />
          <div className="flex gap-2">
            <label htmlFor="image" className="">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="rounded-lg border-2 border-dashed border-black"
            />
            <p className="text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
          <button
            type="submit"
            className="h-8 w-80 rounded-full bg-[#E9B472] text-[#FAF1EA]"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full overflow-x-scroll md:overflow-auto">
        <table className="w-screen md:w-full">
          <thead className="text-xs text-[#FAF1EA]">
            <tr className="rounded-lg bg-[#092928]">
              <th scope="col" className="rounded-l-full py-2">
                Item
              </th>
              <th scope="col" className="py-2">
                Description
              </th>
              <th scope="col" className="py-2">
                Artist
              </th>
              <th scope="col" className="py-2">
                Created Date
              </th>
              <th scope="col" className="py-2">
                Price
              </th>
              <th scope="col" className="py-2">
                Image
              </th>
              <th scope="col" className="rounded-r-full py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="text-xs text-[#092928]">
                <td className="py-2">{item.item_name}</td>
                <td className="py-2">{item.description}</td>
                <td className="py-2">{item.artist_name}</td>
                <td className="py-2">
                  {item.created_date &&
                    new Date(
                      item.created_date.seconds * 1000,
                    ).toLocaleDateString()}
                </td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">{item.image}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="rounded-full bg-[#E9B472] px-2 text-[#FAF1EA]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-full bg-[#E9B472] px-2 text-[#FAF1EA]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
