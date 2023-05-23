import { useState } from 'react';

const usePasswordValidation = () => {
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [isPwLValid, setIsPwLValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isPwMatch, setIsPwMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (input) => {
    setPw(input);
    setIsPwLValid(input.length >= 8 && input.length <= 20);
    setIsPwValid(
      input.length >= 8 &&
      input.length <= 20 &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(input)
    );
    setErrorMessage(
      input.length >= 8 && input.length <= 20
        ? '올바른 비밀번호 형식입니다.'
        : '8자리 이상, 20자리 이하의 비밀번호를 특수문자, 영어, 숫자를 조합해 만들어주세요.'
    );
    setIsPwMatch(input === pwConfirm);
  };

  const validatePasswordConfirm = (input) => {
    setPwConfirm(input);
    setIsPwMatch(input === pw);
  };

  return { pw, pwConfirm, isPwLValid, isPwValid, isPwMatch, errorMessage, validatePassword, validatePasswordConfirm };
};

export default usePasswordValidation;





