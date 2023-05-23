import ThumbsUp from "../../Images/thumbsup.png";
import React, {useContext, useState} from "react";
import styled, { css } from "styled-components";
import { formatRegTime } from "./formatRegTime";
import AxiosApi from "../../api/AxiosAPI";
import {LoginContext} from "../../context/AuthContext";
import AxiosAPI from "../../api/AxiosAPI";

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

    .active {
      width: var(--thumbsup);
      filter: invert(30%) sepia(40%) saturate(6276%) hue-rotate(240deg) brightness(105%) contrast(103%);
      cursor: pointer;
    }
    .non-active {
      width: var(--thumbsup);
      cursor: pointer;
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

export const LoungePostTitle = ({ size, post, update, setUpdate }) => {
    const sizeStyle = SIZES[size];
    const { postId, userImgUrl, nickname, title, recommend, regTime } = post;
    const { userId } = useContext(LoginContext);
    const [recommendList, setRecommendList] = useState(JSON.parse(window.localStorage.getItem("recommendList")));

    const onClickRecommend = async () => {
        const recommend = await AxiosAPI.postRecommend(postId, userId)
        setRecommendList([...recommendList, postId]);
        setUpdate(update*-1);
    }
    const onClickUndoRecommend = async () => {
        const undoRecommend = await AxiosAPI.postUndoRecommend(postId, userId)
        setRecommendList( recommendList.filter((value) => value !== postId));
        setUpdate(update*-1);
    }




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
                    {recommendList && recommendList.includes(postId) ?
                        <img className="active" onClick={onClickUndoRecommend} src={ThumbsUp} alt="#" /> :
                        <img className="non-active" onClick={onClickRecommend} src={ThumbsUp} alt="#" />}
                        <h3>{recommend}</h3>
                </div>
                <div className="date">{formatRegTime(regTime)}</div>
            </div>
        </StyledPostTitle>

    )
}