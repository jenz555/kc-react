import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Collapsible from 'react-collapsible';
import ReactGA from 'react-ga';
const questions = [
  `How do I download Key Collector Comics?`,
  `How much does it cost to download the Key Collector Comics mobile app?`,
  `Where did you get all of the information for the database?`,
  `How do you determine the value of a comic?`,
  `Can I use your database for my own project?`,
  `I found a bug (a functionality issue with how the app operates) in the Key Collector Comics app. Where should I report it?`,
  `What's the best way to use Key Collector Comics mobile app?`,
  `I have a suggestion to improve the app - who do I tell?`,
  `What is your definition of a "key issue"?`,
  `Would you like to know if the app is missing a key issue?`,
];
const listItemsQuestions = questions.map((question) =>
  <li>{question}</li>
);


const website = 'www.keycollectorcomics.com';
const emailAddress = 'nick@keycollectorcomics.com';
const websiteLink = `<a href="www.keycollectorcomics.com" target="blank">${website}
</a>
`;




class Faq extends Component {
  handleClickDownloadApp() {
    ReactGA.event({
      category: 'Faq',
      action: 'Download App',
    });
  }
  
  render() {
    return (
      <ScrollableAnchor id={'section3'}>
      <div className="wrapper vr--x2">
                <h2 className="txt txt--weight-semibold vr txt--color-blue">FAQs</h2>
        <Collapsible trigger={questions[0]}>
        <p>
        Key Collector Comics mobile app is available for download in the <a href="https://itunes.apple.com/us/app/key-collector/id1189623811?ls=1&mt=8" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickDownloadApp()}}>Apple iTunes store</a> and Google Play store for Android or clicking on the Apple and Google option on keycollectorcomics.com landing page.  We hope you download the app and let us know your thoughts. Please email <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a> or send feedback through the app (accessed by tapping "Account")
        </p>
      </Collapsible>

      <Collapsible trigger={questions[1]}>
      <p>
      Key Collector Comics is available free of charge on your Apple iPhone through <a href="https://itunes.apple.com/us/app/key-collector/id1189623811?ls=1&mt=8" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickDownloadApp()}}>Apple iTunes</a> or your Android phone downloadable in the Google Play store. We sincerely hope you like the app and would love your feedback. Please email <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a> or send feedback through the app (accessed by tapping "Account")
      </p>
    </Collapsible>
    <Collapsible trigger={questions[2]}>
      <p>The Key Collector Comics database is the result of 2,500 hours of cross-referencing nearly 100 different sources from the actual comic books that contain these key issue instances to researching the history of the comic book medium in libraries and online.  
      </p>
    </Collapsible>
    <Collapsible trigger={questions[3]}>
      <p>
      Key Collector Comics mobile app utilizes data found on the web pertaining to recent sales of raw comics over a 365 day period. The Key Collector Comics price guide is meant to be used only as a suggested entertainment resource and cannot be held accountable for comic book transactions. With the legalities out of the way, we encourage you to let us know if you see a price that is far off its mark.  Please contact us: <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a> or send feedback through the app (accessed by tapping "Account")
      </p>
    </Collapsible>
    <Collapsible trigger={questions[4]}>
      <p>We will not allow our database to be copied in any way or used elsewhere for profit or non-profit.  Key Collector Comics database is officially copyrighted by the U.S. government copyright office.  </p>
    </Collapsible>
    <Collapsible trigger={questions[5]}>
      <p className="txt">
      We would greatly appreciate you dropping us a note and letting us know. There are multiple ways to contact us.  Email: <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a>. Submit feedback in the app: Tap "Account" then tap "Send Feedback" and follow the instructions. You can also reach us on social media: <a href="">Instagram @keycollectorcomics</a> or <a href="">facebook.com/keycollector</a> or <a href="">Twitter @key_collect</a>
      </p>
    </Collapsible>
    <Collapsible trigger={questions[6]}>
      <p>Key Collector Comics mobile app offers three ways to search for key issues. "Search by Title" if you are flipping through many comics in a series and want to know which issues are of value or contain a significant event. "Search by Character" to view a chronological timeline of a hero or villain's history starting from his or her 1<sup>st</sup> appearance</p>
    </Collapsible>
    <Collapsible trigger={questions[7]}>
      <p>We encourage any and all constructive criticism, ideas, praise and any other communication from the comic book community.  Please reach out to <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a> or send feedback through the app (accessed by tapping "Account") and let's brainstorm some ideas together. Key Collector Comics was created by comic book collectors FOR comic book collectors so it is as much yours as it is ours.</p>
    </Collapsible>
    <Collapsible trigger={questions[8]}>
      <p>Key Collector Comics' database is comprised of many types of key issues to suit an array of collector's interests. Some examples are: superhero 1<sup>st</sup> appearances and other milestones, iconic cover art, writer and artist industry debuts, comics of historical significance, World War II stories and art, recalled issues, scarce issues, golden age issues, controversial comics and many other categories are organized in such a way to help personalize your experience.  Currently there are filters available to minimize the time frame of your search by comic book Age (i.e., Golden Age, Silver Age etc.). We plan to add more filters to help consolidate your experience to what you want to see and would love your input on suggestions. Please email <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a>and we'll start a discussion.</p>
    </Collapsible>
    <Collapsible trigger={questions[9]}>
      <p>Absolutely! The Key Collector Comics database is a labor of over 18 months and 2,500 hours with a lot of effort made to cross-reference each entry to get you the most accurate information that's available anywhere in the world. With that being said, it is quite possible we've missed a few issues.  Please email <a href="mailto:nick@keycollectorcomics.com?subject=Key%20Collector%20Comics%20">nick@keycollectorcomics.com</a> or send feedback through the app (accessed by tapping "Account"). We'll give you a shoutout for the assist on our social media: <a href="">Instagram @keycollectorcomics</a> or <a href="">facebook.com/keycollector</a> or <a href="">Twitter @key_collect</a></p>
    </Collapsible>


      
           </div>
           </ScrollableAnchor>
      // <div className="wrapper vr">
      //                       <h2 className="txt txt--weight-semibold vr txt--color-blue">FAQ's</h2>

      //   <ul>{listItemsQuestions[0]}</ul>
      //   <ul>{listItemsAnswers[0]}</ul>
   
      // </div>
    );
  }
}

export default Faq;
