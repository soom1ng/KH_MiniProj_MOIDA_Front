import React, { useContext, useState } from "react";
import Header from "../../Header";
import HeaderStudy from "../../HeaderStudy";
import styled from "styled-components";
import { InputButton } from "../../../styles/StyledComponent";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "../../Common/Editor";
import AxiosApi from "../../../api/AxiosAPI";
import { LoginContext } from "../../../context/AuthContext";

// ----------------------------------에디터 사용--------------------------------------- //

// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //

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
    const {userId} = useContext(LoginContext);
    const {studyId} = useParams(); 
    // const [inputTitle, setInputTitle] = useState(title);
    // const [inputContents, setInputContents] = useState(contents);

    const onclickPost = () => {
        navigate('/StudyRoom/Board');
    };

    // const onCreateBoard = async () => {
    //     try {
    //       const createBoard = await AxiosApi.createBoardStudy(userId, studyId, boardTitle, boardContent);
    //       console.log(createBoard.data.result);
    
    //       if (createBoard.data.result === "OK") {
    //         navigate(`/study/studyRoom/Board/${studyId}`);
    //       } else {
    //         console.log("입력 실패");
    //         navigate(`/`);
    //       }
    //     } catch (error) {
    //       console.log("에러:", error);
    //     }
    //   };
  


    return (
        <>
            <Header></Header>
            <HeaderStudy></HeaderStudy>

            <StudyBoardWriteContainer>

                <Title><h1>스터디 보드 📋</h1></Title>

                <form>
                    {/*타이틀 필요 에디터*/}
                    {/* <Editor isTitle={1} inputTitle={inputTitle} setInputTitle={setInputTitle} inputContents={inputContents} setInputContents={setInputContents}></Editor> */}

                    <InputButton type="submit" onClick={onclickPost}>올리기</InputButton>
                </form>

            </StudyBoardWriteContainer>
        </>
    );
};

export default StudyBoardWrite;