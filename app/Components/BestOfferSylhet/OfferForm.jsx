"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function OfferForm() {
  const image = "/asian-network-mission-1024x638.webp";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    upazilla: "",
    package: "Surfer Plus (50 Mbps)",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 lg:py-24  px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Need{" "}
                <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
                  New Connection?
                </span>
              </h1>
              <p className="text-gray-600 mt-4">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full text-gray-700 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone className="w-5 h-5" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full text-gray-700 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full text-gray-700 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              {/* District */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your District Name
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">-</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>
              </div>

              {/* Upazilla */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Upazilla Name
                </label>
                <select
                  name="upazilla"
                  value={formData.upazilla}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">-</option>
                  <option value="Balaganj">Balaganj</option>
                  <option value="Beanibazar">Beanibazar</option>
                  <option value="Bishwanath">Bishwanath</option>
                  <option value="Companiganj">Companiganj</option>
                  <option value="Fenchuganj">Fenchuganj</option>
                  <option value="Gowainghat">Gowainghat</option>
                  <option value="Golapganj">Golapganj</option>
                  <option value="Jaintiapur">Jaintiapur</option>
                  <option value="Kanaighat">Kanaighat</option>
                  <option value="Sylhet Sadar">Sylhet Sadar</option>
                  <option value="Tajpur">Tajpur</option>
                  <option value="Osmani Nagar">Osmani Nagar</option>
                  <option value="Zakiganj">Zakiganj</option>
                </select>
              </div>

              {/* Package */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Package
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="Surfer Plus (50 Mbps)">
                    Surfer Plus (50 Mbps)
                  </option>
                  <option value="Basic (20 Mbps)">Basic (20 Mbps)</option>
                  <option value="Premium (100 Mbps)">Premium (100 Mbps)</option>
                  <option value="Ultra (200 Mbps)">Ultra (200 Mbps)</option>
                </select>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </div>
          </div>

          {/* ✅ Right Side - Support Card with Background Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-[500px] sm:h-[600px]">
                  {/* Background Image */}
                  <Image
                    src={image}
                    alt="Support Background"
                    fill
                    priority
                    className="object-cover object-center"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/90 to-slate-900/90">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                      24/7{" "}
                      <span className="bg-gradient-to-r from-[#ff0033] to-[#f39f5a] bg-clip-text text-transparent">
                        Support Service
                      </span>
                    </h2>

                    <div className="space-y-8 w-full max-w-md">
                      {/* Phone */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
                        <div className="flex items-center justify-center mb-3">
                          <Phone className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="text-2xl font-bold text-white">
                          09638559900
                        </div>
                      </div>

                      {/* Email */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition">
                        <div className="flex items-center justify-center mb-3">
                          <Mail className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="text-xl font-bold text-white break-all">
                          support@syncit.com.bd
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Side */}
        </div>
      </div>
    </div>
  );
}
