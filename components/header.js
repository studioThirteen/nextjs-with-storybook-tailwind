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


<div className="w-screen">
    <Container>
        <div className="flex items-center font-open-sans justify-between h-24 w-full">
            <div className="flex h-full justify-between items-center">
                <div className="hidden sm:flex pt-2 h-full w-32">
                    <picture>
                        <source srcSet={webpSrc} type="image/webp" />
                        <source srcSet={imgSrc} type="image/jpeg" />
                        <img
                            src={imgSrc}
                            alt="Mike Wallis headshot"
                            className="h-full sm:ml-8 sm:pr-8"
                        />
                    </picture>
                </div>
                <div className="w-10/12">
                    <h1 className="text-2xl sm:text-3xl font-light font-lato">Wallis Family Mediation</h1>
                    <p className="text-gray-333 text-sm">
                        A
                        <em className="text-black"> personal </em>
                        service from a retired senior banker and family magistrate
                    </p>
                </div>
            </div>
            <Navigation links={links} />
        </div>
    </Container>
</div>