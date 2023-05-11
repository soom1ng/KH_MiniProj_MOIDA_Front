import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import ThumbsUp from '../../Images/thumbsup.png';

const Recommend = styled.img`
  width: 20px;

  // 이미 추천 누른 상태면 보라색으로 보이게 만들수도...
  &:hover {
    filter: invert(30%) sepia(40%) saturate(6276%) hue-rotate(240deg) brightness(105%) contrast(103%);
  }



`;

const StyledBoard = styled.div`
  background-color: white;
  width: ${props => props.size}px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px 25px 50px;
  border-radius: 10px;
  cursor: pointer;
  margin: 15px 0 30px 0;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }

  div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }


  .board-body-text {
    width: 700px;
    padding: 5px 25px 5px 25px;
    display: flex;
    flex-direction: column;


    .nickname {
      width: 100%;
      margin: 0;
      font-size: 1.6rem;
      color: gray;
      height: auto;
    }

    .title {
      font-size: 2rem;
      font-weight: bold;
      width: 100%;
    }

    .content {
      height: 4.2rem;
      width: 100%;
      font-size: 1.4rem;
      color: gray;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 20px;
      white-space: pre-line;
      align-items: normal;
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

export const Board = ({postId, type, nickname, title, content, img_url, date, recommend, size, boardName}) => {
    const navigate = useNavigate();
    const OnClick = () => {
         navigate(`/${type}/${boardName}/${postId}`)

    }

    return (
        <StyledBoard size={size} onClick={OnClick}>

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