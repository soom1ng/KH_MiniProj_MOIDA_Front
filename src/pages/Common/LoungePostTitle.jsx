import ThumbsUp from "../../Images/thumbsup.png";
import React from "react";
import styled, { css } from "styled-components";
import { formatRegTime } from "./formatRegTime";

// postTitle에서 분할구조로 더 깔끔하게 표현하기 위해 만듬
// story에서도 쓸 수 있게 추후 이 파일로 수정할 예정

const SIZES = {
    s: css`
      --width: 750px;
      --height: 190px;
      --body-width: 72%;
      --body-padding: 50px 55px 50px 50px;
      --thumbsup: 42px;
    `,
    l: css`
      --width: 1200px;
      --height : 190px;
      --body-width: 80%;
      --body-padding: 35px 90px 35px 90px;
      --thumbsup: 45px;
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

    .thumbsup {
      width: var(--thumbsup);
    }

    h3 {
      padding-left: 10px;
      font-size: 2.3rem;
    }

    .date {
      font-size: 1.7rem;
    }
  }
`;

export const LoungePostTitle = ({ size, post }) => {
    const { userImgUrl, nickname, title, recommend, regTime } = post;
    const sizeStyle = SIZES[size];

    return (
        <StyledPostTitle sizeStyle={sizeStyle}>
            <div className="post-title-body">
                <div className="title">{title}</div>
                <div className="info">
                    <img src={userImgUrl} alt="#" />
                    <div className="nickname">{nickname}</div>
                </div>
            </div>

            <div className="post-title-side">
                <div className="recommend">
                    <img className="thumbsup" src={ThumbsUp} alt="#" /><h3>{recommend}</h3>
                </div>
                <div className="date">{formatRegTime(regTime)}</div>
            </div>
        </StyledPostTitle>

    )
}