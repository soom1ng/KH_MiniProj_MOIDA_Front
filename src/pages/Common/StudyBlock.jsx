import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputButton } from "../../styles/StyledComponent";
// import { Profile } from "../Common/Profile";



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

  
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }
  
  div {
    display: flex;
    height: 100%;
    align-items: center;
    /* justify-content: space-between; */
  }
  
  .board-body-text {
    width: 700px;
    padding: 5px 25px 5px 25px;
    display: flex;
    flex-direction: column;
 
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
      height: auto;}
  }
  
  .button{
      display: flex ;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 30px;
    }
`;

export const Study = ({ study_title, studydesc, studytag }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/Study/Studyroom`)
  }

  return (
    <StyledStudy>

      <div className="board-body-text">
        <div className="studyTitle">
          <div className="studyColor"></div>
          {study_title}
          {/* <Profile></Profile> */}
        </div>
        <div className="studydesc">{studydesc}</div>
        <div className="studytag">{studytag}</div>
      </div>

      <div className="button" onClick={onClick}>
        <InputButton>참가하기</InputButton>
      </div>


    </StyledStudy>
  );
};