"use client";
import React from "react";
import Image from "next/image";
import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Button from "../layout/Button";

const Apex = () => {
  return (
    <div className="flex min-h-screen py-24 bg-slate-100 text-secondary w-full">
      <div className="m-auto">
        <div className="mx-auto px-4 md:px-24 grid md:grid-cols-2">
          <div className="m-auto">
            <Image src="/Apex.png" width={500} height={500} alt="AHA Mockup" />
          </div>
          <div className="my-auto text-center md:text-left flex flex-col gap-5">
            <div className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-secondary">
              APEX HEROIC ACADEMY
            </div>
            <div className="text-xs md:text-sm">
              Apex Heroic Academy is an open project inviting everyone to join
              the adventure through #AHA_AU on various platforms such as
              Facebook, Twitter, and Instagram. The content revolves around a
              school for superheroes in 2099. Players have the freedom to create
              their own characters through drawing or storytelling and playing
              with other players.
            </div>
            <div className="text-xs md:text-sm">
              I was responsible for developing the entire website, which
              enhanced my web design and development skills. Check it out!
            </div>

            <div className="text-xs flex flex-wrap gap-2 justify-center md:justify-start">
              <Button key={1} text={"NextJs"} />
              <Button key={3} text={"Tailwind CSS"} />
              <Button key={2} text={"Framer Motion"} />
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-secondary  text-slate-100">
                <Link
                  target="_blank"
                  href="https://www.figma.com/proto/XOt0rAtJY7xiDIIhduhQua/AHA-Project?node-id=2-589&starting-point-node-id=2%3A589&scaling=scale-down&t=TvJlZKbAvP95QKbi-1&mode=design"
                >
                  <Image
                    src="figma.svg"
                    width={500}
                    height={500}
                    alt="Figma Icon"
                  />
                </Link>
              </div>
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-secondary  text-slate-100">
                <Link
                  target="_blank"
                  href="https://github.com/SutheeraP/AHA_AU"
                >
                  <CodeBracketIcon />
                </Link>
              </div>
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-secondary  text-slate-100">
                <Link target="_blank" href="https://apexheroic.vercel.app">
                  <GlobeAltIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apex;
