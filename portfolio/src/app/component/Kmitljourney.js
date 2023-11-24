"use client";
import React from "react";
import Image from "next/image";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Kmitljourney = () => {
  return (
    <div className="min-h-screen py-24 bg-slate-100 text-secondary w-full">
      <div className="m-auto">
        <div className="conatiner mx-auto px-4 md:px-24 grid md:grid-cols-2">
          <div className="mx-auto">
            <Image
              src="/kmitl-mockup.png"
              width={500}
              height={500}
              alt="Kmitl Journey Mockup"
            />
          </div>
          <div className="my-auto text-center md:text-left">
            <div className="text-2xl md:text-3xl lg:text-7xl font-extrabold text-[#ff9914] my-3">
              KMITL JOURNEY
            </div>
            <div className="text-xs md:text-sm py-2">
              KMITL Journey is a project for the Human Interface Design course,
              aimed at addressing traffic issues within the university campus.
              The project focuses on improving the user experience related to
              commuting and transportation around the university.
            </div>
            <div className="flex justify-center md:justify-start">
                <div className="w-10 h-10 p-2 mt-3 mx-autu rounded-full bg-[#ff9914]  text-slate-100">
                    <Link target="_blank" href='https://www.figma.com/proto/KcDUCHGFHYCKjkQhTUfZuG/Design?type=design&node-id=106-883&t=Ha7fmCBQp9xUjWf5-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=106%3A883&show-proto-sidebar=1'><DevicePhoneMobileIcon/></Link>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kmitljourney;
