import Image from "next/image";

export default function Rating({ img, title, p1, p2, p3 }) {
  return (
    <div id="cardOrders" className="flex flex-col p-3">
      <div id="contOrder" className="h-56 rounded-3xl bg-[#FAF1EA] shadow-xl">
        <p className="flex justify-end p-4 font-ptserif text-sm font-black tracking-wide text-[#C6975D]">
          Finished
        </p>
        <div className="flex flex-row justify-around">
          <div className="flex items-center justify-center">
            <Image
              src={`/webp/${img}`}
              alt="img item"
              className="h-32 w-32 rounded-lg"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-md font-ptserif font-black">{title}</h1>
            <div className="flex flex-row gap-2 tracking-wide">
              <p className="font-ptserif text-sm">{p1}</p>
              <p className="font-ptserif text-sm font-black">{p2}</p>
            </div>
          </div>
          <p className="font-ptserif text-sm font-black">{p3}</p>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button className="w-24 rounded-3xl border-[0.12rem] border-[#092928] p-1 font-ptserif font-black text-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]">
            Buy Again
          </button>
          <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA]">
            Rate
          </button>
        </div>
      </div>
    </div>
  );
}
