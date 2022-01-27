import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import BtnPrimaryRoundedFull from "./BtnPrimaryRoundedFull";

export default function Header() {
    return (
        <header className="component-header">
        <div className="nav-div-1">
            <span className="nav-span-1"><img className="leftlogo" src="/logo.png" /></span>
            <span className="nav-span-2"><i className="material-icons right">menu</i></span>
        </div>
        </header>
    );
}
