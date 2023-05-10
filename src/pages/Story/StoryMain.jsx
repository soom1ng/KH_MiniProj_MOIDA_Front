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
  margin-left: 700px;
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



// const BoardListWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   opacity: 0;
//   animation: smoothAppear 1.5s forwards;
//   animation-delay: 0.5s;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .boardList-header {
//     color: midnightblue;
//     font-weight: bold;
//     font-size: 2.5rem;
//     margin-top: 50px;
//   }
//   .boardList-body {
//     margin-top: 150px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-wrap: wrap;
//   }
//   `;

// const Card = styled.div``;
// const Pagination = styled.div``;



// const BoardList = () => {
//   const [pageCount, setPageCount] = useState(0);
//   const [boardList, setBoardList] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

// 렌더링 되고 한번만 전체 게시물 갯수 가져와서 페이지 카운트 구하기
// 렌더링 되고 한번만 페이지에 해당하는 게시물 가져오기
// useEffect(() => {
//   // 페이지에 해당하는 게시물 가져오기
//   const getBoardList = async () => {
//     const page_number = searchParams.get("page");
//     const {data} = await axios.get(`/api/board/list?page_number=${page_number}&page_size=4`);
//     return data;
//   }
//   // 현재 페이지에 해당하는 게시물로 상태 변경하기
//   getBoardList().then(result => setBoardList(result));
//   // 게시물 전체 갯수 구하기
//   const getTotalBoard = async () => {
//     const {data} = await axios.get("/api/board/count");
//     return data.total;
//   }
//   // 페이지 카운트 구하기: (전체 board 갯수) / (한 페이지 갯수) 결과 올림
//   getTotalBoard().then(result => setPageCount(Math.ceil(result / 12)));
// })

// return (
//   <></>
// <div className="boardList-wrapper">
//   <div className="boardList-header">
//     전체 게시물 📝
//   </div>
//   <div className="boardList-body">
//     {boardList.map((item, index) => (
//       <Card key={item.id} username={item.user.username}
//         date={moment(item.created).add(9, "hour").format('YYYY-MM-DD')}
//         title={item.title} content={item.content}
//         board_id={item.id} img_url={`/api/image/view/${item.id}`}
//       />
//     ))}
//   </div>
//   <div className="boardList-footer">
//     {/*페이지네이션: count에 페이지 카운트, page에 페이지 번호 넣기*/}
//     <Pagination
//       variant="outlined" color="primary" page={Number(searchParams.get("page"))}
//       count={pageCount} size="large"
//       onChange={(e, value) => {
//         window.location.href = `/board-list?page=${value}`;
//       }}
//       showFirstButton showLastButton
//     />
//   </div>
// </div>

//   )
// }



const StoryMain = () => {
  const navigate = useNavigate();

  const onClickWrite = () => {

    navigate('/Story/Write');
  }

  const onClickSearch = () => {
    navigate('/Lounge/SearchAll');
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
            <SearchBar type="text" placeholder="태그를 추가해보세요!" />
            <SearchIcon src={searchIcon} alt="검색 아이콘" onClick={onClickSearch} />
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