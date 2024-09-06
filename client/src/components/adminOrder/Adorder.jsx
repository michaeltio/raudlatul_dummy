import Image from "next/image";

export default function Adorder({ p1, p2, p3, p4, p5, p6, p7 }) {
  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-left font-ptserif text-sm tracking-wide text-[#FAF1EA]">
          <thead className="bg-[#014E3E] text-xs uppercase text-[#FAF1EA]">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                {p1}
              </th>
              <th scope="col" className="px-6 py-3">
                {p2}
              </th>
              <th scope="col" className="px-6 py-3">
                {p3}
              </th>
              <th scope="col" className="px-6 py-3">
                {p4}
              </th>
              <th scope="col" className="px-6 py-3">
                {p5}
              </th>
              <th scope="col" className="px-6 py-3">
                {p6}
              </th>
              <th scope="col" className="px-6 py-3">
                {p7}
              </th>
            </tr>
          </thead>
          <tbody>
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
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-[#092928]">Silver</td>
              <td className="px-6 py-4 text-[#092928]">Laptop</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">$2999</td>
              <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                <Image
                  src={`/svg/icon/edit.svg`}
                  alt="edit"
                  className=""
                  width={25}
                  height={25}
                />
                <Image
                  src={`/svg/icon/delete.svg`}
                  alt="delete"
                  className=""
                  width={25}
                  height={25}
                />
              </td>
            </tr>
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
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-[#092928]">Silver</td>
              <td className="px-6 py-4 text-[#092928]">Laptop</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">$2999</td>
              <td className="flex items-center px-6 py-4 text-[#092928]">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Remove
                </a>
              </td>
            </tr>
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
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-[#092928]">Silver</td>
              <td className="px-6 py-4 text-[#092928]">Laptop</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">$2999</td>
              <td className="flex items-center px-6 py-4 text-[#092928]">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Remove
                </a>
              </td>
            </tr>
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
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-[#092928]">Silver</td>
              <td className="px-6 py-4 text-[#092928]">Laptop</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">$2999</td>
              <td className="flex items-center px-6 py-4 text-[#092928]">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Remove
                </a>
              </td>
            </tr>
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
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-[#092928]">Silver</td>
              <td className="px-6 py-4 text-[#092928]">Laptop</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">$2999</td>
              <td className="flex items-center px-6 py-4 text-[#092928]">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]">
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
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-[#092928]">Silver</td>
              <td className="px-6 py-4 text-[#092928]">Laptop</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">Yes</td>
              <td className="px-6 py-4 text-[#092928]">$2999</td>
              <td className="flex items-center px-6 py-4 text-[#092928]">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ms-3 font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
