import { HandThumbsUp } from "react-bootstrap-icons";
import React from "react";
import styled, { css } from "styled-components";
import {formatRegTime} from "./formatRegTime";


// 사용법
// import PostTitle from .. import 하고
// <PostTitle
//          size='s'  // 크기타입 : 스토리 s, 라운지: l
//          title='제목'
//          nickname='닉네임'
//          img_url='사진 url'
//          date='날짜'
//          recommend='추천수'
//         ></PostTitle>

const SIZES = {
  s: css`
      --width: 750px;
      --height: 220px;
      --body-width: 72%;
      --body-padding: 50px 55px 50px 50px;
      --thumbsup: 4.2rem;
    `,
  l: css`
      --width: 1200px;
      --height : 220px;
      --body-width: 80%;
      --body-padding: 35px 90px 35px 90px;
      --thumbsup: 4.5rem;
    `
}

const StyledPostTitle = styled.div`
  ${(p) => p.sizeStyle}
  
  width: var(--width);
  height: var(--height);
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid black;
  
  .post-title-body {
    width: var(--body-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--body-padding);
    margin: 0;
    
    .title {
      font-size: 3.2rem;
      font-weight: bold;
    }

    .info {
      display: flex;
      width: 30%;
      height: 40%;
      align-items: center;
      
      img {
        height: 45px;
        width: 45px;
        border: 1px solid gray;
        border-radius: 50%;
      }
      
    .nickname {
        padding-left: 15px;
        font-size: 1.7rem;
      }
    }
  }
  
  .post-title-side {
    width: calc(100% - var(--body-width));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .recommend {
      display: flex;
      padding: 10px;
      align-items: center;
    }
    
    h1 {
      font-size: var(--thumbsup);
      align-items: center;
      padding-top: 14px;
    }
    
    h3 {
      padding-left: 10px;
      font-size: 2.3rem;
    }
    
    .date {
      padding-left: 10px;
      font-size: 1.6rem;
    
    }
  }
`;
export const PostTitle = ({ size, img_url, nickname, title, regTime, recommend }) => {
  const sizeStyle = SIZES[size];

  return (
    <StyledPostTitle sizeStyle={sizeStyle}>
      <div className="post-title-body">
        <div className="title">{title}</div>
        <div className="info">
          <img src={img_url} alt="#" />
          <div className="nickname">{nickname}</div>
        </div>
      </div>

      <div className="post-title-side">
        <div className="recommend">
          <h1><HandThumbsUp /></h1><h3>{recommend}</h3>
        </div>
        {/* <div className="date">{date}</div> */}
        <div className="date">{formatRegTime(regTime)}</div>

      </div>

    </StyledPostTitle>

  )
}