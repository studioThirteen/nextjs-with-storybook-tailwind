import Header from '../components/header';
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
          <Header />
          <HeroNFTContent />
          <OpenSea />
          <div className="divider"></div>
          <Footer />
      </>
    );
}
