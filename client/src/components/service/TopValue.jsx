import Image from "next/image";

export default function TopValue({ img, title, p1 }) {
  return (
    <div className="flex w-32 flex-col items-center">
      <Image
        src={`/svg/icon/${img}`}
        alt="booking"
        className="rounded-full bg-[#092928] p-3"
        width={60}
        height={60}
      />
      <a className="item-center text-md mt-2 justify-center font-ptserif font-black md:text-lg">
        {title}
      </a>
      <p className="item-center text-2xs justify-center text-center font-ptserif font-light md:text-xs">
        {p1}
      </p>
    </div>
  );
}
