import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-20">
      <div
        className="fixed top-0 left-0 bg-[#1B1C1D90] backdrop-blur-sm
  w-full text-center py-3 tracking-wider font-semibold"
      >
        <div>
          <Link href="/">SUTHEERA</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
