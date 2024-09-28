import Image from "next/image";

export default function Adrating({ reviews }) {
  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-left font-ptserif text-sm tracking-wide text-[#FAF1EA]">
          <thead className="bg-[#014E3E] text-xs uppercase text-[#FAF1EA]">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Review
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
            <tr className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <label for="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-[#092928]"
              >
                {review.customer}
              </th>
              <td className="px-6 py-4 text-[#092928]">{review.item}</td>
              <td className="px-6 py-4 text-[#092928]">{review.review}</td>
              <td className="px-6 py-4 text-[#092928]">{review.rating}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
