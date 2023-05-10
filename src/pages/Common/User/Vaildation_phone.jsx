//회원가입, 로그인, 비밀번호/아이디 찾기, 회원 탈퇴, 마이페이지 수정에 쓰일 유효성 검사
import { useState, useEffect } from "react";

function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isDuplicated, setIsDuplicated] = useState(false);

  useEffect(() => {
    const validatePhoneNumber = () => {
      const isValid = phoneNumber.length === 11;
      setIsValid(isValid);
      return isValid;
    };

    const checkPhoneNumberDuplicate = async () => {
      const response = await fetch("/api/checkPhoneNumberDuplicate", {
        method: "POST",
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await response.json();
      return data.isDuplicated;
    };

    if (validatePhoneNumber()) {
      checkPhoneNumberDuplicate().then((duplicated) => {
        setIsDuplicated(duplicated);
      });
    }
  }, [phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && !isDuplicated) {
      fetch("/api/savePhoneNumber", {
        method: "POST",
        body: JSON.stringify({ phoneNumber }),
      });
    }
  };

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validatePhoneNumber = () => {
    const isValid = phoneNumber.length === 11;
    setIsValid(isValid);
    return isValid;
  };

  return [phoneNumber, handleSubmit, handleChange, validatePhoneNumber];
}


export default PhoneNumberForm;