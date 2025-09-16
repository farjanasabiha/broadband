import React from "react";
import { PhoneCall, Smartphone, Mail, MapPinHouse } from "lucide-react";
import Image from "next/image";
import ContactTeam from "./ContactTeam";
const ContactForm = () => {
  return (
    <div>
      <div className=" bg-gradient-to-t from-[#ff00333a] to-[#0000004b] flex items-center justify-center py-10">
        <form className="w-full md:max-w-3xl  text-[16px] grid grid-cols-12 gap-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="col-span-12  rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          <input
            type="text"
            placeholder="Phone"
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-12 md:col-span-6 rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />

          <input
            type="text"
            placeholder="Address"
            className="col-span-12 md:col-span-6  rounded-full px-6 py-3 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white"
          />
          <div className="relative col-span-12 md:col-span-6 ">
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

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="col-span-12 rounded-2xl px-6 py-4 bg-[#1f1f1f] border border-gray-600 focus:outline-none placeholder-primaryColor text-white resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-12 flex text-center mx-auto text-white font-semibold items-center cursor-pointer justify-center md:justify-between gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#ff0033] to-[#bd556a63]"
          >
            Submit Now
          </button>
        </form>
      </div>
      {/* Address */}
      <div className="container max-w-6xl mx-auto px-5">
          <ContactTeam />
      </div>
      {/* map */}
      <div
        className="mx-auto max-w-xl mt-6 "
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
      {/* Appoinment */}
      {/* <div className="mt-24">
        <div className="mx-auto max-w-xl mt-6 ">
          <Image
            src={"/appointment-booking.webp"}
            height={556}
            width={852}
            alt="appoinment"
          />
        </div>
      </div> */}
    </div>
  );
};

export default ContactForm;
