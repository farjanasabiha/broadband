"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import ContactTeam from "./ContactTeam";

const ContactForm = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      {/* Form Section */}
      <div className="bg-gradient-to-t from-[#ff00333a] to-[#0000004b] flex items-center justify-center py-10">
        <form className="w-full max-w-5xl text-[16px] grid grid-cols-12 gap-5">
          {/* Name */}
          <input
            type="text"
            placeholder={t("contactform_name_placeholder")}
            className="col-span-12 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder={t("contactform_phone_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          {/* Email */}
          <input
            type="email"
            placeholder={t("contactform_email_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          {/* Address */}
          <input
            type="text"
            placeholder={t("contactform_address_placeholder")}
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          {/* Service Type */}
          <div className="relative col-span-12 md:col-span-6">
            <select className="w-full rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none text-primaryColor appearance-none pr-10">
              <option>{t("contactform_option_service_related")}</option>
              <option>{t("contactform_option_support")}</option>
              <option>{t("contactform_option_sales")}</option>
              <option>{t("contactform_option_other")}</option>
            </select>

            {/* Dropdown Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primaryColor">
              ▼
            </div>
          </div>

          {/* Message */}
          <textarea
            rows="4"
            placeholder={t("contactform_message_placeholder")}
            className="col-span-12 rounded-2xl px-6 py-4 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-12 flex text-center mx-auto text-white font-semibold items-center cursor-pointer justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
          >
            {t("contactform_submit_button")}
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="container max-w-6xl mx-auto px-5">
        <ContactTeam />
      </div>

      {/* Google Map */}
      <div
        className="mx-auto max-w-5xl mt-6"
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
