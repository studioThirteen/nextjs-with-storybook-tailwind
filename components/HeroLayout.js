import React from "react";
import BtnPrimaryRoundedFull from "./BtnPrimaryRoundedFull";
import BtnOutlineRoundedFull from "./BtnOutlineRoundedFull";

const HeroLayout = (props) => {
    return (
        <div><div className="items-right absolute -right-20 -top-20"><img src="/hero-img-1x.png" width="70%" height="auto" /></div>
        <div className="w-7/12 items-start mt-32 ml-8">
                <div className="text-sm text-primary font-sans text-left">
                    {props.subHeading || "subHeading"}
                <div className="text-7xl text-white font-sans text-left">
                    {props.Heading || "Heading"}
                <div className="mb-12">
                <span className="space-x-4">
                    <BtnPrimaryRoundedFull buttonText={props.button1Text || "buttonText"} />
                    <BtnOutlineRoundedFull buttonText={props.button2Text || "buttonText"} />
                </span>
        </div>
        </div>
        </div>
        </div></div>
    );
};

export default HeroLayout;
