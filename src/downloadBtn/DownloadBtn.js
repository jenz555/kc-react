import React, { Component } from 'react';
import downloadButtonIos from './downloadAppStore.png';
import downloadButtonGoogle from './downloadGoogle.png';

class DownloadBtn extends Component {
  render() {
    return (
      <div>
      <div className="isHidden isVisible--medium">
      <div className="flag btn--download">
        <div className="flag__hd">
          <a href="">
          <img src={downloadButtonIos} />
          </a>
        </div>
        <div className="flag__bd">
        <a href="">
          <img src={downloadButtonGoogle} />
          </a>
        </div>

      </div>
      </div>

<div className="isHidden--medium">
  <div className="grid grid--centered">

  <div className="grid__col grid__col--5of12">
  <a href="">
          <img src={downloadButtonIos} />
          </a>
    </div>

    <div className="grid__col grid__col--5of12">
    <a href="">
    <img src={downloadButtonGoogle} />
          </a>
    </div>

    </div>


  </div>

  </div>

    );
  }
}

export default DownloadBtn;
