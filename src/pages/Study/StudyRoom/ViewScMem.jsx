import React, { useState } from "react";
import styled from 'styled-components';
import { MyInformation } from "../../Common/MyInformation";
import { useEffect } from "react";
import AxiosApi from "../../../api/AxiosAPI";

const Container = styled.div`
  background-color: #F3F3F3;
  padding-left: 27%;

  .idBox, .pwBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 320px;
    margin: 20px;
  }

  .title{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .buttonBox{
    display: flex;
    justify-content: right;
  }

  .find{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 250px;
  margin-left: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  height: 30px;
  font-size: 15px;
  padding: 8px;
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;

const TextOn = styled.div`
  display: flex;
  justify-content: right;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  justify-content: center;
  margin-bottom: 20px;
  width: 420px;
  height: 220px;
  border: none;
  border-radius: 10px;
  background-color: white;
`;


const FindButton = styled.button`
  border: none;
  font-size: 15px; 
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 5px;
  background-color: #6E53F4;
  cursor: pointer;

  &:hover {
    background-color: #543ad4;
  }
`;
const Content = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;


export const ViewScMem =({scName, userName, userIntro, userProfile, studyScId}) => {
  const [studyScheduleMember, setStudyScheduleMember] = useState([]);
  useEffect(() => {
    const studyScInfo = async () => {
      try {
        console.log(studyScId);
        const rsp = await AxiosApi.studyScMemGet(studyScId);
        if (rsp.status === 200) {
          setStudyScheduleMember(rsp.data);
          console.log(studyScheduleMember);
        }
      } catch (error) {
        console.error('스터디 일정 멤버정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };
  
    studyScInfo();
  }, [studyScId]);
    return (
        <Container>
            <div className="idBox" >
            <div className="title">{scName}</div>
            <Content>
              {studyScheduleMember && studyScheduleMember.map((mem) => (
                <MyInformation
                key={mem.studyScId}
                myInfo={mem.userIntro}
                mgrName={mem.userName}
                myImg={mem.userImg}
                />
              ))}
            </Content>
            
            
            </div>

        </Container>
    );
  }
  