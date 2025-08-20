"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar, FaBriefcase, FaSchool } from "react-icons/fa";

export default function Timeline() {
  const items = [
    {
      year: "2015",
      title: "The Spark of Innovation",
      desc: "Currently, we are serving high-speed internet solutions to over 5000+ active users.",
      side: "right",
      icon: <FaBriefcase />,
    },
    {
      year: "2018",
      title: "Navigating Challenges , Embracing Growth",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "left",
      icon: <FaBriefcase />,
    },
    {
      year: "2020",
      title: "A Milestone Moment",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "right",
      icon: <FaBriefcase />,
    },
    {
      year: "2022",
      title: "Explore Our Range of",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "left",
      icon: <FaSchool />,
    },
    {
      year: "2024",
      title: "Looking Ahead",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "right",
      icon: <FaStar />,
    },
  ];

  return (
    <section className="bg-black text-[#c9ff00] px-4 py-12 md:px-20 md:py-24 relative min-h-screen border-none">
      <VerticalTimeline>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#c9ff00" }}
            contentArrowStyle={{ borderRight: "7px solid #111" }}
            date={item.year}
            iconStyle={{ background: "#c9ff00", color: "#111" }}
            icon={item.icon}
            position={item.side}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {item.title}
            </h3>
            <p className="text-gray-500">{item.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
