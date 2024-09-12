import SearchBar from "@/components/search-bar/SearchBar";
import ShopCard from "@/components/shop/ShopCard";

export default function Shop() {
  return (
    <div className="w-screen">
      <SearchBar />
      <div className="mt-8 grid grid-cols-4 place-items-center gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <ShopCard key={item} />
        ))}
      </div>
    </div>
  );
}
