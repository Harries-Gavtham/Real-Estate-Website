import React from "react";
import Image from "../assets/house-banner.png";
import Search from "./Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="flex flex-col items-center lg:items-start lg:ml-8 xl:ml-[135px] text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
          Own Your Piece of Paradise. Browse Homes Now!
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="Banner Image" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
