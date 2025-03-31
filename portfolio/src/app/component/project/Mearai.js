import { CodeBracketIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../layout/Button";

export default function Mearai() {
  return (
    <div className="flex min-h-screen py-24 bg-slate-100 text-secondary w-full">
      <div className="m-auto">
        <div className="mx-auto px-4 md:px-24 grid md:grid-cols-2">
          <div className="m-auto pb-12 md:pb-0">
            <Image src="/mearai.png" width={500} height={400} alt="MEARAI Mockup" />
          </div>
          <div className="my-auto text-center md:text-left flex flex-col gap-5">
            <div className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-primary">
              MEARAI
            </div>
            <div className="text-xs md:text-sm">
              A Twitter clone developed during my internship at MOHORA, built
              using the T3 Stack. This project provided valuable experience in
              full-stack development, and I was responsible for independently
              developing and continuously improving its features, guided by
              MOHORA's documentation and mentorship.
            </div>

            <div className="text-xs flex flex-wrap gap-2 justify-center md:justify-start">
              <Button key={1} text={"NextJs"} />
              <Button key={8} text={"TypeScript"} />
              <Button key={2} text={"Tailwind CSS"} />
              <Button key={4} text={"Neon Postgres Database"} />
              <Button key={5} text={"tRPC"} />
              <Button key={6} text={"Clerk"} />
              <Button key={7} text={"AWS S3"} />
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              {/* <div className="w-10 h-10 p-2 mt-3 rounded-full bg-primary  text-slate-100">
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
              </div> */}
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-primary hover:bg-secondary transition-all text-slate-100">
                <Link
                  target="_blank"
                  href="https://github.com/SutheeraP/t3-twitter-clone"
                >
                  <CodeBracketIcon />
                </Link>
              </div>
              <div className="w-10 h-10 p-2 mt-3 rounded-full bg-primary hover:bg-secondary transition-all text-slate-100">
                <Link target="_blank" href="https://mearai.vercel.app/">
                  <ComputerDesktopIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
