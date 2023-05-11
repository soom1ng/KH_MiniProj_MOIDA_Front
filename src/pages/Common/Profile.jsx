import styled from "styled-components";
import LOGO_imgOnly from "../../Images/LOGO_imgOnly.png"


const ProfileContainer = styled.div`
display: flex;
width: 200px;
`;
// 이미지
const MyImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  justify-items: center;
  border-radius: 100%;
`;

const InfoText = styled.p`
  font-size: 19px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 0;
`;

const MyInfo = styled.div`
  font-weight: bold;
  font-size: 19px;
  margin-left: 10px;
`;



export const Profile = ({showMyImgInPut, myImg, nickname}) => {

    return (
        <ProfileContainer>
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