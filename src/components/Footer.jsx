import React from "react";
import logo from "../images/footer-logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#232127] py-10 lg:py-20">
        <div className="max-width text-center grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 mx-auto ">
          <article>
            <img className="mx-auto" src={logo} alt="logo" />
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">
                  Analytics
                </button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">Blog</button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">Support</button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">About</button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">Careers</button>
              </li>
              <li>
                <button className="text-slate-200 mt-1 text-sm hover:text-[#2acfcf]">Contact</button>
              </li>
            </ul>
          </article>
          <article>
            <ul className="flex gap-5 items-center justify-center">
              <li>
                <img src={facebook} className="hover:bg-[#2acfcf] cursor-pointer rounded" alt="fa-icon" />
              </li>
              <li>
                <img src={twitter} className="hover:bg-[#2acfcf] cursor-pointer rounded" alt="tw-icon" />
              </li>
              <li>
                <img src={pinterest} className="hover:bg-[#2acfcf] cursor-pointer rounded-[50%]" alt="pin-icon" />
              </li>
              <li>
                <img src={instagram} className="hover:bg-[#2acfcf] cursor-pointer rounded" alt="inst-icon" />
              </li>
            </ul>
          </article>
        </div>
        <div className="flex items-end mt-5 mb-0 justify-center text-white line-clamp-3 lg:mt-10 foot">
    Challenge by <a className="text-[#2acfcf]" href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor </a>. 
    Coded by <a className="text-[#2acfcf]" href="https://www.frontendmentor.io/profile/Yasser-Mohamed"> Yasser-Mohamed</a>.
  </div>
      </footer>
    </>
  );
};

export default Footer;
