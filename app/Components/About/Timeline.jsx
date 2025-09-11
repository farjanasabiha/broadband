"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  const items = [
    {
      title: "⦁ ⚡ Ultra-fast Fiber Speeds ",
      desc: "up to 500 Mbps.",
      side: "right",
    },
    {
      title: "⦁	🎮 BDIX Boosted Performance ",
      desc: "YouTube & Facebook up to 200 Mbps.",
      side: "left",
    },
    {
      title: "⦁	🔒 Secure & Stable Connection ",
      desc: "99.99% uptime guaranteed.",
      side: "right",
    },
    {
      title: "⦁	🤝 Customer-First Care ",
      desc: "24/7 support and free installation.",
      side: "left",
    },
    {
      title: "We don’t just provide internet ",
      desc: "we promise an experience that makes life smarter, faster, and more connected.",
      side: "right",
    },
  ];

  return (
    <section className="container max-w-6xl mx-auto px-5  relative min-h-screen border-none">
      <h2 className=" text-4xl font-semibold mb-5">Our Promise</h2>
      <p className="text-[18px]">
        At SyncIT, we promise to deliver more than just internet — we deliver
        peace of mind, speed, and reliability. Every customer receives:
      </p>
      <VerticalTimeline>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #111" }}
            date={item.year}
            iconStyle={{ background: "#ae445a", color: "#111" }}
            position={item.side}
          >
            <h3 className="vertical-timeline-element-title text-center text-[24px] text-primaryColor font-bold">
              {item.title}
            </h3>
            <p className="text-[#b2b5af] text-center text-xl">{item.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
