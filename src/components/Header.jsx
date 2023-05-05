import React, { useState } from "react";
import logo from "../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="max-width flex items-center py-4">
        <div className="w-full flex items-center justify-between md:justify-start gap-6 relative">
          <img src={logo} alt="logo" />
          <nav className="hidden md:flex justify-between items-center w-full">
              <ul className=" font-bold leading-10 flex gap-6 text-slate-400 ">
                <li>
                  <button className="hover:text-black">Features</button>
                </li>
                <li>
                  <button className="hover:text-black">Pricing</button>
                </li>
                <li>
                  <button className="hover:text-black">Resources</button>
                </li>
              </ul>
              <ul className="flex items-center gap-6  font-bold">
                <li>
                  <button className="text-slate-400 hover:text-black py-4">
                    Login
                  </button>
                </li>
                <li>
                  <button className="btn-cta rounded-3xl w-full md:w-auto">
                    Sign Up
                  </button>
                </li>
              </ul>
            </nav>
          {show && (
            <nav className={show ? "w-[70%] absolute bg-prim left-1/2 top-10 p-10 text-center text-white rounded-xl transform -translate-x-1/2 mt-10 transition-all  duration-100" : "-top-[22.5rem]" }>
              <ul className=" font-bold leading-10 md:flex md:gap-6 md:px-32 ">
                <li>
                  <button className="text-white hover:text-slate-400">Features</button>
                </li>
                <li>
                  <button className="text-white hover:text-slate-400">Pricing</button>
                </li>
                <li>
                  <button className="text-white hover:text-slate-400">Resources</button>
                </li>
              </ul>
              <hr className="md:hidden" />
              <ul className=" gap-6 font-bold md:flex md:items-center md:justify-between">
                <li>
                  <button className="text-white hover:text-slate-400 py-4">
                    Login
                  </button>
                </li>
                <li>
                  <button className="btn-cta rounded-3xl w-full md:w-auto">
                    Sign Up
                  </button>
                </li>
              </ul>
            </nav>
          )}
          <button className="md:hidden text-lg" onClick={() => setShow(!show)}>
            {show ? <MdClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
