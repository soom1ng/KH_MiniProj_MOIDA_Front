import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import Header from "../../Header";
import styled from "styled-components";
import searchIcon from "../../../Images/search.png";
import { useNavigate } from "react-router-dom";
import { Category } from "../../Common/Category";
import { Study } from "../../Common/StudyBlock";
import AxiosApi from "../../../api/AxiosAPI";


const StudyContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;

.menu {
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin-left : 50px
}

  .title {
    margin-top: 120px;
}

.menuBlock {
  display: flex;
  width: 1200px;
  height: 60px;
  align-items: center;
  padding: 20px 0 10px 0;
  margin-bottom: 20px;
  justify-content: space-around;
}

.list_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    background-color: #f1f1f1;
    height: 2200px;
    padding-top :50px;
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

`;

// const Label = styled.div`
// display: flex;
// width: 80px;
// font-size: 17px;
// font-weight: bold;
// `;

const SearchContainer = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;
  overflow: hidden;
  width: 250px;
  height: 36px;
  background-color: rgb(239,239,239);
  justify-content:space-between;
 
`;

const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
  opacity: 40%;
  margin-right: 10px;
`;

const SearchBar = styled.input`
  padding: 5px;
  width: 280px;
  border: 0;
  font-size: 9px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgb(239,239,239);
  outline: none;
`;


const StudyList = () => {
  const navigate = useNavigate();
  const [studyInfo, setStudyInfo] = useState([]);
  const [category, setCategory] = useState('전체');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [nextId, setNextId] = useState(1);
  const date = new Date();


  //스터디 리스트
  useEffect(() => {
    const studyInfo = async() => {
        const rsp = await AxiosApi.studyListGet(); 
        if(rsp.status === 200) setStudyInfo(rsp.data);
        console.log(rsp.data);
    };
    studyInfo();
}, []);

  //카테고리값 가져오기
  const onChangeCategory = (selectedItem) => {
    setCategory(selectedItem);
  };

  // 태그 검색
  const onChangeTag = e => {
    setTag(e.target.value);
  }
  // 태그 추가
  const onClickSearch = () => {
    const nextTags = tags.concat({
      id : nextId,
      tag : tag
    });
    setNextId(nextId + 1);
    setTags(nextTags);
    setTag('');
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

  return (
    <>
      <Header></Header>
      <StudyContainer>
        <div className="menu">
        <h1 className="title">스터디💬</h1>
        </div>
        <div className="menuBlock">
        <Category propFunction={onChangeCategory} />
        <li className="taglist">{tagList}</li>
        <SearchContainer>
          <SearchBar type="text" value={tag} onChange={onChangeTag} placeholder="태그를 추가해보세요!"/>
          <SearchIcon src={searchIcon} alt="검색 아이콘" onClick={onClickSearch}/>
        </SearchContainer>
        </div>
          

        <div className="list_box">
        {studyInfo && studyInfo
            .filter((study) => category === '전체' || study.studyCategory === category)
            .filter((study) => tags.length === 0 ||  tags.some(tag => study.tagName.includes(tag.tag)))
            .filter((study) => date <= new Date(study.studyDeadline))
            .map((study) => (
              <Study 
                key={study.studyId}
                studyId={study.studyId}
                studyTitle={study.studyName}
                studyIntro={study.studyIntro}
                studyTag={study.tagName}
                studyDate={study.studyDeadline}
                studyUserCount={study.studyUserCount}
                studyUserLimit={study.studyUserLimit}
                studyProfile={study.studyProfile}
              />
            ))
          }

        </div>
      </StudyContainer>
    </>

  );
};


export default StudyList;