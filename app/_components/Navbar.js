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
    <>
      <div
        className={`fixed top-0 left-0 right-0 transition-transform duration-300 z-10 ${
          show ? "translate-y-0 " : "-translate-y-full "
        } ${
          lastY > 100 ? " bg-white/30 backdrop-blur-sm shadow" : "bg-white"
        } `}
      >
        <nav className=" h-24 flex justify-between items-center md:px-12 px-6 text-text relative z-10">
          <h1 className="font-black text-[32px]">
            TinHtun<span className="text-text-2">Oo.</span>
          </h1>
          <ul className="text-gray-500 text-[16px]  items-center justify-between font-medium w-[30%] hidden md:flex">
            <li>
              <Link href={"#about_me"} className="line p-2 hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href={"#project"} className="line p-2 hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link href={"#journey"} className="line p-2 hover:text-accent">
                Journey
              </Link>
            </li>
          </ul>
          <ResumeButton isMobile={false} />
          <MobileNavbar />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
