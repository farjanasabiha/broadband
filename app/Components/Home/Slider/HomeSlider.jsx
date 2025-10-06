import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/Game-02-1.webp"
            height={500}
            width={500}
            quality={100}
            unoptimized
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Web-banner-2-1.webp"
            height={500}
            width={500}
            quality={100}
            unoptimized
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Game-02-1.webp"
            height={500}
            width={500}
            quality={100}
            unoptimized
            alt="slider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;