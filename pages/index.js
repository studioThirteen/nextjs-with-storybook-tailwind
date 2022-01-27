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
          <header class="w-screen"><Header /></header>
            <main>
              <div class="w-screen">
                <HeroNFTContent />
                </div>
              <div class="w-screen">
                <OpenSea />
              </div>
            </main>
          <div class="divider"></div>
          <footer class="w-screen bg-primary-focus"><Footer /></footer>
      </>
    );
}
