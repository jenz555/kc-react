import React, { Component } from 'react';
import circleLogo from './kc_circle_logo.png';
import text from './kc_Title.svg';

class Hero extends Component {
  render() {
    return (

      <div className="hero vr">

        <img src={circleLogo} />
        <div > <img src={text} className="hero__logoText" /></div>
      </div>
    );
  }
}

export default Hero;
