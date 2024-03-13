import Image from "next/image";
import Link from "next/link";
import React from "react";

const Aboutsection = () => {
  const labelClass = "text-lg md:text-2xl font-bold text-primary pb-2";
  const boxClass =
    "transition-all py-4 hover:px-4 rounded-lg hover:shadow-[0_0_10px_5px_rgba(102,255,153,0.1)]";
  const personalSkill = [
    "Easy Learner",
    "Creativity",
    "Critical Thinking",
    "Problem-Solving",
    "Emotional Intelligence",
  ];
  const techSkill = [
    "HTML",
    "CSS",
    "Javscript",
    "PHP",
    "Vue",
    "React",
    "NextJS",
    "Bootstrap",
    "TailwindCSS",
    "Figma",
  ];
  return (
    <div className="flex min-h-screen">
      <div className="m-auto">
        <div className="container px-4 mx-auto pb-48">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className={boxClass}>
                <div className={labelClass}>About Me</div>
                <div className="text-sm">
                  Hi! 👋 I'm Sutheera Pitakpalin, a student at KMITL, majoring
                  in IT with a focus on Multimedia. Throughout my learning
                  journey, I've found a passion for web design and coding. I'm
                  always eager to learn new things outside the classroom. I hope
                  you like my projects, and let's explore opportunities
                  together!
                </div>
              </div>
              <div className={boxClass}>
                <div className={labelClass}>Contacts</div>
                <div className="text-xs flex gap-2">
                  <div>
                    <Link target="_blank" href="https://github.com/SutheeraP">
                      <Image
                        src="git.svg"
                        width={25}
                        height={25}
                        alt="Github"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/sutheera-pitakpalin-9bb623285/"
                    >
                      <Image
                        src="link.svg"
                        width={25}
                        height={25}
                        alt="LinkedIn"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="mailto:s.pitakpalin@gmail.com?subject=Just%20say%20hi"
                    >
                      <Image
                        src="mail.svg"
                        width={25}
                        height={25}
                        alt="Email"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/suthxx/"
                    >
                      <Image
                        src="fb.svg"
                        width={25}
                        height={25}
                        alt="Facebook"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className={boxClass}>
                <div className={labelClass}>Education</div>
                <div className="text-sm grid gap-6">
                  <div className="grid md:grid-cols-4 border-l pl-2">
                    <div className="text-xs md:text-sm">2015 - 2020</div>
                    <div className="col-span-3">
                      <div>Chonkanyanukool School</div>
                      <div className="text-faded text-xs">
                        English-French Program
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 border-l pl-2">
                    <div className="text-xs md:text-sm">2021 - now</div>
                    <div className="col-span-3">
                      <div>King Mongkut Institute of Technology Ladkrabang</div>
                      <div className="text-faded text-xs">
                        School of Information Technology
                      </div>
                      <div className="text-faded text-xs">Multimedia</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 border-l pl-2">
                    <div className="text-xs md:text-sm">2023 - now</div>
                    <div className="col-span-3">
                      <div>Ramkhamhaeng University</div>
                      <div className="text-faded text-xs">
                        Faculty of Humanities
                      </div>
                      <div className="text-faded text-xs">
                        Western Languages (Spanish)
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col gap-4">
              <div className={boxClass}>
                <div className={labelClass}>Personal Skills</div>
                <div className="text-xs flex flex-wrap gap-3">
                  {personalSkill.map((personalSkill) => (
                    <div
                      key={personalSkill}
                      className="border border-faded py-1 px-3 rounded-full"
                    >
                      {personalSkill}
                    </div>
                  ))}
                </div>
              </div>
              <div className={boxClass}>
                <div className={labelClass}>Technical Skills</div>
                <div className="text-xs flex flex-wrap gap-2">
                  {techSkill.map((techSkill) => (
                    <div
                      key={techSkill}
                      className="border border-faded py-1 px-3 rounded-full"
                    >
                      {techSkill}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
