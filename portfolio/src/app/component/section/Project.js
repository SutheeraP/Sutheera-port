import React from "react";

export default function Project() {
  return (
    <div className="flex h-screen bg-slate-100 text-secondary w-full">
      <div className="m-auto">
        <div className="container mx-auto px-4 text-center flex justify-center">
          <div className="text-5xl lg:text-7xl font-bold flex">
            <div className="rotate-[0.25rad]">P</div>
            <div className="rotate-[-0.20rad] translate-y-3 md:translate-y-5">
              R
            </div>
            <div className="rotate-[-0.25rad]">O</div>
            <div className="rotate-[-0.20rad] translate-y-1 md:translate-y-3">
              J
            </div>
            <div className="rotate-[0.20rad]">E</div>
            <div className="rotate-[-0.20rad]">C</div>
            <div className="rotate-[-0.15rad] translate-y-3 md:translate-y-5">
              T
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
