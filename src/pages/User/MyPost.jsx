import React from "react";
import styled from "styled-components";
import axios from "axios";
import HeaderMyPage from "../HeaderMyPage";
import Header from "../Header";
import CommentsList from "../Common/CommentsList";
import { Board } from "../Common/Board";


// --------------------------------- 페이지네이션 ------------------------------------ //
// ---------------------------------상우 수정예정------------------------------------- //
// ---------------------------------상우 수정예정------------------------------------- //
// ---------------------------------상우 수정예정------------------------------------- //
// ---------------------------------상우 수정예정------------------------------------- //
// ---------------------------------상우 수정예정------------------------------------- //


const Container = styled.div`
  margin-top: 90px;
  margin-left: 200px;
  display: flex;
  justify-content: center;
`
const MyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  padding: 25px 100px 25px 100px;
  background-color: #F3F3F3;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #F3F3F3;
  border-radius: 10px;

  .box {
    border-radius: 0px;
    border-bottom: 1px solid gray;
    height: 130px;
    margin-bottom: 10px;
    }
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 16px;
`;


const MyPost = () => {
  return (
    <><Header />
      <HeaderMyPage />
      <Container>

        <MyPostContainer>

          <div>
            <Title>내가 작성한 글</Title>
            <InfoContainer>
              <div className="box">
              <Board
                size={'s'}
                postId={1}
                type='lounge'
                nickname={'시루루'}
                title={'2조 화이팅'}
                content={'힘내라 힘'}
                date={'2023-01-23'}
                boardName={'free'}
                isNim={1}
                recommend={30}
                img_url={null}
              ></Board>
              </div>

              <div className="box">
              <Board
                size={'s'}
                postId={1}
                type='lounge'
                nickname={'시루루'}
                title={'2조 화이팅'}
                content={'힘내라 힘'}
                date={'2023-01-23'}
                boardName={'free'}
                isNim={1}
                recommend={30}
                img_url={null}
              ></Board>
              </div>

              <div className="box">
              <Board
                size={'s'}
                postId={1}
                type='lounge'
                nickname={'시루루'}
                title={'2조 화이팅'}
                content={'힘내라 힘'}
                date={'2023-01-23'}
                boardName={'free'}
                isNim={1}
                recommend={30}
                img_url={null}
              ></Board>
              </div>

            </InfoContainer>

            <br />

            {/* 내 댓글 */}
            <Title>내가 작성한 댓글</Title>
            <InfoContainer>
              {/* <CommentsList></CommentsList> */}
            </InfoContainer>

          </div>
        </MyPostContainer>
      </Container></>
  );
};


export default MyPost;