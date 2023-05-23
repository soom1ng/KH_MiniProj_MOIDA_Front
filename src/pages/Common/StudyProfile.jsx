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

export const StudyProfile = ({ size, userName, Img, isImg}) => {
  const sizeStyle = SIZES[size];
  // const [img, setImg] = useState(null);
  // setImg(Img);

  return (
    <ProfileContainer sizeStyle={sizeStyle}>
    {isImg ? (
      <>
        <MyImage src={Img} alt="이미지 미리보기" />
        <InfoText>{userName}님</InfoText>
      </>
    ) : (
      <InfoText> 👑{userName}님</InfoText>
    )}
  </ProfileContainer>
  );
};
