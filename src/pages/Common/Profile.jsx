import React,{ useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";
//import LOGO_imgOnly from "../../Images/LOGO_imgOnly.png"
import {LoginContext} from "../../context/AuthContext"
//import { storage } from "../../api/firebase";
import AxiosApi from "../../api/AxiosAPI";

const SIZES = {
  s: css`
      --width: 32px;
      --height: 32px;
      --fontsize1 : 19px;
      --fontsize2 : 19px;
    `,

  l: css`
      --width: 50px;
      --height : 50px;
      --fontsize1 : 28px;
      --fontsize2 : 28px;
    `
}

const ProfileContainer = styled.div`
  ${(p) => p.sizeStyle}
  display: flex;
  width: 200px;
  padding: 10px;
`;

const MyImage = styled.img`
  width: var(--width);
  height: var(--height);
  object-fit: cover;
  justify-items: center;
  border-radius: 100%;
`;

const InfoText = styled.p`
  font-size: var(--fontsize1);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 0;
`;

const MyInfo = styled.div`
  font-weight: bold;
  font-size: var(--fontsize2);
  margin-left: 10px;
`;


export const Profile = ({ size, isStroom, userName }) => {
  const sizeStyle = SIZES[size];
  const { userId } = useContext(LoginContext);
  const [img, setImg] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await AxiosApi.myProfile(userId);
        const userInfo = response.data;
        const nickname = userInfo.nickname;
        const img = userInfo.img;
        setNickname(nickname);
        setImg(img);
        console.log(response.data); // 응답 데이터는 response.data에서 사용 가능
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    };
    fetchMyProfile();
  }, [userId]);

  useEffect(() => {
    // img 상태가 변경되었을 때 실행되는 변환 작업
    convertImage(img);
  }, [img]);

  const convertImage = (image) => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const convertedImage = reader.result;
        console.log(convertedImage);
        // 변환된 이미지를 필요한 형식으로 사용
      };

      if (image instanceof File) {
        reader.readAsDataURL(image);
      } else if (typeof image === 'string') {
        reader.readAsDataURL(new Blob([image], { type: 'image/jpeg' }));
      }
    }
  };

  
  return (
    <ProfileContainer sizeStyle={sizeStyle}>
      <MyImage src={img} alt="이미지 미리보기" />
      {isStroom ? <MyInfo>{userName}</MyInfo> : <MyInfo>{nickname}</MyInfo>}
      <InfoText>{}님</InfoText>
    </ProfileContainer>
  );
};