import React from "react";
import Image from "next/image";
import BtnPrimaryRoundedFull from "./BtnPrimaryRoundedFull";
import BtnOutlineRoundedFull from "./BtnOutlineRoundedFull";

const HeroLayout = (props) => {
    return (
        <div className="hero-div">
            <div className="hero-img"><img className="hero-img" src="/nft-art.svg" /></div>
                <span className="hero-heading">
                <span className="hero-subheading">
                    {props.subHeading || "subHeading"}
                </span>
                {props.Heading || "Heading"}
            </span>
            <span className="hero-buttons">
                <BtnPrimaryRoundedFull buttonText={props.button1Text || "buttonText"} />
                <BtnOutlineRoundedFull buttonText={props.button2Text || "buttonText"} />
            </span>
        </div>
    );
};

export default HeroLayout;
