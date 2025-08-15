export default function Timeline() {
  const items = [
    {
      year: "2015",
      title: "The Spark of Innovation",
      desc: "Currently, we are serving high-speed internet solutions to over 5000+ active users.",
      side: "right",
    },
    {
      year: "2018",
      title: "Navigating Challenges , Embracing Growth",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "left",
    },
    {
      year: "2020",
      title: "A Milestone Moment",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "right",
    },
    {
      year: "2022",
      title: "Explore Our Range of",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "left",
    },
    {
      year: "2024",
      title: "Looking Ahead",
      desc: "Currently, we are serving high-speed internet solutions to over 3000+ active users.",
      side: "right",
    },
  ];

  return (
    <section className="bg-black text-[#c9ff00] px-4 py-12 md:px-20 md:py-24 relative min-h-screen">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-[2px] border-[#c9ff00]"></div>

      <div className="max-w-6xl mx-auto space-y-24">
        {items.map(({ year, title, desc, side }, i) => (
          <div
            key={year}
            className={`flex flex-col md:flex-row items-center justify-center ${
              side === "right" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Left Year */}
            {side === "left" && (
              <div className="w-56 text-right pr-8 hidden md:block font-semibold text-sm">
                {year}
              </div>
            )}

            {/* Dot + Line */}
            <div className="flex flex-col items-center relative">
              <div className="w-3.5 h-3.5 rounded-full bg-[#c9ff00] border border-black z-10"></div>
              {i !== items.length - 1 && (
                <div className="border-l-[2px] border-[#c9ff00] h-32"></div>
              )}
            </div>

            {/* Right Year */}
            {side === "right" && (
              <div className="w-56 pl-8 hidden md:block font-semibold text-sm">
                {year}
              </div>
            )}

            {/* Content */}
            <div
              className={`max-w-md px-6 md:px-0 mt-4 md:mt-0 ${
                side === "left" ? "text-left" : "text-left"
              }`}
            >
              <h3 className="font-bold text-lg leading-snug">{title}</h3>
              <p className="text-gray-300 mt-2 text-sm max-w-md">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Years below dots */}
      <div className="md:hidden flex justify-between max-w-2xl mx-auto mt-10 px-6 text-xs font-semibold text-[#c9ff00]">
        {items.map(({ year }) => (
          <span key={year}>{year}</span>
        ))}
      </div>
    </section>
  );
}
