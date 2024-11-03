import SearchBar from "@/components/shop/SearchBar";
import Image from "next/image";

const items = [
  {
    item_name: "Calligraphy Art",
    description: "Beautiful Arabic calligraphy art with intricate details.",
    artist_name: "Ahmad Al-Tamimi",
    created_date: { seconds: 1696297200 }, // Use a timestamp for demo purposes
    price: "Rp 1.250.000",
  },
];

export default function Content() {
  return (
    <div id="mainService" className="flex flex-col gap-8 py-12">
      <SearchBar />
      <div className="md:mx-10 md:flex">
        <div className="space-y-4 px-9 md:flex-1 md:px-6 md:py-0 xl:flex xl:space-x-6 xl:space-y-0">
          <div className="aspect-[16/11] rounded-2xl bg-[#092928] md:aspect-square md:flex-1 2xl:aspect-[16/11]">
            <Image
              src="/webp/caligraphy01.webp"
              width={500}
              height={500}
              className="h-full w-full rounded-2xl object-cover"
              alt="Calligraphy Art"
            />
          </div>

          <div className="flex justify-center space-x-4 xl:flex-col xl:space-x-0 xl:space-y-4">
            <div className="aspect-square w-12 rounded bg-[#E9B472] xl:w-14"></div>
            <div className="aspect-square w-12 rounded bg-[#014E3E] xl:w-14"></div>
            <div className="aspect-square w-12 rounded bg-[#E9B472] xl:w-14"></div>
            <div className="aspect-square w-12 rounded bg-[#014E3E] xl:w-14"></div>
          </div>
        </div>

        <div className="content-center space-y-10 p-9 md:flex-1 md:space-y-20">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              {items.map((item, index) => (
                <h2 key={index} className="font-ptserif text-3xl font-bold">
                  {item.item_name}
                </h2>
              ))}

              <div className="flex">
                <Image
                  src="/svg/icon/star-yellow.svg"
                  alt="img star"
                  className="w-8 p-1"
                  width={5}
                  height={5}
                />
                <p className="font-ptserif text-2xl font-bold">4.9/5</p>
              </div>
            </div>
            {items.map((item, index) => (
              <p key={index} className="mb-7 font-ptserif text-lg">
                {item.description}
              </p>
            ))}

            <div className="space-y-1">
              {items.map((item, index) => (
                <p key={index} className="text-md font-ptserif">
                  <b>Artist:</b> {item.artist_name}
                </p>
              ))}
              {items.map((item, index) => (
                <p key={index} className="text-md mb-8 font-ptserif">
                  <b>Created Date:</b>{" "}
                  {item.created_date
                    ? new Date(
                        item.created_date.seconds * 1000,
                      ).toLocaleString()
                    : "No Date Available"}
                </p>
              ))}
            </div>
          </div>

          <div className="relative">
            <a
              href="#"
              className="text-md mb-6 mt-10 font-ptserif font-bold text-[#E9B472] underline"
            >
              See Reviews
            </a>
            <div className="w-44">
              {items.map((item, index) => (
                <p
                  key={index}
                  className="my-3 text-center font-ptserif text-xl font-bold"
                >
                  {item.price}
                </p>
              ))}

              <button className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold">
                Check Out
              </button>
            </div>
            <div className="absolute bottom-0 right-0 flex space-x-4">
              <Image
                src="/svg/icon/love.svg"
                alt="img love"
                className="h-10 w-10 rounded-full bg-[#E9B472] p-2"
                width={10}
                height={10}
              />
              <Image
                src="/svg/icon/cart.svg"
                alt="img cart"
                className="h-10 w-10 rounded-full bg-[#014E3E] p-2"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
