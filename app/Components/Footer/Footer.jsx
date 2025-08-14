import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 grid md:grid-cols-12 gap-10">
        {/* Left - Logo & Description */}
        <div className="flex flex-col justify-between col-span-4">
          <div className="md:pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h1 className="text-lime-400 font-bold text-lg leading-tight">
                  ASIAN NETWORK
                </h1>
                <p className="text-xs text-white">CONNECT TO HAPPINESS</p>
              </div>
            </div>
            <p className="text-[15px] text-[#b2b2b2] leading-relaxed mb-4">
              Asian Network is the largest ISP service provider in Gazipur,
              Dhaka, Bangladesh. Home Internet, Corporate Internet, Gaming &
              Streaming Internet is the most popular package of this ISP. Super
              speed, highly secured, easily scalable, priority fast support
              makes people champ. Already over 5000 active users are enjoying
              buffer-less internet galaxy.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <FaFacebookF className="text-lime-400 text-lg" />
              </a>
              <a href="#">
                <FaYoutube className="text-lime-400 text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className=" grid md:grid-cols-3">
            {/* Company */}
            <div>
              <h2 className="text-white text-2xl font-semibold mb-4">
                Company
              </h2>
              <ul className="text-[14px] text-[#b2b2b2] space-y-1">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-white text-2xl font-semibold mb-4">
                Services
              </h2>
              <ul className="text-[14px] text-[#b2b2b2] space-y-1">
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#">Coverage Area</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-white text-2xl font-semibold mb-4">
                Address
              </h2>
              <ul className="text-[14px] text-[#b2b2b2] space-y-1">
                <li className="flex items-start">
                  <FaPhoneAlt className="text-lime-400 mt-1 mr-2" />
                  09638233233
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-lime-400 mt-1 mr-2" />
                  support@asiannetworkbd.net
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-lime-400 mt-1 mr-2" />
                  08, Eidgha Road, Pagar, <br /> Tongi, Gazipur-1710
                </li>
              </ul>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t-1 border-[#b2b2b2b8] my-6 "></div>

          {/* Bottom Row */}
          <div className="max-w-6xl mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left - App download */}
            <div>
              <p className="text-[18px] text-[#b2b2b2] mb-2">
                For smooth experience
              </p>
              <p className="text-[25px] font-semibold text-white mb-3">
                Download Our Mobile App
              </p>
              <div className="flex space-x-3">
                <a href="#">
                  <img
                    src="https://asiannetworkbd.net/wp-content/uploads/2024/06/google-play.svg"
                    alt="Google Play"
                    className="h-8 object-contain"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://asiannetworkbd.net/wp-content/uploads/2024/06/app-store.svg"
                    alt="App Store"
                    className="h-8 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Right - Copyright */}
            <div className="flex flex-col md:items-end text-sm text-gray-400 justify-between">
              <p className="mb-1 md:mb-2">
                © All Rights Reserved – Asian Network
              </p>
              <p>
                Developed by{" "}
                <span className="text-lime-400 font-medium">Boyshero</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
