export default function ItemAdmin() {
  return (
    <div className="relative flex w-full items-center gap-4 rounded-3xl border-2 border-black bg-[#FAF1EA] px-4 py-10 font-ptserif">
      <div className="absolute right-0 flex h-full flex-col items-end justify-between px-4 py-10 text-xs font-semibold">
        <h1 className="">x1</h1>
        <h1 className="">Rp 1.250.000</h1>
      </div>
      <div className="aspect-square w-24 rounded-xl bg-[#092928]"></div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold">Kaligrafi Surah Yasin 20x40</h1>
        <p className="text-xs">Lorem ipsum dolor sit amet, consectectur</p>
        <div className="text-xs">
          <p>
            <span className="font-semibold">Artis:</span> Joko Anwar
          </p>
          <p>
            <span className="font-semibold">Created Date:</span> 19 February
            2020
          </p>
        </div>
      </div>
    </div>
  );
}
