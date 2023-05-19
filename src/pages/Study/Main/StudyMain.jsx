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
    height: 500px;
    padding-top: 80px;
    background-color: #f1f1f1;

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


                <div className="list_box">
                    <h1 className="title_my">나의 스터디 📚</h1>
                    <MyStudyList />
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