import React from "react";
import { appleImg, bagImg, searchImg } from "../utils/index";
import { navLists } from "../constants/index";
const Header = () => {
  return (
    <header className="w-full flex justify-between py-5 sm:px-10 px-5  ">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} width={14} height={18} alt="Apple" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, index) => (
            <div
              key={nav}
              className="px-5 text-sm text-gray transition-all hover:text-white cursor-pointer"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="images flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
