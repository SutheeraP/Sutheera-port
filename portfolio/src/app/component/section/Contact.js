import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="container mx-auto px-4 flex flex-col gap-6">
          <div className="text-center">Let's connect</div>
          <div className="flex gap-6">
            <div>
              <Link target="_blank" href="https://github.com/SutheeraP">
                <Image src="git.svg" width={50} height={50} alt="Github" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/sutheera-pitakpalin-9bb623285/"
              >
                <Image src="link.svg" width={50} height={50} alt="LinkedIn" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href="mailto:s.pitakpalin@gmail.com?subject=Just%20say%20hi"
              >
                <Image src="mail.svg" width={50} height={50} alt="Email" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
