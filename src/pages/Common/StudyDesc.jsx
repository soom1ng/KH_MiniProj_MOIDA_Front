import { Link } from "react-router-dom";
import styled, { css } from "styled-components";


const SIZES = {
    s: css`
        --descWidth: 450px; 
      `,

    l: css`
        --descWidth: 800px;
      `
  }

const StyledStudyDesc = styled.div`
  ${(p) => p.sizeStyle}
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

.StudyName {      
        display: flex;
        align-items: center;
        font-size: 3em;
        font-weight: bold;
        cursor: pointer;
    }
    
    .StudyProfile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #E2fff9;
        display: flex;
        margin: 10px;
        margin-left: 0px;
    }

    .itemText{
        font-size:1.6em;
        padding-right: 20px;
        width: var(--descWidth);
    }
    .TagContainer{
        display: flex;
        align-items: center;
    }

    .item1{
        margin-right: 30px;
        font-size: 1.5em;
        font-weight: bold;
    }




`;

export const StudyDesc = ( {size, study_profile, study_name, study_tag, study_intro  } ) => {
    const sizeStyle = SIZES[size];

    return (
        <StyledStudyDesc sizeStyle={sizeStyle}>
<div className='StudyName'>

<div className='StudyProfile' style={{ backgroundColor: `${study_profile}` }}></div>
<Link to="/Study/StudyRoom" style={{ textDecoration: "none", color: "#111" }}>{study_name}</Link>
</div>
<p className="itemText">{study_intro}</p>
<div className='TagContainer'>
<div className='item1'>태그</div>
<div className="item1">{study_tag}</div>
</div>
        </StyledStudyDesc>
    ) ;
};
