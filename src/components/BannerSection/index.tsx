import Image from "next/image";
import React from "react";

function BannerSection() {
  return (
    <div className="sm:py-28 py-10 px-4 sm:px-0">
      {/* Top Text Section */}
      <p className="text-center text-sm sm:text-xl font-medium sm:w-2/4 w-full mx-auto">
        Revolutionizing the Gaming Industry with AI and Blockchain Technology.
      </p>

      {/* Title and Description */}
      <div className="mt-10 flex flex-col gap-3 items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          The Future of Gaming is Here
        </h1>
        <p className="text-sm sm:text-base w-full sm:w-2/4 px-2 sm:px-0">
          Step into a new era where AI-powered environments and decentralized
          blockchain systems empower gamers to truly own their assets, unlock
          new possibilities, and explore an immersive gaming experience like
          never before.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[350px] rounded-md mt-10 overflow-hidden">
        <img
          src="/assets/dashboard/trending/trending5.png"
          className="w-full h-full object-cover"
          alt="Future of Gaming"
        />
      </div>
    </div>
  );
}

export default BannerSection;
