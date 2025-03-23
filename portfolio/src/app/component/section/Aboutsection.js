import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../layout/Button";

const Aboutsection = () => {
  return (
    <div className="flex min-h-screen">
      <div className="m-auto">
        <div className="container px-4 mx-auto pb-48">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="flex flex-col gap-12">
              <section className="flex flex-col gap-8">
                <div className="text-5xl justify-center md:justify-start lg:text-7xl font-bold text-primary flex">
                  <div className="rotate-[0.25rad]">H</div>
                  <div className="rotate-[-0.20rad] translate-y-3 md:translate-y-5">
                    e
                  </div>
                  <div className="rotate-[-0.25rad]">l</div>
                  <div className="rotate-[-0.20rad] translate-y-1 md:translate-y-3">
                    l
                  </div>
                  <div className="rotate-[0.20rad]">o</div>
                </div>
                <div className="text-xs xl:text-sm text-faded">
                  I'm <span className="text-light">Sutheera Pitakpalin</span>, a
                  recent graduate from KMITL with a Bachelor of Science in
                  Information Technology (Multimedia). My
                  <span className="text-light">
                    {" "}
                    passion for web design and coding
                  </span>{" "}
                  has driven me throughout my studies, and I'm eager to continue
                  learning and growing. I hope you like my projects, and let's
                  explore opportunities together!
                </div>
              </section>
              <section className="flex flex-col gap-3">
                <div className="text-lg font-bold text-primary">Language</div>
                <div className="grid grid-cols-2 w-fit text-xs xl:text-sm">
                  <div>Thai</div>
                  <div className="text-faded">Native</div>
                  <div>English</div>
                  <div className="text-faded">Intermediate (TOEIC 925)</div>
                </div>
              </section>
              <section className="flex flex-col gap-3">
                <div className="text-lg font-bold text-primary">And I'm</div>
                <div className="text-xs text-faded flex flex-wrap gap-2 justify-start">
                  <Button key={1} text={"INFP"} />
                  <Button key={2} text={"Movie Lover"} />
                  <Button key={3} text={"Hobby Artist"} />
                  <Button key={4} text={"Cat Lover"} />
                  <Button key={5} text={"Fast Learner"} />
                  <Button key={6} text={"Positive"} />
                </div>
              </section>
            </div>
            <div className="flex flex-col gap-12">
              <div className="text-3xl font-bold text-primary">Experiences</div>
              <section className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-xs text-faded font-bold">
                      Nov 2024 - Mar 2025
                    </div>
                    <div className="text-base font-semibold">
                      Data Structures and Algorithms Teaching Assistant • KMITL
                    </div>
                  </div>
                  <div className="text-faded text-xs xl:text-sm">
                    Delivered personalized
                    <span className="text-light"> code review</span>,
                    algorithmic debugging, and guidance on data structures and
                    algorithms,
                    <span className="text-light"> clarifying concepts</span> and
                    addressing inquiries. Also,
                    <span className="text-light">
                      {" "}
                      developed a Python library{" "}
                    </span>
                    with interactive visualizations to enhance student
                    comprehension.
                  </div>
                  <div className="text-xs text-faded flex flex-wrap gap-2 justify-start">
                    <Button key={1} text={"Python"} />
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-xs text-faded font-bold">
                      Jul - Oct 2024
                    </div>
                    <div className="text-base font-semibold">
                      Software Engineer Intern • MOHARA
                    </div>
                  </div>
                  <div className="text-faded text-xs xl:text-sm">
                    Developed
                    <span className="text-light"> full-stack development </span>
                    experience in diverse projects during my internship,
                    collaborating with international teams to enhance
                    <span className="text-light"> communication</span> and
                    teamwork. Implemented project features by
                    <span className="text-light"> quickly adapting</span> to new
                    frameworks and libraries.
                  </div>
                  <div className="text-xs text-faded flex flex-wrap gap-2 justify-start">
                    <Button text={"NextJs"} />
                    <Button text={"Tailwind CSS"} />
                    <Button text={"FlutterFlow"} />
                    <Button text={"ShadCN"} />
                    <Button text={"tRPC"} />
                    <Button text={"RESTful APIs"} />
                    <Button text={"NodeJs"} />
                    <Button text={"Express"} />
                    <Button text={"MongoDB"} />
                    <Button text={"Clerk"} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
