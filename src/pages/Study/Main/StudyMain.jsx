import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import plusImg from "../../../Images/plus.png";
import menuImg from "../../../Images/menu.png"
import { useNavigate } from "react-router-dom";
import { StudyList } from "../../Common/StudyList";

// 캘린더 라이브러리
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../../styles/calendar.css';
// import { StudyInfo } from "../../Common/StudyInfo"; 
import { StudyDesc } from "../../Common/StudyDesc";



const CalendarBox = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Calendar onChange={onChange}
            value={value}
        ></Calendar>
    );
};

const StudyContainer = styled.div`
display: flex;
width: 1200px;
flex-direction: column;

.title_my {
    margin: 40px;
}

.list_box {

    width: 1200px;
    padding-top: 80px;
    background-color: #f1f1f1;
    height: 500px;
}

.item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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
    margin-left: 70px;
    border: 1px solid #F3F3F3;
    border-radius: 10px;
    cursor: pointer;
}

.plusImg {

    width: 100px;
    height: 100px;

}


.StudySchedule {
    display: flex;
    flex-direction: column;
}

.boxbox {
    display: flex;
    width: 1000px;
}

.title_schdule {}

.schedule_box {
    width: 400px;
    background-color: #f1f1f1;
    height: 475px;
}

.calendar_box {
    width: 600px;
    margin: 0;
}

// 스터디 박스

/* .listAll_box {
    margin-top: 70px;
    display: flex;
    width: 1200px;
    flex-direction: column;
    background-color: #f1f1f1;
    height: 1150px;
}

.study_menu {
    display: flex;
    flex-direction: row;
}


.title_all {
    padding : 30px 0 0 60px;
    width: 300px;
}




.new_study {
    display: flex;
    flex-direction: column;
    align-items: center;

} */


form {
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    padding : 20px 100px 20px 100px;
}

`;



const StudyMain = () => {
    const navigate = useNavigate();

    const onClickCreateStudy = () => {
        navigate('/Study/Create');
    }

    const onClickStudyRoom = () => {
        navigate('/Study/StudyRoom')
    }

    return (
        <>
            <Header></Header>

            <StudyContainer>
                <div className="StudyList">
                    <div className="list_box">
                        <h1 className="title_my">나의 스터디 📚</h1>
                        <div className="item">
                            <div className="item-1">
                                <img className="plusImg" src={plusImg} alt="아이콘" onClick={onClickCreateStudy} />
                            </div>
                            <div className="item-1" onClick={onClickStudyRoom}>
                                <StudyDesc size={"xs"} study_profile={"#fffff"}
                                    study_name={"백준방범대"}
                                    study_tag={"#코딩 #자바"}
                                    study_intro={"스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다. 스터디 설명입니다."} 
                                    isMember={1}/>
                            </div>
                        </div>
                    </div>
                </div>

                <form>
                    <h1 className="title_schdule">나의 일정 🗓</h1>
                    <div className="boxbox">
                        <div className="calendar_box">
                            <CalendarBox></CalendarBox>
                        </div>
                        <div className="schedule_box">
                        </div>

                    </div>
                </form>

                {/* <div className="listAll_box">

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

                    </div>
                </div> */}
                <StudyList></StudyList>

            </StudyContainer>
        </>
    );
};


export default StudyMain;