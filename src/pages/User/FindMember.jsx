import React, { useState } from "react";
import styled from 'styled-components';
import AxiosApi from "../../api/AxiosAPI";

const Container = styled.div`
  display: flex;
  position: fixed;
  background-color: #F3F3F3;

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


function FindMember() {
  const [username, setUsername] = useState('');
  const [pwEmail, setPwEmail] = useState('');
  const [idEmail, setIdEmail] = useState('');
  const [idPhone, setIdPhone] = useState('');
  const [pwPhone, setPwPhone] = useState('');
  const [isIdFound, setIsIdFound] = useState(false);
  const [isPwdFound, setIsPwdFound] = useState(false);
  const [foundInfo, setFoundInfo] = useState('');

  const handleIdChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePwEmailChange = (e) => {
    setPwEmail(e.target.value);
  }

  const handleIdEmailChange = (e) => {
    setIdEmail(e.target.value);
  }

  const handleIdPhoneChange = (e) => {
    setIdPhone(e.target.value);
  }

  const handlePwPhoneChange = (e) => {
    setPwPhone(e.target.value);
  }

  const handleIdFindClick = async () => {
    setIsIdFound(true);
    try {
      await AxiosApi.findId(idEmail, idPhone);
      console.log('메일 전송 성공');
      setFoundInfo("메일이 전송되었습니다.");
    } catch (error) {
      console.log('닉네임 업데이트 오류:', error.message);
    }
  }
  
  const handlePwFindClick = async () => {
    setIsPwdFound(true);
    try {
      await AxiosApi.findPw(username, pwEmail, pwPhone);
      console.log('메일 전송 성공');
      setFoundInfo("메일이 전송되었습니다.");
    } catch (error) {
      console.log('메일 전송 오류:', error.message);
    }
  }
  

  return (
    <Container>
      {!isIdFound ?
        <div className="idBox" >
          <div className="title">아이디 찾기</div>
          <TextBox>
            <TextOn>이메일:
              <Input type="email" value={idEmail} onChange={handleIdEmailChange} /></TextOn>
            <TextOn>핸드폰 번호:
              <Input type="tel" value={idPhone} onChange={handleIdPhoneChange} /></TextOn>
          </TextBox>
          <div className="buttonBox"><FindButton onClick={handleIdFindClick}>찾기</FindButton></div>
        </div>
        :
        <div className="idBox">
          <div className="find"><TextOn>{foundInfo}</TextOn></div>
        </div>
      }

      {!isPwdFound ?
        <div className="pwBox">
          <div className="title">비밀번호 찾기</div>
          <TextBox>
            <TextOn>아이디:
              <Input type="text" value={username} onChange={handleIdChange} /></TextOn>
            <TextOn>이메일:
              <Input type="email" value={pwEmail} onChange={handlePwEmailChange} /></TextOn>
            <TextOn>핸드폰 번호:
              <Input type="tel" value={pwPhone} onChange={handlePwPhoneChange} /></TextOn>
          </TextBox>
          <div className="buttonBox"><FindButton onClick={handlePwFindClick}>찾기</FindButton></div>
        </div>
        :
        <div className="pwBox">
          <div className="find"><TextOn>{foundInfo}</TextOn></div>
        </div>
      }
    </Container>
  );
}

export default FindMember;