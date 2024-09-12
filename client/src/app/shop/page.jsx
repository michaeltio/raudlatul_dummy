import SearchBar from "@/components/search-bar/SearchBar";
import ShopCard from "@/components/shop/ShopCard";

export default function Shop() {
  return (
    <div className="">
      <SearchBar />
      <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 md:gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <ShopCard key={item} />
        ))}
      </div>
    </div>
  );
}
