import styled from "styled-components";
import { Profile } from "./Profile";
import ban from "../../Images/ban.png"
import manage from "../../Images/user.png"
import more from "../../Images/more.png"
import { useState } from 'react';

const Container = styled.div`

  /* .myPageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    background-color: #F3F3F3;
  } */
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 250px;
    padding: 15px 15px 15px 30px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
    margin-bottom: 50px;
`

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-left: 20px;

    .moreDiv{
      position: absolute;
      display:flex;
      align-items:center;
      right: 150px;
      cursor: pointer;
    }

    .moreImg{
      margin-top: 10px;
      width: 35px;
      height: 35px;
    }

`;


const MenuDiv = styled.div`
background-color: white;
position: absolute;
top: 50px;
right: 0px;
text-decoration-line: none;
width: 140px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const DropDown = styled.li`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
font-size: 1.3rem;
text-decoration: none;
list-style: none;
top: 30px;
margin: 10px;
text-decoration-line: none;
align-items: center;
cursor: pointer;

.ban{
     color : #d1403f;
    }

.manage{
       color : #111;
      }
`;


const MenuImg = styled.img`
width: 23px;
height: 23px;
margin-right: 10px;
text-align: left;
`;


const InfoText = styled.p`
  font-size: 19px;
  font-family: 'Noto Sans KR', sans-serif;
  margin-left: 15px;
  font-weight: bold;
  padding-left: 20px;
  /* margin-bottom: 20px; */
`;

const MyInfo = styled.div`
  font-size: 19px;
  margin: 20px 20px 20px 10px;
  padding-left: 20px;
`;




export const MyInformation = ({ myInfo }) => {

  const onclickManage = () => {
  };

  const onclickBan = () => {
  };


  const [view, setView] = useState(false);

  return (
    <Container>
        <ProfileBox>
          <Profile size={'l'} nickname={"콩콩이"} />

          <div className="moreDiv" onClick={() => {
            setView(!view)
          }}><img className="moreImg" src={more} /> {" "}
            {view && (
              <MenuDiv>
                <DropDown onClick={onclickManage}>
                  <MenuImg src={manage} /> <h3 className="manage">권한 넘기기</h3> </DropDown>
                <DropDown onClick={onclickBan}>
                  <MenuImg src={ban} /> <h3 className="ban">멤버강퇴</h3> </DropDown>
              </MenuDiv>
            )}
            </div>
        </ProfileBox>

        {/* {showPrivacy && (
          <div>
            <InfoTextPhone>번호 </InfoTextPhone>
            <MyInfo>{phone}</MyInfo>

            <InfoText>이메일</InfoText>
            <MyInfo>{email}</MyInfo>
          </div>
        )} */}

        <div>
          <InfoText>자기소개 </InfoText>
          <MyInfo>{myInfo}</MyInfo>
        </div>
          </Container>
  );
};
