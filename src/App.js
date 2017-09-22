import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header/Header';
import Hero from './hero/Hero';
import Intro from './intro/Intro';
import Nav from './nav/Nav';
import KeyIssue from './keyIssue/KeyIssue';
import ExploreApp from './exploreApp/ExploreApp';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="animated fadeIn">
      <Header></Header>
        <Hero></Hero>
        <Intro></Intro>
        {/* <Nav></Nav> */}
        <KeyIssue></KeyIssue>
        <ExploreApp></ExploreApp>
        <Contact></Contact>
        <Footer></Footer>
       
      </div>
    );
  }
}

export default App;
