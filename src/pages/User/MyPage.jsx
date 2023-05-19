import React from "react";
import styled from "styled-components";
import HeaderMyPage from "../HeaderMyPage";
import Header from "../Header";
import MyInformationEdit from "../Common/MyInformationEdit";
import { MyPageList } from "../Common/MyStudyList";
import { MyPageTitle } from "../../styles/StyledComponent";

// ---------------------------------수민&다혜 수정예정------------------------------------- //
// ---------------------------------수민&다혜 수정예정------------------------------------- //
// ---------------------------------수민&다혜 수정예정------------------------------------- //
// ---------------------------------수민&다혜 수정예정------------------------------------- //
// ---------------------------------수민&다혜 수정예정------------------------------------- //
// ---------------------------------수민&다혜 수정예정------------------------------------- //



const Container = styled.div`
  margin-top: 90px;
  margin-left: 200px;

  .myPageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    background-color: #F3F3F3;
  }

  .studyContainer {
    display: flex;
    width: 800px;
    margin-bottom: 50px;
  }

  /* .studyItemContainer{
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 200px;
    margin-right: 50px;
    border: 1px solid #F3F3F3;
    
  } */

  .title_my {
    margin: 40px;

  }

  .list_box {
    display: flex;
    flex-direction: column;
    width: 800px;
    padding-top: 20px;
    background-color: #f3f3f3;
    height: 500px;
}
`;


const MyPage = () => {


  return (
    <>
      <Header />
      <HeaderMyPage />
      <Container>
        <div className="myPageContainer">
          <MyInformationEdit />

          {/* 내 스터디 */}
          {/* <div>
            <Title>내 스터디</Title>

            <div className="studyContainer">
              <div className="studyItemContainer">
                <img className="plusImg" src={plusImg} alt="아이콘" onClick={onClickCreateStudy} />
              </div>

            </div>
          </div> */}
          
          <div className="list_box">
          <MyPageTitle>나의 스터디 📚</MyPageTitle>
            <MyPageList/>
          </div>

        </div>
      </Container>
    </>
  );
};

export default MyPage;