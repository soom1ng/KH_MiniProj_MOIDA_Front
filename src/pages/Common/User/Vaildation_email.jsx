//회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
import { useState } from 'react';

const useEmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (input) => {
    // 이메일 주소의 정규식 패턴
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 이메일 주소가 패턴과 일치하면 유효한 이메일 주소로 간주
    if (pattern.test(input)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setEmail(input);
  };

  return [email, isValid, validateEmail];
};

export default useEmailValidation;

