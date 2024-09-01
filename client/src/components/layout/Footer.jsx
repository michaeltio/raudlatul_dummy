export default function Footer() {
  return (
    <div className="mt-8">
      <div className="mx-6 flex flex-col items-center gap-6 border-b-2 border-t-2 border-[#092928] py-4 font-ptserif text-[0.65rem] font-semibold">
        <h1>Raudlatul Irfan</h1>
        <div className="flex gap-6">
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
          <div className="h-4 w-4 rounded-full bg-[#092928]"></div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[0.5rem]">Lorem Ipsum</h1>
          <div className="flex flex-col text-[0.45rem] font-normal">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <p className="w-full py-2 text-center font-ptserif text-[0.45rem]">
        Copyright &copy; 2024 Raudlatul Irfan All Rights Reserved
      </p>
    </div>
  );
}
