import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import styled from "styled-components";
import { BoardBox, BoardContainerWrapper, Profile, StudyRoom } from "../../../styles/StyledComponent";
import ban from "../../../Images/ban.png"
import { MyInformation } from "../../Common/MyInformation"
// import { Board } from "../../Common/Board";

const StyledMember = styled.div`
    width: 780px;
    background-color:white;
    align-items: center;
    display:inline-block;
    border-radius:20px;
    margin-top:20px;
    padding-bottom:60px;
    
    .item{
        display: flex;
        align-items: center;
    }
    .ban{
        color : #d1403f;
    }
    .left{
        font-weight: bolder;
        font-size: 25px;
        margin : 0;
        margin-left: 40px;
    }
    .right{
        font-size: 25px;
        margin : 0;
        margin-left: 20px;
        display: flex;
        align-items: center;

    }
    .banDiv{
        position: absolute;
        display:flex;
        align-items:center;
        right: 150px;
    }
`;

const MemberBox = ({ user_profile, user_name, user_email, user_intro, }) => {
    return (
        <>
            <StyledMember>
                <div className="item" style={{ marginTop: "15px" }}>
                    <Profile style={{ width: "80px", height: "80px", background: `${user_profile}`, margin: "30px", marginBottom: "13px", marginRight: "14px" }}></Profile>
                    <h1>{user_name}</h1>
                    <div className="banDiv"><img src={ban} width={"23px"} height={"23px"} /> <h2 className="ban">멤버 강퇴</h2></div></div>

                <div className="item">
                    <p className="left">이름</p> <p className="right">{user_name}</p>
                </div>
                <div className="item">
                    <p className="left">이메일</p> <p className="right">{user_email}</p>
                </div>
                <div className="item">
                    <p className="left">자기소개</p> <p className="right">{user_intro}</p>
                </div>

            </StyledMember>
        </>
    );
};

const StudyRoomMember = () => {
    return (
        <>
            <Header />
            <HeaderStudy />
            <StudyRoom>
                <BoardBox style={{ top: "-110px" }}>
                    <BoardContainerWrapper>

                        <MyInformation
                            nickname={"뇽뇽이"}
                            myInfo={"안녕하세요. 백앤드를 공부하고 있는 학생입니다!! 함께 공부해봐요~~ "} />
                        <MyInformation
                            nickname={"뇽뇽이"}
                            myInfo={"안녕하세요. 백앤드를 공부하고 있는 학생입니다!! 함께 공부해봐요~~ "} />
                        <MyInformation
                            nickname={"뇽뇽이"}
                            myInfo={"안녕하세요. 백앤드를 공부하고 있는 학생입니다!! 함께 공부해봐요~~ "} />


                        {/* <MemberBox
                        user_profile={"#fffff"}
                        user_name={"윤홍비"}
                        user_email={"dbsghdql55555@gmail.com"}
                        user_intro={"안녕하세요 반갑습니다 다같이 공부해봐요"}
                        ></MemberBox> */}

                    </BoardContainerWrapper>
                </BoardBox>
            </StudyRoom>
        </>
    );
};




export default StudyRoomMember;