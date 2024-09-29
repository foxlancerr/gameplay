"use client";
import { navLinksItem, socialLinks } from "@/constant";
import { INavLinksItem, IsocialLinks } from "@/types";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#070707] flex flex-col justify-start h-auto  overflow-auto py-12 sm:px-28 px-5">
      <div className="flex gap-10 sm:flex-row flex-col">
        <div className="sm:w-2/5 w-full">
          <Link
            href={"/"}
            className="text-[30px] font-extrabold"
            aria-label="Homepage"
          >
            GamPla<span className="text-[#DC7000]">y</span>
          </Link>
          <p className="mt-2">
            GamPlay is your ultimate destination for gaming insights, tutorials,
            and community engagement. Join us in exploring the gaming universe
            together!
          </p>
        
        </div>
        <div className="sm:w-3/5 w-full flex justify-start gap-5 sm:flex-row flex-col">
          <div className="sm:w-1/4 w-auto">
            <h1 className="text-[17px] font-medium">About Us</h1>
            <ul className="flex flex-col mt-2 gap-3 relative">
              {navLinksItem.map((item: INavLinksItem) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="text-[16px] group"
                      aria-label={item.name}
                    >
                      <span>{item.name}</span>
                      {/* Rectangle and circle divs visible on hover or when active */}
                      <div
                        className={`flex items-center gap-1 absolute transition-all left-[30%] duration-300 ease-in-out ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <div className="w-[5px] rounded-full h-[5px] bg-[#DC7000]"></div>
                        <div className="w-[31px] rounded-full h-[4px] bg-[#DC7000]"></div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:w-2/4 w-auto">
            <h1 className="text-[17px] font-medium">Contact Us</h1>
            <p className="mt-2">
              For inquiries, partnerships, or support, feel free to reach out to
              us at contact@gamplay.com. Our team is here to assist you with any
              questions you may have.
            </p>
          </div>

          <div className="flex items-end sm:w-1/4 w-auto">
            <ul className="flex gap-2">
              {socialLinks.map((item: IsocialLinks) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="w-[28px] h-[28px] duration-100 transition-all hover:bg-[#DC7000] hover:text-white bg-white rounded-full flex justify-center items-center text-black"
                      aria-label={`Link to ${item.name}`}
                    >
                      {<item.icon />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-5"/>
      <p className="text-center">&copy; {new Date().getFullYear()} GamPlay. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
