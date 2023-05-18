import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Header";
import { StudyList } from "../../Common/StudyList";
// import { MyStudyBlock } from "../../Common/MyStudyBlock";
// import  { MyStudyList } from "../../Common/MyStudyList";

// 캘린더 라이브러리
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../../styles/calendar.css';
import { MyStudyList } from "../../Common/MyStudyList";




// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //
// ---------------------------------수민 수정예정------------------------------------- //


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
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding-top: 80px;
    background-color: #f1f1f1;
    height: 500px;
}
.block_box {
        display: flex;
    flex-direction: row;

}

.item {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

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


    return (
        <>
            <Header></Header>

            <StudyContainer>
                <div className="StudyList">
                    <div className="list_box">
                        {/* <h1 className="title_my">나의 스터디 📚</h1>
                            <div className="block_box">
                            <MyStudyBlock isNew={1}/>
                            <MyStudyBlock/>
                            </div> */}
                            <MyStudyList/>
                        {/* <div className="item">

                            

                            컴포넌트 수정 예정

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
                        </div> */}
                        
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
                <StudyList></StudyList>

            </StudyContainer>
        </>
    );
};


export default StudyMain;