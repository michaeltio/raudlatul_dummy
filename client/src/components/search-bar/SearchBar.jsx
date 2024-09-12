import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="flex w-full flex-row gap-6 px-16">
      <input
        type="text"
        placeholder="Search"
        className="h-10 w-full rounded-full border border-black bg-transparent p-2"
      />
      <div className="aspect-square h-10 rounded-full bg-[#E9B472]">
        <Image
          src="/svg/icon/love.svg"
          width={100}
          height={100}
          className="w-full p-2"
        />
      </div>
      <div className="aspect-square h-10 rounded-full bg-[#092928]">
        <Image
          src="/svg/icon/cart.svg"
          width={100}
          height={100}
          className="w-full p-2"
        />
      </div>
    </div>
  );
}
