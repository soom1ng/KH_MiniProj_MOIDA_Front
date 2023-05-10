import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import StoryIntro from "../../Images/StoryIntro.png";
import MyPageIntro from "../../Images/MyPageIntro.png";
import LoungeIntro from "../../Images/LoungeIntro.png";


const StyledSlider = styled(Slider)`
    .slick-dots li button:before
{
    font-family: 'slick'; 

    position: absolute;
    top: 0;
    left: 0;

    width:10px;
    height: 10px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: #adadad;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: 1;
    color: #6b4efe;
}
img {
  width: 1200px;
  height: 400px;
}
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed : 3000
    };
    return (
      <div>
        <StyledSlider {...settings}>
          <div className="img">
            <img src={StoryIntro}/>
          </div>
          <div className="img">
          <img src={MyPageIntro}/>
          </div>
          <div className="img">
          <img src={LoungeIntro}/>
          </div>
        </StyledSlider>
      </div>
    );
  }
}