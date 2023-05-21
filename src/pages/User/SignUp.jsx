import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import { InputLabel, InputLabelBig, Input, InputButton } from "../../styles/StyledComponent";
import AxiosApi from "../../api/AxiosAPI";

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

// 회원가입 창
const SignUp = () => {

  const [isAgreed, setIsAgreed] = useState(false); // 개인 정보 제공 동의
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nickname, setNickname] = useState('');


  const handleCheckBoxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  // 회원가입 버튼 클릭
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (pw !== pwConfirm) {
      console.log("비밀번호가 일치하지 않습니다.");
      return false;
    }

    if (isAgreed) {
      console.log('회원가입 버튼이 클릭되었습니다. 개인 정보 제공에 동의하였습니다.');
    } else {
      console.log('개인 정보 제공에 동의해야 회원가입이 가능합니다.');
    }

    try {
      const signUpSuccess = await AxiosApi.signUp(username, pw, pwConfirm, email, phone, nickname);

      if (signUpSuccess) {
        console.log('회원가입이 완료되었습니다.');
        navigate('/SignIn');
      } else {
        console.log('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.log('회원가입 에러:', error.message);
    }
  };

  

  return (
    <SignContainer>
      <Title>회원가입</Title>
      <Form>
        <Body>
          <Body1>
            <InputLabel>아이디</InputLabel>
            <Input type="id" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디를 입력해주세요." required />

            <InputLabel>비밀번호</InputLabel>
            <Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호를 입력해주세요." required />

            <InputLabelBig>비밀번호 확인</InputLabelBig>
            <Input type="password" value={pwConfirm} onChange={(e) => setPwConfirm(e.target.value)}  placeholder="비밀번호를 다시 입력해주세요." required />
          </Body1>
          <Body2>
            <InputLabel>닉네임</InputLabel>
            <Input type="text" value={nickname}  onChange={(e) => setNickname(e.target.value)} placeholder="닉네임을 입력해주세요." required />

            <InputLabel>전화번호</InputLabel>
            <Input type="text" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="전화번호를 입력해주세요." required />

            <InputLabel>이메일</InputLabel>
            <Input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요." required />
          </Body2>
        </Body>

        <CheckBox>
          <InputCheckBox type="checkbox" checked={isAgreed} onChange={handleCheckBoxChange} />
          <label>개인 정보 제공에 동의합니다.</label>
        </CheckBox>

        <div className='buttonBox'><InputButton type="submit" onClick={handleSignUp}>회원가입</InputButton></div>

      </Form>

    </SignContainer>
  );
};

export default SignUp;