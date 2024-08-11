"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const links = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-[#161617]/80 p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div></div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <div>
              <img src="/images/apple_icon.svg" alt="apple icon" />
            </div>

            {links.map((link, index) => (
              <p
                key={index}
                className={`hover:text-primary cursor-pointer flex items-center gap-2  text-white/80 font-normal`}
              >
                {link}
              </p>
            ))}

            <div>
              <img src="/images/search_icon.svg" alt="apple icon" />
            </div>
            <div>
              <img src="/images/brief_case_icon.svg" alt="apple icon" />
            </div>
          </div>
          <div className="flex items-center gap-[40px] select-none"></div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-[#161617]/80 py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex  text-[16px] items-center select-none">
            <img src="/images/apple_icon.svg" alt="apple icon" />
          </div>
          <div className="flex items-center gap-[30px] select-none">
            <div>
              <img src="/images/search_icon.svg" alt="apple icon" />
            </div>
            <div>
              <img src="/images/brief_case_icon.svg" alt="apple icon" />
            </div>
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <p
                  key={index}
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  text-white/80 font-normal`}
                >
                  {link}
                </p>
              ))}

              <div className="flex flex-col gap-[40px] select-none"></div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
