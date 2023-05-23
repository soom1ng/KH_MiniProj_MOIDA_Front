import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { StudyDesc } from "./StudyDesc";
import plusImg from "../../Images/plus.png";
import deleteBoard from "../../Images/trash-can.png";
import { AlignCenter } from "react-bootstrap-icons";
import { useContext } from "react";
import { LoginContext } from "../../context/AuthContext";
import AxiosApi from "../../api/AxiosAPI";



const StyledMyStudyBlock = styled.div`

.delete{
    margin-top: 10px;
    margin-left: 270px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

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
        margin: 0 20px;
        border: 1px solid #F3F3F3;
        border-radius: 10px;
        cursor: pointer;
    }
`;

const MenuImg = styled.img`
width: 18px;
height: 18px;
margin-right: 3px;
text-align: left;
`;

export const MyStudyBlock = ({ isDelete, isCreate, isEmpty, studyId, studyProfile, studyTitle, studyIntro, studyTag, studyUserLimit, studyUserCount }) => {
    const navigate = useNavigate();
    const {userId} = useContext(LoginContext);
    console.log(`userId 입니다 : ${userId}`);
    const onClickCreateStudy = () => {
        if(userId != ''){
            navigate('/study/create');
        }else{
            alert("로그인이 필요합니다 !😀")
            navigate('/signin');
        }
       
    }


    const onclickDelete = async() => {
        
        await AxiosApi.studyDrop(studyId, userId);
        window.location.reload();
        alert("스터디가 삭제되었어요 !😭");
    
    }
   

    return (
        <StyledMyStudyBlock >
                <div>
                    {/* 값이 있으면 무조건 TRUE */}
                    {isCreate ? <div className="pagebox"> 
                        { isEmpty ? <>
                        <h2>내가 만든 스터디가 없습니다. </h2>

                        {/* <br/> 생성을 원하시면 오른쪽 버튼을 클릭하세요. */}
                        
                        {/* <div className="study-block" onClick={onClickCreateStudy}>
                            <img className="plusImg" src={plusImg} alt="아이콘" />
                        </div> */}
                        </>
                        :
                        <div className="study-block" onClick={onClickCreateStudy}>
                            <img className="plusImg" src={plusImg} alt="아이콘" />
                        </div>

                        }
                    </div>
                    :
                    <>
                    <div className="study-block">
                        <StudyDesc
                            studyId={studyId}
                            size={"xs"}
                            study_profile={studyProfile}
                            study_name={studyTitle}
                            study_tag={studyTag}
                            study_intro={studyIntro}
                            isMember={1}
                            study_user_count={studyUserCount}
                            study_user_limit={studyUserLimit} />
                    </div>
                    { isDelete ? 
                    <div className="delete" onClick={onclickDelete}><MenuImg src={deleteBoard} />스터디 삭제</div>
                    : <></>}
                    </>
                }
            </div>
        </StyledMyStudyBlock>
    );
};