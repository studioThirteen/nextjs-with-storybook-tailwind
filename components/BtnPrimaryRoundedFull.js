import React from "react";

export default function BtnPrimaryRoundedFull(props) {
    return (
        <button class="btn btn-primary rounded-full">
                {props.buttonText || "buttonText"}
        </button>
    );
}


