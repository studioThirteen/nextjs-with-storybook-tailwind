import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

export default function Footer() {
  return (
        <div class="flex flex-row md:flex-row justify-between items-center w-full px-8 pt-20 pb-10 bg-primary-focus text-white text-right">
          <div class="flex flex-column md:flex-row w-md items-start">
            <span class="font-sans text-2xl font-bold text-left">Back to top</span>
            <span class="font-sans text-6xl font-medium text-left">Let’s connect</span>
            <ul class="flex flex-row space-x-8">
              <li class="w-10 h-10"><svg src="/openseaNegative.svg" /></li>
              <li class="w-10 h-10"><FiGithub /></li>
              <li class="w-10 h-10"><FaTelegramPlane /></li>
              <li class="w-10 h-10"><RiDiscordLine /></li>
              <li class="w-10 h-10"><FiTwitter /></li>
              <li class="w-10 h-10"><FaInstagram /></li>         
            </ul>
            <ul class="flex flex-row md:flex-col justify-between items-center space-x-40">
              <li class="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">mint</li>
              <li class="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">ourNFTs</li>
              <li class="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">theTeam</li>
              <li class="mr-8 font-sans text-2xl font-bold text-white hover:text-secondary underline hover:no-underline transition-colors ease-linear duration-100">FAQs</li>
            </ul>
          </div>
          <div class="flex flex-row justify-between items-end">
            <img class="ml-8 mb-40 w-min h-auto" src="/footerLogo-1x.png" />
            <div class="flex flex-column justify-between items-end">
              <span class="font-sans text-white text-2xl font-semibold text-right">© 2022 Studio Thirteen</span>
            </div>
          </div>
        </div>
   )
};

