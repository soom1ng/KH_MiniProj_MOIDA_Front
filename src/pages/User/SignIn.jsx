import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import Modal from "../utils/Modal";
import FindMember from "./FindMember";
import { InputLabel, Input, InputButton} from "../../styles/StyledComponent";
import AxiosApi from "../../api/AxiosAPI";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickLogin = async () => {
    try {
      const response = await AxiosApi.signIn(username, password);
      console.log(response.data);
      if (response.data === true) {
        // 로그인 성공 처리
        window.localStorage.setItem("username", username);
        window.localStorage.setItem("password", password);
        window.localStorage.setItem("isLogin", "TRUE");
        setUsername(username);
        setPassword(password);
  
        navigate("/");
      } else {
        console.log("로그인 에러: 로그인 실패");
      }
    } catch (error) {
      console.log("로그인 에러:", error.message);
    }
  };
  


  return (
    <SignContainer>
      <Form>
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
                {(username && password) ?
                <InputButton onClick={onClickLogin}>로그인</InputButton>  :
                <InputButton >로그인</InputButton>}
      </Form>
      <Body2>   
      </Body2>
      <Modal open={modalOpen} close={closeModal}><FindMember/></Modal>
    </SignContainer>
  );
  
};

export default SignIn;