//회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
// 이메일 중복 확인도 해야 함 : 미구현
import React, { useState } from 'react';

const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (input) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = pattern.test(input);

    setIsEmailValid(isValid);
    setEmailMessage(isValid ? '이용 가능한 이메일입니다.' : '사용 불가능한 이메일입니다.');
    setEmail(input);
  };

  return { email, emailMessage, isEmailValid, validateEmail };
};

export default useEmailValidation;
