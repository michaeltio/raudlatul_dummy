import Item from "@/components/shop/Item";

export default function Cart() {
  return (
    <div className="flex flex-col py-12">
      <h1 className="text-center text-4xl font-bold">Cart</h1>
      <div className="mx-auto mt-12 flex w-1/3 flex-row justify-between rounded-full bg-[#092928] px-16 py-2 text-white">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold">Rp. 100.000</h1>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {[...Array(6)].map((_, i) => (
          <Item
            key={i}
            image="caligraphy01.webp"
            name="Item Name"
            price="100.000"
          />
        ))}
      </div>
    </div>
  );
}
