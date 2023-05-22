import React, { useContext, useEffect, useState } from "react";

import AxiosAPI from "../../api/AxiosAPI";
import Paging from "../Common/Paging";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import searchIcon from "../../Images/search.png";
import { Category } from "../Common/Category";
import { StoryBlock } from "../Common/StoryBlock";
// import { formatRegTime } from "../Common/formatRegTime";
import { LoginContext } from "../../context/AuthContext";

const StoryContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
  text-align: left;
  flex-direction: column;

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


// // 스토리 리스트 GET
// storyListGet: async () => {
//   return await axios.get(MOIDA_DOMAIN + `/story`);
// },

// // 스토리 페이지 GET
// storyViewGet: async (userId) => {
//   return await axios.get(MOIDA_DOMAIN + `/story/${userId}`);
// },


const StoryMain = () => {
  const [storyList, setStoryList] = useState([]);
  // const [lastId, setLastId] = useState('');
  const [page, setPage] = useState(1); // 현재 페이지
  const listPerPage = 12; // 페이지 당 보여줄 리스트 개수
  const { userId, isLogin } = useContext(LoginContext);
  const offset = listPerPage * (page - 1); // 리스트를 슬라이스 하기 위한 변수
  const maxPage = Math.ceil(storyList.length / listPerPage); // 현재 리스트의 최대 페이지



  const navigate = useNavigate();


  const writeLink = `/story/write`;

  // const onClickWrite = () => {
  //   navigate('/Story/Write');
  // }

  const onClickStory = () => {
    navigate('/Story');
  }

  useEffect(() => {
    const initialize = async () => {
      const rsp = await AxiosAPI.storyListGet('');
      // console.log("lastId = " + lastId);
      setStoryList(rsp.data);
      // setLastId(rsp.data[rsp.data.length - 1].storyId); // 마지막 행의 아이디값
      setPage(1);
      console.log("initialize 실행")
      console.log(rsp.data);
      if (userId) { // userId가 있을때만 실행 (로그인상태)
        const rsp2 = await AxiosAPI.getRecommendList(userId);
        window.localStorage.setItem("recommendList", JSON.stringify(rsp2.data));
        console.log(rsp2.data);
      }
    }
    initialize();
  })

  // page가 변할때 실행
  useEffect(() => {
    const getStoryList = async () => {
      if (page === maxPage && page > 1) { // 게시판이 바뀔떄 page가 1로 초기화 될 때에는 실행되지 않도록 합니다.
        const rsp = await AxiosAPI.storyListGet();
        setStoryList((prevStoryList) => [...prevStoryList, ...rsp.data]); // list를 이어붙여 받아야합니다.
        // setLastId(rsp.data[rsp.data.length - 1].postId); // 마지막 행의 아이디값
        console.log('getStroyList실행');
        // console.log('lastId = ' + lastId);
      }
      window.scrollTo(0, 420);
      console.log("page = " + page)

    };
    getStoryList();
  }, [page]);


  const onClickWriteCheck = () => {
    if (isLogin) {
      console.log("로그인 상태입니다")
      navigate(writeLink);
    }
    else {
      console.log("로그인이 필요합니다");
      navigate('/signin');
    }
  }

  return (
    <>
      <Header />

      <StoryContainer>
        <div className="basicBlock">
          <Title>스토리 🔥</Title>
          <Button type="submit" onClick={onClickWriteCheck}>글쓰기</Button>
        </div>

        <div className="menuBlock">

          <Category display={'flex'} array='r'></Category>

          <SearchContainer>
            <SearchBar type="text" placeholder="검색 할 내용을 입력하세요!" />
            <SearchIcon src={searchIcon} alt="검색 아이콘" onClick={onClickStory} />
          </SearchContainer>

        </div>

        <div className="storyBlock">
          {storyList.slice(offset, offset + 10) && storyList.slice(offset, offset + 10).map(story => (

            <StoryBlock
              storyid={story.storyid}
              img_url={story.imgUrl}
              study_name={story.studyName}
              title={story.title}
            ></StoryBlock>
          ))}
          {maxPage > 0 && <Paging maxPage={maxPage} page={page} setPage={setPage}></Paging>}
        </div>
      </StoryContainer>
    </>
  );
};



export default StoryMain;