import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'


class Contact extends Component {
   

  render() {


    return (

      <ScrollableAnchor id={'section4'}>
      <section id="section--3">
        <div className="wrapper">
        <h2 className="txt txt--weight-semibold vr txt--color-blue">Contact Key Collector Comics</h2>
          <p>Did we miss a key issue? Let us know - send us an email directly to <a href="mailto:nick@keycollectorcomics.com?subject=KeyCollector App Feedback">nick@keycollectorcomics.com</a>. If we add it, we’ll give you a permanent shout-out on the site</p>
          <p>Please send us feedback, suggestions, compliments or errors in the database.</p>

          <form method="post" name="emailForm" action="https://formspree.io/nick@keycollectorcomics.com">
                        <div className="grid">
                          <div className="grid__col grid__col--6of12">
                            <div className="field">
                              <label htmlFor="name" className="label">Full Name:</label>
                              
                              <input type="text" id="name" name="name" className="input" required="" />
                              
                            </div>

                          </div>
                          <div className="grid__col grid__col--6of12">
                            <div className="field">
                              <label htmlFor="email" className="label">Email:</label>
                              <input type="email" id="email" name="email" className="input" required="" />
                            </div>
                          </div>
                        </div>

                        <div className="field">
                          <label htmlFor="message" className="label">Message:</label>
                          <textarea id="message" name="message" className="input--textarea" required=""></textarea>
                        </div>
                        
                        <div className="field vr">
                          <button type="submit" className="btn" value="Send Message">Send</button>
                        </div>
                      </form>
        </div>
      </section>
      </ScrollableAnchor>
    );
  }
}

export default Contact;
