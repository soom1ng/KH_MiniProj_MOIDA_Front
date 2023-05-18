import React,{ useState, useContext } from "react";
import styled from "styled-components";
import LOGO_imgOnly from "../../Images/LOGO_imgOnly.png";
import {LoginContext} from "../../context/AuthContext";
import AxiosApi from "../../api/AxiosAPI";

// ---------------------------------다혜 수정예정------------------------------------- //
// ---------------------------------다혜 수정예정------------------------------------- //
// ---------------------------------다혜 수정예정------------------------------------- //
// ---------------------------------다혜 수정예정------------------------------------- //
// ---------------------------------다혜 수정예정------------------------------------- //
// ---------------------------------다혜 수정예정------------------------------------- //

const MyInfoEditBox = styled.div`

  .myPageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    background-color: #F3F3F3;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 15px 15px 15px 30px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
    margin-bottom: 50px;
  }
  
  .nickNameBox{
    display: flex;
    width: 100%;
  }

  .editButtonBox{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .saveButtonBox{
    display: flex;
    width: 100%;
    justify-content: right;
    padding-right: 32px;
  }
  
  .infoBox{
    margin-left: 20px;
  }
  
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 16px;
`;

const InfoText = styled.div`
  display: flex;
  font-size: 19px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-right: 20px;
  margin-bottom: 4px;
`;

const InfoTextPhone = styled.div`
  display: flex;
  font-size: 19px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-right: 38px;
  margin-bottom: 4px;
`;


const MyInfoTextChangeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

//자기소개
const MyInfoTextarea = styled.textarea`
  display: flex;
  width: 700px;
  height: 150px;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  color: #a1a1a1;
  border: 1.5px solid #e4e4e4;
  border-radius: 10px;
  resize: none;
`;

//저장, 수정하기 버튼
const MyInfoButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #6E53F4;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #543ad4;
  }
`;

// 이미지
const MyImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  justify-items: center;
  border-radius: 100%;
`;

const ProfileBox = styled.div`
  display: flex;
  margin: 20px;
`;

// 자기소개 완성 후
const MyInfo = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin: 0px 10px;
`;

const Introduce = styled.div`
  font-size: 19px;
  margin: 0px 0px 20px 0px;
`;

// 이미지 초기화
const MiniButton = styled.button`
  width: 85px;
  height: 23px;
  color: white;
  margin-right: 10px;
  background-color: #6E53F4;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #543ad4;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 10px;
`;

const ChangeInput = styled.input`
  display: flex;
  padding: 1px 2px;
  font-size: 15px;
  height: 30px;
  width: 300px;
  margin-bottom: 20px;
  border: 1.5px solid #e4e4e4;
  border-radius: 5px;
`;
const ChangeNickname = styled.input`
  display: flex;
  padding: 1px 2px;
  margin: 0px 10px;
  font-size: 15px;
  height: 30px;
  width: 150px;
  border: 1.5px solid #e4e4e4;
  border-radius: 5px;
`;



const MyInformationEdit = () => {

  const [isNotAttach, setIsNotAttach] = useState(false)
  const [myImg, setMyImg] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [myInfo, setMyInfo] = useState('자기 소개를 입력하세요.');
  const {nickname, setNickname, password, setPassword, phone, setPhone, email, setEmail, userId} = useContext(LoginContext);
  const [showMyImgInPut, setShowMyImgInPut] = useState(null);


  // 수정하기
  const handleMyInfoChange = (e) => {
    setMyInfo(e.target.value);
  };

  const handleEditmyInfo = () => {
    setIsEditing(true);
    setIsNotAttach(true);
  };

  const handleMyImgChange = (event) => {
    const myImg = event.target.files[0];
    if (myImg) {
      setMyImg(myImg); // 선택된 파일 정보를 상태로 저장
      const reader = new FileReader();
      reader.onloadend = () => {
        setShowMyImgInPut(reader.result);
      };
      reader.readAsDataURL(myImg);
    } else {
      setShowMyImgInPut(null);
      setMyImg(null); // 파일이 선택되지 않은 경우 상태 초기화
    }
  };

  // 이미지 초기화 핸들러
  const handleReset = () => {
    setShowMyImgInPut(null);
    setMyImg(null); 
  };

  const handleSaveMyInfo = async () => {
    setIsEditing(false);
    alert('저장되었습니다: ' + nickname + ', ' + email + ', ' + password);
    setIsNotAttach(false);
  
    try {
      await AxiosApi.updateNickname(userId, nickname);
      console.log('닉네임이 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.log('닉네임 업데이트 오류:', error.message);
    }

    try {
      await AxiosApi.updateEmail(userId, email);
      console.log('이메일이 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.log('이메일 업데이트 오류:', error.message);
    }

    try {
      await AxiosApi.updatePhone(userId, phone);
      console.log('번호가 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.log('번호 업데이트 오류:', error.message);
    }
  };
  

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
 

  return (
          <MyInfoEditBox>
          <Title>내 정보</Title>
        <div className="infoContainer">
          <ProfileBox>
          {showMyImgInPut ? (
            <MyImage src={showMyImgInPut} alt="이미지 미리보기" />
          ) : (
            myImg ? ( // 선택된 파일이 있으면 파일 미리보기
              <MyImage src={URL.createObjectURL(myImg)} alt="이미지 미리보기" />
            ) : ( // 선택된 파일이 없으면 기본 이미지 보여주기
              <MyImage src={LOGO_imgOnly} alt="기본 이미지"/>
            )
          )}
        <div className="editButtonBox">
          <div className="nickNameBox">
        {isEditing ? (
          <>
            <ChangeNickname type="text" value={nickname} onChange={handleNicknameChange} />
          </>
        ) : (
          <>
            <MyInfo>{nickname}</MyInfo>
          </>
        )}
          <InfoText>님</InfoText>
        </div>

          {isEditing ? (
            <>
            </>
          ) : (
              <MyInfoButton onClick={handleEditmyInfo}>수정</MyInfoButton>
          )}</div>

          </ProfileBox>
          <div className="infoBox">
          <ButtonBox>
          {isNotAttach && <MiniButton onClick={handleReset}>기본 이미지</MiniButton>}
          {isNotAttach && <input type="file" onChange={handleMyImgChange} /> }
          </ButtonBox></div>
          
          <div className="infoBox">
          <ButtonBox><InfoText>비밀번호</InfoText>
          {isEditing ? (
          <ChangeInput type="password" value={password} onChange={handlePasswordChange} />
          ) : (
            <MyInfo>{password}</MyInfo>
          )}</ButtonBox>
          <ButtonBox><InfoTextPhone>번호 </InfoTextPhone>
          {isEditing ? (
          <ChangeInput type="text" value={phone} onChange={handlePhoneChange} />
          ) : (
            <MyInfo>{phone}</MyInfo>
          )}</ButtonBox>
          <ButtonBox><InfoText>이메일</InfoText>
          {isEditing ? (
          <ChangeInput type="email" value={email} onChange={handleEmailChange} />
          ) : (
            <MyInfo>{email}</MyInfo>
          )}</ButtonBox>
          
          <InfoText>자기소개 </InfoText>
          {isEditing ? (
            <MyInfoTextChangeBox>
            <MyInfoTextarea value={myInfo} onChange={handleMyInfoChange}/>
            <div className="saveButtonBox"><MyInfoButton onClick={handleSaveMyInfo}>저장</MyInfoButton></div>
           
            </MyInfoTextChangeBox>
          ) : (
              <Introduce>{myInfo}</Introduce>
          )}
          </div>
        </div>
        </MyInfoEditBox>
  );
};

export default MyInformationEdit;