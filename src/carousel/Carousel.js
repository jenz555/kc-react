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
        <div className="txt vr">Since 1934, over 1 million individual comic book issues have been published. Less than 1% of that number is considered a "key issue".

One of the biggest problems facing collectors today is identifying and finding these highly sought after comics. Even expert collector's find it challenging to remember each and every key plus the pricing based on condition.</div>
        <div className="container txt txt--size-12 txt--align-center">
       	<Slider {...settings}>

          <div><img src={robin}/><p className="txt txt--align-left">Death of Robin</p></div>
          <div><img src={braniac}/><p className="txt txt--align-left">Recalled Cover</p></div>
          <div><img src={catman}/><p className="txt txt--align-left">WWII Cover</p></div>
          <div><img src={crimeStory}/><p className="txt txt--align-left">Pre-Censorship</p></div>
          <div><img src={deadpool}/><p className="txt txt--align-left">First Deadpool</p></div>
          <div><img src={silverSurfer}/><p className="txt txt--align-left">Iconic Cover</p></div>
          <div><img src={artistComic}/><p className="txt txt--align-left">Celebrated Artist</p></div>
          <div><img src={batManGreenArrow}/><p className="txt txt--align-left">New Costume</p></div>
          <div><img src={suspense}/><p className="txt txt--align-left">Drug Issue</p></div>
          </Slider>
        </div>

        </div>
        </ScrollableAnchor>
   

      )
    }
  }
export default Carousel;
