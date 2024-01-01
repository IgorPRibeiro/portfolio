import { Inter } from "next/font/google";
import SwitchToggle from "../SwitchToggle/SwitchToggle ";
export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark-nav-bar p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex flex-1  items-center flex-shrink-0 text-white">
          <span className="font-semibold text-xl tracking-tight">Igor</span>
        </div>
        <div className="flex flex-1 text-sm lg:flex-grow justify-around 	">
          <div className="flex flex-row">
            <p className="text-teal-400 mr-1 ">01.</p>
            <a href="#responsive-header" className="  hover:text-teal-400">
              About
            </a>
          </div>

          <div className="flex lex-row">
            <p className="text-teal-400 mr-1">02.</p>
            <a href="#responsive-header" className="hover:text-teal-400">
              Experience
            </a>
          </div>

          <div className="flex lex-row ">
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
        </div>
        <div className="flex flex-1 justify-end text-sm lg:flex-grow bg-red-500 items-end	">
          <SwitchToggle onSwitch={(value) => console.log(value)} />
        </div>
      </div>
    </nav>
  );
}
