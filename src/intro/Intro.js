import React, { Component } from 'react';
import introPhone from './searchScreen_phone.png';
import DownloadBtn from '.././downloadBtn/DownloadBtn';


class Intro extends Component {
  render() {
    return (
      <div>
        <div className="isHidden isVisible--medium">
          <div className="wrapper vr--x3">
            <hr />
            <h1 className="txt--color-blue txt--align-center txt--weight-semibold">The world’s first key issue database and price guide available on your mobile device.</h1>
            <hr />
            <div className="grid grid--centered">
              <div className="grid__col grid__col--8of12--medium">

                <h2 className="vr txt--weight-semibold">Welcome to the origin of a better comic book collecting experience.</h2>
                <h3 className="vr txt--intro">The Key Collector Comic App has everything a comic book collector could ever want to build a legendary collection.</h3>

                <DownloadBtn></DownloadBtn>
              </div>

              <div className="grid__col grid__col--4of12--medium txt--align-right">
                <img src={introPhone} />
              </div>

            </div>

          </div>
        </div>

        <div className="isHidden--medium">
          <div className="wrapper vr--x3">
            <hr />
            <h1 className="txt--color-blue txt--align-center txt--weight-semibold">The world’s first key issue database and price guide available on your mobile device.</h1>
            <hr />
            <div className="grid grid--centered">
              <div className="grid__col grid__col--12of12--medium txt--align-center">

                <h2 className="vr txt--weight-semibold">Welcome to the origin of a better comic book collecting experience.</h2>
                <h3 className="vr txt--intro">The Key Collector Comic App has everything a comic book collector could ever want to build a legendary collection.</h3>

              </div>




            </div>

            <div className="grid grid--centered">
              <div className="grid__col grid__col--12of12--medium txt--align-center">

                <DownloadBtn></DownloadBtn>
                <div className="vr"></div>
                <img src={introPhone} />
              </div>

            </div>

          </div>


        </div>

      </div>
    );
  }
}

export default Intro;
