"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const styles = `
  .swiper-slide-prev, .swiper-slide-next {
    transform: translateY(100%) scale(0.5);
  }
`;

export default function AboutUs() {
  return (
    <>
      <style>{styles}</style>
      <div className="flex flex-col gap-6 font-ptserif">
        <section className="mx-6 flex aspect-[17/9] items-end rounded-2xl bg-[#092928] px-4 py-6 text-white">
          <div className="w-2/3">
            <h1 className="font-semibold">Raudlatul Irfan</h1>
            <p className="text-4xs text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <section className="aspect-[16/3] w-screen bg-[#E9B472]"></section>
        <section className="flex flex-row items-center gap-4">
          <div className="flex w-2/5 flex-col items-end">
            <h1 className="font-semibold">Our Mission</h1>
            <p className="text-3xs ml-2 text-end leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="aspect-[16/11] w-3/5 rounded-l-xl bg-[#092928]"></div>
        </section>
        <section>
          <h1>Achievement</h1>
          <div className="">
            <Swiper
              effect={"coverflow"}
              slide
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 300,
                modifier: 1,
              }}
              pagination={{ dynamicBullets: true }}
              modules={[EffectCoverflow, Pagination]}
              loop={true}
            >
              <SwiperSlide>
                <div>
                  <img
                    className="aspect-video"
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
