import React, { Component } from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import Intro from './intro/Intro';
import Carousel from './carousel/Carousel';
import ExploreApp from './exploreApp/ExploreApp';
import Faq from './faq/Faq';
import Contact from './contact/Contact';
import Top from './top/Top';
import Footer from './footer/Footer';
import './App.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-106838773-1');

class App extends Component {



  constructor() {
    super();
    this.state = {
      someData: null,
    };
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
