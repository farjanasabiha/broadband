"use client";

import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ScanSearch } from "lucide-react";
import { useTranslation } from "react-i18next";

const AllCoverage = () => {
  const { t } = useTranslation("common");
  const [searchTerm, setSearchTerm] = useState("");

  // All areas (keys for translation)
  const areaKeys = [
    "ambarkhana",
    "akhalia",
    "baluchar",
    "bandar_bazar",
    "chondipul",
    "chowhatta",
    "chowkidekhi",
    "dargah_gate",
    "eidgah",
    "kadamtoli",
    "kumarpara",
    "kumargaon",
    "lamabazar",
    "modina_market",
    "naiorpool",
    "nayasarak",
    "sheikh_ghat",
    "subid_bazar",
    "tilagor",
    "zindabazar",
  ];

  // Filter translated names dynamically
  const filteredAreas = areaKeys.filter((key) =>
    t(`area_${key}`).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-[#ff0033d0] to-[#bd556a63] text-white py-10 px-5 md:px-10 rounded-lg max-w-5xl mx-auto">
      {/* Title */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {t("coverage_city")}
        </h2>
        <p className="text-sm">{t("coverage_subtext")}</p>
      </div>

      <div className="mb-8 relative">
        {/* Search Icon */}
        <ScanSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 pointer-events-none" />

        {/* Search Input */}
        <input
          type="text"
          placeholder={t("coverage_search_placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 placeholder:text-white border-[2px] border-primaryColor px-4 py-2 rounded-md bg-transparent text-white focus:outline-none"
        />
      </div>

      {/* Area Grid */}
      {filteredAreas.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAreas.map((key, index) => (
            <div
              key={index}
              className="relative bg-[url('/mapImg.webp')] bg-cover bg-center rounded-md h-24 flex items-center px-4 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black opacity-80 z-0" />
              <div className="relative z-10 flex items-center">
                <FaMapMarkerAlt className="text-green-400 mr-2" />
                <span className="font-medium text-white">
                  {t(`area_${key}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-white text-lg font-medium">
          ❌ {t("coverage_no_match")}
        </p>
      )}
    </section>
  );
};

export default AllCoverage;
