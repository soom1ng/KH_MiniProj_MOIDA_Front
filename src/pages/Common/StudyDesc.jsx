import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { CountMem } from "./CountMem";


const SIZES = {
    xs: css`
    --descWidth: 300px; 
    --justify-content: right;
    --margin-left: 15px;
  `,
  
    s: css`
        --descWidth: 450px; 
        --padding-right: 20px;
      `,

    l: css`
        --descWidth: 800px;
        --padding-right: 20px;
      `
}

const StyledStudyDesc = styled.div`
  ${(p) => p.sizeStyle}
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-left: var(--margin-left);

    .box {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .StudyName {      
        display: flex;
        align-items: center;
        font-size: 2.8em;
        font-weight: bold;
        cursor: pointer;
        margin-right: 25px;
    }
    
    .StudyProfile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #E2fff9;
        display: flex;
        margin: 10px;
        margin-left: 0px;
    }

    .itemText{
        font-size:1.6em;
        padding-right: var(--padding-right);
        width: var(--descWidth);
    }

    .TagContainer{
        display: flex;
        align-items: center;
        justify-content: var(--justify-content);
    }

    .item1{
        margin-right: 30px;
        font-size: 1.5em;
        font-weight: bold;
    }

`;

export const StudyDesc = ({ size, study_profile, study_name, study_tag, study_intro, isMember, isTagTitle }) => {
    const sizeStyle = SIZES[size];

    return (
        <StyledStudyDesc sizeStyle={sizeStyle}>
            <div className="box">
                <div className='StudyName'>
                    <div className='StudyProfile' style={{ backgroundColor: `${study_profile}` }}></div>
                    <Link to="/Study/StudyRoom" style={{ textDecoration: "none", color: "#111" }}>{study_name}</Link>
                </div>

                <h2>{isMember ? <CountMem
                    size={"s"}
                    study_user_count={"2"}
                    study_user_limit={"20"}></CountMem> : <></>}</h2>

            </div>
            <p className="itemText">{study_intro}</p>
            <div className='TagContainer'>
                {isTagTitle ?
                    <div className='item1'>태그</div> : <></>}
                <div className="item1">{study_tag}</div>
            </div>
        </StyledStudyDesc>
    );
};
