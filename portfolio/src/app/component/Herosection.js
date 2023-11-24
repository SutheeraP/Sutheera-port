"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="container mx-auto px-4">
          <div>Hi I'm</div>
          <div className="">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Sutheera",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "UX/UI Designer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
