// 회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
// 닉네임 중복확인 기능 추가 필요

import AxiosApi from '../../../api/AxiosAPI';
import { useState } from 'react';

const useNicknameValidation = (defaultNickname = '') => {
  const [nickname, setNickname] = useState(defaultNickname);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  const validateNickname = async (input) => {
    // 닉네임 길이 제한 15자
    if (input.length > 15) {
      setIsNicknameValid(false);
      setNickname(input.substring(1, 15));
      return;
    }

    const pattern = /^[\uAC00-\uD7AF\uAE00-\uAEFF\uA960-\uA97F\uAC1C\uAC00-\uD7A3a-zA-Z0-9.,\s!?@#$%^&*()_+|{}[\-=`~;:'"<>\u0020🙂👍👀]*$/;
    // 이모티콘도 허용하면서 한글, 영어, 숫자, 공백, 특수문자 입력 가능
    if (pattern.test(input)) {
      setIsNicknameValid(true);
    } else {
      setIsNicknameValid(false);
    }

    setNickname(input);
  };

  const checkDuplicateNickname = async () => {
    try {
      const signUpSuccess = await AxiosApi.checkNickname(nickname);

      if (signUpSuccess) {
        setIsDuplicate(false);
        console.log('사용 가능한 닉네임입니다.');
      } else {
        setIsDuplicate(true);
        console.log('사용 불가능한 닉네임입니다.');
      }
    } catch (error) {
      console.log('닉네임 확인 에러:', error.message);
    }
  };

  const message = isDuplicate ? '이 닉네임은 이미 존재하는 닉네임입니다.' : '사용 가능한 닉네임입니다.';

  return { nickname, handleChange, validateNickname, isNicknameValid, message, setIsDuplicate, checkDuplicateNickname };
};

export default useNicknameValidation;


