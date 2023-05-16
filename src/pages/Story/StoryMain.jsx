import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../Header";
import searchIcon from "../../Images/search.png";
// import moment from "moment";
//import { AiFillCaretDown } from "react-icons";
import { Category } from "../Common/Category";
import { StoryBlock } from "../Common/StoryBlock";

const StoryContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
  text-align: left;
  flex-direction: column;


.dropdown{
  position : relative;
  display : inline-block;
  align-items: center;
}


.dropbtn{
  border : 1px solid rgb(37, 37, 37);
  border-radius : 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color : rgb(37, 37, 37);
  padding : 12px;
  width :150px;
  text-align: left;
  cursor : pointer;
  font-size : 12px;

}


.basicBlock {
  display: flex;
  width: 1200px;
  margin: 30px;
}
  
.menuBlock {
  display: flex;
  width: 1100px;
  height: 60px;
  align-items: center;
  padding: 0 0 10px 0;
  
}
 
.storyBlock {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 0;
  width: 1100px;
  height: auto;
  /* background-color: #f1f1f1;  */
justify-content : center;
}
`;



const Title = styled.div` /* 1200 140 */
    display: flex;
    font-size: 36px;
    padding-top: 80px;
    height: 140px;
    align-items: center;
    margin-left: 45px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    `;


//  1100 60(카테고리) 1200(스토리리스트) 100(페이지)

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size:17px;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 130px 0 0 860px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const SearchContainer = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;
  overflow: hidden;
  width: 200px;
  height: 36px;
  background-color: rgb(239,239,239);
  margin-left: 650px;
`;

const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
  opacity: 40%;
  margin-right: 10px;
`;


const SearchBar = styled.input`
  padding: 5px;
  width: 280px;
  border: 0;
  font-size: 9px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgb(239,239,239);
  outline: none;
`;


const StoryMain = () => {
  const navigate = useNavigate();

  const onClickWrite = () => {
    navigate('/Story/Write');
  }

  const onClickStory = () => {
    navigate('/Story');
  }



  return (
    <>
      <Header></Header>



      <StoryContainer>
        <div className="basicBlock">
          <Title>스토리 🔥</Title>
          <Button type="submit" onClick={onClickWrite}>글쓰기</Button>
        </div>

        <div className="menuBlock">

          <Category array='r'></Category>

          <SearchContainer>
            <SearchBar type="text" placeholder="검색 할 내용을 입력하세요!" />
            <SearchIcon src={searchIcon} alt="검색 아이콘" onClick={onClickStory} />
          </SearchContainer>

        </div>

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
            study_name="영어마을"
            title="다같이 토익보고왔어요 ^.^"
          ></StoryBlock>
        </div>


      </StoryContainer>
    </>
  );
};




export default StoryMain;