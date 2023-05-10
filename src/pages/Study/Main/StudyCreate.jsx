import React from "react";
// import { BigTitle } from "../../../styles/StyledComponent";
import Header from "../../Header";
import styled from "styled-components";
import {Button, InputLabel, Input} from "../../../styles/StyledComponent";
import { Category } from "../../Common/Category";
import { Editor } from "../../Common/Editor";



const StudyCreateContainer = styled.div`
  max-width: 1050px;
  text-align: left;
  margin: 20px auto;
  padding: 25px;


  .title {
    margin-top: 80px;
  }

  
  form {
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  align-items: center;
  }

.body{
  display: flex;
  max-width: 1100px;
  text-align: left;
  align-items: center;
}
  .body1 {
  display: flex;
  width: 500px;
  flex-direction: column;
  margin-bottom: 16px;
  }

.body2 {
  display: flex;
  width: 500px;
  flex-direction: column;
  margin-bottom: 16px;
}

.body3 {
display: flex;
  width: 1000px;
  flex-direction: column;
  margin-bottom: 16px;

}

`;



const StudyCreate = () => {
    return (
        <>
            <Header></Header>
            <StudyCreateContainer>
                <h1 className="title">스터디 생성 🌟</h1>
                <form>

                    <div className="body">
                        <div className="body1">
                            <InputLabel>스터디 이름</InputLabel>
                            <Input type="studyname" placeholder="이름을 입력해주세요." />
                            
                            <Category array='c'
                            ></Category>

                            <InputLabel>인원</InputLabel>
                            <Input type="studycount" placeholder="최대 인원을 입력해주세요." />

                            <InputLabel>마감 날짜</InputLabel>
                            <Input type="studydate" placeholder="마감 날찌를 입력해주세요." />
                        </div>

                        <div className="body2">
                            <InputLabel>태그</InputLabel>
                            <Input type="studytag" placeholder="원하는 태그를 입력해주세요." />

                            <InputLabel>채팅</InputLabel>
                            <Input type="studychat" placeholder="링크를 입력해주세요." />

                            <InputLabel>간단한 소개</InputLabel>
                            <Input type="studydesc" placeholder="스터디 소개를 입력해주세요." />
                        </div>
                    </div>
                    <div className="body3">
                        <Editor></Editor>
                    </div>

                    <Button>스터디 생성</Button>

                </form>

            </StudyCreateContainer>


        </>

    );
};


export default StudyCreate;
