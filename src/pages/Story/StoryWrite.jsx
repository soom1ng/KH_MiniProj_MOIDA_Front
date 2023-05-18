import React from "react";
import Header from "../Header";
import styled from "styled-components";
import { BigTitle, InputButton } from "../../styles/StyledComponent";
import { useNavigate } from "react-router-dom";
import { Editor } from "../Common/Editor";

// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //



const StoryWriteContainer = styled.div`
display: flex;

width: 1200px;
margin: 0 auto;
text-align: left;
margin: 20px auto; /* 전체 마진 20px */
background-color: white;
flex-direction: column;



.StudyList {
    margin-left: 45px;
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
    background-color: #f1f1f1;
    height: 240px;
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


const StoryWrite = () => {
    const navigate = useNavigate();

    const onclickPost = () => {
        navigate('/Story/Post');
    };

    return (
        <>
            <Header></Header>

            <StoryWriteContainer>
                <BigTitle><Title>스토리 🔥</Title></BigTitle>

                <div className="StudyList">
                    <h2 className="title">스터디 선택</h2>
                    <div className="list_box">
                    </div>
                </div>

                <form>
                    {/* <InputLabel>제목</InputLabel>
                    <Input type="post_title" placeholder="제목을 입력해주세요." required /> */}
                    {/*title 필요에디터*/}
                    <Editor></Editor>
                    {/* <Input type="post_desc" placeholder="내용을 입력해주세요." required /> */}

                    <InputButton type="submit" onClick={onclickPost}>올리기</InputButton>
                </form>

            </StoryWriteContainer>
        </>
    );
};




export default StoryWrite;