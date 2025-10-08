"use client";

import React from "react";
import Image from "next/image";
import { MdSocialDistance } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("common");

  return (
    <section className="container max-w-6xl mx-auto px-5">
      <div className="bg-black text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
          <span className="text-white">{t("services_title")}</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-14">
          {/* Left Box */}
          <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-6 text-center w-full md:w-72">
            <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3">
              {t("services_powerful_title")}
            </h3>
            <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
              {t("services_powerful_desc")}
            </p>
            <div className="text-center mx-auto">
              <MdSocialDistance className="text-5xl mx-auto text-[#ff0033]" />
            </div>
          </div>

          {/* Center Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-2 bg-[#ff0033] rounded-full blur-3xl opacity-30"></div>
            <Image
              src="/asian-networks-internet-user.webp"
              alt="Person using phone"
              width={250}
              height={300}
              className="relative top-14 md:top-6 z-10 rounded-lg"
            />
          </div>

          {/* Right Box */}
          <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-6 text-center w-full md:w-72">
            <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3">
              {t("services_bufferless_title")}
            </h3>
            <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
              {t("services_bufferless_desc")}
            </p>
            <div className="text-center mx-auto">
              <MdSocialDistance className="text-5xl mx-auto text-[#ff0033]" />
            </div>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="w-full mx-auto text-center flex items-center justify-center">
          <div className="flex justify-center mt-6 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-6 text-center w-full md:w-[540px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-14">
              <div className="space-y-5">
                <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3 text-center mx-auto">
                  {t("services_bdix_title")}
                </h3>
                <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
                  {t("services_bdix_desc")}
                </p>
                <div className="text-center mx-auto">
                  <button>
                    <Link
                      href="/new-connection"
                      className="flex items-center justify-between gap-2 py-2 px-6 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                    >
                      <span>{t("services_bdix_button")}</span>
                      <FaArrowRightLong />
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                <div className="text-center mx-auto">
                  <MdSocialDistance className="text-5xl mx-auto text-[#ff0033]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;