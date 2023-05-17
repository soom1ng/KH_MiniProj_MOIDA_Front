import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AxiosAPI from "../../api/AxiosAPI";
import Header from "../Header";
import HeaderLounge from "../HeaderLounge";
import Button from "../Common/Button";
import { Board } from "../Common/Board";
import styled from "styled-components";
import Paging from "../Common/Paging";
import { formatRegTime } from "../Common/formatRegTime";


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
export const BOARD = {
  free: '자유',
  qna: '고민'
}

const LoungeMain = () => {
  const { boardName } = useParams();
  const [postList, setPostList] = useState([]);
  const [lastId, setLastId] = useState('');
  const [page, setPage] = useState(1); // 현재 페이지
  const listPerPage = 10; // 페이지 당 보여줄 리스트 개수

  const offset = listPerPage * (page - 1); // 리스트를 슬라이스 하기 위한 변수
  const maxPage = Math.ceil(postList.length / listPerPage); // 현재 리스트의 최대 페이지

  const writeLink = `/lounge/${boardName}/write`;


  // boardName 이 변하면 page, postList가 초기화해주기
  // 문제! useEffect가 실행될 당시의 lastId 상태값을 가져오기 때문에 api호출에 lastId값을 직접 사용할 수 없다
  // 또한 내부에서 useState의 상태를 변경 후 함수에 적용할 수 없나
  useEffect(() => {

    const initialize = async (lastId) => {
      const rsp = await AxiosAPI.postListGet(boardName, '');
      console.log("lastId = " + lastId);
      setPostList(rsp.data);
      setLastId(rsp.data[rsp.data.length - 1].postId); // 마지막 행의 아이디값
      setPage(1);
      console.log("initialize 실행")
      console.log(rsp.data);
    }
    initialize();
  }, [boardName])

  // page가 변할때 실행
  useEffect(() => {
    const getPostList = async () => {
      if (page === maxPage && page > 1) { // 게시판이 바뀔떄 page가 1로 초기화 될 때에는 실행되지 않도록 합니다.
        const rsp = await AxiosAPI.postListGet(boardName, lastId);
        setPostList((prevPostList) => [...prevPostList, ...rsp.data]); // list를 이어붙여 받아야합니다.
        setLastId(rsp.data[rsp.data.length - 1].postId); // 마지막 행의 아이디값
        console.log('getPostList실행');
        console.log('lastId = ' + lastId);
      }
      window.scrollTo(0, 420);
      console.log("page = " + page)

    };
    getPostList();
  }, [page]);


  return (
    <Container>
      <Header />
      <HeaderLounge boardName={boardName} />
      <div className='board-top'>
        <div className='board-title'>
          <h1>{BOARD[boardName]} 게시판</h1>
          <NavLink to={writeLink}><Button font={1.5}>글쓰기</Button></NavLink>
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
        {postList.slice(offset, offset + 10) && postList.slice(offset, offset + 10).map(post => (

          <Board
            postId={post.postId}
            type='lounge'
            nickname={post.nickname}
            title={post.title}
            content={post.contents}
            date={formatRegTime(post.regTime)}
            boardName={boardName}
            isNim={1}
            recommend={post.recommend}
          ></Board>

        ))}
        {maxPage > 0 && <Paging maxPage={maxPage} page={page} setPage={setPage}></Paging>}
      </div>


    </Container>
  )
}

export default LoungeMain;