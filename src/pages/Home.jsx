import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import SimpleSlider from "./Common/SimpleSlider";
import styled from "styled-components";
import { StoryBlock } from "./Common/StoryBlock";
import { StudyList } from "./Common/StudyList";
import { useEffect } from "react";
import AxiosApi from "../api/AxiosAPI";
import { useState } from "react";
import { StoryList } from "./Common/StoryList";


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
  align-items: center;
  align-content: center;
  width: 1100px;
  height: auto;


/* .storyTitle {
    margin-left: 40px;
    width: 1100px;
} */
  
/* .storyBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    justify-content : center;
    align-items: center;
  } */
  `;

const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  text-align: left;
`;

const Home = () => {
    const navigate = useNavigate();

    const date = new Date();
    const [storyList, setStoryList] = useState([]);


    const disPlayCount = 6;

    useEffect(() => {
        const storyList = async () => {
            const rsp = await AxiosApi.storyListGet(); // 전체 조회
            if (rsp.status === 200) setStoryList(rsp.data);
            console.log(rsp.data);

        };
        storyList();
    }, []);

    console.log(storyList.length);

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
                        <StoryList></StoryList>

                        {/* <StoryBlock
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
                        ></StoryBlock> */}
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