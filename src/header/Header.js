import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import OutboundLinkTwitter from '../outboundLinkTwitter/OutboundLinkTwitter'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import ReactGA from 'react-ga';
import { OutboundLink } from 'react-ga';


class Header extends React.Component {

  handleClickKey() {
    ReactGA.event({
      category: 'Navigation',
      action: 'What is Key Issue',
    });
  }

  handleClickExplore() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Explore the App',
    });
  }

  handleClickFaq() {
    ReactGA.event({
      category: 'Navigation',
      action: 'FAQ',
    });
  }

  handleClickContact() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Contact',
    });
  }


  handleClickFC() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Facebook',
    });
  }


  handleClickInsta() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Instagram',
    });
  }


  handleClickTwitter() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Twitter',
    });
  }


  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
    $(el).removeClass("nav--hide");

  };


  render() {
    return (
      <ScrollableAnchor id={'top'}>
        <div className="responsive__header global-header">
          <div className="flag flag--middle">
            <div className="flag__hd">

            <ul className="hList">
            <a href="https://www.instagram.com/keycollectorcomics/" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickInsta() }}>
              <li className="fa fa-instagram fa-inverse fa-2x"></li>
              </a>
             <OutboundLinkTwitter>
              <li className="fa fa-twitter fa-inverse fa-2x"></li>
             </OutboundLinkTwitter>
              <a href="https://www.facebook.com/keycollector/" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickFC() }}>
              <li className="fa fa-facebook fa-inverse fa-2x"></li>
              </a>
            </ul>
            </div>
            {/* <!-- Horizontal Navigation List --> */}
            <div className="flag__ft txt--align-right">

              <nav role="navigation">
                <ul id="toggle-nav-1" className="header__mobileUtil">
                  <li>
                    <button className="hamburger__container" ref="hamburger" onClick={this.handleToggle}>
                      <span id="hamburger-1" className="hamburger__navicon"></span>Menu
                </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <!--Vertical Navigation List --> */}

          <div id="navMenu" >
            <div className="navMenu--vert nav--hide" ref="toggle">
              <nav role="navigation">
                <ul className="vList vList--piped navMenu--list">

                  <li><a href='#section1' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickKey() }}>What is a Key Issue?</a></li>
                  <li><a href='#section2' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickExplore() }}>Explore the App</a></li>
                  <li><a href='#section3' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickFaq() }}>FAQs</a></li>
                  <li><a href='#section4' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickContact() }}>Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </ScrollableAnchor>


    )
  }
}




export default Header
