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
        "SyncIT support is available 24/7. Call our hotline 01965300500 / 09638559900, or message us on WhatsApp at wa.me/8801978169689. Our expert technicians are always ready to solve your issues quickly.",
    },
    {
      question: "How can I pay bill ?",
      answer:
        "You can pay your SyncIT bill easily via bKash, Nagad, Rocket, credit/debit card, or online through our customer panel. You can also visit our nearest office for in-person payments.",
    },
    {
      question: "How to get a new internet connection ?",
      answer:
        "Choose your package, call our team, and we’ll install your SyncIT fiber internet in Sylhet within 24–48 hours.",
    },
    {
      question:
        "What is the line charge of the new or line transferred charge?",
      answer:
        "A standard line charge applies for new or transferred SyncIT connections. The amount may vary depending on your location in Sylhet. Please contact our support team for exact details.",
    },
  ];

  const FAQ = (index) => {
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
                  className="border border-gray-700  overflow-hidden transition-all duration-300 ease-in-out "
                >
                  <button
                    onClick={() => FAQ(index)}
                    className="w-full px-6 py-3 text-left flex items-center justify-between cursor-pointer  duration-200"
                  >
                    <span className="text-white  font-bold sm:text-base lg:text-lg">
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
                    <div className="px-6 py-4  border-t border-gray-700">
                      <p className="text-[#b2b5af] text-lg  leading-8">
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
              width={300}
              height={300}
              alt="FAQ"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
