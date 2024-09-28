import SearchBar from "@/components/search-bar/SearchBar";
import ShopCard from "@/components/shop/ShopCard";

export default function Wishlist() {
  return (
    <div className="flex flex-col md:gap-8">
      <h1 className="text-center font-ptserif text-xl font-semibold md:text-4xl">
        Wishlist
      </h1>
      <div className="mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-4 md:gap-10">
        {[1, 2, 3, 4].map((item) => (
          <ShopCard key={item} />
        ))}
      </div>
    </div>
  );
}
