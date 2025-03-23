"use client";
import React from "react";
import Image from "next/image";
import { ComputerDesktopIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Button from "../layout/Button";

const DuckyLucky = () => {
  return (
    <div className="flex min-h-screen py-24 bg-secondary text-slate-100 w-full">
      <div className="m-auto">
        <div className="mx-auto px-4 md:px-24 grid md:grid-cols-2">
          <div className="m-auto md:order-last">
            <Image src="/duck.png" width={500} height={500} alt="AHA Mockup" />
          </div>
          <div className="my-auto text-center md:text-left flex flex-col gap-6">
            <div className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-[#ff9914]">
              DUCKY LUCKY
            </div>
            <div className="text-xs md:text-sm">
              Ducky Lucky was created under the theme of an online tic tac toe
              game with a twist. We added a system of cards and special slots
              for extra fun, along with cute and distinctive graphics.
            </div>
            <div className="text-xs md:text-sm">
              I gained new knowledge and improved my teamwork skills a lot, and
              I hope you enjoy our work. Give it a try and play Ducky Lucky!
            </div>

            <div className="text-xs flex flex-wrap gap-2 justify-center md:justify-start">
              <Button key={1} text={"NextJs"} />
              <Button key={3} text={"Tailwind CSS"} />
              <Button key={2} text={"TypeScript"} />
              <Button key={2} text={"Firebase Realtime Database"} />
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-[#ff9914] hover:bg-secondary border-[#ff9914] border transition-all text-slate-100">
                <Link
                  target="_blank"
                  href="https://www.figma.com/proto/BAPHTQeKHM1O4x7IEUUp8P/Ducky-Lucky?type=design&node-id=1-2&t=ec6l1jEzcYTZIoJ3-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design"
                >
                  <Image
                    src="figma.svg"
                    width={500}
                    height={500}
                    alt="Figma Icon"
                  />
                </Link>
              </div>

              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-[#ff9914] hover:bg-secondary border-[#ff9914] border transition-all text-slate-100">
                <Link
                  target="_blank"
                  href="https://github.com/SutheeraP/duckylucky"
                >
                  <CodeBracketIcon />
                </Link>
              </div>
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-[#ff9914] hover:bg-secondary border-[#ff9914] border transition-all text-slate-100">
                <Link target="_blank" href="https://duckylucky.vercel.app">
                  <ComputerDesktopIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuckyLucky;
