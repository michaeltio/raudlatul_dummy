"use client";
import { deleteData, getAllData, postData } from "@/api/apiClient";
import React, { useEffect, useState } from "react";

export default function EditItem() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          // Create a canvas to resize the image
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Set the desired dimensions (e.g., reduce image size to 50% of original)
          const maxWidth = 800; // Max width for resizing
          const maxHeight = 400; // Max height for resizing
          let width = img.width;
          let height = img.height;

          // Calculate the new dimensions while maintaining the aspect ratio
          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;
            if (width > height) {
              width = maxWidth;
              height = maxWidth / aspectRatio;
            } else {
              height = maxHeight;
              width = maxHeight * aspectRatio;
            }
          }

          // Resize the canvas to the new dimensions
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Convert the resized image to base64 with reduced quality (JPEG format)
          const base64Image = canvas.toDataURL("image/jpeg", 0.5); // 0.5 is the quality (0-1 scale)

          // Set the base64 image data to the formData
          setFormData((prev) => ({
            ...prev,
            image: base64Image,
          }));
        };
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postData("kaligraphyItem", formData);
      setFormData({
        name: "",
        description: "",
        price: 0,
        image: null,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error submitting data:", error);
      setError("Failed to submit data. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteData("kaligraphyItem", id);
      console.log("Item deleted:", response.data);

      window.location.reload();
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
            name="name"
            value={formData.name}
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
          <input
            type="number"
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
          {formData.image && (
            <div>
              <img
                src={formData.image}
                alt="Selected"
                className="h-32 w-32 object-cover"
              />
            </div>
          )}
          <button
            type="submit"
            className="mx-auto h-8 w-80 rounded-full bg-[#E9B472] text-[#FAF1EA]"
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
            {items.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-black">
                  No items found
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="text-xs text-[#092928]">
                  <td className="py-2 text-center">{item.name}</td>
                  <td className="py-2 text-center">{item.description}</td>
                  <td className="py-2 text-center">{item.price}</td>
                  <td className="flex items-center justify-center py-2">
                    <img
                      src={item.image}
                      alt="Selected"
                      className="h-32 w-32 object-cover"
                    />
                  </td>
                  <td className="py-2 text-center">
                    <button className="rounded-full bg-[#E9B472] px-2 text-[#FAF1EA]">
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
