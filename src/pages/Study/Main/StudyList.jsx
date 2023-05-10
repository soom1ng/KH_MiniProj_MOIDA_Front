import React from "react";
//import { Link } from "react-router-dom";
import Header from "../../Header";
import styled from "styled-components";
import searchIcon from "../../../Images/search.png";
import { useNavigate } from "react-router-dom";
import { Category } from "../../Common/Category";
import { Study } from "../../Common/StudyBlock";



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
  width: 1100px;
  height: 60px;
  align-items: center;
  padding: 20px 0 10px 0;
  margin-bottom: 20px;
  justify-content: center;
}

.list_box {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 1200px;
    background-color: #f1f1f1;
    height: 1800px;
    padding-top :50px;
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
  margin-left: 650px;
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

    const onClickSearch = () => {
        navigate('/Study/List');
    }

    return (
        <>
            <Header></Header>
            <StudyContainer>
                <div className="menu">
                    <h1 className="title">스터디💬</h1>
                    <div className="menuBlock">

                        <Category array='r'
                        ></Category>

                        <SearchContainer>
                            <SearchBar type="text" placeholder="태그를 추가해보세요!" />
                            <SearchIcon src={searchIcon} alt="검색 아이콘" onClick={onClickSearch} />
                        </SearchContainer>
                    </div>
                </div>

                <div className="list_box">
                    <Study></Study>
                    <Study></Study>
                    <Study></Study>
                </div>
            </StudyContainer>
        </>

    );
};


export default StudyList;