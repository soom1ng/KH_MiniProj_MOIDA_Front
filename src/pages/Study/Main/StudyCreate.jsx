import React, { useContext, useState } from "react";
// import { BigTitle } from "../../../styles/StyledComponent";
import Header from "../../Header";
import styled from "styled-components";
import { Button, InputLabel, Input } from "../../../styles/StyledComponent";
import { Category } from "../../Common/Category";
import { Editor } from "../../Common/Editor";
import { LoginContext } from "../../../context/AuthContext";
import AxiosApi from "../../../api/AxiosAPI";
import { useNavigate } from "react-router-dom";

// ----------------------------------에디터 사용--------------------------------------- //

// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //

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
.taglist {
  display: flex;
  list-style-type: '#';
  font-size: 15px;
  width: 400px;
  margin-right: -90px;
  margin-left: 140px;
  justify-content: right;
  align-items:right;
}
.button {
  width: 100px;
  height: 40px;
}
.form {
  display: flex;
}

`;



const StudyCreate = () => {
  //useContext
  const { clearStorage } = useContext(LoginContext);
  const navigate = useNavigate();
  const userId = 1;

  //태그, 카테고리 
  const [category, setCategory] = useState('전체');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [nextId, setNextId] = useState(1);

  //스터디 input, JSON은 String 타입으로 전환해서 보냄
  const [inputContents, setInputContents] = useState("");
  const [studyName, setStudyName] = useState('');
  const [studyUserLimit, setStudyUserLimit] = useState('');
  const [studyChatUrl, setStudyChatUrl] = useState('');
  const [studyIntro, setStudyIntro] = useState('');
  const [studyDeadline, setStudyDeadline] = useState('');

  const onChangeStudyName = (e) => {
    setStudyName(e.target.value);
  };
  const onChangeStudyUserLimit = (e) => {
    setStudyUserLimit(e.target.value);
  };
  const onChangeStudyChatUrl = (e) => {
    setStudyChatUrl(e.target.value);
  };
  const onChangeStudyIntro = (e) => {
    setStudyIntro(e.target.value);
  };
  const onChangeStudyDeadline = (e) => {
    setStudyDeadline(e.target.value);
  };


    //카테고리값 가져오기
    const onChangeCategory = (selectedItem) => {
      setCategory(selectedItem);
    };

    // 태그 검색
  const onChangeTag = e => {
    setTag(e.target.value);
  }
  // 태그 추가
  const onClickSearch = (e) => {
    e.preventDefault();
    if(e.keyCode === 13) {
    const nextTags = tags.concat({
      id : nextId,
      tag : tag
    });
    setNextId(nextId + 1);
    setTags(nextTags);
    setTag('');
  }
}

   // 태그 지우기
   const onRemove = id => {
    const nextTags = tags.filter(tags => tags.id !== id);
    setTags(nextTags);
  }
    // 태그 map 불러오기
    const tagList = tags.map(tags => (
      <li key={tags.id} onDoubleClick={() => onRemove(tags.id)}>{tags.tag}</li>
      )
    )
   


    //AxiosApi 연결
    const onCreateStudy = async () => {
      const values = ["#D8FFD3", "#E2FFF9", "#F6E4FF"];
      const randomColor = values[Math.floor(Math.random() * values.length)];
      const tagString = tags.map(tag => tag.tag).join(",");

      
  
      try {
        const createStudy = await AxiosApi.createStudy(userId, studyName, category, studyUserLimit, studyChatUrl, studyIntro, inputContents, studyDeadline, randomColor, tagString);
        console.log(createStudy.data.result);
  
        if (createStudy.data.result === "OK") {
          navigate(`/study/list`);
        } else {
          console.log("입력 실패");
          navigate(`/`);
        }
      } catch (error) {
        console.log("에러:", error);
      }
    };


  return (
    <>
      <Header></Header>
      <StudyCreateContainer>
        <h1 className="title">스터디 생성 🌟</h1>
        <form>

          <div className="body">
            <div className="body1">
              <InputLabel>스터디 이름</InputLabel>
              <Input type="text" onChange={onChangeStudyName} value={studyName} placeholder="이름을 입력해주세요." />

              <Category propFunction={onChangeCategory} display={'block'} ></Category>
              <InputLabel>인원</InputLabel>
              <Input type="number" onChange={onChangeStudyUserLimit} value={studyUserLimit} placeholder="최대 인원을 입력해주세요." />

              <InputLabel>마감 날짜</InputLabel>
              <Input type="date" onChange={onChangeStudyDeadline} value={studyDeadline} placeholder="마감 날짜를 입력해주세요." />
            </div>

            <div className="body2">
              <InputLabel>태그</InputLabel>
              <Input type="text" value={tag} onKeyDown={onClickSearch} onChange={onChangeTag} placeholder="원하는 태그를 입력해주세요." />
              <li className="taglist">{tagList}</li>

              <InputLabel>채팅</InputLabel>
              <Input type="text" onChange={onChangeStudyChatUrl} value={studyChatUrl} placeholder="링크를 입력해주세요." />

              <InputLabel>간단한 소개</InputLabel>
              <Input type="text" onChange={onChangeStudyIntro} value={studyIntro} placeholder="스터디 소개를 입력해주세요." />
            </div>
          </div>
          <div className="body3">
            <Editor setInputContents={setInputContents} inputContents={inputContents}> </Editor>
          </div>

          <Button type="button" className="button"  onClick={() => onCreateStudy()}>스터디 생성</Button>

        </form>

      </StudyCreateContainer>


    </>

  );
};


export default StudyCreate;
