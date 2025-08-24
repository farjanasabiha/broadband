"use client";
import React from "react";
import { ArrowRight, Wifi, Monitor, Gamepad2 } from "lucide-react";
import Image from "next/image";

const Blog = () => {
  const packages = [
    {
      id: 1,
      title:
        "Best Corporate & Freelancer Internet Packages in Bangladesh (2025)",
      description:
        "Whether you're a corporate professional running a large office or a freelancer working from home, a reliable and fast internet connection is crucial to maintaining",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Person working on laptop with coffee",
      date: "October 8, 2024",
      comments: "No Comments",
    },
    {
      id: 2,
      title:
        "Best Gaming Internet Packages in Bangladesh: A Guide for Gamers in 2025",
      description:
        "If you're a gamer in Bangladesh, you know how crucial a fast, reliable internet connection is. Whether you're into competitive online games like Call of",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Two people gaming together on couch",
      date: "October 8, 2024",
      comments: "No Comments",
    },
    {
      id: 3,
      title:
        "Best Home Internet Packages in Bangladesh: A Comprehensive Guide for 2025",
      description:
        "In Bangladesh, the demand for reliable and fast home internet is growing rapidly, especially with remote work, online education, and entertainment needs on the rise.",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Family using devices with smart home icons",
      date: "October 8, 2024",
      comments: "No Comments",
    },
    {
      id: 4,
      title:
        "Best Home Internet Packages in Bangladesh: A Comprehensive Guide for 2025",
      description:
        "In Bangladesh, the demand for reliable and fast home internet is growing rapidly, especially with remote work, online education, and entertainment needs on the rise.",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Family using devices with smart home icons",
      date: "October 8, 2024",
      comments: "No Comments",
    },
    {
      id: 5,
      title:
        "Best Home Internet Packages in Bangladesh: A Comprehensive Guide for 2025",
      description:
        "In Bangladesh, the demand for reliable and fast home internet is growing rapidly, especially with remote work, online education, and entertainment needs on the rise.",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Family using devices with smart home icons",
      date: "October 8, 2024",
      comments: "No Comments",
    },
    {
      id: 6,
      title:
        "Best Home Internet Packages in Bangladesh: A Comprehensive Guide for 2025",
      description:
        "In Bangladesh, the demand for reliable and fast home internet is growing rapidly, especially with remote work, online education, and entertainment needs on the rise.",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Family using devices with smart home icons",
      date: "October 8, 2024",
      comments: "No Comments",
    },
    {
      id: 7,
      title:
        "Best Home Internet Packages in Bangladesh: A Comprehensive Guide for 2025",
      description:
        "In Bangladesh, the demand for reliable and fast home internet is growing rapidly, especially with remote work, online education, and entertainment needs on the rise.",
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      alt: "Family using devices with smart home icons",
      date: "October 8, 2024",
      comments: "No Comments",
    },
  ];

  return (
    <div className="min-h-screen py-5">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            >
              {/* Image Container with Background */}
              <div
                className="relative h-48 sm:h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primaryColor text-white shadow-lg animate-pulse">
                    INTERNET
                  </span>
                </div>

                <div className="absolute -bottom-8 left-15 transform -translate-x-1/2 z-20">
                  <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                    <Image
                      src="/avater.jpg"
                      height={64}
                      width={64}
                      alt="avatar"
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 sm:px-8 py-10">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primaryColor transition-colors duration-300">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                  {pkg.description}
                </p>

                {/* Read More Button */}
                <div className="mb-6">
                  <button className="inline-flex items-center text-primaryColor  font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
                    READ MORE
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 pt-4 border-t border-gray-100">
                  <span>{pkg.date}</span>
                  <span>{pkg.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
