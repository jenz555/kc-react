import React, { Component } from 'react';
import Slider from 'react-slick';
import robin from './deathOfRobin_comic.jpg';


class Carousel extends Component {
   

   render () {
      console.log('slider render');
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: true
        
    }
      return (
          <div className="wrapper wrapper--x2">
        <div className="txt txt--size-36 txt--color-brand--6 txt--weight-semibold vr txt--color-blue">What is a Key Issue?</div>
        <h3 className="vr">Since 1934, over 1 million individual comic book issues have been published. Less than 1% of that number is considered a "key issue".

One of the biggest problems facing collectors today is identifying and finding these highly sought after comics. Even expert collector's find it challenging to remember each and every key plus the pricing based on condition.</h3>
        <div className="container txt--align-center">
       	<Slider {...settings}>

          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          <div><img src={robin}/>Death of Robin</div>
          </Slider>
        </div>

        </div>
   

      )
    }
  }
export default Carousel;
