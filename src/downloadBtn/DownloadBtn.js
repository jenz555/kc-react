import React, { Component } from 'react';
import downloadButtonIos from './app-store-badge.png';
import downloadButtonGP from './gp-store-badge.png';

import ReactGA from 'react-ga';
import { OutboundLink } from 'react-ga';


class DownloadBtn extends Component {

  constructor() {
    super();
    this.state = {
      someData: null,
    };


    ReactGA.initialize('UA-106909493-1');

    ReactGA.pageview(window.location.pathname);
  }
  handleClickDownloadApp() {
    ReactGA.event({
      category: 'Explore App',
      action: 'Download iOs App',
    });
  }

  handleClickDownloadAppGp() {
    ReactGA.event({
      category: 'Explore App',
      action: 'Download GP App',
    });
  }
  render() {
    return (
      <div>
        <div className="isHidden isVisible--medium">


          <div className="flag">
            <div className="flag__hd btn--download">
              <a href="https://itunes.apple.com/us/app/key-collector/id1189623811?ls=1&mt=8" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickDownloadApp() }}>
                <img src={downloadButtonIos} />
              </a>

            </div>

            <div className="flag__bd btn--download">
              <a href="https://play.google.com/store/apps/details?id=com.keycollectorcomics.keycollector" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickDownloadAppGp() }}>
                <img src={downloadButtonGP} />
              </a>
            </div>


          </div>





        </div>

        <div className="isHidden--medium txt--align-center">


          <div className="grid">
            <div className="grid__col grid__col--12of12 btn--download-small">
              <a href="https://itunes.apple.com/us/app/key-collector/id1189623811?ls=1&mt=8" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickDownloadApp() }}>

                <img src={downloadButtonIos} />
              </a>

            </div>



          </div>

          <div className="grid">
            <div className="grid__col grid__col--12of12 btn--download-small">
              <a href="https://play.google.com/store/apps/details?id=com.keycollectorcomics.keycollector" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickDownloadAppGp() }}>

                <img src={downloadButtonGP} />
              </a>
            </div>


          </div>

        </div>





      </div>


    );
  }
}

export default DownloadBtn;
