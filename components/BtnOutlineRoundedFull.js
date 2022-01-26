import React from "react";

export default function BtnOutlineRoundedFull(props) {
    return (
        <div className="button-outline-rounded">
            <span className="button-outline-text">
                {props.buttonText || "buttonText"}
            </span>
        </div>
    );
}

