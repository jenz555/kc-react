import React, { Component } from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Intro from './intro/Intro';
import DownloadBtn from './downloadBtn/DownloadBtn';
import Carousel from './carousel/Carousel';
import ExploreApp from './exploreApp/ExploreApp';
import Faq from './faq/Faq';
import Contact from './contact/Contact';
import Top from './top/Top';
import Footer from './footer/Footer';
import './App.css';

import ReactGA from 'react-ga';



class App extends Component {



  constructor() {
    super();
    this.state = {
      someData: null,
    };


    ReactGA.initialize('UA-106909493-1');
 
    ReactGA.pageview(window.location.pathname);
  }
  

  
  render() {

  
    return (
      <div className="animated fadeIn">
      <Header></Header>
        <Hero></Hero>
        <Intro></Intro>

        <hr/>
        {/* <Nav></Nav> */}
        <Carousel></Carousel>
        <Top></Top>
        <hr/>
        <ExploreApp></ExploreApp>
        <Faq></Faq>

        <Top></Top>
        <hr/>
        <Contact></Contact>
        <Top></Top>
        <Footer></Footer>

       
      </div>
    );
  }
}

export default App;
