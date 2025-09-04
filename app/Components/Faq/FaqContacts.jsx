import React from "react";

const FaqContacts = () => {
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
    </div>
  );
};

export default FaqContacts;
