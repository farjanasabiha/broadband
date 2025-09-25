import Link from "next/link";
import React from "react";

const Warning = () => {
  return (
    <div className="container max-w-6xl mx-auto px-5">
      <div className="card card-side bg-base-100 shadow-sm">
        <figure className=" h-[0px] w-[0px] md:h-[170px] hidden md:w-[200px] bg-[#fecf00] px-5">
          <img
            className="h-[85px]  w-[92px]"
            src="/UniqueSizzlingFinwhale-max-1mb.gif"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-4">
            The type of the offer and the validity can be changed anytime based
            on the situation.
          </h2>
          <h2 className="card-title">
            Helpline number: 01965300500 / 09638559900
          </h2>
          <h2 className="card-title">
            E-Mail:{" "}
            <Link href={"mailto:support@syncit.com.bd"}>
              support@syncit.com.bd
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Warning;
