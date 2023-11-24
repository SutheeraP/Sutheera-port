import React from "react";

const Aboutsection = () => {
  const labelClass = "text-lg md:text-2xl font-bold text-primary pb-2";
  const boxClass = "transition-all py-4 hover:px-4 rounded-lg hover:shadow-[0_0_10px_5px_rgba(102,255,153,0.1)]";
  const personalSkill = ["Easy Learner","Creativity","Critical Thinking","Problem-Solving","Emotional Intelligence"];
  const techSkill = ["HTML","CSS","Javscript","PHP","Vue","React","NextJS","Bootstrap","TailwindCSS","Figma"];
  return (
    <div className="container px-4 mx-auto pb-48">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className={boxClass}>
            <div className={labelClass}>About Me</div>
            <div className="text-sm">
              Hi! 👋 I'm Sutheera Pitakpalin, a third-year student at KMITL,
              majoring in IT with a focus on Multimedia. In my three years of
              studies, I've found a passion for web design and coding. I'm
              always eager to learn new things outside the classroom. I hope you
              like my projects, and let's explore opportunities together!
            </div>
          </div>
          <div  className={boxClass}>
            <div className={labelClass}>Education</div>
            <div className="text-sm grid gap-6">
              <div className="grid md:grid-cols-3 border-l pl-2">
                <div className="text-xs md:text-sm">2015 - 2022</div>
                <div className="col-span-2">
                  <div>Chonkanyanukool School</div>
                  <div className="text-faded text-xs">
                    English-French Program
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 border-l pl-2">
                <div>2021 - now</div>
                <div className="col-span-2">
                  <div>King Mongkut Institue of Technology Ladkrabang</div>
                  <div className="text-faded text-xs">
                    School of Information Technology
                  </div>
                  <div className="text-faded text-xs">Multimedia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div  className={boxClass}>
            <div className={labelClass}>Personal Skills</div>
            <div className="text-xs flex flex-wrap gap-3">
                {personalSkill.map((personalSkill) => (
                    <div className="border border-faded py-1 px-3 rounded-full">{personalSkill}</div>
                ))}
            </div>
          </div>
          <div  className={boxClass}>
            <div className={labelClass}>Technical Skills</div>
            <div className="text-xs flex flex-wrap gap-2">
                {techSkill.map((techSkill) => (
                    <div className="border border-faded py-1 px-3 rounded-full">{techSkill}</div>
                ))}
            </div>
          </div>
          <div  className={boxClass}>
            <div className={labelClass}>Contacts</div>
            <div className="text-xs ">
                contetnt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
