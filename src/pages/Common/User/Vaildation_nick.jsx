//회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
import axios from 'axios';
import { useState } from 'react';

const useNicknameValidation = (defaultNickname = '') => {
  const [nickname, setNickname] = useState(defaultNickname);
  const [isValid, setIsValid] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  const validateNickname = async (input) => {
    // 닉네임 길이 제한 30자
    if (input.length > 30) {
      setIsValid(false);
      setNickname(input.substring(0, 30));
      return;
    }

    const pattern = /^[\uAC00-\uD7AF\uAE00-\uAEFF\uA960-\uA97F\uAC1C\uAC00-\uD7A3a-zA-Z0-9.,\s!?@#$%^&*()_+|{}[\-=`~;:'"<>\u0020🙂👍👀]*$/;
    // 이모티콘도 허용하면서 한글, 영어, 숫자, 공백, 특수문자 입력 가능
    if (pattern.test(input)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setNickname(input);

    // 서버로 닉네임 중복 검사 요청 보내기
    try {
      const response = await axios.get(`/api/checkNickname?nickname=${input}`);
      setIsDuplicate(response.data.isDuplicate);
    } catch (error) {
      console.error(error);
    }
  };

  const message = isDuplicate ? "이 닉네임은 이미 존재하는 닉네임입니다." : "사용 가능한 닉네임입니다.";

  return [nickname, handleChange, validateNickname, isValid, message];
};

export default useNicknameValidation;


