import React from "react";
import Image from "next/image";
import Link from 'next/link'
const resources = [
  {
    title: "Social Media Marketing Strategy",
    description: "RELATED RESOURCE",
    image: "/social-media-metrics.webp",
  },
  {
    title: "Content Creation Guide",
    description: "Learn how to create engaging posts that connect with your audience",
    image: "/social-media-metrics.webp",
  },
];
const RelatedResource = () => {
  return (
    <div className=" mx-auto px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2  items-center justify-between gap-3"
          >
            <div>
              <p className="text-[18px] uppercase">{item.description}</p>
              <h2 className="text-4xl font-bold  my-5">{item.title}</h2>
              <Link href='/' className='bg-white font-medium text-black px-5 py-2 rounded-lg'>Read Now</Link>
            </div>
            <div className="w-full max-w-[500px]">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedResource;