'use client'
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const tabsData = [
    {
      title: "GENERAL QUERIES",
      faqs: [
        {
          question: "Do you provide support and service 24/7?",
          answer: "Yes, But over phone only.",
          isOpen: true,
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can call our customer support at 01708-169672, 01708-169673 or email customer support at support@syncit.com.bd",
        },
        {
          question: "Do you provide public IP?",
          answer:
            "Yes, we provide both IPv6 and IPv4 public IP’s.",
        },
      ],
    },
    {
      title: "PAYMENT METHOD",
      faqs: [
        {
          question: "How can I pay bill?",
          answer:
            "You can pay bill through Cash, bKash, Payment Gateway, Bank Transfer etc. Please check payment section of our website (www.syncit.com.bd) or Contact Accounts at 01708-169672, 01708-169673 or by email to accounts@syncit.com.bd for details.",
          isOpen: true,
        },
      ],
    },
    {
      title: "TECHNICAL QUERIES",
      faqs: [
        {
          question: "How do I know how much speed I am getting?",
          answer:
            "You can check your speed from http://proof.ovh.net/. Select nearest servers, Stop background activities and use our connection directly during testing for better understanding. You can also monitor your network traffic via bandwidth monitoring tools like DU Meter, Net Speed Monitor etc.",
          isOpen: true,
        },
        {
  question: "Why I can't use Proper Bandwidth?",
  answer: [
    "o Restart your internal devices (ONU/ONT, Router, Server etc.).",
    "o If the problem remains, then connect a single PC with SyncIT’s provided ONU/ONT & test the bandwidth usage.",
    "o Still Problem? Please contact SyncIT Support Team.",
  ],
},
        {
          question: "Why I am getting Slow Speed?",
          answer:
            "o Check others utilization status connected to your network. If other users are using maximum bandwidth, then you are getting slow speed. In this case, you will get proper bandwidth when other users reach to normal utilization.o Restart once your internal devices (ONU/ONT, Router, Server etc.).o Still Problem? Please contact SyncIT Support Team.",
        },
      ],
    },
    {
      title: "TROUBLESHOOTING",
      faqs: [
        {
          question: "What to do if Link is Down?",
          answer:
            "o Check the Device connectivity (ONU/ONT) between yours & SyncIT Bangladesh o Then re-connect the cable which is connected between yours & SyncIT’s device. o Reboot the device provided by SyncIT. o Reboot your internal devices (ONU/ONT, Router, Server etc.) o Still Problem? Please contact SyncIT Support Team.",
          isOpen: true,
        },
        {
          question: "How to fix Packet loss/high latency?",
          answer:
            "o Ping on your gateway IP (router IP) as most commonly the problem found on requested host. Pinging on router gateway IP, you can check the connectivity between your device & router.o Ping on SyncIT gateway IP as most commonly the problem found on requested host. Pinging on SyncIT gateway IP, you can check the connectivity between yours & SyncIT.o Check your Bandwidth MRTG (only for corporate users). provided by SyncIT (If utilization shows 80% up then you have Packet loss/High Latency)o Reboot the device provided by SyncIT If bandwidth utilization shows normal, then check you internal LAN. Packet loss/high Latency can be occurred due to broadcast problem of your LAN. In this case please take appropriate action to clean the virus from your network.o Still Problem? Please contact SyncIT Support Team.",
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
            className={`px-4 md:px-14 py-6 text-xs  font-medium whitespace-nowrap transition-all duration-300 border-transparent border-b-2 ${
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
            className="bg-gray-500/50  rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-start gap-5 hover:cursor-pointer rounded-lg transition-colors duration-200"
            >
              <div className="flex-shrink-0">
                {(faq.isOpen && openFAQ === null) || openFAQ === index ? (
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
                (faq.isOpen && openFAQ === null) || openFAQ === index
                  ? "max-h-96 pb-4"
                  : "max-h-0"
              }`}
            >
              <div className="text-gray-400 text-sm md:text-base leading-relaxed">
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
