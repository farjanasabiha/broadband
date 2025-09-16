import React from "react";

const BankBills = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mx-auto mb-5">
        Pay your internet bill with easy bank transfer
      </h1>
      {/* bank methode */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:px-10 gap-10">
        {/* ucb bank */}
        <div className=" text-[#b2b5af] text-lg mt-4 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-5 md:py-20 md:px-28 w-full ">
          <div className="mb-6">
            <h2 className=" font-semibold ">UCB Bank</h2>
            <p>Pay with your UCB bank account</p>
          </div>
          <div>
            <p>Account name: Asian Network</p>
            <p>Account no:1102101000006339</p>
            <p>Routing no:245331671</p>
            <p>Branch: TONGI STATION ROAD</p>
          </div>
        </div>
        {/* Brac Bank */}
        <div className=" text-[#b2b5af] text-lg mt-4 bg-gradient-to-t from-[#ff00333a] to-[#bd556a1f] rounded-2xl p-5 md:py-20 md:px-28 w-full ">
          <div className="mb-6">
            <h2 className=" font-semibold ">Brac Bank</h2>
            <p>Pay with your Brac Bank account</p>
          </div>
          <div>
            <p>Account name: Asian Network</p>
            <p>Account no:2053759690001</p>
            <p>Routing no:60331630</p>
            <p>Branch: TONGI BAZAR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankBills;
