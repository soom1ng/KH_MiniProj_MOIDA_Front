//회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
import { useState } from 'react';

const usePasswordValidation = (defaultPassword = '') => {
    const [password, setPassword] = useState(defaultPassword);
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (event) => {
      setPassword(event.target.value);
    };
  
    const validatePassword = (input) => {
      // 8-20자 사이의 길이 체크
      if (input.length < 8 || input.length > 20) {
        setIsValid(false);
        setErrorMessage('비밀번호는 8-20자 이내로 입력해주세요.');
        return;
      }
  
      // 영어, 숫자, 특수문자 조합 체크
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
      if (!pattern.test(input)) {
        setIsValid(false);
        setErrorMessage('영어, 숫자, 특수문자를 모두 조합하여 입력해주세요.');
        return;
      }

      setIsValid(true);
      setErrorMessage('');
    };
  
    return [password, handleChange, validatePassword, isValid, errorMessage];
  };
  
  export default usePasswordValidation;