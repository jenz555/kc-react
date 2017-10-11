import React, { Component } from 'react';
import DownloadBtn from '../downloadBtn/DownloadBtn';
import introPhone from './intro_phone.png';
import downloadButtonIos from '../downloadBtn/app-store-badge.png';
// imp
import ComingSoon from '../comingSoon/ComingSoon';

class Intro extends Component {

  render() {
    return (
      <div className="intro--bkg">
        <div className="isHidden isVisible--medium">


          <div className="wrapper vr">
            <div className="grid grid--centered">
              <div className="grid__col grid__col--4of12--medium txt--align-center">
                <img src={introPhone} alt="App Start Screen" />


               
              </div>
              <div className="grid__col grid__col--8of12--medium ">
                <h2 className="vr txt--weight-semibold txt--color-blue">The origin of a better comic book collecting experience starts here</h2>
                <p className="txt txt--size-18">Key Collector Comics hosts over 7,000 key issue comic books extracted from the Golden Age of the 1930s to today. The Key Collector Comics database is a  concise and comprehensive resource that isolates issues of significance from the clutter of uneventful comics.</p>

                <p className="txt txt--size-18">Additionally, the Key Collector Comics mobile app is equipped with a simplified price guide to help you make informed purchases without being an expert in grading the condition of a comic.</p>
            
                <p className="txt txt--size-18">Having the ability to catalogue the issues you own and create a wish list of the issues you want makes the Key Collector Comics app the only thing you need to build a legendary collection.</p>
                   <DownloadBtn></DownloadBtn> 
                  
                <p className="txt txt--size-18">For a limited time only, download the Key Collector Comics mobile app for free.</p>
                <p className="txt txt--size-18 txt--style-italic">* available October 5th, 2017</p>
             
             
              
                
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
                <h2 className="vr txt--align-center txt--align-center txt--weight-semibold txt--color-blue">The origin of a better comic book collecting experience starts here</h2>
                <p className="txt txt--size-14">Key Collector Comics hosts over 7,000 key issue comic books extracted from the Golden Age of the 1930s to today. The Key Collector Comics database is a  concise and comprehensive resource that isolates issues of significance from the clutter of uneventful comics.</p>

                <p className="txt txt--size-14">Additionally, the Key Collector Comics mobile app is equipped with a simplified price guide to help you make informed purchases without being an expert in grading the condition of a comic.</p>

                <p className="txt txt--size-14">Having the ability to catalogue the issues you own and create a wish list of the issues you want makes the Key Collector Comics app the only thing you need to build a legendary collection.</p>

                <p className="txt txt--size-14">For a limited time only, download the Key Collector Comics mobile app for free.</p>
                <p className="txt txt--size-14">*available October 5th, 2017</p>
                <DownloadBtn></DownloadBtn>
              
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
