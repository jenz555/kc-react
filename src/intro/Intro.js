import React, { Component } from 'react';
import introPhone from './searchScreen_phone.png';
// imp
import ComingSoon from '../comingSoon/ComingSoon';


class Intro extends Component {
  render() {
    return (
      <div className="intro--bkg">
        <div className="isHidden isVisible--medium">


          <div className="wrapper vr">
            <div className="grid grid--centered grid--middle">
              <div className="grid__col grid__col--4of12--medium txt--align-right">
              <img src={introPhone} alt="App Start Screen" />

              
                {/* <ul className="hList">

                  <li> <DownloadBtn></DownloadBtn></li>
                  <li> <DownloadBtn></DownloadBtn></li>

                </ul> */}

              </div>
              <div className="grid__col grid__col--8of12--medium ">
              <h2 className="vr txt--weight-semibold txt--color-blue">Welcome to the origin of a better comic book collecting experience.</h2>
                <h3 className="vr txt--intro">The Key Collector Comic App has everything a comic book collector could ever want to build a legendary collection.</h3>
                
                
                <ComingSoon></ComingSoon>
                {/* <DownloadBtn></DownloadBtn> */}
              </div>
            </div>
          </div>
        </div>

        <div className="isHidden--medium">

          <div className="wrapper txt--align-center border--bottom vr">

          </div>
          <div className="wrapper vr">
            <div className="grid grid--centered grid--middle ">
              <div className="grid__col grid__col--8of12--medium">
                <h2 className="vr txt--align-center txt--align-center txt--weight-semibold txt--color-blue">Welcome to the origin of a better comic book collecting experience.</h2>
                <h3 className="vr txt--intro  txt--align-center">The Key Collector Comic App has everything a comic book collector could ever want to build a legendary collection.</h3>
                <ComingSoon></ComingSoon>
                {/* <DownloadBtn></DownloadBtn> */}
              </div>
              <div className="grid__col grid__col--4of12--medium txt--align-center">
                <img src={introPhone} alt="App Start Screen" />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Intro;
