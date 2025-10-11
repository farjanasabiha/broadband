"use client";
import { useTranslation } from "react-i18next";
import ContactTeam from "./ContactTeam";
import React, { useState } from "react";
const ContactForm = () => {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        });
      } else {
        setSuccess("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Form Section */}
      {/* <div className="bg-gradient-to-t from-[#ff00333a] to-[#0000004b] flex items-center justify-center py-10">
        <form className="w-full max-w-5xl text-[16px] grid grid-cols-12 gap-5">
          <input
            type="text"
            placeholder={t("contactform_name_placeholder")}
            className="col-span-12 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          <input
            type="tel"
            placeholder={t("contactform_phone_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          <input
            type="email"
            placeholder={t("contactform_email_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          <input
            type="text"
            placeholder={t("contactform_address_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          <div className="relative col-span-12 md:col-span-6">
            <select className="w-full rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none text-primaryColor appearance-none pr-10">
              <option>{t("contactform_option_service_related")}</option>
              <option>{t("contactform_option_support")}</option>
              <option>{t("contactform_option_sales")}</option>
              <option>{t("contactform_option_other")}</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primaryColor">
              ▼
            </div>
          </div>

          <textarea
            rows="4"
            placeholder={t("contactform_message_placeholder")}
            className="col-span-12 rounded-2xl px-6 py-4 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white resize-none"
          ></textarea>

          <button
            type="submit"
            className="col-span-12 flex text-center mx-auto text-white font-semibold items-center cursor-pointer justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
          >
            {t("contactform_submit_button")}
          </button>
        </form>
      </div> */}

      <div className="bg-gradient-to-t from-[#ff00333a] to-[#0000004b] flex items-center justify-center py-10">
        <form
          className="w-full max-w-5xl text-[16px] grid grid-cols-12 gap-5  px-5"
          onSubmit={handleSubmit}
        >
          <input
            className="col-span-12 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contactform_name_placeholder")}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contactform_email_placeholder")}
            required
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("contactform_phone_placeholder")}
            required
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder={t("contactform_address_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />
          <select
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none text-primaryColor appearance-none pr-10"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">{t("contactform_option_service_related")}</option>
            <option value="support">{t("contactform_option_support")}</option>
            <option value="sales">{t("contactform_option_sales")}</option>
            <option value="other">{t("contactform_option_other")}</option>
          </select>
          <textarea
            name="message"
            className="col-span-12 rounded-2xl px-6 py-4 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white resize-none"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contactform_message_placeholder")}
            required
            rows="5"
          />
          <button
            type="submit"
            disabled={loading}
            className="col-span-12 flex text-center mx-auto text-white font-semibold items-center cursor-pointer justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
          >
            {loading ? "Sending..." : t("contactform_submit_button")}
          </button>
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>

      {/* Contact Info */}
      <div className="container max-w-6xl mx-auto px-5">
        <ContactTeam />
      </div>

      {/* Google Map */}
      <div
        className="mx-auto max-w-5xl mt-6  px-5"
        style={{ width: "100%", height: "300px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.156708963897!2d91.86975851543107!3d24.89492968404138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055496b93d3c3%3A0x9c97a16bb99451b!2sSylhet!5e0!3m2!1sen!2sbd!4v1633030000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex="0"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default ContactForm;