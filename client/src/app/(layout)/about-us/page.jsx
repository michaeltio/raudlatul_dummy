import React from "react";
export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col gap-8 py-12 font-ptserif md:gap-12">
        <section className="relative mx-6 flex aspect-[17/9] items-end rounded-2xl bg-[#092928] bg-opacity-50 px-4 py-6 text-white md:mx-16 md:aspect-[17/7] md:rounded-[3rem] md:px-16">
          <div className="absolute inset-0 -z-10 rounded-2xl md:rounded-[3rem]">
            <img
              src="/webp/main-building.webp"
              alt="Main Building"
              className="h-full w-full rounded-2xl object-cover shadow-lg md:rounded-[3rem] dark:shadow-gray-600"
            />
          </div>
          <div className="w-2/3 md:py-20">
            <h1 className="mb-2 text-xl font-semibold md:mb-6 md:text-5xl">
              Raudlatul Irfan
            </h1>
            <p className="text-4xs text-justify md:text-lg">
              Yayasan Raudlatul Irfan adalah lembaga pendidikan Islam yang
              berdedikasi untuk memberikan pendidikan berkualitas berbasis
              nilai-nilai Islami. Kami tidak hanya menyediakan pendidikan formal
              yang membentuk generasi berakhlak mulia, tetapi juga mendukung
              pengembangan seni kaligrafi melalui Workshop Kaligrafi Raudlatul
              Irfan. Karya kaligrafi kami telah diakui secara internasional,
              mencerminkan keahlian para pengrajin kami yang berbakat dan
              berkualitas tinggi. Melalui dedikasi pada pendidikan dan seni,
              kami berkomitmen untuk melestarikan nilai-nilai budaya Islam dan
              memperkenalkannya ke seluruh dunia
            </p>
          </div>
        </section>
        <section className="relative aspect-[16/3] w-screen bg-[#092928] bg-opacity-50 bg-cover object-contain md:aspect-[16/2]">
          <div className="absolute inset-0 -z-10">
            <img
              src="/webp/3-caligraphy.webp"
              alt="Caligraphy"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
        <section className="flex flex-row items-center justify-end gap-4 md:gap-16">
          <div className="flex w-2/5 flex-col items-end">
            <h1 className="text-xl font-semibold md:mb-6 md:text-4xl">
              Our Mission
            </h1>
            <p className="text-3xs ml-2 text-end leading-tight md:text-lg">
              Memperkenalkan kaligrafi sebagai seni dan teknik yang menekankan
              pada keindahan bentuk-bentuk, huruf, dan merangkai tulisan secara
              tersusun, menjalankan bisnis kaligrafi yang berorientasi pada
              kepuasan konsumen dan mitra, mengupayakan agar kaligrafi menjadi
              pendorong kegiatan ekonomi masyarakat.
            </p>
          </div>
          <div className="relative aspect-[16/11] w-3/5 rounded-l-xl bg-[#092928] bg-opacity-50 md:aspect-[16/8] md:w-1/2 md:rounded-l-[2.5rem]">
            <div className="absolute inset-0 -z-10">
              <img
                src="/webp/rapat01.webp"
                alt="Meeting"
                className="h-full w-full rounded-l-xl object-cover shadow-lg md:rounded-l-[2.5rem] dark:shadow-gray-600"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
