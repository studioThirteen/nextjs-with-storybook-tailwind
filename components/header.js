import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo from './assets/logo.png';
import BtnPrimaryRoundedFull from "./BtnPrimaryRoundedFull";

export default function Header() {
    return (
        <header className="component-header">
            <img src={logo} className="component-logo" alt="logo" />
            <i className="material-icons right">menu</i>
        </header>
    );
}
