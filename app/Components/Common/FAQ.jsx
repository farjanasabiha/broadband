"use client";
import { useState } from "react";
import { ChevronDown, Minus } from "lucide-react";
import Image from "next/image";
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I contact customer support ?",
      answer:
        "We are just a call away!! We are determined to provide fast and maximum service, we are always at your side for any problem or complication, our support team are active 24/7, contact us for any problem. Our skilled and strong technician team is committed to your service.",
    },
    {
      question: "How can I pay bill ?",
      answer:
        "You can pay your bill through multiple convenient methods including online payment, mobile banking, credit/debit cards, or visit our nearest office. We also offer auto-pay options for hassle-free monthly payments.",
    },
    {
      question: "How to get a new internet connection ?",
      answer:
        "Getting a new internet connection is simple! Contact our sales team, choose your preferred package, schedule an installation appointment, and our technicians will set up your connection within 24-48 hours.",
    },
    {
      question:
        "What is the line charge of the new or line transferred charge?",
      answer:
        "Line charges vary based on your location and connection type. New connection charges start from $50, while line transfer charges are typically $25. Contact us for exact pricing based on your specific requirements.",
    },
  ];

  const FAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="container max-w-6xl mx-auto px-5 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - FAQ Content */}
          <div className="order-2 lg:order-1">
            <div className="text-left mb-8">
                        <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6">
            Your Queries
            <br />
            <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
              Our Solution
            </span>
          </h1>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-green-400"
                >
                  <button
                    onClick={() => FAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span className="text-white font-medium text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <div className="ml-4 flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-green-400 transition-transform duration-300" />
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
                    <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Image
              src="/faq-1-300x300.webp"
              width={400}
              height={400}
              alt="FAQ"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
