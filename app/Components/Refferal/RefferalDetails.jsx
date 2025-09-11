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
          এখন SyncIT এর সংযোগ রেফার করলেই মাসিক বিল এ পাবেন ৫০০ টাকা ডিসকাউন্ট।
        </p>
        <p className="mt-8">নির্দেশনাঃ</p>
        <div className="space-y-8 ">
          <p>
            ১. ⦁ রেফার করতে হলে আমাদের Referral Form পূরণ করতে হবে 👉 [Google
            Form Link]
          </p>
          <p>
            ২. ⦁ ফর্মে “Referral ID” তে আপনার User ID দিতে হবে (যেমনঃ
            sync1234)।x
          </p>
          <p>৩. ⦁ সাবমিট করার পর নতুন গ্রাহকের সাথে SyncIT টিম যোগাযোগ করবে।</p>
        </div>
        <p className="mt-8">শর্ত সমূহঃ</p>
        <div className="space-y-8">
          <p>১.⦁ রেফারার অবশ্যই SyncIT গ্রাহক হতে হবে।</p>
          <p>২. ⦁ রেফারার অবশ্যই SyncIT গ্রাহক হতে হবে।</p>
          <p>
            ৩. ⦁ নতুন গ্রাহক সংযোগ নেওয়ার সময় সংযোগ ফি + চলতি মাসের বিল দিতে
            হবে।
          </p>
          <p>৪. ⦁ সফল রেফার হলে ডিসকাউন্ট পরের মাসের বিলিং-এ এডজাস্ট হবে।</p>
          <p>
            ৫. ⦁ শুধুমাত্র আমাদের অফিসিয়াল ফর্মের মাধ্যমে রেজিস্ট্রেশন করলে এই
            অফার কার্যকর হবে।
          </p>
          <p>৬. ⦁ অন্য কোনো অফারের সাথে একত্রে প্রযোজ্য নয়।</p>
          <p>
            ৭. ⦁ SyncIT এই প্রোগ্রামের নিয়মাবলী পরিবর্তন বা বন্ধ করার অধিকার
            সংরক্ষণ করে
          </p>
        </div>
        <p className="mt-8 italic">
          বিঃদ্রঃ SyncIT এই রেফারাল প্রোগ্রামটির শর্ত এবং নিয়মাবলী সংযোগ,
          পরিবর্তন কিংবা বন্ধ করার অধিকার রাখে।
        </p>
      </div>
    </div>
  );
};

export default RefferalDetails;
