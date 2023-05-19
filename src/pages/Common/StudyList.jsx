import styled from "styled-components";
import menuImg from "../../Images/menu.png"
import { Study } from "./StudyBlock";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosApi from "../../api/AxiosAPI";

const StyledStudyList = styled.div`
    margin-top: 70px;
    display: flex;
    width: 1200px;
    flex-direction: column;
    background-color: #f1f1f1;
    height: 1150px;

    .study_menu {
    display: flex;
    flex-direction: row;
    }

    .title_all {
        padding : 30px 20px 0px 60px;
        width: 500px;
    }

    .menuImg {
        width: 60px;
        height: 50px;
        margin : 50px 60px 0px 750px;
    }

    .new_study {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;


export const StudyList = () => {
    const navigate = useNavigate();
    const[studyInfo, setStudyInfo] = useState([]);

    const onClickStudyList = () => {
        navigate('/study/list');
    }

    const disPlayCount = 5;
    useEffect(() => {
        const studyInfo = async() => {
            const rsp = await AxiosApi.studyListGet(); // 전체 조회
            if(rsp.status === 200) setStudyInfo(rsp.data);
            console.log(rsp.data);
        };
        studyInfo();
    }, []);

    return (
        <StyledStudyList>

            <div className="study_menu">
                <h1 className="title_all">New✨ 스터디💬</h1>
                <img className="menuImg" src={menuImg} alt="아이콘" onClick={onClickStudyList} />
            </div>
            <div className="new_study">
                {studyInfo && studyInfo.slice(0, disPlayCount).map(study => (
                    <Study 
                    key={study.studyId}
                    studyId={study.studyId}
                    studyTitle={study.studyName}
                    studyIntro={study.studyIntro}
                    studyTag={study.tagName}
                    studyDate={study.studyDeadline}
                    studyUserCount={study.studyUserCount}
                    studyUserLimit={study.studyUserLimit}
                    studyProfile={study.studyProfile}
                    ></Study>
                ))}
                </div>

        </StyledStudyList>
    );
};