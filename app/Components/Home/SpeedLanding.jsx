import React, { useState } from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  Users,
  Clock,
  Headphones,
  Gamepad2,
  Globe,
  CheckCircle,
} from "lucide-react";

const SpeedLanding = () => {
  const [activeTab, setActiveTab] = useState("buffer-less");

  const tabContent = {
    "buffer-less": {
      title: "Buffer-less Browsing",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
      description:
        "Experience seamless browsing without any buffering delays. Our optimized network ensures smooth and fast web navigation.",
    },
    gaming: {
      title: "Gaming & Streaming",
      icon: <Gamepad2 className="w-5 h-5 text-green-400" />,
      videoId: "jNQXAC9IVRw", // Sample YouTube video ID
      description:
        "Optimized for gaming and streaming with ultra-low latency and high-speed connections for the best experience.",
    },
    security: {
      title: "Highly Secured",
      icon: <Shield className="w-5 h-5 text-primaryColor" />,
      videoId: "L_jWHffIx5E", // Sample YouTube video ID
      description:
        "Advanced security protocols protect your data and privacy while maintaining lightning-fast speeds.",
    },
    scalable: {
      title: "Scalable and Reliable",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      videoId: "kJQP7kiw5Fk", // Sample YouTube video ID
      description:
        "Built on robust infrastructure that scales with your needs while maintaining 99.9% reliability.",
    },
    uptime: {
      title: "99.9% Up-time",
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />,
      videoId: "fJ9rUzIMcZQ", // Sample YouTube video ID
      description:
        "Industry-leading uptime ensures your connection is always available when you need it most.",
    },
    support: {
      title: "24/7 Priority Support",
      icon: <Headphones className="w-5 h-5 text-yellow-400" />,
      videoId: "9bZkp7q19f0", // Sample YouTube video ID
      description:
        "Round-the-clock expert support to help you with any questions or technical issues.",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-black   container max-w-6xl  mx-auto  px-5 overflow-hidden">
      {/* Main Container */}
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl leading-snug font-medium mb-6 lg:mb-8">
            Experience Lightning-Fast Fiber Internet in Sylhet
            <br />
            <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
              – Powered by SyncIT
            </span>
          </h1>
          <p className="text-[#b2b5af] w-full lg:w-2/4 text-sm lg:text-lg mb-8 leading-relaxed">
            All in one: bufferless browsing, gaming, streaming, 99.99% uptime &
            24/7 support. Enter SyncIT’s speed galaxy for a smarter Sylhet
            internet.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-start mb-10">
          {/* Left Column - Interactive Tabs */}
          <div className="space-y-4">
            {/* Feature Tabs */}
            <div className="space-y-3">
              {Object.entries(tabContent).map(([key, content]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full lg:w-2/4 flex items-center space-x-3 rounded-full text-sm px-6 py-2 border transition-all duration-300 text-left ${
                    activeTab === key
                      ? "bg-gray-700/70 backdrop-blur-sm border-gray-500/70 shadow-lg"
                      : "bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50"
                  }`}
                >
                  {content.icon}
                  <span className="text-gray-200">{content.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - YouTube Video */}
          <div className="">
            {/* YouTube Video Container */}
            <div className="transform hover:scale-105 transition-transform duration-500">
              {/* Video Frame */}
              <div className="">
                <div className="w-full h-full aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    key={activeTab} // Force re-render when tab changes
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${currentContent.videoId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                    title={currentContent.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-10">
          {/* Description */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <p className="text-[#b2b5af] leading-relaxed  text-base">
              Whatever you do — work, gaming, or streaming — SyncIT keeps you
              connected with faster speeds, seamless performance, and the best
              online experience in Sylhet.
            </p>
            <p className="text-[#b2b5af] leading-relaxed  text-base">
              From personal tasks to professional projects, heavy gaming to
              streaming — SyncIT ensures a smooth internet experience. With BDIX
              connectivity and advanced security, we maintain reliability and
              consistency for every Sylhet user.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 lg:pt-20">
          {/* Stat 1 */}
          <div className="text-center group">
            <div className=" flex items-center justify-center mb-5">
              <Image
                src="/team.webp"
                alt="Person using phone"
                width={100}
                height={100}
                className="w-8 h-8 lg:w-16 lg:h-16 text-white"
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
              100's
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Users</div>
          </div>

          {/* Stat 2 */}
          <div className="text-center group">
            <div className=" flex items-center justify-center mb-5">
              <Image
                src="/routes.webp"
                alt="Person using phone"
                width={100}
                height={100}
                className="w-8 h-8 lg:w-16 lg:h-16 text-white"
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
              5
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Locations</div>
          </div>

          {/* Stat 3 */}
          <div className="text-center group">
            <div className=" flex items-center justify-center mb-5">
              <Image
                src="/customer-service.webp"
                alt="Person using phone"
                width={100}
                height={100}
                className="w-8 h-8 lg:w-16 lg:h-16 text-white"
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
              24/7
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Support</div>
          </div>

          {/* Stat 4 */}
          {/* <div className="text-center group">
            <div className=" flex items-center justify-center mb-5">
              <Image
                src="/team.webp"
                alt="Person using phone"
                width={100}
                height={100}
                className="w-8 h-8 lg:w-16 lg:h-16 text-white"
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
              130
            </div>
            <div className="text-gray-400 text-sm lg:text-base">Countries</div>
          </div> */}
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default SpeedLanding;
