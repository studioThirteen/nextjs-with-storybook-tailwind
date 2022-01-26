import React from 'react';
import logo from './assets/logo.png';
import './styles/opensea.css';
import footer from './assets/footer.png';
import { iframeResizer } from 'iframe-resizer'

export const ASSET_URL =
    "https://opensea.io/assets/0x1301566b3cb584e550a02d09562041ddc4989b91/28";

module.exports.EmbedTheme = {
    Default: "true",
    Simple: "simple",
}

export const CHOSEN_THEME = EmbedTheme.Default;

const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`

class OpenSea extends React.Component {

    componentDidMount() {
        iframeResizer({ log: false }, '#opensea-iframe')
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>

                    </p>
                    <i className="material-icons right">menu</i>
                </header>
                <main className="App-main">
                    <div className="App-hero">
                        <div className="App-hero-image"></div>
                        <p>
                            My Marketplace
                        </p>
                        <small>Digital collectibles from my company</small>
                    </div>
                    <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedUrl} width='100%' height='100%' frameBorder='0' allowFullScreen></iframe>
                </main>
                <footer className="App-footer">
                    {/* Placeholder image for footer */}
                    <img style={{ width: '100%' }} src={footer} className="footer" alt="footer" />
                </footer>
            </div>
        );
    }
}

export default OpenSea;