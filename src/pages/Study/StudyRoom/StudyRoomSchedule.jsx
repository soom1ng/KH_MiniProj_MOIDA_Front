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
import { useNavigate, useParams } from "react-router-dom/dist";
import AxiosApi from "../../../api/AxiosAPI";
import CreateSc from "./CreateSc";
import moment from "moment/moment";
import trash from "../../../Images/trash-can.png";
  
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
    .dot {
        width: 6px;
        height: 6px;
        background-color: red;
        border-radius: 50%;
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
        margin-right:5px;
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

    &.disable {
        background-color: gray;
    }
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


const SchedulBox = ({ study_sc_id, sc_user_id, study_sc_date, study_sc_content, study_name, study_member_count, study_member_limit, study_color, study_user_name }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [member, setMember] = useState(false);
    const [memberCnt, setmemberCnt] = useState(study_member_count);
    const userId = 1;
    const closeModal = () => {
        setModalOpen(false);
    };
    const buttonText = () => {
        if(isButtonDisabled) {
            return "참가취소"
        }else return "참가하기"
    }

    const onClickScDelete = async () => {
        console.log(study_sc_id)
        const mgrNext = await AxiosApi.scheduleMemDel(study_sc_id);
        alert("일정을 삭제 했어요 !😀")
        window.location.reload();
    }

    const handleClick = async () => {
        setIsButtonDisabled(!isButtonDisabled);
        try {
            if(!isButtonDisabled){
                if(study_member_limit === study_member_count){
                    alert("일정 멤버 수가 가득 찼어요 !😥")
                    setIsButtonDisabled(false);
                    window.location.reload();
                }else{
                    const mgrNext = await AxiosApi.scheduleMemReg(study_sc_id, userId);
                    setmemberCnt(memberCnt+1);
                }
                
            }else{
                if(study_member_limit === study_member_count){
                }else{
                    const mgrDelete = await AxiosApi.scheduleMemDel(study_sc_id, userId);
                    console.log(mgrDelete.data)
                    setmemberCnt(memberCnt-1);
                }
                
            }
            
            
        } catch (error) {
          console.log("에러:", error);
        }
      };


    return (
        <>
            <StyledSchedulBoxContainer>
                <StyledSchedulBox>
                    <div className="item">
                        <h1 className="date">{study_sc_date}</h1>
                        <div className="profile" style={{ background: `${study_color}` }}></div>
                        <p className="studyName">{study_name}</p>
                        {sc_user_id === userId && <img src={trash} width="15px" onClick={() =>onClickScDelete()} />}
                    </div>
                    <div className="item2">
                        <h2 className="scName">{study_sc_content}</h2>
                        <div className="member" onClick={() => setModalOpen(true)}>
                        <img src={user} width={"20px"}/>
                        <p style={{fontSize:"18px"}}>{memberCnt}/{study_member_limit}</p    >
                        {member && (
                            <MyDiv>{study_user_name}</MyDiv>
                        )}
                        
                    </div>
                    </div>
                </StyledSchedulBox>
                <Modal open={modalOpen} close={closeModal}><ViewScMem scName={study_sc_content} studyScId={study_sc_id}/></Modal>
            <AddButton
                onClick={handleClick}   
                className={isButtonDisabled ? "disable" : " "}
            >
            {buttonText()}
            </AddButton>
           
        </StyledSchedulBoxContainer>

        </>
    );
};

const StudyRoomSchedule = () => {
    const {studyId} = useParams();
    const [studySchedule, setStudySchedule] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState(new Date());
    const studyName = window.localStorage.getItem("studyName"); 
    const studyProfile = window.localStorage.getItem("studyProfile");



    const tileContent = ({ date }) => {
        const formattedDate = date.toISOString().split('T')[0];
        const matchingDataCount = studySchedule.filter(sc => moment(sc.studyScDate).format('YYYY-MM-DD') === formattedDate).length;
      
        if (matchingDataCount > 0) {
          return (
            <div className="tileContentContainer">
              {Array.from({ length: matchingDataCount }, (_, index) => (
                <div key={index} className="dot" />
              ))}
            </div>
          );
        }
      
        return null;
      };


    const onChange = (date) => {
        setValue(date);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const studyScInfo = async () => {
          try {
            const rsp = await AxiosApi.studyScGet(studyId); // 전체 조회
            if (rsp.status === 200) {
              setStudySchedule(rsp.data);
            }
          } catch (error) {
            console.error('스터디 일정 정보를 가져오는 중 에러가 발생했습니다:', error);
          }
        };
      
        studyScInfo();
      }, [studyId]);

     
    return (
        <>
            <Header />
            <HeaderStudy />
            <StudyRoom>
                <h1 style={{ paddingBottom: "50px", marginTop: "0" }}>스터디 일정 🗓</h1>
                <Box>
                <Calendar
                    onChange={onChange}
                    value={value}
                    tileContent={tileContent}
                />
                <style>
                    {`
                    .tileContentContainer {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        
                      }
                      
                      .dot {
                        width: 10px;
                        height: 10px;
                        background-color: ${studyProfile};
                        border-radius: 50%;
                        margin-right: 4px; 

                      }
                    `}
                </style>
                </Box>
                <BoardBox>
                <BoardContainerWrapper>
                    {studySchedule && studySchedule.map((sc) => (
                        <SchedulBox
                        key={sc.studyScId}
                        sc_user_id={sc.userId}
                        study_sc_id ={sc.studyScId}
                        study_sc_date={moment(sc.studyScDate).format('MM/DD')}
                        study_sc_content={sc.studyScContent}
                        study_name={studyName}
                        study_member_count={sc.studyScUserCount}
                        study_member_limit={sc.studyScUserLimit}
                        study_color={studyProfile}
                        />
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