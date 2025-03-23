import React from "react";

export default function Button({text}) {
  return (
    <div className="border border-faded py-1 px-3 rounded-full hover:border-primary hover:text-primary transition-all">{text}</div>
  );
}
