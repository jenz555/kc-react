import React, { Component } from 'react';
import DownloadBtn from '.././downloadBtn/DownloadBtn';

import ReactGA from 'react-ga';


class Footer extends Component {

  handleClickInsta() {
    ReactGA.event({
      category: 'Footer',
      action: 'Instagram',
    });
  }

  handleClickTwitter() {
    ReactGA.event({
      category: 'Footer',
      action: 'Twitter',
    });
  }

  handleClickFC() {
    ReactGA.event({
      category: 'Footer',
      action: 'Facebook',
    });
  }
  render() {
    return (
      <footer className="page__footer box box--blue">
        <section>

          <div className="wrapper vr--x2">

           
          </div>

        </section>
        <div className="wrapper">
          <div className="txt--align-center">
            <nav role="navigation" className="vr">
    
              <ul className="hList">
              <a href="https://www.instagram.com/keycollectorcomics/" target="_blank" onClick={() => { this.handleClickInsta() }}>
                <li className="fa fa-instagram fa-inverse fa-3x"></li>
                </a>
                <a href="https://twitter.com/key_collect" target="_blank" onClick={() => { this.handleClickTwitter() }}>
                <li className="fa fa-twitter  fa-inverse fa-3x"></li>
                </a>
                <a href="https://www.facebook.com/keycollector/" target="_blank" onClick={() => { this.handleClickFC() }}>
                <li className="fa fa-facebook fa-inverse fa-3x"></li>
                </a>
              </ul>
            </nav>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
