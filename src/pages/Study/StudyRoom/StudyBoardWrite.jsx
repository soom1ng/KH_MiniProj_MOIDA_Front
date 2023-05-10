import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import styled from "styled-components";
import { InputButton } from "../../../styles/StyledComponent";
import { useNavigate } from "react-router-dom";
import { Editor } from "../../Common/Editor";

const StudyBoardWriteContainer = styled.div`

display: flex;
flex-direction: column;
max-width: 900px;
margin: 0 auto;
text-align: left;
justify-content: space-between;



form {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    padding : 20px 50px 20px 100px;
}
`;

const Title = styled.div` /* 1200 140 */
    display: flex;
    font-size: 36px;
    padding: 180px 0 50px 0 ;
    height: 140px;
    align-items: center;
    margin-left: 90px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    `;


const StudyBoardWrite = () => {
    const navigate = useNavigate();

    const onclickPost = () => {
        navigate('/StudyRoom/Board');
    };


    return (
        <>
            <Header></Header>
            <HeaderStudy></HeaderStudy>

            <StudyBoardWriteContainer>
            <Title><h1>스터디 보드 📋</h1></Title>



                <form>


                    <Editor isTitle={1}></Editor>

                    <InputButton type="submit" onClick={onclickPost}>올리기</InputButton>
                </form>

            </StudyBoardWriteContainer>
        </>
    );
};




export default StudyBoardWrite;