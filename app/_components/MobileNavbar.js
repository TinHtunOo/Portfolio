"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import ResumeButton from "./ResumeButton";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="relative z-30 md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent text-accent transition hover:bg-accent hover:text-white"
      >
        {open ? <X /> : <Menu />}
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              onClick={() => setOpen(false)}
              className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            {/* Menu */}
            <ul
              className={`fixed inset-x-0 top-20 z-40 bg-white pb-4 shadow-lg transition-transform duration-300 md:hidden ${
                open ? "translate-y-0" : "-translate-y-150"
              }`}
            >
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="#about_me"
                  className="block border-b border-bg-1 p-6 uppercase transition hover:bg-text hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="#project"
                  className="block border-b border-bg-1 p-6 uppercase transition hover:bg-text hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="#journey"
                  className="block border-b border-bg-1 p-6 uppercase transition hover:bg-text hover:text-white"
                >
                  Journey
                </Link>
              </li>
              <li className="p-4">
                <ResumeButton />
              </li>
            </ul>
          </>,
          document.body,
        )}
    </div>
  );
}

export default MobileNavbar;
