import React from "react";
import CICLOGO from "../assets/CIC-LOGO-removebg-preview.png";

const Header = () => {
  return (
    <header className="flex flex-row items-center gap-4 py-4 px-6 bg-white">
      <img
        src={CICLOGO}
        alt="CIC Logo"
        className="object-contain h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
      />

      <div className="flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#902028] leading-tight">
          CIC CLUBS & ORGANIZATION
        </h2>
        <h3 className="text-md md:text-lg text-gray-600">
          Student Life & Engagement
        </h3>
      </div>
    </header>
  );
};

export default Header;
