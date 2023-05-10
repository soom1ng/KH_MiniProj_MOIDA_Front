import styled from "styled-components";
import menuImg from "../../Images/menu.png"
import { Study } from "./StudyBlock";
import { useNavigate } from "react-router-dom";

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
    padding : 30px 0 0 60px;
    width: 300px;
}


.menuImg {
    width: 60px;
    height: 50px;
    margin : 50px 30px 0px 750px;
}

.new_study {
    display: flex;
    flex-direction: column;
    align-items: center;

}
    `;



export const StudyList = () => {
    const navigate = useNavigate();

    const onClickStudyList = () => {
        navigate('/Study/Studyroom');
    }

    return (

        <StyledStudyList>
            <div className="study_menu">
                <h1 className="title_all">New✨ 스터디💬</h1>
                <img className="menuImg" src={menuImg} alt="아이콘" onClick={onClickStudyList} />
            </div>
            <div className="new_study">
                <Study study_title="백준방법대"
                    studydesc="함께 코딩 테스트를 준비하는 스터디입니다!"
                    studytag="#코딩 #자바"
                    date="2023-04-20"
                ></Study>
                <Study study_title="백준방법대"
                    studydesc="함께 코딩 테스트를 준비하는 스터디입니다!"
                    studytag="#코딩 #자바"
                    date="2023-04-20"
                ></Study><Study study_title="백준방법대"
                    studydesc="함께 코딩 테스트를 준비하는 스터디입니다!"
                    studytag="#코딩 #자바"
                    date="2023-04-20"
                ></Study><Study study_title="백준방법대"
                    studydesc="함께 코딩 테스트를 준비하는 스터디입니다!"
                    studytag="#코딩 #자바"
                    date="2023-04-20"
                ></Study>

            </div>
        </StyledStudyList>
    );
};