import React from "react";
import Image from 'next/image'
import BtnPrimaryRoundedFull from "./BtnPrimaryRoundedFull"
import BtnOutlineRoundedFull from "./BtnOutlineRoundedFull"

const HeroLayout = (props) => {
    return (
        <>
        <section className="banner mt-14">
            <div class="hero-wrapper">
                <div id="hero-txt" className="text-primary font-sans text-left">
                    <h8>{props.subHeading || "subHeading"}</h8>
                <div id="hero-txt" className="text-white font-sans text-left">
                    <h7>{props.Heading || "Heading"}</h7>
                <div className="space-x-4">
                    <BtnPrimaryRoundedFull buttonText={props.button1Text || "buttonText"} />
                    <BtnOutlineRoundedFull buttonText={props.button2Text || "buttonText"} />
                </div></div></div></div>
        </section>
    
                <div style={{ position: "relative", width: "48%", height: "48%", top: "-38rem", right: "-42rem" }} >
  <Image
    src="/hero-img-1x.png" width="100%" height="100%"
    layout="responsive"
  />
</div>

</>
    )
};

export default HeroLayout;
