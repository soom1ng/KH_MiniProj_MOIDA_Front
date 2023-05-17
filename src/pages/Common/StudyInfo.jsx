import React from "react";
import styled, { css } from "styled-components";
import { Profile } from "./Profile";
import { CountMem } from "./CountMem";
import { StudyDesc } from "./StudyDesc";

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

    .chatLink {
        width: 400px;
        display: flex;
        flex-direction: row;
    }

    .countMem {
        display: flex;
        flex-direction: row;
        width: 300px;
        align-items: left;
    }

    .descContainer {
        display: flex;
        flex-direction: column;
        margin-top: 15px ;
        margin-bottom: -20px ;
    }

    .item2{
        margin-right: 30px;
    }

    .itemPerson{
        font-size: 18px;
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

const InnerContainer = ({ study_link }) => {
    return (

        <StyledInnerContainer>
            <div className='descContainer'>
                <Profile size={'s'} nickname={"뇽뇽이"} />
                <div className="chatLink">
                    <h2 className='item2'>채팅방</h2>
                    <h2> {study_link} </h2>
                </div>
            </div>

            <div className="countMem">
                <h2 className='itemPerson'>참가자</h2>
                <h2><CountMem
                    size={"s"}
                    study_user_count={"2"}
                    study_user_limit={"20"} /></h2>
            </div>

        </StyledInnerContainer>
    )
};

export const StudyInfo = ({ size, isBasic }) => {
    const sizeStyle = SIZES[size];


    return (
        <StyledStudyInfo sizeStyle={sizeStyle}>
            <Body>
                <Body1>
                    <StudyDesc
                        size={"s"} study_profile={"#fffff"}
                        study_name={"백준방범대"}
                        study_tag={"#코딩 #자바"}
                        study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."}
                        isTagTitle={1} 
                    ></StudyDesc>
                </Body1>

                <Body2>
                    {/* 값이 있으면 무조건 TRUE */}
                    {isBasic ? <InnerContainer
                        study_link={"http://naver.com"}
                    ></InnerContainer> : <></>}

                </Body2>
            </Body>
        </StyledStudyInfo>
    );
};


