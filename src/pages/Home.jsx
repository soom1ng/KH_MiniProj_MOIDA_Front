import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Slider from "react-slick";
import SimpleSlider from "./Common/SimpleSlider";
import styled from "styled-components";
import { StoryBlock } from "./Common/StoryBlock";
import { StudyList } from "./Common/StudyList";


const HomeContainer = styled.div`
display: flex;
flex-direction: column;
width: 1200px;
align-content: center;
align-items: center;
flex-wrap: wrap;
  `;

const StoryContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 1100px;


.storyTitle {
    margin-left: 40px;
    width: 1100px;
}
  
.storyBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    justify-content : center;
    align-items: center;
  }
  `;

const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  text-align: left;
`;

const Home = () => {

    return (
        <>
            <Header></Header>
            
                <div style={{ paddingTop: "100px" }}>
                    <SimpleSlider />
                </div>
                <HomeContainer>
                <StoryContainer>
                    <div className="storyTitle"><h1>스토리 🔥</h1></div>

                    <div className="storyBlock">
                        <StoryBlock
                            storyid={'post'}
                            img_url={'#'}
                            study_name="백준방범대"
                            title="4월 모임 - 코딩테스트 정리"
                        ></StoryBlock>

                        <StoryBlock
                            storyid={'post'}
                            img_url={'#'}
                            study_name="영어마을"
                            title="다같이 토익보고왔어요 ^.^"
                        ></StoryBlock>

                        <StoryBlock
                            storyid={'post'}
                            img_url={'#'}
                            study_name="백준방범대"
                            title="4월 모임 - 코딩테스트 정리"
                        ></StoryBlock>

                        <StoryBlock
                            storyid={'post'}
                            img_url={'#'}
                            study_name="백준방범대"
                            title="4월 모임 - 코딩테스트 정리"
                        ></StoryBlock>

                        <StoryBlock
                            storyid={'post'}
                            img_url={'#'}
                            study_name="영어마을"
                            title="다같이 토익보고왔어요 ^.^"
                        ></StoryBlock>

                        <StoryBlock
                            storyid={'post'}
                            img_url={'#'}
                            study_name="백준방범대"
                            title="4월 모임 - 코딩테스트 정리"
                        ></StoryBlock>
                    </div>
                </StoryContainer>


                <StudyContainer>
                    <StudyList></StudyList>
                </StudyContainer>

            </HomeContainer>
        </>


    );
};

export default Home;