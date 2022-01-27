import React from "react";

export default function BtnOutlineRoundedFull(props) {
    return (
        <button class="btn btn-outline rounded-full">
                {props.buttonText || "buttonText"}
        </button>
    );
}

