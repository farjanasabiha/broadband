import React from "react";
import OffersCard from "./OffersCard";

const OffersArea = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <OffersCard
          img={"/Refer-A-Friend-Bangla-01-1536x804.jpg.webp"}
          title={"Make a Referral and Earn BDT 500!"}
          desc={
            "Offer: “Refer and Earn”New Promotion Refer & Earn for all existing customers of Exord Online. If any existing customer of Exord Online makes a new"
          }
        />
        <OffersCard
          img={"/2-Month-Bill-01-01-01-01-1536x804.jpg.webp"}
          title={"500 BDT Discount on Connection Charge"}
          desc={
            "You can enjoy BDT 500 Discount on your connection fee when you will make a payment of 2 months in Advance."
          }
        />
        <OffersCard
          img={"/4-Month-Bill-1-01-01-1536x804.jpg.webp"}
          title={"Free Connection Charge on 4 Months Advance Payment"}
          desc={
            "Now enjoy a free connection charge with Exord Online when you will make an advance payment of 4 months together."
          }
        />
        <OffersCard
          img={"/3-Month-Bill-01-01-01-1536x804.jpg.webp"}
          title={"1000 BDT Discount on Connection Charge"}
          desc={
            "You can enjoy BDT 1000 Discount on your connection fee when you will make a payment of 3 months in Advance."
          }
        />
      </div>
    </div>
  );
};

export default OffersArea;
