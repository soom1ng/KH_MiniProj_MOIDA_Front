import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import styled from 'styled-components';
import { InputLabel, InputLabelBig, Input, InputButton } from "../../styles/StyledComponent";

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

const Body = styled.form`
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

  const handleCheckBoxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  // 회원가입 버튼 클릭
  const handleSignUp = () => {
    // 개인 정보 제공 동의 체크 여부 확인
    if (isAgreed) {
      // 체크 박스에 동의한 경우 회원가입
      console.log('회원가입 버튼이 클릭되었습니다. 개인 정보 제공에 동의하였습니다.');
    } else {
      console.log('개인 정보 제공에 동의해야 회원가입이 가능합니다.');
    }
  };

  return (
    <SignContainer>
      <Title>회원가입</Title>
      <Form>
        <Body>
          <Body1>
            <InputLabel>아이디</InputLabel>
            <Input type="id" placeholder="아이디를 입력해주세요." required />

            <InputLabel>비밀번호</InputLabel>
            <Input type="password" placeholder="비밀번호를 입력해주세요." required />

            <InputLabelBig>비밀번호 확인</InputLabelBig>
            <Input type="password" placeholder="비밀번호를 다시 입력해주세요." required />
          </Body1>
          <Body2>
            <InputLabel>닉네임</InputLabel>
            <Input type="text" placeholder="닉네임을 입력해주세요." required />

            <InputLabel>전화번호</InputLabel>
            <Input type="text" placeholder="전화번호를 입력해주세요." required />

            <InputLabel>이메일</InputLabel>
            <Input type="email" placeholder="이메일을 입력해주세요." required />
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