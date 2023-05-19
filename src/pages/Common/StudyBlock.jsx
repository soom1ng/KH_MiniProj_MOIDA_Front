import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CountMem } from "./CountMem";
import { StudyDesc } from "./StudyDesc";

const StyledStudy = styled.div`
  background-color: white;
  width: 1075px;
  height: 190px;
  display: flex;
  align-items: center;
  vertical-align : middle;
  margin-right: 30px;
  justify-content: space-between;
  padding: 25px 25px 25px 50px;
  border-radius: 10px;
  margin: 30px 0 30px 0;
  text-align: left;
  cursor: pointer;

  
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }
  
  div {
    display: flex;
    height: 100%;
    /* justify-content: space-between; */
  }
  
    .studyColor {
      width: 40px;
      height: 40px;
      object-fit: cover;
      justify-items: center;
      margin-right: 10px;
      border-radius: 100%;
      background-color: #c7f5ff;
    }

    .studyTitle {
      display: flex;
      flex-direction: row;
      width: 100%;
      font-size: 2.5em;
      font-weight: bold;
    }

    .studydesc {
      width: 100%;
      margin-left: 100px;
      font-size: 1.6rem;
      color: gray;
      height: auto;
    }

    .studytag {     
      width: 100%;
      margin-top: 30px;
      margin-left: 100px;
      font-size: 1.6rem;
      color: #000;
      height: auto;
  }


    .countMem {
      display: flex;
      flex-direction: column;
      margin: 0;
      margin-right: 20px;
      align-items: center;
    }
`;

export const Study = ({studyId, studyProfile, studyTitle, studyIntro, studyTag, studyDate, studyUserLimit, studyUserCount})  => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/study/studyroom/Main/${studyId}`)
  }

  return (
    <StyledStudy onClick={onClick}>

      <StudyDesc size={"l"} study_profile={studyProfile}
        study_name={studyTitle}
        study_tag={studyTag}
        study_intro={studyIntro}
        isTagTitle={1}
      ></StudyDesc>

      {/* <div className="studyTitle">
          <div className="studyColor"></div>
          {study_title}
          <Profile></Profile>
        </div>
        <div className="studydesc">{studydesc}</div>
        <div className="studytag">{studytag}</div> */}

      {/* <div className="button" onClick={onClick}>
        <InputButton>참가하기</InputButton>
      </div> */}

      <div className="countMem">
        <h1><CountMem
          size={"l"}
          study_user_count={studyUserCount}
          study_user_limit={studyUserLimit} /></h1>
        <p style={{ fontSize: "15px" }}>{studyDate}</p>
      </div>


    </StyledStudy>
  );
};