import { ItrendingCardItem } from "@/types";
import Image from "next/image";
import React from "react";

function TrendingCard({ item }: { item: ItrendingCardItem }) {
  return (
    <div className="sm:w-1/4 w-full rounded-lg">
      <img
        className="w-full object-cover sm:h-auto h-[150px] rounded-lg"
        src={item.card_url}
        alt={item.id + ""}
      ></img>
      <div className="flex justify-center items-center mt-2 gap-2">
        <Image
          src={item.content.icon_url}
          alt={item.content.text}
          width={20}
          height={20}
        ></Image>
        <p className="align-middle">{item.content.text}</p>
      </div>
    </div>
  );
}

export default TrendingCard;
