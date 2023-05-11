import React from "react";
import styled from "styled-components";
import HeaderMyPage from "../HeaderMyPage";
import Header from "../Header";
import MyInformationEdit from "../Common/MyInformationEdit";
import plusImg from "../../Images/plus.png"
import { useNavigate } from "react-router-dom";
//import { MyInformation } from "../Common/MyInformation";
//import { Profile } from "../Common/Profile";

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

  .studyItemContainer{
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
    border-radius: 10px;
    
  }
  
.plusImg {
    width: 100px;
} 
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 16px;
`;



const MyPage = () => {
    const navigate = useNavigate();

    const onClickCreateStudy = () => {
        navigate('/Study/Create');
    }
  return (
    <>
      <Header />
      <HeaderMyPage />
      <Container>
        <div className="myPageContainer">
          <MyInformationEdit />

          {/* 내 스터디 */}
          <div>
            <Title>내 스터디</Title>

            <div className="studyContainer">
            <div className="studyItemContainer">
                            <img className="plusImg" src={plusImg} alt="아이콘" onClick={onClickCreateStudy} />
                        </div>
       
        </div>
          </div>

        </div>
      </Container>
    </>



  );
};

export default MyPage;