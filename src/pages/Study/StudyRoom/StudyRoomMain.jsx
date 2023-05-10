import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import styled from "styled-components";
import { StudyRoom, InputButton } from "../../../styles/StyledComponent";

const Content = styled.div`
display: flex;
flex-direction: column;
margin: 100px 0 0 200px;
align-items: center;
justify-content: center;


`;

const StudyRoomMain = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/Study/Studyroom`)
    }

    const content = "testteseessteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesttesttesttesestttsesetseteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttestteseessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttestteessttesttesttesttesttestseessttesttesttesttesttesteessttesttesttesttesttesteessttesttesttesttesttesttestt";
    return (
        <>
            <Header />
            <HeaderStudy />

            <StudyRoom>
            
                <div style={{ fontSize: "18px", width: "900px" }}>{content}</div>

                <Content>
                    <div className="button" onClick={onClick}>
                        <InputButton>참가하기</InputButton>
                    </div>
                </Content>
            </StudyRoom>


        </>
    );
};




export default StudyRoomMain;