import styled, { css } from "styled-components";
import LOGO_imgOnly from "../../Images/LOGO_imgOnly.png"


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


  // 이미지
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



export const Profile = ({ size, showMyImgInPut, myImg, nickname }) => {

  const sizeStyle = SIZES[size];

    return (
        <ProfileContainer sizeStyle={sizeStyle}>
          {showMyImgInPut ? (
            <MyImage src={showMyImgInPut} alt="이미지 미리보기" />
          ) : (
            myImg ? ( // 선택된 파일이 있으면 파일 미리보기
              <MyImage src={URL.createObjectURL(myImg)} alt="이미지 미리보기" />
            ) : ( // 선택된 파일이 없으면 기본 이미지 보여주기
              <MyImage src={LOGO_imgOnly} alt="기본 이미지"/>
            )
          )}
            <MyInfo>{nickname}</MyInfo>
            <InfoText>님</InfoText>
        </ProfileContainer>
    );    
};