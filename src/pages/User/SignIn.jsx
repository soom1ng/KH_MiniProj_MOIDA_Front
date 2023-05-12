import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Modal from "../utils/Modal";
import FindMember from "./FindMember";
import { InputLabel, Input, InputButton} from "../../styles/StyledComponent";
import axios from 'axios';

const SignContainer = styled.div`
  display: flex;
  max-width: 800px;
  text-align: left;
  margin: 20px auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  display: flex;
  font-size: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.form`
  max-width: 800px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Body = styled.form`
  display: flex;
  max-width: 800px;
  text-align: left;
  align-items: center;
  justify-content: space-between;
`;

const Body1 = styled.div`
  
  display: flex;
  width: 330px;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
`;

const Body2 = styled.div`
  display: flex;
  width: 470px;
  height: 480px;
  background-color: rgb(107, 78, 254);
`;

const Find = styled.p`
  display: flex;
  color: black;
  font-size: 14px;
`;

const SignUp = styled.p`
  display: flex;
  color: black;
  font-size: 14px;
  margin-right: 10px;
`;

const SignIn = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const MOIDA_DOMAIN = "http://localhost:8090";

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(MOIDA_DOMAIN+ "/login", {
        userName: username,
        pw: password
      });
      // 로그인 성공
      console.log(response.data); // true or false
      if (response.data === true) {
      }
    } catch (error) {
      // 로그인 실패
      console.error(error.response.data);
    }
  };


  return (
    <SignContainer>
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Body>
          <Body1>
            <InputLabel>아이디</InputLabel>
            <Input type="id" placeholder="아이디를 입력해주세요." value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <InputLabel>비밀번호</InputLabel>
            <Input type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <Body>
              <Find><Link type="button" onClick={() => setModalOpen(true)}>아이디/비밀번호 찾기</Link></Find>
              <SignUp><Link to="/SignUp">모이다가 처음이세요?</Link></SignUp>
            </Body>
          </Body1>
        </Body>
        <InputButton type="submit">로그인</InputButton>
      </Form>
      <Body2>   
      </Body2>
      <Modal open={modalOpen} close={closeModal}><FindMember/></Modal>
    </SignContainer>
  );
  
};

export default SignIn;