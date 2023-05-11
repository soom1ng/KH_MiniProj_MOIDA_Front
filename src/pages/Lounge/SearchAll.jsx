import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";


const SearchAllContainer = styled.div`
margin-top: 150px;
`;

const SearchAll = () => {
    return (
        <>
        <Header />
        <SearchAllContainer>

            <Header />
            <h1>여기는 전체 검색 페이지입니다.</h1>

        </SearchAllContainer>
        </>
    );
};




export default SearchAll;