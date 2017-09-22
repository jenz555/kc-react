import React from 'react'
import ReactDOM from 'react-dom'

import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class Header extends React.Component {
    constructor() {
    super();
  }

  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
    $(el).removeClass("nav--hide");
  };


  render() {
    return (
      <div className="responsive__header global-header">
      <div className="flag flag--middle">
        <div className="flag__hd">
      
            <ul className="hList hList--middle">
                <li>
                    <a href="/">
                    <div className="header__logo"></div>
                    </a>
                  </li>
          
            </ul>
        </div>
        {/* <!-- Horizontal Navigation List --> */}
        <div className="flag__ft txt--align-right">
         
            <nav role="navigation">
             <ul id="toggle-nav-1" className="header__mobileUtil">
              <li>
                <button className="hamburger__container"  onClick={this.handleToggle}>
                <span id="hamburger-1" className="hamburger__navicon"></span>Menu
                </button>
              </li>
            </ul>
            </nav>
        </div>
      </div>
      {/* <!--Vertical Navigation List --> */}
  
        <div id="navMenu" >
          <div id="navMenu-vert-1" className="togglePanel nav--hide" ref="toggle">
            <nav role="navigation">
              <ul className="vList vList--piped navMenu--vert">

                <li><a className="txt nav__link nav--inpage--item" data-target="#section--1|-40">What is a Key Issue?</a></li>
                <li><a className="txt nav__link nav--inpage--item" data-target="#section--2|-40">Explore the App</a></li>
                <li><a className="txt nav__link nav--inpage--item" data-target="#section--3|-40">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
     
    </div>


 
    )
  }
}




export default Header
