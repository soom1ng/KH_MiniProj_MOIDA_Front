//회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
import React, { useState } from 'react';

const useUsernameValidation = () => {
  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const validateUsername = (input) => {
    const pattern = /^[a-zA-Z0-9.-]{3,}$/;
    const isValid = pattern.test(input);

    setIsUsernameValid(isValid);
    setUsernameMessage(isValid ? ' ' : '아이디는 3자 이상 20자 이하의 영어와 숫자로만 설정가능합니다.');
    setUsername(input);
  };

  return { username, usernameMessage, isUsernameValid, validateUsername };
};

export default useUsernameValidation;
