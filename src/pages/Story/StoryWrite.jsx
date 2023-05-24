import React, { useContext, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import { BigTitle, InputButton } from "../../styles/StyledComponent";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "../Common/Editor";

import { LoginContext } from "../../context/AuthContext";
import AxiosAPI from "../../api/AxiosAPI";
import { ChooseStudyList, MyStudyList } from "../Common/MyStudyList";
// import Modal from "../utils/Modal";



const StoryWriteContainer = styled.div`
display: flex;

width: 1200px;
margin: 0 auto;
text-align: left;
margin: 20px auto; /* 전체 마진 20px */
background-color: white;
flex-direction: column;



.StudyList {
    /* margin-left: 45px; */
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
  min-height: 600px;
  margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    padding : 20px 150px 20px 150px;

}

.list_box {
    background-color: #f3f3f3;
    padding : 30px;
    height: auto;
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    vertical-align: center;
}
`;

const Title = styled.div` /* 1200 140 */
    display: flex;
    font-size: 36px;
    padding-top: 80px;
    height: 140px;
    align-items: center;
    margin-left: 90px;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    `;

// 스토리 등록 POST
//   storyReg: async (userId, studyId, title, imgUrl, contents) => {
//     const story = {
//       userId: userId,
//       studyId: studyId,
//       title: title,
//       imgUrl: imgUrl,
//       contents: contents,
//     };
//     return await axios.story(MOIDA_DOMAIN + `/story/post/insert`, story);
//   },

const StoryWrite = () => {
    const navigate = useNavigate();

    // 등록 input값
    const { userId } = useContext(LoginContext);
    console.log("userID = " + userId);
    const { studyId } = useParams();
    const [inputTitle, setInputTitle] = useState("");
    const [inputContents, setInputContents] = useState("");
    const [inputImgUrl, setInputImgUrl] = useState("");

    // 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModelText] = useState("");


    // 게시물 등록
    const onClickRegStory = async () => {
        const storyReg1 = await AxiosAPI.storyReg(userId, studyId, inputTitle, inputImgUrl, inputContents);
        console.log("userId = " + userId);
        console.log("studyId = " + studyId);
        console.log("inputTitle = " + inputTitle);
        console.log("inputImgUrl = " +inputImgUrl);
        console.log("inputContent = " + inputContents);
        console.log(storyReg1.data.result);
        if (storyReg1.data) {
            navigate(`/story}`);
        }
        // } else {
        //     setModalOpen(true);
        //     setModelText("게시물 등록 실패.");

    }
    return (
        <>
            <Header/>

            <StoryWriteContainer>
                <BigTitle><Title>스토리 🔥</Title></BigTitle>

                <div className="StudyList">
                    <h2 className="title">스터디 선택</h2>
                    <div className="list_box">
                        <ChooseStudyList/>
                    </div>
                </div>

                <form>
                    {/* <InputLabel>제목</InputLabel>
                    <Input type="post_title" placeholder="제목을 입력해주세요." required /> */}
                    {/*title 필요에디터*/}
                    {/* <Editor></Editor> */}
                    <Editor isTitle={true} inputTitle={inputTitle} inputContents={inputContents} setInputTitle={setInputTitle} setInputContents={setInputContents}/>

                    {/* <Input type="post_desc" placeholder="내용을 입력해주세요." required /> */}

                    <InputButton type="submit" onClick={() => onClickRegStory()}>올리기</InputButton>
                </form>

            </StoryWriteContainer>
        </>
    );
};




export default StoryWrite;