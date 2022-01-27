import Header from '../components/Header';
import HeroNFTContent from '../components/HeroNFTContent';
import OpenSea from '../components/OpenSea';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
    return (
      <>
      <Head>
        <html data-theme="synthwave" />
      </Head>
          <header className="w-screen"><Header /></header>
            <main>
                <HeroNFTContent />
              <div className="w-screen">
                <OpenSea />
              </div>
            </main>
          <div className="divider"></div>
          <footer className="w-screen bg-secondary-focus"><Footer /></footer>
      </>
    );
}
