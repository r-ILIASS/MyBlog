import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="bg-gray-800 w-full inline-block py-2 px-3 rounded-b-lg">
        <div className="md:flaot-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-xl text-white">
              My-Blog
            </span>
          </Link>
          <div className="hidden md:float-left md:contents"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
