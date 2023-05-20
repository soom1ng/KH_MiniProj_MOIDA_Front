import { Link, useNavigate, useParams } from "react-router-dom";
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
        /* background-color: #E2fff9; */
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
    .title{
        font-size: 27px;
        margin: 0;
    }

`;

export const StudyDesc = ({ size, studyId, study_profile, study_name, study_tag, study_intro, isMember, isTagTitle, study_user_count, study_user_limit }) => {
    const sizeStyle = SIZES[size];
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/study/studyRoom/Main/${studyId}`)
      }

    return (
        <StyledStudyDesc onClick={onClick} sizeStyle={sizeStyle}>
            <div className="box">
                <div className='StudyName'>
                <div className='StudyProfile' style={{ backgroundColor: study_profile}}></div>

                    <h2 className="title">{study_name}</h2>
                </div>

                <h2>{isMember ? <CountMem
                    size={"s"}
                    study_user_count={study_user_count}
                    study_user_limit={study_user_limit}></CountMem> : <></>}</h2>

            </div>
            <p className="itemText">{study_intro}</p>
            <div className='TagContainer'>
                {isTagTitle ?
                    <div className="item1" >태그</div> : <></>}
                <div className="item1">{study_tag}</div>
            </div>
        </StyledStudyDesc>
    );
};
