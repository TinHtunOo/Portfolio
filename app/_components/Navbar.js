"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import ResumeButton from "./ResumeButton";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setShow(false); // scrolling down → hide
      } else {
        setShow(true); // scrolling up → show
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        className={`flex h-20 items-center justify-between px-6 text-text transition-colors md:px-12 ${
          lastY > 24
            ? "border-b border-border bg-white/70 shadow-sm backdrop-blur-md"
            : "bg-white"
        }`}
      >
        <Link href="#top" className="text-[28px] font-black tracking-tight">
          TinHtun<span className="text-accent">Oo.</span>
        </Link>

        <ul className="hidden w-[30%] items-center justify-between font-medium text-text-muted md:flex">
          <li>
            <Link href="#about_me" className="line p-2">
              About
            </Link>
          </li>
          <li>
            <Link href="#project" className="line p-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#journey" className="line p-2">
              Journey
            </Link>
          </li>
        </ul>

        <ResumeButton isMobile={false} />
        <MobileNavbar />
      </nav>
    </header>
  );
}

export default Navbar;
