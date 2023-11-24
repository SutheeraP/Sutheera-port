import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 text-xs bg-[#272829]">
      <div className="text-faded container mx-auto px-4 text-center ">
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1w9ZbTTga-yRPPMnDp0wxCae1gIxRFK1u/view?usp=sharing"
          className=" underline underline-offset-1"
        >
          <div>Download resume</div>
        </Link>

        <div className="pt-1">© 2023 Sutheera Pitakplain</div>
      </div>
    </div>
  );
};

export default Footer;
