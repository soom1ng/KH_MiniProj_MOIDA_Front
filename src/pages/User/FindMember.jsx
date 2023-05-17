import React, { useState } from "react";
import styled from 'styled-components';

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
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isIdFound, setIsIdFound] = useState(false);
  const [isPwdFound, setIsPwdFound] = useState(false);
  const [foundInfo, setFoundInfo] = useState({});

  const handleIdChange = (e) => {
    setId(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  //아이디 찾기 버튼
  const handleIdFindClick = () => {
    setIsIdFound(true);
    setFoundInfo({ email } + "로 메일이 전송되었습니다.");
  }

  //비번 찾기 버튼
  const handlePwFindClick = () => {
    setIsPwdFound(true);
    setFoundInfo({ email } + "로 메일이 전송되었습니다.");
  }

  return (
    <Container>
      {!isIdFound ?
        <div className="idBox" >
          <div className="title">아이디 찾기</div>
          <TextBox>
            <TextOn>이메일:
              <Input type="email" value={email} onChange={handleEmailChange} /></TextOn>
            <TextOn>핸드폰 번호:
              <Input type="tel" value={phone} onChange={handlePhoneChange} /></TextOn>
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
              <Input type="text" value={id} onChange={handleIdChange} /></TextOn>
            <TextOn>이메일:
              <Input type="email" value={email} onChange={handleEmailChange} /></TextOn>
            <TextOn>핸드폰 번호:
              <Input type="tel" value={phone} onChange={handlePhoneChange} /></TextOn>
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