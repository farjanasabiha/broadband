"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import SingleTestimonial from "./SingleTestimonial";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation("common");

  const blogPosts = [
    {
      id: 1,
      title: t("testimonial_post1_title"),
      author: t("testimonial_post1_author"),
      image: "/Customer-image-2c.webp",
      description: t("testimonial_post1_desc"),
    },
    {
      id: 2,
      title: t("testimonial_post2_title"),
      author: t("testimonial_post2_author"),
      image: "/Customer-image-2c.webp",
      description: t("testimonial_post2_desc"),
    },
    {
      id: 3,
      title: t("testimonial_post3_title"),
      author: t("testimonial_post3_author"),
      image: "/b-1.jpg",
      description: t("testimonial_post3_desc"),
    },
  ];

  return (
    <div>
      <div className="container max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
            {t("testimonial_header_line1")}
            <br />
            <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
              {t("testimonial_header_line2")}
            </span>
          </h1>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Left Arrow */}
          <div className="swiper-button-prev text-lg !text-white !left-0 !top-1/2"></div>
          {/* Right Arrow */}
          <div className="swiper-button-next text-lg !text-white !right-0 !top-1/2"></div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper rounded-3xl"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <SingleTestimonial {...post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
