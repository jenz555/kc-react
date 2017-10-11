import React, { Component } from 'react';
import { OutboundLink } from 'react-ga';

var ReactGA = require('react-ga');

class OutboundLinkTwitter extends Component {

    render() {
        return (
          <div>
            <ReactGA.OutboundLink
              eventLabel="Twitter" eventCategory="header"
              to="https://twitter.com/key_collect"
              target="_blank">
              <li className="fa fa-twitter fa-inverse fa-2x"></li>
            </ReactGA.OutboundLink>
          </div>
        );
      }


}

export default OutboundLinkTwitter;
