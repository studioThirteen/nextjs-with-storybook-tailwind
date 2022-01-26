import React from "react";

export default function BtnPrimaryRoundedFull(props) {
    return (
        <div className="button-primary-rounded">
            <span className="button-primary-text">
                {props.buttonText || "buttonText"}
            </span>
        </div>
    );
}


