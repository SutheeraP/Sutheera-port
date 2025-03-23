import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const Mymodal = ({ icon, link }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button onClick={onOpenModal}>
        <div className="h-10 py-2 px-4 mt-3 rounded-full bg-primary border border-primary hover:bg-secondary transition-all text-slate-100 flex gap-2 items-center">
          {icon}
          <div className="w-5 h-5">
            <ComputerDesktopIcon />
          </div>
        </div>
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="pb-3 font-semibold text-primary">Warning</div>
        <div className="text-xs">
          The website is best viewed on devices with a screen size of 11 inches
          or larger, such as an iPad or laptop, and may not be optimized for
          mobile viewing.
        </div>
        <div className="flex gap-2 pt-3 text-xs font-semibold">
          <Link
            target="_blank"
            href={link}
            className="flex-1 text-center bg-primary py-2 rounded-lg"
          >
            <div className="">Let's go</div>
          </Link>

          <div
            onClick={() => setOpen(false)}
            className="cursor-pointer flex-1 text-center bg-secondary text-white py-2 rounded-lg"
          >
            Later
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Mymodal;
