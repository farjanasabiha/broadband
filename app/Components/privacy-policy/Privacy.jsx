import React from "react";

const Privacy = ({ title, des, sections }) => {
  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div>
        {/* Main Title */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white pb-5">
          {title}
        </h3>

        {/* Main Description */}
        {des && <p className="text-lg font-normal text-[#b2b5af]">{des}</p>}

        {/* Render Sub Sections if exist */}
        {sections && sections.length > 0 && (
          <div className="space-y-8">
            {sections.map((sec, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-bold text-[#b2b5af] pb-2">
                  {sec.title}
                </h4>
                <p className="text-lg font-normal text-[#b2b5af]">{sec.des}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Privacy;
