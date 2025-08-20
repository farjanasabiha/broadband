import React from "react";
import { MdSocialDistance } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
const VideoAndServicesOne = () => {
  return (
    <div>
      <section className=" container max-w-6xl  mx-auto  px-5">
        <div className="">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
            It’s a Beast for <br />{" "}
            <span className="text-white">Day to Day Heavy Use</span>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start justify-between mt-10 lg:mt-24">
            {/* Left Content */}
            <div className="col-span-12 lg:col-span-5 lg:pr-10">
              <p className="text-base md:text-[18px] font-normal text-[#b2b5af] pb-5 leading-relaxed">
                Asian Network is designed to solve gamer’s{" "}
                <span className="font-medium bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
                  subconscious pain
                </span>{" "}
                by reducing lags & Increasing FPS and other game-related stuff.
              </p>
              <p className="text-base md:text-[18px] font-normal text-[#b2b5af] pb-5 leading-relaxed">
                That makes gaming more detailed graphic performance{" "}
                <span className="font-medium bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
                  realistic characters
                </span>{" "}
                and with industry-leading internet speed.
              </p>
              <p className="text-base md:text-[18px] font-normal text-[#b2b5af] leading-relaxed">
                Asian Network is designed to solve gamer’s subconscious pain by
                reducing lags & Increasing FPS and other game-related stuff.
              </p>
              <p className="text-base md:text-[18px] font-bold mt-5 text-[#b2b5af]">
                Be Smart, Be Champion
              </p>
            </div>

            {/* Right Content */}
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                {/* Card 1 */}
                <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 text-center w-full">
                  <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-xl md:text-[28px] lg:text-[32px] font-normal mb-3">
                    Powerful 1
                  </h3>
                  <p className="text-[#b2b5af] text-sm md:text-[17px] font-normal mb-4">
                    Local CDN & IPv4/IPv6 gives fast internet experience.
                  </p>
                  <MdSocialDistance className="text-4xl md:text-5xl mx-auto text-[#ff0033]" />
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 text-center w-full">
                  <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-xl md:text-[28px] lg:text-[32px] font-normal mb-3">
                    Buffer-less
                  </h3>
                  <p className="text-[#b2b5af] text-sm md:text-[17px] font-normal mb-4">
                    No loading on any social media, video streaming, etc.
                  </p>
                  <MdSocialDistance className="text-4xl md:text-5xl mx-auto text-[#ff0033]" />
                </div>

                {/* Bottom Box */}
                <div className="w-full col-span-1 md:col-span-2 flex items-center justify-center">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-8 w-full text-center">
                    {/* Left Content */}
                    <div className="space-y-5 max-w-lg">
                      <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-xl md:text-[28px] lg:text-[32px] font-normal mb-3">
                        BDIX FTP Servers
                      </h3>
                      <p className="text-[#b2b5af] text-sm md:text-[17px] font-normal mb-4">
                        So many FTP server helps you <br /> to entertain &
                        educate yourself.
                        <br />
                        Movies, Tutorials, Games, etc.
                      </p>
                      <button>
                        <Link
                          href={"#"}
                          className="flex items-center justify-center gap-2 py-2 px-6 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
                        >
                          <span>Test Now</span> <FaArrowRightLong />
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
