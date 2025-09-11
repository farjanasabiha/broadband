import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SpeedTest = () => {
  return (
    <div className=" container max-w-6xl mx-auto px-5">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
        Sylhet Internet Speed Test <br />{" "}
        <span className="text-white">– Powered by SyncIT</span>
      </h2>
      <div style={{ minHeight: "360px" }}>
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "50%",
            position: "relative",
          }}
        >
          <iframe
            src="https://www.metercustom.net/plugin/"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              minHeight: "360px",
              overflow: "hidden",
            }}
            title="Meter.net Speed Test"
            allowFullScreen
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-[18px] my-4">
          Check your internet speed anytime from mobile or laptop. SyncIT
          customers in Sylhet enjoy ultra-fast BDIX speeds (YouTube & Facebook
          up to 200 Mbps) and 99.99% uptime — the most reliable fiber connection
          in the city. “Not happy with your current speed? Upgrade to SyncIT
          today”
        </p>
        <button>
          <Link
            className="flex items-center  justify-between gap-2 py-3 px-8 rounded-3xl font-medium bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
            target="_blank"
            href="/new-connection"
          >
            <span className="">Get New Connection</span> <FaArrowRightLong />
          </Link>
        </button>
      </div>
      {/* <div>
        Provided by{" "}
        <a
          href="https://www.meter.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Meter.net
        </a>
      </div> */}
    </div>
  );
};

export default SpeedTest;
