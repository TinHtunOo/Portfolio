import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-text absolute left-0 right-0">
      <div className="max-w-275 mx-auto sm:px-10 px-2 py-20">
        <h1 className="font-semibold text-white text-[45px]">
          TinHtun<span className="text-text-muted">Oo.</span>
        </h1>{" "}
        <div className="md:flex ">
          <div className=" md:w-[70%] text-lg text-white">
            <div className="flex md:gap-20 gap-5 my-10 flex-wrap">
              <Link
                href="https://github.com/TinHtunOo"
                target="_blank"
                className="hover:underline"
              >
                <span className="flex items-center uppercase ">
                  github <ArrowUpRight size={25} strokeWidth={1.5} />
                </span>
              </Link>
              {/* <span className="flex items-center uppercase ">
                linkedin <ArrowUpRight size={25} strokeWidth={1.5} />
              </span> */}
              {/* <Link
                href="https://github.com/TinHtunOo"
                className="hover:underline"
              >
                <span className="flex items-center uppercase ">
                  facebook <ArrowUpRight size={25} strokeWidth={1.5} />
                </span>
              </Link> */}
              <div>tinhtun1999@gmail.com</div>
              <div>+669148469</div>
            </div>
            {/* <div className="flex md:gap-20 gap-5 flex-wrap">
              <div>tinhtun1999@gmail.com</div>
              <div>+669148469</div>
            </div> */}
          </div>
          {/* <div className=" md:w-[30%]">
            <h2 className="font-semibold text-accent text-[32px] mt-10 md:mt-5 mb-6">
              Contact Me.
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-75 text-white bg-transparent border-b-2 border-text-muted focus:border-accent outline-none py-2"
              />
              <ArrowUpRight
                size={35}
                strokeWidth={1.5}
                color="#d0992e"
                className="-ml-7"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
