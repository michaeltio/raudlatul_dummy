import ShopCard from "@/components/shop/ShopCard";

export default function Cart() {
  return (
    <div className="flex flex-col font-ptserif md:gap-8">
      <h1 className="text-center font-ptserif text-xl font-semibold md:text-4xl">
        Cart
      </h1>
      <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 md:gap-10">
        {[1, 2, 3, 4].map((item) => (
          <ShopCard key={item} />
        ))}
      </div>
      <div className="mx-auto flex w-1/2 flex-row justify-between rounded-full bg-[#092928] px-4 py-2 font-semibold text-white md:w-1/3 md:px-20 md:text-xl">
        <h1>Total</h1>
        <p>Rp 100.000,00</p>
      </div>
    </div>
  );
}
