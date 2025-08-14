"use client";
import React, { useState } from "react";

const TopBar = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="bg-[#5e731f] text-black text-sm py-2 px-4 mb-0">
      <div className="container max-w-6xl mx-auto flex justify-end md:justify-between items-center">
        {/* Left Side: Contact Info */}
        <div className="hidden md:block ">
          <div className="flex items-center space-x-6 ">
            {/* Phone */}
            <div className="flex items-center gap-1">
              <img
                src="https://asiannetworkbd.net/wp-content/uploads/2024/06/Group-20.png"
                alt="Phone"
                className="w-6 h-6"
              />
              <span className="font-semibold">09638233323</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1">
              <img
                src="https://asiannetworkbd.net/wp-content/uploads/2024/06/Group-21-1.png"
                alt="Email"
                className="w-6 h-6"
              />
              <span className="font-semibold">support@asiannetworkbd.net</span>
            </div>
          </div>
        </div>
        {/* Right Side: Language Selector */}
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center bg-black text-lime-400 px-3 py-1 rounded cursor-pointer"
          >
            <img
              src={
                language === "en"
                  ? "https://asiannetworkbd.net/wp-content/plugins/gtranslate/flags/16/en.png"
                  : "https://asiannetworkbd.net/wp-content/plugins/gtranslate/flags/16/bn.png"
              }
              alt="Flag"
              className="w-5 h-4 mr-2"
            />
            {language === "en" ? "English" : "বাংলা"}
            <svg
              className="ml-2 w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3-3 3 3H7z" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-36 text-white"
          >
            <li>
              <button
                className="flex items-center gap-2 hover:text-lime-400"
                onClick={() => handleLanguageChange("en")}
              >
                <img
                  src="https://asiannetworkbd.net/wp-content/plugins/gtranslate/flags/16/en.png"
                  alt="English"
                  className="w-5 h-4"
                />
                English
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-2 hover:text-lime-400"
                onClick={() => handleLanguageChange("bd")}
              >
                <img
                  src="https://asiannetworkbd.net/wp-content/plugins/gtranslate/flags/16/bn.png"
                  alt="Bangla"
                  className="w-5 h-4"
                />
                বাংলা
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
