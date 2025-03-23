import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Link from "next/link";

const Mymodal = ({ icon, link }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button onClick={onOpenModal}>
        <div className="w-10 h-10 p-2 mt-3 mx-autu rounded-full bg-primary  text-slate-100">
          {icon}
          <Link href="/"></Link>
        </div>
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="pb-3 font-semibold text-primary">Before we go</div>
        <div className="text-xs">
          The website is best viewed on devices with a screen size of 11 inches
          or larger, such as an iPad or laptop, and may not be optimized for
          mobile viewing.
        </div>
        <div
          className="flex gap-2 pt-3 text-xs font-semibold"
        >
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
