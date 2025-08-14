import React from "react";

const SpeedTest = () => {
  return (
    <div className="text-right ontainer max-w-6xl mx-auto px-5">
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
      <div>
        Provided by{" "}
        <a
          href="https://www.meter.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Meter.net
        </a>
      </div>
    </div>
  );
};

export default SpeedTest;
