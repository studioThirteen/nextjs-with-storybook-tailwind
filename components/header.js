import React from 'react';
import Head from 'next/head';

export default function Header() {
    return (
        <>
        <Head>
            <html data-theme="studio13" />
        </Head>
        <header className="component-header">
        <div className="nav-div-1">
            <span className="nav-span-1"><img className="leftlogo" src="/logo.png" /></span>
            <span className="nav-span-2"><i className="material-icons right">menu</i></span>
        </div>
        </header>
        </>
    );
}
