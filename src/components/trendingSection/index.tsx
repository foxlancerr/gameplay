import { trendingCardItem } from "@/constant";
import { ItrendingCardItem } from "@/types";
import React from "react";
import TrendingCard from "../Base/Trending";

function TrendingSection() {
  return (
    <div className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <nav className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-0">
        <h2 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
          Currently Trending Games
        </h2>
        <button className="py-2 uppercase text-sm sm:text-lg sm:px-5 px-3 bg-[#ffffff0e]">
          See All
        </button>
      </nav>

      {/* Cards Section */}
      <div className="flex sm:flex-nowrap flex-wrap gap-5 sm:gap-10 justify-center sm:justify-between mt-8 sm:mt-10 w-full">
        {trendingCardItem.map((item: ItrendingCardItem) => (
          <TrendingCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
