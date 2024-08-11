import { ChevronRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className="h-screen lg:h-[calc(100vh-56px-56px)] flex justify-center items-end bg-hero bg-no-repeat bg-center bg-cover">
      <div>
        <div>
          <img src="/images/vision_pro.png" alt="vision text" />
        </div>
        <div className="flex flex-col items-center pb-[84px]  md:pb-[54px] px-4 text-center leading-tight">
          <p className="text-[28px]">
            Welcome to the era of spatial computing.
          </p>

          <div className="flex gap-4 mt-2">
            <div className="flex gap-1 items-center hover:cursor-pointer">
              <p className="text-link">Learn more </p>
              <ChevronRight className="text-link" size={18} />
            </div>
            <div className="flex gap-1 items-center hover:cursor-pointer">
              <p className="text-link">Buy </p>
              <ChevronRight className="text-link" size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
