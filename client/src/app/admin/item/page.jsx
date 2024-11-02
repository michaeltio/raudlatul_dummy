"use client";
import { postData, getAllData, deleteData, updateData } from "@/api/apiClient";
import React, { useEffect, useState } from "react";

const EditItem = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    artist_name: "",
    category: "",
    created_date: "",
    description: "",
    image: "",
    is_available: "",
    item_id: "",
    item_name: "",
    price: "",
    quantity: "",
    rating: "",
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllData("KaligraphyItem");
        console.log("Data fetched:", response.data); 
        setItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setItems([]); 
      }
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (formData.item_id) {
        const response = await updateData("KaligraphyItem", formData.item_id, formData);
        console.log("Updated item:", response.data);
        setItems(items.map((item) => (item.item_id === formData.item_id ? response.data : item)));
      } else {
        const response = await postData("KaligraphyItem", formData);
        console.log("Created new item:", response.data);
        setItems([...items, response.data]);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      item_name: item.item_name,
      description: item.description,
      artist_name: item.artist_name,
      created_date: item.created_date && item.created_date.seconds
        ? new Date(item.created_date.seconds * 1000).toISOString().split("T")[0]
        : "",
      price: item.price,
      image: item.image,
      category: item.category,
      is_available: item.is_available,
      item_id: item.item_id,
      rating: item.rating,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteData("KaligraphyItem", { id });
      setItems(response.data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="mx-10 flex flex-col gap-16 font-ptserif">
      <div className="flex justify-center">
        <h1 className="text-2xl font-black">Item</h1>
      </div>

      <div className="mx-10 flex flex-col items-center gap-6">
        <div className="flex flex-col justify-center gap-4">
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Item"
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
              value={formData.created_date ? formData.created_date : ""}
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
            <label htmlFor="" className="">
              Image
            </label>
            <div className="flex w-full flex-col gap-2">
              <input
                type="file"
                className="rounded-lg border-2 border-dashed border-black"
              />
              <p className="text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
        </div>
        <button
          className="h-8 w-80 rounded-full bg-[#E9B472] text-[#FAF1EA]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="w-full">
        <table className="w-full">
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
            {Array.isArray(items) && items.map((item, index) => (
              <tr key={index} className="text-xs text-[#092928]">
                <td className="py-2">{item.item_name}</td>
                <td className="py-2">{item.description}</td>
                <td className="py-2">{item.artist_name}</td>
                <td className="py-2">
                  {item.created_date && item.created_date.seconds
                    ? new Date(
                        item.created_date.seconds * 1000,
                      ).toLocaleDateString()
                    : item.created_date}
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
                    onClick={() => handleDelete(item.item_id)}
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
};

export default EditItem;
