import React, { Component } from 'react';
import heroMan from './heroMan.png';
import heroManKey from './heroKey.png';

class Hero extends Component {
  render() {
    return (
      <div>
      
       <div className="isHidden isVisible--medium">
          <div className="hero vr">
            <div className="wrapper relative">
              <div className="grid">
                <div className="grid__col grid__col--9of12--medium">
                  <div className="txt--color-white">
                    <div className="txt--size-24 hero__content vr">Introducing</div>
                    <div className="hero__title txt--weight-bold absolute vr">KEY COLLECTOR COMICS</div>

                    <div className="txt--size-24 hero__content absolute">The World’s First Key Issue Database and Price Guide Available on your Mobile Device</div>
                  </div>
                </div>

                <div className="heroMan__container grid__col grid__col--3of12--medium">

                  <div className="heroMan">
                    <img src={heroMan} className="animated slideInRight" />
                  </div>
                  <div className="heroManKey">
                    <img src={heroManKey} className="animated" alt="Key Collector Logo"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="isHidden--medium">

        <div className="hero--tablet txt--color-white txt--align-center">
          <div className="wrapper">
            <div className="grid">
              <div className="grid__col grid__col--12of12--medium">
              <div className="txt--color-white ">
              <h2 className="">Introducing</h2>
                  <div className="hero__title txt--weight-bold">KEY COLLECTOR COMICS</div>
                </div>
                  <div className="txt--size-18">The World’s First Key Issue Database and Price Guide Available on your Mobile Device</div>           
              </div>

            
            </div>
          </div>
          <div className="heroMan__container grid__col grid__col--12of12--medium">

                <div className="heroMan--small">
                  <img src={heroMan} className="animated fadeIn" />
                </div>
                <div className="heroManKey--small">
                  <img src={heroManKey} className="animated fadeIn" alt="Key Collector Logo"/>
                </div>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Hero;
