import React from "react";
import { PhoneCall, Smartphone, Mail, MapPinHouse } from "lucide-react";
import Image from "next/image";
const ContactForm = () => {
  return (
    <div>
      <div className=" bg-gradient-to-t from-[#ff00333a] to-[#0000004b] md:min-h-screen flex items-center justify-center p-6">
        <form className="w-full max-w-3xl space-y-4 text-[16px]">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          {/* Phone & Email */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Phone"
              className="w-1/2 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            />
          </div>

          {/* Address & Service Dropdown */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Address"
              className="w-1/2 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
            />
            <div className="relative w-1/2">
              <select className="w-full rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none text-primaryColor appearance-none pr-10">
                <option>Service Related</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Other</option>
              </select>
              {/* Dropdown Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primaryColor">
                ▼
              </div>
            </div>
          </div>

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full rounded-2xl px-6 py-4 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex text-white font-semibold items-center cursor-pointer justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
          >
            Submit Now
          </button>
        </form>
      </div>
      {/* Address */}
      <div className="container max-w-6xl mx-auto px-5">
        <div className="text-center text-lg space-y-2 mt-5">
          <p>OR</p>
          <h3>Direct Contact to Asian Network</h3>
        </div>
        <div>
          <div className=" mx-auto max-w-xl text-[#b2b5af] text-lg mt-4 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-5 md:py-10 md:px-20 w-full ">
            <div className="space-y-4">
              <p className="flex items-center ">
                {" "}
                <PhoneCall className="text-primaryColor mr-2" /> Hot-Line:
                09638233233
              </p>

              <p className="flex items-center">
                <Smartphone className="text-primaryColor mr-2" />
                Phone: 01676-241922
              </p>
              <p className="flex items-center">
                <Mail className="text-primaryColor mr-2" /> Email:
                support@asiannetworkbd.net
              </p>
              <p className="flex items-center">
                <MapPinHouse className="text-primaryColor mr-2" /> Address:
                Eid-Gha Road,Pager, Tongi
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div
        className="mx-auto max-w-xl mt-6 "
        style={{ width: "100%", height: "300px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d90.00425878428698!3d24.041728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2s08%2C%20Eidgah%20Road%2C%20Pagar%2C%20Tongi%2C%20Gazipur-1710!5e0!3m2!1sen!2sbd!4v1633029667412!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex="0"
          className="rounded-xl"
        ></iframe>
      </div>
      {/* Appoinment */}
      <div className="mt-24">
        <div className="text-center text-lg space-y-2 mt-5">
          <p>OR</p>
          <h3>Book an Appointment</h3>
        </div>
        <div className="mx-auto max-w-xl mt-6 ">
          <Image
            src={"/appointment-booking.webp"}
            height={556}
            width={852}
            alt="appoinment"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
