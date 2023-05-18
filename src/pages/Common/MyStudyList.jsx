import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyStudyBlock } from "./MyStudyBlock";



export const MyStudyList = () => {


  return (
    <div className="StudyList">
      <h1 className="title_my">나의 스터디 📚</h1>

      <StyledSlider {...settings}>

        <MyStudyBlock isNew={1} />
        <MyStudyBlock />
        <MyStudyBlock />
        <MyStudyBlock />


      </StyledSlider>
    </div>
  );
}

//슬라이드 설정

const settings = {
  dots: true, // 점보이게
  // infinite: true,
  // autoplay: true,
  speed: 500,
  autoplayspeed: 0, // 넘어가는 속도
  slidesToShow: 3, // 보이는 갯수
  slidesToScroll: 3, // 넘어가는 갯수
  // centerMode: true, // 슬라이드 시작점 중앙 설정
  centerPadding: '0px', // 0px 일 때, 슬라이드 끝쪽 이미지가 잘리지 않음
  // arrows: true,
  // pauseOnHover: true,
  // prevArrow : "<Button type='button' class='slick-prev'> Previous </Button>",		// 이전 화살표 모양 설정
  // nextArrow : "<Button type='button' class='slick-next'> Next </Button>"
};

// 슬라이드 CSS
const StyledSlider = styled(Slider)`
  /* margin-left: 19%;
  width: 60%;
  text-align: center; */

  .slick-list {
    overflow: hidden;
    height: 15.5vw;
    /* text-align: center; */
  }

  .slick-slide div {
    cursor: pointer;
  }

  .slick-dots {
    
  }
  .slick-track {
    overflow-x: hidden;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }

  .slick-prev {
    left: -1.2vw;
    cursor: pointer;
    &::before {
      content: '';
    }
  }

  .slick-next {
    right: -1.1vw;
    cursor: pointer;

    &::before {
      content: '';
    }
  }
`;