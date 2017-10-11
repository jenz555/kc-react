import React, { Component } from 'react';
import DownloadBtn from '.././downloadBtn/DownloadBtn';
import circleLogo from './kcLogo_noTitle.png';


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

        <div className="grid grid--middle">
        <div className="grid__col grid__col--6of12--medium txt--color-white">
        <h3 className="txt--weight-semibold txt--color-purple">Download the Key Collector Comics App Today</h3>
                  <h4 className="vr">Never let a key issue slip through your fingers again.</h4>
                   <DownloadBtn></DownloadBtn> 
                  
                  <ul className="vList vList--tight">
                  <li  className="border--bottom vr"></li> 
                    <li>FEEDBACK, INQUIRIES, SUGGESTIONS</li>
                   
                    <li>Nick Coglianese</li>
                    <li>847.212.1833</li>
                    <li><a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20" className="txt txt--color-white">nick@keycollectorcomics.com</a></li>

                          </ul>
    
            </div>

            <div className="grid__col grid__col--6of12--medium">

            <div className="txt--align-center">
              <img src={circleLogo} alt="Key Collector Logo" className="footer__logo" />
           


            <nav role="navigation" className="vr">
    
              <ul className="hList">
              <a href="https://www.instagram.com/keycollectorcomics/" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickInsta() }}>
                <li className="fa fa-instagram fa-inverse fa-3x"></li>
                </a>
                <a href="https://twitter.com/key_collect" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickTwitter() }}>
                <li className="fa fa-twitter  fa-inverse fa-3x"></li>
                </a>
                <a href="https://www.facebook.com/keycollector/" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickFC() }}>
                <li className="fa fa-facebook fa-inverse fa-3x"></li>
                </a>
              </ul>
            </nav>
          </div>

            </div>
           
            </div>


        
        </div>

      </footer>
    );
  }
}

export default Footer;
