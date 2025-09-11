"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  "Ambarkhana",
  "Akhalia",
  "Baluchar",
  "Bandar Bazar",
  "Chondipul",
  "Chowhatta",
  "Chowkidekhi",
  "Dargah Gate",
  "Eidgah",
  "Kadamtoli",
  "Kumarpara",
  "Kumargaon",
  "Lamabazar",
  "Modina Market",
  "Naiorpool",
  "Nayasarak",
  "Sheikh Ghat",
  "Subid Bazar",
  "Tilagor",
  "Zindabazar",
];

const AllCoverage = () => {
  return (
    <section className="bg-gradient-to-b from-[#ff0033d0] to-[#bd556a63] text-white py-10 px-5 md:px-10 rounded-lg max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Sylhet</h2>
        <p className="text-sm">
          Check the available area for the{" "}
          <span className="text-primaryColor">Sylhet</span> Region
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="relative bg-[url('/mapImg.webp')] bg-cover bg-center rounded-md h-24 flex items-center px-4 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {/* 🔲 Overlay behind content */}
            <div className="absolute inset-0 bg-black opacity-80 z-0" />

            {/* 📍 Icon + Text on top */}
            <div className="relative z-10 flex items-center">
              <FaMapMarkerAlt className="text-green-400 mr-2" />
              <span className="font-medium text-white">{area}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCoverage;
