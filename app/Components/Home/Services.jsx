import React from "react";
import Image from "next/image";
import { MdSocialDistance } from "react-icons/md";

const Services = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-center leading-snug mb-12">
          It’s a Beast for <br />{" "}
          <span className="text-white">Day to Day Heavy Use</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Box */}
          <div className="bg-gradient-to-b from-[#101a0f] to-[#24351e] rounded-2xl p-6 text-center w-72">
            <h3 className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent text-[32px] font-normal mb-3">
              Buffer-less
            </h3>
            <p className="text-[#b2b5af] text-[17px] font-normal mb-4">
              No loading on any social media, video streaming, etc.
            </p>
            <div className="text-center mx-auto">
              <MdSocialDistance className="text-4xl  mx-auto text-center text-[#ff0033]" />
            </div>
          </div>

          {/* Center Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-8 bg-[#1a2413] rounded-full blur-3xl opacity-50"></div>
            <Image
              src="/man-phone.png" // replace with actual image path
              alt="Person using phone"
              width={300}
              height={400}
              className="relative z-10 rounded-lg"
            />
          </div>

          {/* Right Box */}
          <div className="bg-gradient-to-b from-[#101a0f] to-[#24351e] rounded-2xl p-6 text-center w-72">
            <h3 className="text-[#b9ff66] text-xl font-medium mb-3">
              Powerful
            </h3>
            <p className="text-gray-300 text-sm">
              Local CDN & IPv4/IPv6 gives fast internet experience.
            </p>
            <div className="flex justify-center text-[#b9ff66] text-2xl mt-4">
              🌐
            </div>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="flex justify-center mt-12">
          <div className="bg-gradient-to-b from-[#101a0f] to-[#24351e] rounded-2xl p-6 text-center w-[22rem]">
            <h3 className="text-[#b9ff66] text-xl font-medium mb-3">
              BDIX FTP Servers
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              So many FTP server helps you to entertain & educate yourself.
              Movies, Tutorials, Games, etc.
            </p>
            <button className="bg-[#b9ff66] text-black px-4 py-2 rounded-full font-medium hover:brightness-90 transition">
              Use Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
