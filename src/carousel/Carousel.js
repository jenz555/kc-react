import React, { Component } from 'react';
import Slider from 'react-slick';
import ScrollableAnchor from 'react-scrollable-anchor'
import robin from './deathOfRobin_comic.jpg';
import braniac from './braniac_comic.jpg';
import catman from './catman_comic.png';
import crimeStory from './crimeStory_comic.jpg';
import deadpool from './firstDeadpool_comic.png';
import silverSurfer from './silverSurfer_comic.jpg';

import artistComic from './artist_comic.png';
import batManGreenArrow from './batManGreenArrow_comic.png';
import suspense from './suspenseStories_comic.png';

class Carousel extends Component {
   

   render () {
      console.log('slider render');
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: true
        
    }
      return (
        <ScrollableAnchor id={'section1'}>
          <div className="wrapper wrapper--x2">
       <h2 className="txt txt--weight-semibold vr txt--color-blue">What is a Key Issue?</h2>
       <div className="isHidden isVisible--medium">
        <div className="txt txt--size-18 vr">First appearances, early appearances, origin stories, iconic cover art, classic stories and many other categories could be considered a “key issue”. The truth is, it is up to each individual collector to determine what a key comic book is based on their own preferences. Key Collector Comics mobile app  offers a variety of different categories of key issues in order to be an effective sidekick for every collector. </div>
        </div>
        <div className="isHidden--medium vr">
        <div className="container txt txt--size-14">
        First appearances, early appearances, origin stories, iconic cover art, classic stories and many other categories could be considered a “key issue”. The truth is, it is up to each individual collector to determine what a key comic book is based on their own preferences. Key Collector Comics mobile app  offers a variety of different categories of key issues in order to be an effective sidekick for every collector. 
          </div>
       
          </div>
       	<Slider {...settings}>

          <div><img src={robin} alt="Death of Robin Comic Cover"/><p className="txt txt--align-left">Death of Robin</p></div>
          <div><img src={braniac} alt="Recalled Cover"/><p className="txt txt--align-left">Recalled Cover</p></div>
          <div><img src={catman} alt="World War II Cover"/><p className="txt txt--align-left">WWII Cover</p></div>
          <div><img src={crimeStory} alt="Pre-Censorship Cover"/><p className="txt txt--align-left">Pre-Censorship</p></div>
          <div><img src={deadpool} alt="First Deadpool Issue Cover"/><p className="txt txt--align-left">First Deadpool</p></div>
          <div><img src={silverSurfer} alt="Iconic Cover"/><p className="txt txt--align-left">Iconic Cover</p></div>
          <div><img src={artistComic} alt="Celebrated Artis"/><p className="txt txt--align-left">Celebrated Artist</p></div>
          <div><img src={batManGreenArrow} alt="New Costume Introduced"/><p className="txt txt--align-left">New Costume</p></div>
          <div><img src={suspense} alt="Drug Issue"/><p className="txt txt--align-left">Drug Issue</p></div>
          </Slider>
        </div>


        </ScrollableAnchor>
   

      )
    }
  }
export default Carousel;
