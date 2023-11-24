"use client";
import React from "react";
import Image from "next/image";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Coralcojai = () => {
  return (
    <div className="flex min-h-screen py-24 bg-secondary text-slate-100 w-full">
      <div className="m-auto">
        <div className="conatiner m-auto px-4 md:px-24 grid md:grid-cols-2">
          <div className="m-auto md:order-last">
            <Image
              src="/coral-mockup.png"
              width={500}
              height={500}
              alt="Coral Cojai Mockup"
            />
          </div>
          <div className="my-auto text-center md:text-left">
            <div className="text-2xl md:text-3xl lg:text-7xl font-extrabold text-primary my-3">
              CORAL COJAI
            </div>
            <div className="text-xs md:text-sm py-2 md:py-6">
              Coral Cojai is a project from the Multimedia Programming course,
              where we collaborated with the School of Architecture, Art, and
              Design. They were responsible for web design, and then the IT team
              brought the website to life
              <br />
              <br />
              Our project addresses the care of Thailand's seas, using a kiosk
              format for museum displays. This design ensures the website is
              best viewed on iPads.
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <div className="w-10 h-10 p-2 mt-3 mx-autu rounded-full bg-primary  text-slate-100">
                <Link href="https://www.figma.com/proto/KcDUCHGFHYCKjkQhTUfZuG/Design?type=design&node-id=106-883&t=Ha7fmCBQp9xUjWf5-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=106%3A883&show-proto-sidebar=1">
                  <SunIcon />
                </Link>
              </div>
              <div className="w-10 h-10 p-2 mt-3 mx-autu rounded-full bg-primary  text-slate-100">
                <Link href="https://www.figma.com/proto/KcDUCHGFHYCKjkQhTUfZuG/Design?type=design&node-id=106-883&t=Ha7fmCBQp9xUjWf5-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=106%3A883&show-proto-sidebar=1">
                  <MoonIcon />
                </Link>
              </div>
              <div className="w-10 h-10 p-2 mt-3 mx-autu rounded-full bg-primary  text-slate-100">
                <Link target="_blank" href="https://github.com/professorkong/SDG">
                  <CodeBracketIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coralcojai;
