'use client'
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    mapLink: "",
    service: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate phone number
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/new-connection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success(result.message || "Submitted successfully! We'll contact you soon.");
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          mapLink: "",
          service: "",
          date: "",
          message: "",
        });
      } else {
        toast.error(result.error || result.message || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=" bg-gradient-to-t from-[#ff00333a] to-[#0000004b] flex items-center justify-center py-10">
        <form onSubmit={handleSubmit} className="w-full md:max-w-3xl  text-[16px] grid grid-cols-12 gap-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("newconnection_name_placeholder")}
            required
            className="col-span-12  rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("newconnection_phone_placeholder")}
              required
              className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("newconnection_email_placeholder")}
              required
              className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder={t("newconnection_address_placeholder")}
              required
              className="col-span-12  rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            />

          <input
            type="text"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleChange}
            placeholder={t("newconnection_maplink_placeholder")}
            className="col-span-12  rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

            <div className="relative col-span-12 md:col-span-6 ">
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none text-primaryColor appearance-none pr-10"
              >
                <option value="">{t("newconnection_service_placeholder")}</option>
                <option value="home-basic">{t("newconnection_service_home_basic")}</option>
                <option value="home-premium">{t("newconnection_service_home_premium")}</option>
                <option value="home-ultra">{t("newconnection_service_home_ultra")}</option>
                <option value="business">{t("newconnection_service_business")}</option>
                <option value="custom">{t("newconnection_service_custom")}</option>
              </select>
              {/* Dropdown Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primaryColor">
                ▼
              </div>
            </div>

<input
  type="text"
  name="date"
  value={formData.date}
  onChange={handleChange}
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => (e.target.type = "text")}
  placeholder={t("newconnection_date_placeholder")}
  className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
/>

          {/* Message */}
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("newconnection_message_placeholder")}
            className="col-span-12 rounded-2xl px-6 py-4 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="col-span-12 flex text-center mx-auto text-white font-semibold items-center cursor-pointer justify-center md:justify-between gap-1 sm:gap-2 py-3 sm:py-4 px-6 sm:px-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff0033] to-[#bd556a63] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed  min-h-[50px]"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {t("newconnection_submitting")}
              </div>
            ) : (
              t("newconnection_submit_button")
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

