"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  const items = [
    {
      year: "2015",
      title: "The Spark of Innovation",
      desc: "Currently, we are serving high-speed internet solutions to over 5000+ active users.",
      side: "right",
    },
    {
      year: "2018",
      title: "Navigating Challenges , Embracing Growth",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "left",
    },
    {
      year: "2020",
      title: "A Milestone Moment",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "right",
    },
    {
      year: "2022",
      title: "Explore Our Range of",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "left",
    },
    {
      year: "2024",
      title: "Looking Ahead",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "right",
    },
  ];

  return (
    <section className="container max-w-6xl mx-auto px-5  relative min-h-screen border-none">
      <h2 className=" text-4xl font-semibold mb-5">Our Story</h2>
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
