"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const SingleTestimonial = ({
  image,
  title,
  author,
  description,
}) => {
  return (
    <div className="">
      <div className="px-5 md:px-10 lg:px-20">
        <div className="grid gris-cols-1 md:grid-cols-2 gap-10 items-center  py-10">
          {/* Left Section */}
          <div className="relative overflow-hidden text-center  space-y-4">
            <div className="relative w-20 h-20 mx-auto text-center">
              <Image
                src={image}
                fill
                quality={100}
                priority
                alt={title}
                className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-full"
                sizes="80px"
              />
            </div>
            <p className="text-gray-300 text-center italic font-normal text-lg">
              {author}
            </p>
            <h3 className="text-sm  italic text-center font-normal text-gray-300 mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
              {title}
            </h3>
            <div className="text-[#e4b915] text-center font-medium text-lg flex items-center justify-center gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed  text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
