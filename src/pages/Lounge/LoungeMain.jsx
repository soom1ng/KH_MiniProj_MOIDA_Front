import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import AxiosAPI from "../../api/AxiosAPI";
import Header from "../Header";
import HeaderLounge from "../HeaderLounge";
import Button from "../Common/Button";
import {Board} from "../Common/Board";
import styled from "styled-components";


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

  .lounge-nav {
    width: 100%;
    margin: 0 auto;
  }

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
// url : 이름 객체
const BOARD = {
    free : '자유 게시판 🐥',
    qna : '고민 게시판 🐣'
}

const LoungeMain = () => {
    const [postList, setPostList] = useState(null);
    const {boardName} = useParams();

    useEffect(() => {
        const getPostList = async() => {
            const rsp = await AxiosAPI.postListGet(boardName);
            setPostList(rsp.data)
            console.log(rsp.data);
        };
        getPostList();
    }, [boardName]);

    console.log(BOARD[boardName]);
    return (
        <Container>
            <Header/>
            <HeaderLounge boardName={boardName}/>
            <div className='board-top'>
                <div className='board-title'>
                    <h1>{BOARD[boardName]}</h1>
                    <NavLink to='/lounge/write'><Button font={1.5}>글쓰기</Button></NavLink>
                </div>
                <div className='board-list'>
                    <div>
                        <h2>공지</h2>
                        <li>이제</li>
                        <li>누가</li>
                        <li>공지해주냐</li>
                    </div>
                    {boardName === "free" &&
                        <div>
                            <h2>Hot</h2>
                            <li>너무</li>
                            <li>뜨거워</li>
                        </div>
                    }
                </div>
            </div>

            <div className='board-bottom'>
                {postList && postList.map(post => (
                    <Board
                        postId={post.postId}
                        type='lounge'
                        nickname={post.nickname}
                        title={post.title}
                        content={post.contents}
                        date={post.regTime}
                        boardName={boardName}
                        isNim={1}
                        recommend={post.recommend}
                    ></Board>
                ))}
            </div>


        </Container>
    )
}

export default LoungeMain;