import React, { Component } from 'react';
import downloadButtonIos from './app-store-badge.png';




class DownloadBtn extends Component {
  render() {
    return (
      <div>
      <div className="isHidden isVisible--medium">
        
          <img src={downloadButtonIos} />



      </div>

<div className="isHidden--medium txt--align-center">


          <img src={downloadButtonIos} />
        
    </div>





  </div>


    );
  }
}

export default DownloadBtn;
