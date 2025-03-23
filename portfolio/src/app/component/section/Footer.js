import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 text-xs bg-secondary">
      <div className="text-faded container mx-auto px-4 text-center ">
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/12KGpqcdBt6zl8DaS_YbYJhn2tpUozqMe/view?usp=sharing"
          className=" underline underline-offset-1"
        >
          <div>Resume</div>
        </Link>

        <div className="pt-1">©2025 Sutheerap</div>
      </div>
    </div>
  );
};

export default Footer;
