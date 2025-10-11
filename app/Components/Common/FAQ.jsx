"use client";
import { useState } from "react";
import { ChevronDown, Minus } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t } = useTranslation("common");
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t("faq_question1"),
      answer: t("faq_answer1"),
    },
    {
      question: t("faq_question2"),
      answer: t("faq_answer2"),
    },
    {
      question: t("faq_question3"),
      answer: t("faq_answer3"),
    },
    {
      question: t("faq_question4"),
      answer: t("faq_answer4"),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - FAQ Content */}
          <div className="order-2 lg:order-1">
            <div className="text-left mb-8">
              <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
                {t("faq_header1")}
                <br />
                <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
                  {t("faq_header2")}
                </span>
              </h1>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-700 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-3 text-left flex items-center justify-between cursor-pointer duration-200"
                  >
                    <span className="text-white font-bold sm:text-base lg:text-lg">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-primaryColor transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-300" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-4 border-t border-gray-700">
                      <p className="text-[#b2b5af] text-lg leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full max-w-md">
            <Image
              src="/faq-1-300x300.webp"
              alt="FAQ"
              width={600} // original width
              height={600} // original height
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
