import React from "react";
import Image from "next/image";
import { MdSocialDistance } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="   container max-w-6xl  mx-auto  px-5">
      <div className="bg-black text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
          It’s a Beast for <br />{" "}
          <span className="text-white">Day to Day Heavy Use</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-14">
          {/* Left Box */}
          <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-6 text-center w-full md:w-72">
            <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3">
              Powerful
            </h3>
            <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
              Local CDN & IPv4/IPv6 gives fast internet experience.
            </p>
            <div className="text-center mx-auto">
              <MdSocialDistance className="text-5xl  mx-auto text-center text-[#ff0033]" />
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
              className="relative z-10 rounded-lg"
            />
          </div>

          {/* Right Box */}
          <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-6 text-center  w-full md:w-72">
            <div>
              <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3">
                Buffer-less
              </h3>
              <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
                No loading on any social media, video streaming, etc.
              </p>
              <div className="text-center mx-auto">
                <MdSocialDistance className="text-5xl  mx-auto text-center text-[#ff0033]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="w-full mx-auto text-center flex items-center justify-center">
          <div className="flex justify-center mt-6 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-6 text-center w-full md:w-[540px]">
            <div className="flex flex-col md:flex-row items-center justify-betweeen gap-14">
              <div className="space-y-5">
                <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3 text-center mx-auto">
                  BDIX FTP Servers
                </h3>
                <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
                  So many FTP server helps you <br /> to entertain & educate
                  yourself. <br />
                  Movies, Tutorials, Games, etc.
                </p>
                <div className="text-center mx-auto">
                  <button className="py-2 px-6 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]">
                    <div className="flex items-center justify-between gap-2">
                      <span>Use Today</span> <FaArrowRightLong />
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div className="text-center mx-auto">
                  <MdSocialDistance className="text-5xl  mx-auto text-center text-[#ff0033]" />
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
