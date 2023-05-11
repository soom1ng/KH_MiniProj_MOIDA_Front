import React from "react";
import styled, { css } from "styled-components";
import userImg from "../../Images/user.png";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";

// <StudyInfo
// study_profile={"#fffff"}
// study_name = {"스터디이름"}
// study_tag = {"#태그#태그"}
// study_link={"http://naver.com"}
// study_intro={"스터디 설명입니다."}
// study_mgr_id={"닉네임"}
// study_user_limit={"20"}
// study_user_count={"2"}
// />


const SIZES = {
    s: css`
        --width: 450px;
        --height: 220px;
        --padding-left: 30px;
        --padding-top: 20px;
        --border-bottom: 1.5px solid black;
        --bodyWidth: 0;
      `,

    l: css`
        --width: 1000px;
        --height : 220px;
        --top: 90px;
        --left:200px;
        --padding-left: 60px;
        --padding-top: 20px;
        --border-bottom: 1px solid gray;
        --bodyWidth: 500px;
      `
}


// 스터디 정보 Nav
const StyledStudyInfo = styled.div`
    ${(p) => p.sizeStyle}

    /* display: flex;
    flex-direction: row; */
    width: var(--width);
    border-bottom: var(--border-bottom);
    height: var(--height);
    position: relative;
    background-color: white;
    top: var(--top);
    left:var(--left);
    padding-left: var(--padding-left);
    padding-top: var(--padding-top);
    z-index: 0;

    .StudyProfile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #E2fff9;
        display: flex;
        margin: 15px;
        margin-left: 0px;
    }

    .chatLink {
        width: 400px;
        display: flex;
        flex-direction: row;
    }

    .StudyName {      
        display: flex;
        align-items: center;
        font-size: 3em;
        font-weight: bold;
        cursor: pointer;
    }

    .TagContainer{
        display: flex;
        align-items: center;
    }

    .descContainer {
        display: flex;
        flex-direction: column;
        margin-top: 15px ;
        margin-bottom: -20px ;
    }


    .person{
        width: 15px;
        height: 15px;
        margin-left: 30px;
        margin-right: 8px;
    }

    .item1{
        margin-right: 30px;
        font-size: 1.5em;
        font-weight: bold;
    }

    .item2{
        margin-right: 30px;
    }

    .itemPerson{
        margin-left: auto;
        margin-right: 15px;
        font-size: 18px;
    }

    .itemText{
        font-size:1.8em;
    }
`;

const Body = styled.form`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
`;

const Body1 = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
`;

const Body2 = styled.div`
${(p) => p.sizeStyle}
  display: flex;
  width: var(--bodyWidth);
`;

const StyledInnerContainer = styled.div`

.StudyContainer{
    display: flex;
    align-items: center;
}
`;

const InnerContainer = ({ study_link, study_user_limit, study_user_count }) => {
    return (

        <StyledInnerContainer>
            <div className='descContainer'>
                <Profile nickname={"뇽뇽이"} />
                <div className="chatLink">
                    <h2 className='item2'>채팅방</h2>
                    <h2> {study_link} </h2>
                </div>
            </div>
            <h2 className='itemPerson'>참가자<img className='person' src={userImg} />{study_user_count}/{study_user_limit}</h2>

        </StyledInnerContainer>
    )
};

export const StudyInfo = ({ size, study_profile, study_name, study_tag, study_intro, isBasic }) => {
    const sizeStyle = SIZES[size];


    return (
        <StyledStudyInfo sizeStyle={sizeStyle}>
            <Body>
                <Body1>
                    <div className='StudyName'>

                        <div className='StudyProfile' style={{ backgroundColor: `${study_profile}` }}></div>
                        <Link to="/Study/StudyRoom" style={{ textDecoration: "none", color: "#111" }}>{study_name}</Link>
                    </div>
                    <p className="itemText">{study_intro}</p>
                    <div className='TagContainer'>
                        <div className='item1'>태그</div>
                        <div className="item1">{study_tag}</div>
                    </div>
                </Body1>

                <Body2>
                    {/* 값이 있으면 무조건 TRUE */}
                    {isBasic ? <InnerContainer

                        study_link={"http://naver.com"}
                        study_user_count={"2"}
                        study_user_limit={"20"}></InnerContainer> : <></>}

                </Body2>
            </Body>
        </StyledStudyInfo>
    );
};


