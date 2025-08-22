import Image from "next/image";
import React from "react";

const RefferalDetails = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5 mt-5">
      <div className="flex items-center justify-center">
        <Image
          src={"/asian-network-1-1024x1024.webp"}
          width={1024}
          height={1024}
          alt="Asian Internet"
        />
      </div>
      <div className="text-[18px] text-[#b2b5af] mt-5">
        <p>
          এখন Asian Network এর সংযোগ নতুন কাউকে রেফার করেই পেয়ে যেতে পারেন মাসিক
          বিল এ ৫০০ টাকা ডিস্কাউন্ট।
        </p>
        <p className="mt-8">নির্দেশনাঃ</p>
        <div className="space-y-8 ">
          <p>
            ১. রেফার করতে হলে গ্রাহকদের প্রাথমিক ভাবে এই গুগল ফর্মটি ফিল আপ করতে
            হবেঃ https://forms.gle/y9fBBZ2VfBRHr51f7
          </p>
          <p>
            ২. ফর্ম এ রেফারাল আইডি তে যিনি রেফার করছেন তার User ID টি দিতে হবে
            যেমনঃ asian2xxx
          </p>
          <p>
            ৩. সাবমিট করার পর নতুন গ্রাহককে Asian Network থেকে সংযোগ নিয়ে
            বিস্তারিত জানানো হবে।
          </p>
        </div>
        <p className="mt-8">শর্ত সমূহঃ</p>
        <div className="space-y-8">
          <p>১. রেফারার কে অবশ্যই Asian Network ইউজার হতে হবে।</p>
          <p>
            ২. মাসিক বিল ডিস্কাউন্টের ক্ষেত্রে আমাদের Standard বা তার পরের
            প্যাকেজগুলোর ক্ষেত্রে প্রযোজ্য।
          </p>
          <p>৩. রেজিষ্ট্রেশন এর ক্ষেত্রে অবশ্যই ইউজার আইডি দিতে হবে।</p>
          <p>
            ৪. একজন গ্রাহক রেজিষ্ট্রেশন এর পর সংযোগ এক্টিভ করার পর গ্রাহকের
            সংযোগ ফি এবং রানিং মাসের বিল প্রদান করলে সেটি একটি সাক্সেসফুল রেফার
            হিসেবে কাউন্ট হবে।
          </p>
          <p>
            ৫. রেফারার এর বিলিং ডিস্কাউন্ট যে মাসে রেফার করছেন তার পরের মাসে
            বিলিং এ এডজাস্ট হবে।
          </p>
          <p>
            ৬. শুধুমাত্র আমাদের দেওয়া ফর্ম লিংক এর ক্ষেত্রেই এই অফারটি প্রযোজ্য
            হবে।
          </p>
          <p>
            ৭. আমাদের অন্য যেকোনো রানিং অফারের সাথে এই অফার এডজাস্ট বা মডিফাই
            করা যাবে না।
          </p>
        </div>
        <p className="mt-8 italic">
          বিঃদ্রঃ Asian Network এই রেফারাল প্রোগ্রামটির শর্ত এবং নিয়মাবলী সংযোগ,
          পরিবর্তন কিংবা বন্ধ করার অধিকার রাখে।
        </p>
      </div>
    </div>
  );
};

export default RefferalDetails;
