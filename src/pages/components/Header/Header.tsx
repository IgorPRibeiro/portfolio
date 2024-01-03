import { Inter } from "next/font/google";
import SwitchToggle from "../SwitchToggle/SwitchToggle ";
export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark-nav-bar p-6">
      <div className="flex w-1/12  items-center flex-shrink-0 text-white">
        <span className="font-semibold text-xl tracking-tight">Igor</span>
      </div>
      <div className="flex w-11/12 flex-grow items-center max-sm:hidden max-md:hidden  justify-between ">
        <div className="flex w-11/12 lg:flex-grow items-center justify-center">
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
        </div>
        <div className="flex  w-1/12 text-sm  justify-end	">
          <SwitchToggle onSwitch={(value) => console.log(value)} />
        </div>
      </div>
      <div className="lg:hidden xl:hidden md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
