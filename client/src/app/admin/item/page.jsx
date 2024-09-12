import React from "react";

const EditItem = () => {
  return (
    <div className="mx-10 font-ptserif flex flex-col gap-16">
      <div className="flex justify-center">
        <h1 className="text-2xl font-black">Item</h1>
      </div>

      <div className="mx-10 flex flex-col gap-6 md:mx-80">
        <div className="flex flex-col justify-center gap-4">
          <input
            type="text"
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Item"
          />
          <input
            type="text"
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Description"
          />
          <div className="flex gap-10">
            <input
              type="text"
              className="flex-1 w-1/2 border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
              placeholder="Artist"
            />
            <input
              type="text"
              className="flex-1 w-1/2 border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
              placeholder="Created Date"
            />
          </div>
          <input
            type="text"
            className="flex border-b-2 border-black bg-[#FAF1EA] placeholder-[#092928] placeholder-opacity-100"
            placeholder="Price"
          />
          <div className="flex gap-4">
            <label htmlFor="" className="">Image</label>
            <div className="flex flex-col gap-2 w-full">
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
        <button className="w-full h-8 rounded-full bg-[#E9B472] text-[#FAF1EA]">Submit</button>
      </div>

      <div className="w-full">
        <table className="w-full">
          <thead className="text-xs text-[#FAF1EA]">
            <tr className="bg-[#092928] rounded-lg">
              <th scope="col" className="py-2 rounded-l-full">Item</th>
              <th scope="col" className="py-2">Description</th>
              <th scope="col" className="py-2">Artist</th>
              <th scope="col" className="py-2">Created Date</th>
              <th scope="col" className="py-2">Price</th>
              <th scope="col" className="py-2">Image</th>
              <th scope="col" className="py-2 rounded-r-full">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="py-2">test</td>
                <td className="py-2">test</td>
                <td className="py-2">test</td>
                <td className="py-2">test</td>
                <td className="py-2">test</td>
                <td className="py-2">test</td>
                <td className="py-2">test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditItem;
