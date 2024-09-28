"use client";
import React, { useEffect, useState } from "react";

const EditItem = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
    description: "",
    artist: "",
    createdDate: "",
    price: "",
    image: "",
  });

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

    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/create/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      item: item.item,
      description: item.description,
      artist: item.artist,
      createdDate: item.createdDate,
      price: item.price,
    });
  };

  console.log(items);

  return (
    <div className="mx-10 flex flex-col gap-16 font-ptserif">
      <div className="flex justify-center">
        <h1 className="text-2xl font-black">Item</h1>
      </div>

      <div className="mx-10 flex flex-col items-center gap-6">
        <div className="flex flex-col justify-center gap-4">
          <input
            type="text"
            name="item"
            value={formData.item}
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
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className="w-1/2 flex-1 border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
              placeholder="Artist"
            />
            <input
              type="text"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleChange}
              className="flex-1 w-1/2 border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
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
          className="w-80 h-8 rounded-full bg-[#E9B472] text-[#FAF1EA]"
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
            {items.map((items, index) => (
              <tr key={index} className="text-xs text-[#092928]">
                <td className="py-2">{items.item}</td>
                <td className="py-2">{items.description}</td>
                <td className="py-2">{items.artist}</td>
                <td className="py-2">{items.createdDate}</td>
                <td className="py-2">{items.price}</td>
                <td className="py-2">{items.image}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEdit(items)}
                    className="bg-[#E9B472] text-[#FAF1EA] rounded-full px-2"
                  >
                    Edit
                  </button>
                  <button className="bg-[#E9B472] text-[#FAF1EA] rounded-full px-2">
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
