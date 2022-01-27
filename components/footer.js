import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

export default function Footer() {
  return (
        <div className="flex flex-row md:flex-row justify-between items-center w-full mx-8 mt-20 mb-10 bg-secondary-focus text-white text-right">
          <div className="flex flex-column md:flex-row w-md items-start">
            <div className="font-sans text-2xl font-bold text-left">Back to top
            <div className="font-sans text-6xl font-medium text-left">Let’s connect
            <ul className="flex flex-row space-x-8">
              <li className="w-10 h-10"><svg src="/openseaNegative.svg" /></li>
              <li className="w-10 h-10"><FiGithub /></li>
              <li className="w-10 h-10"><FaTelegramPlane /></li>
              <li className="w-10 h-10"><RiDiscordLine /></li>
              <li className="w-10 h-10"><FiTwitter /></li>
              <li className="w-10 h-10"><FaInstagram /></li>         
            </ul></div>
            <ul className="flex flex-row md:flex-col justify-between items-center space-x-40">
              <li className="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">mint</li>
              <li className="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">ourNFTs</li>
              <li className="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">theTeam</li>
              <li className="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">FAQs</li>
            </ul>
          </div>
          </div>
          <div className="flex flex-row justify-between items-end">
            <img className="ml-8 mb-40 w-min h-auto" src="/footerLogo-1x.png" />
            <div className="flex flex-column justify-between items-end">
              <span className="font-sans text-white text-2xl font-semibold text-right">© 2022 Studio Thirteen</span>
            </div>
          </div>
        </div>
   )
};

