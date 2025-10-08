"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  const { t } = useTranslation("common");

  // Timeline items
  const items = [
    {
      title: t("timeline.ultraFastTitle"),
      desc: t("timeline.ultraFastDesc"),
      side: "right",
    },
    {
      title: t("timeline.bdixBoostTitle"),
      desc: t("timeline.bdixBoostDesc"),
      side: "left",
    },
    {
      title: t("timeline.secureStableTitle"),
      desc: t("timeline.secureStableDesc"),
      side: "right",
    },
    {
      title: t("timeline.customerCareTitle"),
      desc: t("timeline.customerCareDesc"),
      side: "left",
    },
    {
      title: t("timeline.experienceTitle"),
      desc: t("timeline.experienceDesc"),
      side: "right",
    },
  ];

  return (
    <section className="container max-w-6xl mx-auto px-5 relative min-h-screen border-none">
      {/* Header */}
      <h2 className="text-4xl font-semibold mb-5">{t("timeline.heading")}</h2>
      <p className="text-[18px] mb-10">{t("timeline.subheading")}</p>

      {/* Timeline */}
      <VerticalTimeline>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #111" }}
            iconStyle={{ background: "#ae445a", color: "#111" }}
            position={item.side}
          >
            <h3 className="text-center text-[24px] text-primaryColor font-bold">
              {item.title}
            </h3>
            <p className="text-[#b2b5af] text-center text-xl">{item.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
