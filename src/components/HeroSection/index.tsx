import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:py-28 py-10 text-white relative">
      {/* Left Section: Text Content */}
      <div className="flex-col justify-center flex">
        <h3 className="text-[#DC7000] font-semibold text-lg uppercase">
          Web3 & AI-Powered Gaming
        </h3>
        <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 ">
          Discover the Future of Gaming with AI & Blockchain
        </h1>
        <p className="text-base sm:text-lg mt-3">
          Embrace the next evolution in gaming, where AI creates intelligent
          environments and Web3 technology empowers players with ownership and
          transparency. Unlock new gaming experiences where your achievements
          truly belong to you.
        </p>
        <button className="bg-[#DC7000] hover:bg-[#e68924] text-white  py-3 px-10 rounded-full w-max transition-all duration-300 mt-3">
          Learn More
        </button>
      </div>

      {/* Right Section: Image Placeholder */}
      <div className="sm:flex hidden justify-center items-center relative">
        <img
          height={760}
          src="/assets/dashboard/joystock-hero-bg.png"
          alt="AI and Web3 Gaming Illustration"
          className=" sm:absolute relative -top-[240px] -right-[150px] z-10 -rotate-12"
        />
        <Image
          width={50}
          height={50}
          src="/assets/dashboard/unreal-bg.png"
          alt="AI and Web3 Gaming Illustration"
          className="  absolute  z-10 -rotate-12 top-10 left-32"
        />
        <Image
          width={50}
          height={50}
          src="/assets/dashboard/unity-bg.png"
          alt="AI and Web3 Gaming Illustration"
          className="  absolute  z-10 top-0 right-10"
        />
        <Image
          width={80}
          height={80}
          src="/assets/dashboard/cry-bg.png"
          alt="AI and Web3 Gaming Illustration"
          className="  absolute  z-10  left-10"
        />
      </div>
    </div>
  );
}

export default HeroSection;
