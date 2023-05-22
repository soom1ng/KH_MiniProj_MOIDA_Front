import {useNavigate} from "react-router-dom";
import styled, { css } from "styled-components";
import ThumbsUp from '../../Images/thumbsup.png';

const SIZES = {
  s: css`
      --width: 800px;
      --height: 120px;
    `,
  l: css`
      --width: 1100px;
      --height : 150px;
      --box-shadow : 0 0 10px 5px rgba(0, 0, 0, 0.2);

    `
}

const Recommend = styled.img`
  width: 20px;

  // 이미 추천 누른 상태면 보라색으로 보이게 만들수도...
  &:hover {
    filter: invert(30%) sepia(40%) saturate(6276%) hue-rotate(240deg) brightness(105%) contrast(103%);
  }
`;

const StyledBoard = styled.div`
 ${(p) => p.sizeStyle}
  
  background-color: white;
  width: var(--width);
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px 10px 50px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0 30px 0;

  &:hover {
    box-shadow: var(--box-shadow);
  }

  div {
    display: flex;
    align-items: center;
  }


  .board-body-text {
    height: 100%;
    /* width: 500px; */
    padding: 0;
    display: flex;
    flex-direction: column;

    .nickname {
      width: 100%;
      margin: 0;
      padding-left: 10px;
      font-size: 1.6rem;
      color: gray;
      height: auto;
    }

    .title {
      margin: 0;
      font-size: 2.4rem;
      font-weight: bold;
      width: 100%;
    }

    .content {
      display: block;
      margin-top: 0;
      padding-left: 10px;
      height: 5rem;
      width: 100%;
      font-size: 1.2rem;
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre-line;
    }
  }

  .board-body-side {
    width: auto;
    justify-content: space-between;
    margin-right: 30px;

    .side-left {
      flex-direction: column;
      margin-right: 30px;

      .date {
        font-size: 1.6rem;
      }

      .recommend {
        height: 50px;
        font-size: 1.8rem;
        justify-content: center;
        width: 100%;

        h3 {
          margin-left: 10px;
          padding: 0;
        }
      }
    }

    .board-body-img {
      width: 120px;
      height: 100%;

      img {
        width: 120px;
        height: 90px;
      }

    }
  }
`;

const tagDelete = (text, row) => {
  const tempElement = document.createElement("div")
  tempElement.innerHTML = text;
  const paragraphs = tempElement.querySelectorAll("p");
  const lines = [];
  for (let i = 0; i< paragraphs.length; i++) {
    lines.push(paragraphs[i].textContent);
  }
  const rowsLine = lines.slice(0, row);
  const result = rowsLine.join("\n");

  if (paragraphs.length > row) { return result + "   ..."}
  else {return result}

}

export const Board = ({postId, type, nickname, title, content, img_url, date, recommend, size, boardName}) => {
  const sizeStyle = SIZES[size];

  const navigate = useNavigate();
  content = tagDelete(content, 3);


  const OnClick = () => {
    navigate(`/${type}/${boardName}/${postId}`)

  }

  return (
      <StyledBoard sizeStyle={sizeStyle} onClick={OnClick}>

        <div className="board-body-text">
          <h2 className="nickname">{nickname}</h2>
          <h2 className="title">{title}</h2>
          <div className="content">{content}</div>
        </div>
        <div className="board-body-side">
          <div className="side-left">
            <div className="date">{date}</div>
            <div className="recommend">
              <Recommend src={ThumbsUp} alt="추천"/>
              <h3>{recommend}</h3>
            </div>
          </div>
          {img_url &&
              <div className="board-body-img">
                <img src={img_url}/>
              </div>
          }
        </div>

      </StyledBoard>
  );
};