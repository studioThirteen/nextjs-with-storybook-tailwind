import React from 'react';
import { iframeResizer } from 'iframe-resizer'

export const ASSET_URL =
    "https://opensea.io/assets/0x1301566b3cb584e550a02d09562041ddc4989b91/28&theme=dark";

const embeddedUrl = `${ASSET_URL}`

class OpenSea extends React.Component {

    componentDidMount() {
        iframeResizer({ log: false }, '#opensea-iframe')
    }

    render() {
        return (
            <main className="opensea-embed-main">
                <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedUrl} frameBorder='0' allowFullScreen></iframe>
            </main>
        );
    }
}

export default OpenSea
