export default function AboutUs() {
  return (
    <div className="flex flex-col font-ptserif">
      <div className="mx-6 flex aspect-[16/8] items-end rounded-2xl bg-[#092928] px-4 py-6 text-white">
        <div className="w-2/3">
          <h1 className="font-semibold">Raudlatul Irfan</h1>
          <p className="text-justify text-[0.45rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="aspect-[16/3] w-screen bg-[#E9B472]"></div>
      <div className="flex flex-row">
        <div className="flex flex-col items-end">
          <h1>Our Mission</h1>
          <p className="text-right text-[0.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className=""></div>
      </div>
      <div></div>
    </div>
  );
}
