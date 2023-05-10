import styled from "styled-components";

const Container = styled.div`

  .myPageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    background-color: #F3F3F3;
  }

  .studyContainer {
    display: flex;
    width: 800px;
    margin-bottom: 50px;
  }

  .studyItemContainer{
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 200px;
    margin-right: 50px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
  }
`
const ProfileBox = styled.div`
  display: flex;
  margin: 20px;
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
  margin-bottom: 4px;
`;

const MyInfo = styled.div`
  font-size: 19px;
  margin: 0px 20px 20px 10px;
`;

const InfoTextPhone = styled.div`
  display: flex;
  font-size: 19px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 38px;
  margin-bottom: 4px;
`;



export const MyInformation = ({ showMyImgInPut, myImg, logoImgOnly, nickname, phone, email, myInfo, showPrivacy}) => {
  return (
    <Container>
      <div className="infoContainer">
        <ProfileBox>
          {showMyImgInPut ? (
            <MyImage src={showMyImgInPut} alt="이미지 미리보기" />
          ) : (
            myImg ? (
              <MyImage src={URL.createObjectURL(myImg)} alt="이미지 미리보기" />
            ) : (
              <MyImage src={logoImgOnly} alt="기본 이미지" />
            )
          )}
          <MyInfo>{nickname}</MyInfo>
          <InfoText>님</InfoText>
        </ProfileBox>

        {showPrivacy && (
          <div>
            <InfoTextPhone>번호 </InfoTextPhone>
            <MyInfo>{phone}</MyInfo>

            <InfoText>이메일</InfoText>
            <MyInfo>{email}</MyInfo>
          </div>
        )}

        <div>
          <InfoText>자기소개 </InfoText>
          <MyInfo>{myInfo}</MyInfo>
        </div>
      </div>
    </Container>
  );
};
