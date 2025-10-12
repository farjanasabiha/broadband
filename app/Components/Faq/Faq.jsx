"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const tabsData = [
    {
      title: t("faq_tab_general"),
      faqs: [
        {
          question: t("faq_general_q1"),
          answer: t("faq_general_a1"),
        },
        {
          question: t("faq_general_q2"),
          answer: t("faq_general_a2"),
        },
        {
          question: t("faq_general_q3"),
          answer: t("faq_general_a3"),
        },
      ],
    },
    {
      title: t("faq_tab_payment"),
      faqs: [
        {
          question: t("faq_payment_q1"),
          answer: t("faq_payment_a1"),
        },
      ],
    },
    {
      title: t("faq_tab_technical"),
      faqs: [
        {
          question: t("faq_technical_q1"),
          answer: t("faq_technical_a1"),
        },
        {
          question: t("faq_technical_q2"),
          answer: t("faq_technical_a2"),
        },
        {
          question: t("faq_technical_q3"),
          answer: t("faq_technical_a3"),
        },
      ],
    },
    {
      title: t("faq_tab_troubleshooting"),
      faqs: [
        {
          question: t("faq_troubleshoot_q1"),
          answer: t("faq_troubleshoot_a1"),
        },
        {
          question: t("faq_troubleshoot_q2"),
          answer: t("faq_troubleshoot_a2"),
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-6xl bg-black mx-auto p-4 md:p-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-transparent mb-6">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setOpenFAQ(null);
            }}
            className={`px-4 md:px-14 py-6 text-xs font-medium whitespace-nowrap transition-all duration-300 border-transparent border-b-2 ${
              activeTab === index
                ? "bg-primaryColor text-white rounded-t-md"
                : "bg-primaryColor/20 text-primaryColor border-transparent hover:text-primaryColor hover:border-primaryColor hover:cursor-pointer"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="space-y-5">
        {tabsData[activeTab].faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-500/50 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-start gap-5 hover:cursor-pointer rounded-lg transition-colors duration-200"
            >
              <div className="flex-shrink-0">
                {openFAQ === index ? (
                  <Minus className="h-5 w-5 text-primaryColor" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <span className="text-primaryColor font-medium text-sm md:text-base pr-4">
                {faq.question}
              </span>
            </button>

            <div
              className={`px-6 overflow-hidden ml-10 transition-all duration-300 ease-in-out ${
                openFAQ === index ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <div className="text-gray-400 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
