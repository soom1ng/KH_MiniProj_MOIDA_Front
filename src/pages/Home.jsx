import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Navbar";

const Home = () => {
    return(
        <>
        <Nav></Nav>
        <h1>여기는 홈 입니다.</h1>
        <p>가장 먼저 보이는 페이지 입니다.</p>

        </>
    );
};

export default Home;