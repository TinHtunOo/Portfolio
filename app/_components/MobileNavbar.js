import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <>
      <div className="block md:hidden relative z-8">
        <button
          onClick={() => setOpen(!open)}
          className="z-9 border-2 border-accent text-accent rounded-3xl px-4 py-1 "
        >
          {open ? <X /> : <Menu />}
        </button>
        <ul
          className={`fixed top-0 left-0 text-[18px] w-full bg-white transition-transform duration-800 border-b border-y-gray-200 z-9   ${
            open ? "translate-y-24" : "-translate-y-full"
          }`}
        >
          <li>
            <Link
              onClick={() => setOpen(false)}
              href={"#about_me"}
              className=" block p-6 w-full hover:bg-text hover:text-white uppercase "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href={"#project"}
              className=" block p-6 w-full hover:bg-text hover:text-white uppercase "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href={"#journey"}
              className="  block p-6 w-full hover:bg-text hover:text-white uppercase"
            >
              Journey
            </Link>
          </li>
          <ResumeButton />
        </ul>
      </div>
      <div
        className={`${
          open
            ? "h-screen w-screen bg-black/45 absolute z-1 top-24 right-0"
            : "hidden"
        }`}
      ></div>
    </>
  );
}

export default MobileNavbar;
