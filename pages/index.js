import Header from '../components/Header';
import HeroNFTContent from '../components/HeroNFTContent';
import NFTCards from '../components/NFTCards';
import OpenSea from '../components/OpenSea';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
        <Header />
          <HeroNFTContent />
          <NFTCards />
          <OpenSea />
        <Footer />
        </>
    );
}
