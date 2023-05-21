import React,{ useState, useContext } from "react";
import styled, { css } from "styled-components";
import LOGO_imgOnly from "../../Images/LOGO_imgOnly.png"
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

  AxiosApi.myProfile(userId)
  .then(response => {
    const userInfo = response.data;
    const nickname = userInfo.nickname;
    const img = userInfo.img;
    setNickname(nickname);
    setImg(img);
    console.log(response.data); // 응답 데이터는 response.data에서 사용 가능
  })
  .catch(error => {
    // 오류 처리
    console.error(error);
  });

  return (
    <ProfileContainer sizeStyle={sizeStyle}>
      <MyImage src={img} alt="이미지 미리보기" />
      {isStroom ? <MyInfo>{userName}</MyInfo> : <MyInfo>{nickname}</MyInfo>}
      <InfoText>님</InfoText>
    </ProfileContainer>
  );
};
