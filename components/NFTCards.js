import Image from 'next/image';
import image_url from "../pages/api/nft";

const NFTCards = ({ nft, showImage }) => {
  if (!nft) return "The nft wasn't found!"

  const { lastprice, nftname, image_url, description } = nft

  const Image = showImage ? (<img className="w-24 h-24 rounded-full mx-auto md:flex md:self-center"
    src={image_url} alt="A beautiful cat" width="200" height="200" />) : ''

  return (
      <div className="w-96 mx-auto">
      <div className="h-screen flex items-center">
        <figure className="lg:flex bg-gray-200 rounded-xl p-8 lg:p-4">
          {Image}
          <div className="pt-6 lg:p-4 text-center lg:text-left space-y-4">
            <p className="text-lg font-semibold">{description}</p>
            <figcaption className="font-medium">
              <div className="text-blue-600">{nftname}</div>
              <div className="text-gray-500">{lastprice}</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  )
}

NFTCards.defaultProps = {
  showImage: true
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/nft')
  const data = await response.json()

  if (!data) return { props: {} }

  return {
    props: {
      nft: data
    }
  }
}

export default NFTCards

