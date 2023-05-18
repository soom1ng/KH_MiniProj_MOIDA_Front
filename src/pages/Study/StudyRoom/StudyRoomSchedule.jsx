import React, { useEffect, useState } from "react";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import Calendar from "react-calendar";
import { BoardBox, BoardContainerWrapper, StudyRoom } from "../../../styles/StyledComponent";
import 'react-calendar/dist/Calendar.css';
import '../../../styles/calendar.css';
import styled from "styled-components";
import user from "../../../Images/user.png"
import { AddSc } from "../../Common/AddSc";
import Modal from "../../utils/Modal";
import { ViewScMem } from "./ViewScMem";
import { useParams } from "react-router-dom/dist";
import AxiosApi from "../../../api/AxiosAPI";
import CreateSc from "./CreateSc";
const CalendarBox = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Calendar onChange={onChange}
            value={value}
        ></Calendar>
    );
};

const StyledSchedulBox = styled.div`
    background-color: white;
    width: 600px;
    position: relative;
    border-radius: 10px;
    height: 100px;

    .date {
        font-size : 32px;
        font-weight : bolder;
        margin : 0px;
        padding-top: 25px;
        padding-left: 25px;

    }

    .profile {
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin-left: 30px;
    }
    .studyName {
        font-size: 18px;
        margin-left: 10px;
    }
    .scName {
        font-weight: bolder;
        font-size : 18px;
        margin-left: 120px;
    }
    .member {
        font-size: 18px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 25px;
    }
    .item {
        display: flex;
        align-items: center;
    }
    .item2{
        display: flex;
        align-items: center;
        margin-top: -30px;
    }



   
`;
const StyledSchedulBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const AddButton = styled.button`
    background-color: #6b4efe;
    color : white;
    font-size: 18px;
    border-style : none;
    width : 120px;
    height: 50px;
    border-radius: 5px;
    margin-left: 20px;
    font-weight : bolder;
    cursor: pointer;
`;
const MyDiv = styled.div`
    background-color: white;
    position: absolute;
    padding: 10px;
    margin-top: 60px;
    text-decoration-line: none;
    width: 100%;
    font-size: 18px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    `;

const Box = styled.div`
    width : 950px;
    padding-left: 140px;
    justify-content: center;
`;

const SchedulBox = ({ study_sc_date, study_sc_content, study_name, study_member_count, study_user_count, study_color, study_user_name }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    console.log(modalOpen)

    const handleClick = () => {
      setIsButtonDisabled(true);
    };

    const [member, setMember] = useState(false);
    return (
        <>
            <StyledSchedulBoxContainer>
                <StyledSchedulBox>
                    <div className="item">
                        <h1 className="date">{study_sc_date}</h1>
                        <div className="profile" style={{ background: `${study_color}` }}></div>
                        <p className="studyName">{study_name}</p>
                    </div>
                    <div className="item2">
                        <h2 className="scName">{study_sc_content}</h2>
                        <div className="member" onClick={() => setModalOpen(true)}>
                        <img src={user} width={"20px"}/>
                        <p style={{fontSize:"18px"}}>{study_member_count}/{study_user_count}</p>
                        {member && (
                            <MyDiv>{study_user_name}</MyDiv>
                        )}
                    </div>
                    </div>
                </StyledSchedulBox>
                <Modal open={modalOpen} close={closeModal}><ViewScMem scName={"일정 이름"} /></Modal>
            <AddButton onClick={handleClick} disabled={isButtonDisabled}>
                참가하기
            </AddButton>
           
        </StyledSchedulBoxContainer>

        </>
    );
};

const StudyRoomSchedule = () => {
    const {studyId} = useParams();
    const [studySc, setStudySc] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    console.log(modalOpen)

    useEffect(() => {
        const studyScInfo = async () => {
            const rsp = await AxiosApi.studyMemGet(studyId); // 전체 조회
            if(rsp.status === 200) setStudySc(rsp.data);
            console.log(rsp.data);
          
        };
        studyScInfo();
      }, [studyId]);

      console.log(studySc);
    return (
        <>
            <Header />
            <HeaderStudy />
            <StudyRoom>
                <h1 style={{ paddingBottom: "50px", marginTop: "0" }}>스터디 일정 🗓</h1>
                <Box>
                    <CalendarBox></CalendarBox>
                </Box>
                <BoardBox>
                <BoardContainerWrapper>
                    {studySc && studySc.map((sc) => (
                        <SchedulBox
                        key={sc.studyScId}
                        study_sc_date={"3/21"}
                        study_sc_content={sc.studyScContent}
                        study_name={"백준방범대"}
                        study_member_count={sc.studyScUserCount}
                        study_user_count={sc.studyScUserLimit}
                        study_color={"#000000"}
                        study_user_name={"윤홍비 김수민 한다혜 홍상우"}/>
                    ))}
                        
                        <AddSc onClick={() => setModalOpen(true)} size={600} marginRight={140}></AddSc>
                </BoardContainerWrapper>
            </BoardBox>
            <Modal open={modalOpen} close={closeModal}><CreateSc/></Modal>
            </StudyRoom>
        </>
    );
};


export default StudyRoomSchedule;