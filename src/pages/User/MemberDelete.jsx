import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { LoginContext } from "../../context/AuthContext";
import AxiosApi from "../../api/AxiosAPI";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  max-width: 800px;
  text-align: left;
  margin: 20px auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  max-width: 800px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  font-size: 36px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-bottom: 24px;
`;

const InputLabel = styled.div`
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 19px;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 300px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  flex: 1;
  padding: 8px;
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 100px;
  font-size: 17px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 8px;
  margin-top: 20px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Check = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    padding: 10px;
    border: 1px solid black;
`
const List = styled.p`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
`

const MemberDelete = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const {username, userId, logout} = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (agreeTerms) {
        try {
            await AxiosApi.deleteMember(userId, password);
            console.log('회원탈퇴가 완료되었습니다.');
            logout();
            navigate('/');
        } catch (error) {
          console.log('에러:', error.message);
        }
    } else {
      alert('약관에 동의해야 회원탈퇴가 가능합니다.');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <Container>
      <Title>회원탈퇴</Title>
      <Form>
        <Check>
          약관
          <List>*회원 탈퇴 전 반드시 약관을 읽고 동의하신 후 회원 탈퇴 바랍니다.</List>
          <List>1. 회원 정보는 15일 후 삭제되며, 회원 탈퇴 시 15일간 동일한 정보로 회원 가입할 수 없습니다.</List>
          <List>2. 회원 탈퇴 이후, 정보는 복구가 불가능합니다.</List>
          <List>3. 현재 개설한 스터디가 존재할 경우, 회원 탈퇴가 불가능합니다.</List>
        </Check>

        <CheckboxContainer>
          <input type="checkbox" checked={agreeTerms} onChange={handleCheckboxChange} />
          <CheckboxLabel>약관에 동의합니다.</CheckboxLabel>
        </CheckboxContainer>

        <InputLabel>비밀번호를 입력하시면 {username}님의 탈퇴가 진행됩니다.</InputLabel>
        <Input type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={handlePasswordChange} />
        <Button onClick={handleFormSubmit}>회원탈퇴</Button>
      </Form>
    </Container>
  );
};

export default MemberDelete;