import SearchBar from "@/components/search-bar/SearchBar";
import ShopCard from "@/components/shop/ShopCard";

export default function Shop() {
  return (
    <div className="flex flex-col">
      <SearchBar />
      <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 md:gap-10">
        {data.map((item) => (
          <ShopCard key={item} />
        ))}
      </div>
    </div>
  );
}
