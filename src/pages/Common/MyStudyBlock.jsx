import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StudyDesc } from "./StudyDesc";
import plusImg from "../../Images/plus.png";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //


const StyledStudyBlock = styled.div`
display: flex;
flex-direction: row;


.item-1 {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 200px;
    margin-left: 50px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
    cursor: pointer;
}
`;

export const StudyBlock = () => {
    const navigate = useNavigate();

    const onClickCreateStudy = () => {
        navigate('/Study/Create');
    }

    const onClickStudyRoom = () => {
        navigate('/Study/StudyRoom')
    }


    return (
        <StyledStudyBlock>
            <ScrollMenu >

                <div className="item-1">
                    <img className="plusImg" src={plusImg} alt="아이콘" onClick={onClickCreateStudy} />
                </div>
                <div className="item-1" onClick={onClickStudyRoom}>
                    <StudyDesc size={"xs"} study_profile={"#fffff"}
                        study_name={"백준방범대"}
                        study_tag={"#코딩 #자바"}
                        study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."}
                        isMember={1} />
                </div>
                <div className="item-1" onClick={onClickStudyRoom}>
                    <StudyDesc size={"xs"} study_profile={"#fffff"}
                        study_name={"백준방범대"}
                        study_tag={"#코딩 #자바"}
                        study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."}
                        isMember={1} />
                </div>
            </ScrollMenu>
        </StyledStudyBlock>
    );
};