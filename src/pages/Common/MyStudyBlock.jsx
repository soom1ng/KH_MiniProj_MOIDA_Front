import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { StudyDesc } from "./StudyDesc";
import plusImg from "../../Images/plus.png";
import { useContext } from "react";
import { LoginContext } from "../../context/AuthContext";

const StyledMyStudyBlock = styled.div`

    .plusImg {
    width: 50px;
    height: 50px;
    }

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

export const MyStudyBlock = ({ isNew }) => {
    const navigate = useNavigate();
    const studyId = useParams();
    const onClickCreateStudy = () => {
        navigate('/study/create');
    }
    const onClickStudyRoom = () => {
        navigate(`/study/studyRoom/Main/${studyId}`)
    }



    return (
        <StyledMyStudyBlock>
            <div className="create">

                {/* 값이 있으면 무조건 TRUE */}
                {isNew ?
                    <div className="item-1" onClick={onClickCreateStudy}>
                        <img className="plusImg" src={plusImg} alt="아이콘" />
                    </div>
                    :
                    <div className="item-1" onClick={onClickStudyRoom}>
                        <StudyDesc size={"xs"} study_profile={"#fffff"}
                            study_name={"백준방범대"}
                            study_tag={"#코딩 #자바"}
                            study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."}
                            isMember={1} />
                    </div>}
            </div>


        </StyledMyStudyBlock>
    );
};