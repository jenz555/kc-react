import React, { Component } from 'react';
import DownloadBtn from '.././downloadBtn/DownloadBtn';



class Footer extends Component {
  render() {
    return (
      <footer className="page__footer box box--blue">
        <section>

          <div className="wrapper vr--x2">

           
          </div>

        </section>
        <div className="wrapper">
          <div className="txt--align-center">
            <nav role="navigation" className="vr">
            <ul className="hList">
             
               
              </ul>
              <ul className="hList">
                <li className="fa fa-instagram fa-inverse fa-3x"></li>
                <li className="fa fa-twitter  fa-inverse fa-3x"></li>
                <li className="fa fa-facebook fa-inverse fa-3x"></li>
              </ul>
            </nav>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
