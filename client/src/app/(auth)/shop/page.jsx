import SearchBar from "@/components/shop/SearchBar";
import Item from "@/components/shop/Item";

export default function Shop() {
  return (
    <div className="flex flex-col py-12">
      <SearchBar />
      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {[...Array(50)].map((_, i) => (
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
