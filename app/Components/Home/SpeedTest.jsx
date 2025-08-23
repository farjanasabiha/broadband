import React from "react";

const SpeedTest = () => {
  return (
    <div className="text-right container max-w-6xl mx-auto px-5">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-medium text-left leading-snug mb-12">
        Test Your Present <br />{" "}
        <span className="text-white">Internet Speed</span>
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
