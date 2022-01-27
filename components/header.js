import React from 'react';
import BtnPrimaryRoundedFull from "./BtnPrimaryRoundedFull";
import BtnOutlineRoundedFull from "./BtnOutlineRoundedFull";

export default function Header() {
    return (
 
    <div className="pt-6 navbar text-white">
        <div className="pr-16 logoTop">
          <img
          src="/headerLogo-1x.png" 
          />
        </div> 
        <div className="flex-auto items-stretch">
            <a className="btn btn-ghost btn-sm rounded-full">
              mint
            </a> 
            <a className="btn btn-ghost btn-sm rounded-btn">
              ourNFTs  
            </a> 
            <a className="btn btn-ghost btn-sm rounded-btn">
              theTeam
            </a> 
            <a className="btn btn-ghost btn-sm rounded-btn">
              FAQs 
            </a>
        </div>

</div>
    );
}
