import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { StudyDesc } from "./StudyDesc";
import plusImg from "../../Images/plus.png";

const StyledMyStudyBlock = styled.div`

    .plusImg {
    width: 50px;
    height: 50px;
    }

    .study-block {
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        width: 340px;
        height: 200px;
        margin: 0 30px;
        border: 1px solid #F3F3F3;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const MyStudyBlock = ({ isCreate }) => {
    const navigate = useNavigate();
    const studyId = useParams();
    const onClickCreateStudy = () => {
        navigate('/study/create');
    }
    const onClickStudyRoom = () => {
        navigate(`/study/studyRoom/Main/${studyId}`)
    }



    return (
        <StyledMyStudyBlock >

                <div>
                    {/* 값이 있으면 무조건 TRUE */}
                    {isCreate ? <div className="study-block" onClick={onClickCreateStudy}>
                             <img className="plusImg" src={plusImg} alt="아이콘" />
                             </div>
                        :
                        <div className="study-block" onClick={onClickStudyRoom}>
                            <StudyDesc size={"xs"} study_profile={"#fffff"}
                                study_name={"백준방범대"}
                                study_tag={"#코딩 #자바"}
                                study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."}
                                isMember={1} />
                        </div>
                    }
                </div> 
        </StyledMyStudyBlock>
    );
};