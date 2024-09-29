'use client'; // Make this component a client-side component

import { navLinksItem } from "@/constant";
import { INavLinksItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React from "react";

function Header() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className="flex justify-between items-center h-[80px] sm:px-28 px-5">
      <Link href={"/"} className="text-[30px] font-extrabold">
        GamPla<span className="text-[#DC7000]">y</span>
      </Link>
      <div className="gap-20 sm:flex hidden">
        <ul className="flex gap-20 relative h-[40px] items-center">
          {navLinksItem.map((item: INavLinksItem) => {
            // Check if the current pathname matches the item's path
            const isActive = pathname === item.path;

            return (
              <Link href={item.path} key={item.id} className="relative group">
                <p className="text-[16px]">{item.name}</p>

                {/* Rectangle and circle divs visible on hover or when active */}
                <div
                  className={`flex items-center gap-1 absolute -bottom-4 transition-all duration-300 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="w-[31px] rounded-full h-[4px] bg-[#DC7000]"></div>
                  <div className="w-[5px] rounded-full h-[5px] bg-[#DC7000]"></div>
                </div>
              </Link>
            );
          })}
        </ul>

        <div className="h-[40px] px-6 rounded-md items-center flex bg-[#DC7000]">
          <Link href={"/contact-us"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
