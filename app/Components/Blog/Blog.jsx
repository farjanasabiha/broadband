"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
const Blog = () => {
  const { t } = useTranslation("common");

  const blogs = [
    {
      id: 1,
      title: t("blog_title1"),
      description: t("blog_desc1"),
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      date: t("blog_date1"),
      comments: t("blog_comments1"),
    },
    {
      id: 2,
      title: t("blog_title2"),
      description: t("blog_desc2"),
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      date: t("blog_date2"),
      comments: t("blog_comments2"),
    },
    {
      id: 3,
      title: t("blog_title3"),
      description: t("blog_desc3"),
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      date: t("blog_date3"),
      comments: t("blog_comments3"),
    },
    {
      id: 4,
      title: t("blog_title4"),
      description: t("blog_desc4"),
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      date: t("blog_date4"),
      comments: t("blog_comments4"),
    },
    {
      id: 5,
      title: t("blog_title5"),
      description: t("blog_desc5"),
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      date: t("blog_date5"),
      comments: t("blog_comments5"),
    },
    {
      id: 6,
      title: t("blog_title6"),
      description: t("blog_desc6"),
      image: "/best-corporate-internet-service-in-bangladesh.webp",
      date: t("blog_date6"),
      comments: t("blog_comments6"),
    },
  ];

  return (
    <div className="min-h-screen py-5">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            >
              {/* Image Container */}
              <div
                className="relative h-48 sm:h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primaryColor text-white shadow-lg animate-pulse">
                    {t("blog_category")}
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primaryColor transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                  {blog.description}
                </p>

                <div className="mb-6">
                  <Link href='/' className="inline-flex items-center text-primaryColor font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
                    {t("blog_read_more")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 pt-4 border-t border-gray-100">
                  <span>{blog.date}</span>
                  <span>{blog.comments}</span>
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
