import React, { useState, useContext, useEffect } from 'react';
import { LoginContext } from '../../context/AuthContext';
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import Modal from "../utils/Modal";
import FindMember from "./FindMember";
import { InputLabel, Input, InputButton, InputLabelBig, Button } from "../../styles/StyledComponent";
import AxiosApi from '../../api/AxiosAPI';

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

const Form = styled.div`
  max-width: 800px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
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
  const { username, password, setUsername, setPassword, login } = useContext(LoginContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const shouldHover = true;

   // 모달 열기
   const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = (modalName) => {
    if (modalName === 'findMemberModal') {
      setModalOpen(false); // findMemberModal 닫기
    } else if (modalName === 'alertModal') {
      setIsModalOpen(false); // alertModal 닫기
    }
  };

  const onClickLogin = async () => {
    try {
      const response = await AxiosApi.signIn(username, password);
      login(response.data.userId, username, password, response.data.img, response.data.nickname);
      navigate('/');
    } catch (error) {
      console.log('로그인 에러:', error.message);
      setAlertMessage('아이디나 비밀번호가 잘못 입력됐습니다.');
      openModal();
    }
  };

  return (
    <SignContainer>
      <Form>
        <Title>로그인</Title>
        <Body>
          <Body1>
            <InputLabel>아이디</InputLabel>
            <Input type="id" placeholder="아이디를 입력해주세요." value={username} onChange={(e) => setUsername(e.target.value)} required />
            <InputLabel>비밀번호</InputLabel>
            <Input type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Body>
              <Find><Link type="button" onClick={() => setModalOpen(true)}>아이디/비밀번호 찾기</Link></Find>
              <SignUp><Link to="/SignUp">모이다가 처음이세요?</Link></SignUp>
            </Body>
          </Body1>
        </Body>
        {(username && password) ?
          <InputButton onClick={onClickLogin} hover={shouldHover}>로그인</InputButton> :
          <>
          <InputButton hover={shouldHover}>로그인</InputButton></>}
      </Form>
      <Body2>
      </Body2>
      <Modal open={modalOpen} close={closeModal} name="findMemberModal" ><FindMember /></Modal>

      {/* 알림 모달 */}
      <Modal open={isModalOpen} close={closeModal} name="alertModal" width="300px" height="200px">
        <InputLabelBig width = "auto">{alertMessage}</InputLabelBig>
        <Button onClick={() => closeModal('alertModal')} hover={shouldHover}>확인</Button>
      </Modal> 

    </SignContainer>
  );

};

export default SignIn;