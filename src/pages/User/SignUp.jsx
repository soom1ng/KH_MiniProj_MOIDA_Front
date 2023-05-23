import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import { InputLabel, InputLabelBig, Input, InputButton, Button } from "../../styles/StyledComponent";
import AxiosApi from "../../api/AxiosAPI";
import useEmailValidation from "../Common/User/Vaildation_email";
import usePasswordValidation from "../Common/User/Vaildation_pw";
import useUsernameValidation from "../Common/User/Vaildation_username";
import useNicknameValidation from '../Common/User/Vaildation_nick';
import Modal from "../utils/Modal";


const SignContainer = styled.div`
  width: 800px;
  text-align: left;
  margin: 20px auto;
  padding: 25px 0px 25px 50px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  margin-left: 40px;
  display: flex;
  text-align: left;
`;

const Body1 = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
`;

const Body2 = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-bottom: 16px;
`;

const CheckBox = styled.div`
  display: flex;
  margin: 5px 0px 20px 420px;
  font-size: 15px;
`;

const InputCheckBox = styled.input`
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;

const P = styled.p`
  color: rgb(107, 78, 254);;
`;

// 회원가입 창

const SignUp = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();
  const shouldHover = true;
  const [phone, setPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달
  const [alertMessage, setAlertMessage] = useState(''); 
  const { email, emailMessage, isEmailValid, validateEmail } = useEmailValidation();
  const { pw, pwConfirm,  isPwValid, isPwMatch, errorMessage, validatePassword, validatePasswordConfirm } = usePasswordValidation();
  const { username, usernameMessage, isUsernameValid, validateUsername } = useUsernameValidation();
  const { nickname, validateNickname, isNicknameValid, message } = useNicknameValidation();


  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckBoxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  // 회원가입 버튼 클릭
  const handleSignUp = async (e) => {
    e.preventDefault();
  
    if (isAgreed) {
      console.log('회원가입 버튼이 클릭되었습니다. 개인 정보 제공에 동의하였습니다.');
      
      if (isEmailValid && isUsernameValid && isPwMatch && !isPwValid) {
        try {
          const signUpSuccess = await AxiosApi.signUp(username, pw, pwConfirm, email, phone, nickname);
          
          if (signUpSuccess) {
            setAlertMessage('회원가입이 완료되었습니다.'); // 알림 메시지 설정
            openModal(); // 모달 열기
            navigate('/SignIn');
          } else {
            setAlertMessage('회원가입에 실패했습니다.'); // 알림 메시지 설정
            openModal(); // 모달 열기
          }
        } catch (error) {
          console.log('회원가입 에러:', error.message);
        }
      } else {
        setAlertMessage('입력하신 정보가 유효하지 않아 회원가입을 진행할 수 없습니다.');
        openModal(); // 모달 열기
      }
    } else {
      setAlertMessage('개인 정보 제공에 동의해야 회원가입이 가능합니다.');
      openModal(); // 모달 열기
    }
  };

  

  const handleUsernameChange = (e) => {
    const input = e.target.value;
    validateUsername(input);
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    validateEmail(input);
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    validatePassword(input);
  };

  const handlePasswordConfirmChange = (e) => {
    const input = e.target.value;
    validatePasswordConfirm(input);
  };

  const handleNicknameChange = (e) => {
    const input = e.target.value;
    validateNickname(input);
  };


  return (
    <SignContainer>
      <Title>회원가입</Title>
      <Form>
        <Body>
          <Body1>
            <InputLabel>아이디</InputLabel>
            <Input type="id" value={username} onChange={handleUsernameChange} placeholder="아이디를 입력해주세요." required />
            {!isUsernameValid && <P>{usernameMessage}</P>}

            <InputLabel>비밀번호</InputLabel>
            <Input type="password" value={pw} onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." required />
            {!isPwValid && <P>{errorMessage}</P>}

            <InputLabelBig>비밀번호 확인</InputLabelBig>
            <Input type="password" value={pwConfirm} onChange={handlePasswordConfirmChange}  placeholder="비밀번호를 다시 입력해주세요." required />
            {!isPwMatch && <P>입력하신 비밀번호가 동일하지 않습니다.</P>}
          </Body1>
          <Body2>
            <InputLabel>닉네임</InputLabel>
            <Input type="text" value={nickname}  onChange={handleNicknameChange} placeholder="닉네임을 입력해주세요." required />
            {!isNicknameValid && <P>{message}</P>}

            <InputLabel>전화번호</InputLabel>
            <Input type="text" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="전화번호를 입력해주세요." required />

            <InputLabel>이메일</InputLabel>
            <Input type="email" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요." required />
            {!isEmailValid && <P>{emailMessage}</P>}
          </Body2>
        </Body>

        <CheckBox>
          <InputCheckBox type="checkbox" checked={isAgreed} onChange={handleCheckBoxChange} />
          <label>개인 정보 제공에 동의합니다.</label>
        </CheckBox>

        <div className='buttonBox'><InputButton type="submit" onClick={handleSignUp}>회원가입</InputButton></div>

      </Form>
      {/* 알림 모달 */}
      <Modal open={isModalOpen} close={closeModal} width="300px" height="200px">
        <InputLabelBig width = "auto">{alertMessage}</InputLabelBig>
        <Button onClick={closeModal} hover={shouldHover}>확인</Button>
      </Modal> 

    </SignContainer>
  );
};

export default SignUp;