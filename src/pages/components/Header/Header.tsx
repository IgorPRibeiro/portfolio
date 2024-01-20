import { Inter } from "next/font/google";
import SwitchToggle from "../SwitchToggle/SwitchToggle ";
import { useState } from "react";
export default function Header() {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark-nav-bar p-6">
      <div className="flex w-1/12  items-center flex-shrink-0 text-white">
        <span className="font-semibold text-xl tracking-tight">Igor</span>
      </div>
      <div className="flex w-11/12 flex-grow items-center justify-between ">
        <div
          className={`md:static absolute bg-none lg:bg-none xl:bg-none md:bg-none max-sm:bg-dark-nav-bar md:min-h-fit min-h-[60vh] left-0 ${
            showOptions ? "top-[8%]" : "top-[-100%]"
          }   w-full flex items-start flex-col p-4`}
        >
          <div className="flex flex-1 lg:items-center text-sm lg:flex-grow md:flex-row flex-col justify-around w-full lg:align-middle 	">
            <div className="flex content-center flex-row">
              <p className="text-teal-400 mr-1 ">01.</p>
              <a href="#responsive-header" className="  hover:text-teal-400">
                About
              </a>
            </div>

            <div className="flex flex-row">
              <p className="text-teal-400 mr-1">02.</p>
              <a href="#responsive-header" className="hover:text-teal-400">
                Experience
              </a>
            </div>

            <div className="flex flex-row ">
              <p className="text-teal-400 mr-1">03.</p>
              <a href="#responsive-header" className=" hover:text-teal-400">
                Work
              </a>
            </div>
            <div className="flex flex-row ">
              <p className="text-teal-400 mr-1">04.</p>
              <a href="#responsive-header" className="hover:text-teal-400">
                Contact
              </a>
            </div>
            <div className="ali  w-1/8 text-sm  	">
              <SwitchToggle onSwitch={(value) => console.log(value)} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:hidden xl:hidden md:hidden right-4">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="flex items-center px-3 py-2 "
        >
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
