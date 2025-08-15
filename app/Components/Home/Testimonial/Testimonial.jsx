"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import SingleTestimonial from "./SingleTestimonial";

const blogPosts = [
  {
    id: 1,
    title: "Game Day Burger With Homemade",
    author: "Milone Hridoy",
    image: "/Customer-image-2c.webp",
    description:
      "Perfect burger recipe for your game day celebrations with friends and family.Perfect burger recipe for your game day celebrations with friends and family.",
  },
  {
    id: 2,
    title: "Delicious Pizza With On A Wooden",
    author: "Milone Hridoy",
    image: "/Customer-image-2c.webp",
    description:
      "Traditional wood-fired pizza recipe that brings authentic Italian flavors to your table.Traditional wood-fired pizza recipe that brings authentic Italian flavors to your table.",
  },
  {
    id: 3,
    title: "Game Day Burger With Homemade",
    author: "Milone Hridoy",
    image: "/b-1.jpg",
    description:
      "Another delicious burger variation perfect for any occasion.Traditional wood-fired pizza recipe that brings authentic Italian flavors to your table.",
  },
  {
    id: 4,
    title: "Fresh Garden Salad Bowl",
    author: "Milone Hridoy",
    image: "/api/placeholder/400/300",
    description:
      "Nutritious and colorful salad packed with fresh vegetables and herbs.",
  },
  {
    id: 5,
    title: "Grilled Chicken Special",
    author: "Milone Hridoy",
    image: "/api/placeholder/400/300",
    description: "Perfectly grilled chicken with special marinade and herbs.",
  },
];

const Testimonial = () => {
  return (
    <div className="">
      <div className="container max-w-6xl mx-auto px-5 pb-24">
        <div className="text-left mb-12">
          <h1 className="text-4xl lg:text-6xl xl:text-[35px] font-semibold mb-6 text-white">
            Some of our
            <br />
            Happy Clients
          </h1>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Left Arrow */}
          <div className="swiper-button-prev text-lg !text-white !left-0 !top-1/2 -translate-y-1/2"></div>
          {/* Right Arrow */}
          <div className="swiper-button-next text-lg !text-white !right-0 !top-1/2 -translate-y-1/2"></div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
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
