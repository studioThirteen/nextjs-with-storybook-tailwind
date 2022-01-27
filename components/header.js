import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Navigation from '../components/navigation';
import WalletConnect from '../components/walletconnect';

export default function Header() {
    return (
        <>
        <Head>
            <html data-theme="studio13" />
        </Head>     
        <header class="w-screen">
            <Container>
                <div class="flex flex-row md:flex-column justify-between items-center w-full px-8 pt-8 pb-10">
                    <div class="flex-none w-64 items-start">
                        <img class="h-full sm:ml-8 sm:pr-8" src="/headerlogo-1x.png" alt="studioThirteen" />
                    </div>
                    <div class="flex flex-row md:flex-column w-min items-center">
                        <Navigation links={links} />
                    </div>
                    <div class="flex-initial w-64 items-end">
                        <WalletConnect />
                    </div>
                </div>
            </Container>
        </header>
        </>
    );
}