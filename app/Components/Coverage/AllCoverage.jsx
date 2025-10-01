"use client";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ScanSearch  } from "lucide-react"; // 👈 Import Lucide search icon
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
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the areas dynamically based on search term
  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-[#ff0033d0] to-[#bd556a63] text-white py-10 px-5 md:px-10 rounded-lg max-w-5xl mx-auto">
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Sylhet</h2>
        <p className="text-sm">
          Check the available area for the{" "}
          <span className="text-primaryColor">Sylhet</span> Region
        </p>
      </div>



<div className="mb-8 relative">
  {/* Search Icon */}
  <ScanSearch 
    className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5 pointer-events-none"
  />

  {/* Search Input */}
  <input
    type="text"
    placeholder="Search for an area..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-10 placeholder:text-white border-[2px] border-primaryColor px-4 py-2 rounded-md text-black focus:outline-none text-white"
  />
</div>


      {/* Area Grid */}
      {filteredAreas.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAreas.map((area, index) => (
            <div
              key={index}
              className="relative bg-[url('/mapImg.webp')] bg-cover bg-center rounded-md h-24 flex items-center px-4 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black opacity-80 z-0" />
              <div className="relative z-10 flex items-center">
                <FaMapMarkerAlt className="text-green-400 mr-2" />
                <span className="font-medium text-white">{area}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show message if nothing matches the search
        <p className="text-center text-white text-lg font-medium">
          ❌ No matching areas found.
        </p>
      )}
    </section>
  );
};

export default AllCoverage;
