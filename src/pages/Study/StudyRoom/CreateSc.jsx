import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';
import AxiosApi from "../../../api/AxiosAPI";
import { LoginContext } from "../../../context/AuthContext";

const Container = styled.div`
  background-color: #F3F3F3;
  margin-left: 25%;


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


function CreateSc() {

  const {userId} = useContext(LoginContext);
  const navigate = useNavigate();
  const {studyId} = useParams();


  // 일정 input
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleUserLimit, setScheduleUserLimit] = useState('');

  const onChangescheduleDate = (e) => {
    setScheduleDate(e.target.value);
  };
  const onChangescheduleName = (e) => {
    setScheduleName(e.target.value);
  };
  const onChangescheduleUserLimit = (e) => {
    setScheduleUserLimit(e.target.value);
  };

  const onCreateSc = async () => {
    try {
      const createSc = await AxiosApi.createStudySchedule(userId, studyId, scheduleDate, scheduleName, scheduleUserLimit);
      console.log(createSc.data.result);

      if (createSc.data.result === "OK") {
        window.location.reload();
      } else {
        console.log("입력 실패");
        window.location.reload();
      }
    } catch (error) {
      console.log("에러:", error);
    }
  };



    return (
        <Container>
            <div className="idBox" >
            <div className="title">📅 스터디 일정 생성</div>
            <TextBox>
            <TextOn>일정 날짜: 
            <Input type="date" onChange={onChangescheduleDate} /></TextOn>
            <TextOn>일정 이름: 
            <Input type="text" onChange={onChangescheduleName} /></TextOn>
            <TextOn>멤버 제한: 
            <Input type="number" onChange={onChangescheduleUserLimit} /></TextOn>
            </TextBox>
            <div className="buttonBox"><FindButton onClick={() => {onCreateSc();}}>생성</FindButton></div>
            </div>
            <div className="idBox">
            <div className="find"><TextOn></TextOn></div>
            </div>

        </Container>
    );
  }
  
  export default CreateSc;