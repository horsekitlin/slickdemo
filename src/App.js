import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick'
class App extends Component {
  componentDidMount() {
    this.refs.hello.addEventListener('mousemove', () => this.console('mouse move'));
    this.refs.hello.addEventListener('click', () => this.console('mouse click'));
    this.refs.hello.addEventListener('mouseup', () => this.console('mouse up'));
  }
  console(str) {
    console.log(str);
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings} >
          <div><a ref="hello"><h1>1</h1></a></div>
        </Slider>
      </div>
    );
  }
}

export default App;
