import React, { Component } from 'react';
import downloadButton from './download.png';

class DownloadBtn extends Component {
  render() {
    return (
       <div className="btn--download">
           <img src={downloadButton} />
           </div>
    );
  }
}

export default DownloadBtn;
