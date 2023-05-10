import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import Button from "../Common/Button";
import { Board } from "../Common/Board";
import HeaderLounge from "../HeaderLounge";


export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

  .lounge-nav {
    width: 100%;
    margin: 0 auto;
  }

    /* .nav {
      background-color: rgb(241, 241, 241);
      display: flex;
      justify-content: center;
      height: 60px;
      align-items: center;
    } */
/* 
    .board-select {
      width: 35%;
      display: flex;
    } */

    /* .board-select-type {
      color: black;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 23px 22px 22px 22px;
      text-decoration: none;
      height: 100%;
      position: relative;
      top: 1px;
      cursor: pointer;
    }
  } */

.board-top {

  .board-title {
    height: 115px;
    width: 100%;
    padding: 0 70px 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .board-title > h1 {
    display: inline;
  }

  Button {
    padding: 10px 25px 10px 25px;
    justify-content: center;
  }
}

.board-list {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;

  h2 {
    font-size: 2.3rem;
    margin-bottom: 10px;
  }

  li {
    font-size: 2rem;
  }

  div {
    width: 50%;
    height: 145px;
    padding: 0 80px 30px 80px;
  }


div:nth-child(2) {
      border-left: 2px solid gray;
    }
  }


.board-bottom {
  background-color: rgb(241, 241, 241);
  width: 100%;
  height: auto;
  padding: 10px 45px 10px 45px;
}
`;

const LoungeFreeMain = () => {

  return (
    <Container>
      <Header />

      <HeaderLounge></HeaderLounge>

      <div className='board-top'>
        <div className='board-title'>
          <h1>자유 게시판</h1>
          <NavLink to='/lounge/write'><Button font={1.5}>글쓰기</Button></NavLink>
        </div>
        <div className='board-list'>
          <div>
            <h2>공지</h2>
            <li>이제</li>
            <li>누가</li>
            <li>공지해주냐</li>
          </div>
          <div>
            <h2>Hot</h2>
            <li>너무</li>
            <li>뜨거워</li>
          </div>
        </div>
      </div>

      <div className='board-bottom'>
        <Board
          post_id={'post'}
          type='lounge'
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          date="2023/04/11"
          isNim={1}
          recommend={3}
        ></Board>
        <Board
          board_id={235050}
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          date="2023/04/11"
          recommend={3}
        ></Board>
        <Board
          board_id={235050}
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="assdadasd
                      asdsadad
                      asdsada"
          date="2023/04/11"
          recommend={3}
        ></Board>
        <Board
          board_id={235050}
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          date="2023/04/11"
          recommend={3}
        ></Board>
        <Board
          board_id={235050}
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          date="2023/04/11"
          recommend={3}
        ></Board>
        <Board
          board_id={235050}
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          date="2023/04/11"
          recommend={3}
          img_url={'#'}
        ></Board>
        <Board
          board_id={235050}
          nickname="곰돌이"
          title="이것은 제목입니다"
          content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
          date="2023/04/11"
          recommend={1003}
        ></Board>
      </div>


    </Container>
  );
};


export default LoungeFreeMain;