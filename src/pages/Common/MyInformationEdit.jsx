import React,{ useState, useContext, useEffect } from "react";
import styled from "styled-components";
import {LoginContext} from "../../context/AuthContext";
import AxiosApi from "../../api/AxiosAPI";
import { storage } from "../../api/firebase";
import { MyPageTitle } from "../../styles/StyledComponent";

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
  const [isEditing, setIsEditing] = useState(false);
  const {password, setPassword, userId} = useContext(LoginContext);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [intro, setIntro] = useState('');
  const [img, setImg] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [newPassword, setNewPassword]= useState('');

  // 프로필 확인
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await AxiosApi.myProfile(userId);
        const userInfo = response.data;
        const nickname = userInfo.nickname;
        const email = userInfo.email;
        const phone = userInfo.phone;
        const img = userInfo.img;
        const intro = userInfo.intro;
        setNickname(nickname);
        setEmail(email);
        setPhone(phone);
        setImg(img);
        setIntro(intro);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMyProfile();
  }, [userId]);
  

  // 수정하기
  const handleMyInfoChange = (e) => {
    setIntro(e.target.value);
  };

  const handleEditmyInfo = () => {
    setIsEditing(true);
    setIsNotAttach(true);
  };

  // 이미지 초기화 핸들러
  const handleReset = () => {
    setPreviewURL('https://firebasestorage.googleapis.com/v0/b/photo-moida.appspot.com/o/LOGO_imgOnly.png?alt=media&token=28c02812-d6d0-4b84-80f8-ef3103fa8462'); // URL 초기화
    setImg(null);
  };

  const handleMyImgChange = (e) => {
    if (e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImg(selectedImage);

      // 이미지 미리 보기 생성
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSaveMyInfo = async () => {
    setIsEditing(false);
    alert('저장되었습니다');
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

    // 자기소개 수정
    try {
      await AxiosApi.uploadIntro(userId, intro);
      console.log('자기소개가 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.log('자기소개 업데이트 오류:', error.message);
    }
  
    // 비밀번호 수정
    try {
      await AxiosApi.updatePassword(userId, password, newPassword);
      console.log('비밀번호가 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.log('비밀번호 업데이트 오류:', error.message);
    }
    
  
    // 이미지 수정
    if (img !== null) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(img.name);

      try {
        await fileRef.put(img);
        console.log('파일이 성공적으로 업로드되었습니다!');
        const url = await fileRef.getDownloadURL();
        console.log("저장 경로 확인 : " + url);
        setPreviewURL(url);

        try {
          await AxiosApi.uploadImageURL(userId, url);
          console.log('이미지 URL이 성공적으로 업데이트되었습니다.');
        } catch (error) {
          console.log('이미지 URL 업데이트 오류:', error.message);
        }
      } catch (error) {
        console.log('파일 업로드 오류:', error.message);
      }
    } else {
      // 이미지가 null인 경우 "aaa"로 설정
      setImg("https://firebasestorage.googleapis.com/v0/b/photo-moida.appspot.com/o/LOGO_imgOnly.png?alt=media&token=28c02812-d6d0-4b84-80f8-ef3103fa8462");
      setPreviewURL("");
      try {
        await AxiosApi.uploadImageURL(userId, "https://firebasestorage.googleapis.com/v0/b/photo-moida.appspot.com/o/LOGO_imgOnly.png?alt=media&token=28c02812-d6d0-4b84-80f8-ef3103fa8462");
        console.log('이미지 URL이 성공적으로 업데이트되었습니다.');
      } catch (error) {
        console.log('이미지 URL 업데이트 오류:', error.message);
      }
    }
  window.location.reload();
    
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

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };


  
  
 

  return (
          <MyInfoEditBox>
          <MyPageTitle>내 정보</MyPageTitle>
        <div className="infoContainer">
          <ProfileBox>
          {isEditing ? (
          <>{<MyImage src={previewURL || img} alt="이미지 미리보기" />}</>
          ) : (
          <>{img && <MyImage src={img} alt="이미지 미리보기" />}</>
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
          {isEditing ? (
          <>         
          <ButtonBox><InfoText>비밀번호</InfoText>
          <ChangeInput type="password" value={password} onChange={handlePasswordChange}/>
          </ButtonBox>
          <ButtonBox><InfoText>새로운 비밀번호</InfoText>
          <ChangeInput type="password" value={newPassword} onChange={handleNewPasswordChange} />
          </ButtonBox>
          </>
          ) : (
            <></>
          )}
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
            <MyInfoTextarea value={intro} onChange={handleMyInfoChange}/>
            <div className="saveButtonBox"><MyInfoButton onClick={handleSaveMyInfo}>저장</MyInfoButton></div>
            </MyInfoTextChangeBox>
          ) : (
              <Introduce>{intro}</Introduce>
          )}
          </div>
        </div>
        </MyInfoEditBox>
  );
};

export default MyInformationEdit;