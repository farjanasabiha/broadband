"use client";

import React from "react";
import { MdSocialDistance } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const VideoAndServicesOne = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <section className="container max-w-6xl mx-auto px-5">
        <div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
            {t("video_title")}
          </h2>

          <div className="w-full aspect-video mb-10">
            <iframe
              className="w-full h-full lg:h-[600px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
              <p className="text-[18px] mt-4">{t("video_description")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between mt-10 lg:mt-24">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-5">
              <p className="text-base md:text-[18px] font-normal text-[#b2b5af] pb-5 leading-relaxed whitespace-pre-line">
                {t("video_left_p1")}
              </p>
              <p className="text-base md:text-[18px] font-normal text-[#b2b5af] pb-5 leading-relaxed whitespace-pre-line">
                {t("video_left_p2")}
              </p>
              <p className="text-base font-bold md:text-[18px] italic mt-5 text-[#b2b5af] whitespace-pre-line">
                {t("video_left_p3")}
              </p>
            </div>

            {/* Right Content */}
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                {/* Card 1 */}
                <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 text-center w-full">
                  <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-xl md:text-[28px] lg:text-[32px] font-normal mb-3">
                    {t("card1_title")}
                  </h3>
                  <p className="text-[#b2b5af] text-sm md:text-[17px] font-normal mb-4">
                    {t("card1_desc")}
                  </p>
                  <MdSocialDistance className="text-4xl md:text-5xl mx-auto text-[#ff0033]" />
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 text-center w-full">
                  <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-xl md:text-[28px] lg:text-[32px] font-normal mb-3">
                    {t("card2_title")}
                  </h3>
                  <p className="text-[#b2b5af] text-sm md:text-[17px] font-normal mb-4">
                    {t("card2_desc")}
                  </p>
                  <MdSocialDistance className="text-4xl md:text-5xl mx-auto text-[#ff0033]" />
                </div>

                {/* Bottom Box */}
                <div className="w-full col-span-1 md:col-span-2 flex items-center justify-center">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 w-full text-center">
                    {/* Left Content */}
                    <div className="space-y-5 max-w-lg">
                      <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-xl md:text-[28px] lg:text-[32px] font-normal mb-3">
                        {t("bottom_title")}
                      </h3>
                      <p className="text-[#b2b5af] text-sm md:text-[17px] font-normal mb-4">
                        {t("bottom_desc")}
                      </p>
                      <button>
                        <Link
                          href="/new-connection"
                          className="flex items-center justify-center gap-2 py-2 px-6 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                        >
                          <span>{t("bottom_button")}</span> <FaArrowRightLong />
                        </Link>
                      </button>
                    </div>

                    {/* Right Icon */}
                    <MdSocialDistance className="text-4xl md:text-5xl text-[#ff0033]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoAndServicesOne;
