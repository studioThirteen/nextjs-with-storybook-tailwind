import React from "react";

export default function BtnPrimaryRoundedFull(props) {
    return (
        <button className="btn btn-primary rounded-full">
                {props.buttonText || "buttonText"}
        </button>
    );
}


