import React from 'react';
import { iframeResizer } from 'iframe-resizer'

export const ASSET_URL =
    "https://opensea.io/assets?embed=true";

const embeddedUrl = `${ASSET_URL}`

class OpenSea extends React.Component {

    componentDidMount() {
        iframeResizer({ log: false }, '#opensea-iframe')
    }

    render() {
        return (
            <main className="opensea-embed-main">
                <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedUrl} width="100%" height="100%" frameBorder='0' allowFullScreen></iframe>
            </main>
        );
    }
}

export default OpenSea
