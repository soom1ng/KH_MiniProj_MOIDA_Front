/* 라운지에서 적용되는 네비바를 만들 파일입니다. */

import React, {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: rgb(241, 241, 241);
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;

  .board-select {
    width: 35%;
    display: flex;

    a {
      color: black;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 23px 22px 22px 22px;
      text-decoration: none;
      height: 100%;
      position: relative;
      top: 1px;
      cursor: pointer;
    }

    .active {
      font-size: 2rem;
      color: var(--maincolor);
    }

  }
`;


const HeaderLounge = () => {
    const [activeLink, setActiveLink] = useState("");
    const location = window.location.pathname;

    const handleButtonClick = (link) => {
        setActiveLink(link);
        localStorage.setItem("activeLink", link);
    };

    useEffect(() => {
        const storedActiveLink = localStorage.getItem("activeLink");
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }
    }, []);

    return (
        <Container>
            <div className='board-select'>
                <NavLink to="/lounge/free" className={activeLink === "lounge/free" ? "active" : "inactive"}
                         onClick={() => handleButtonClick("lounge/free")}
                >자유</NavLink>
                <NavLink to="/lounge/qna" className={location !=="/lounge/free" && activeLink === "lounge/qna" ? "active" : "inactive"}
                         onClick={() => handleButtonClick("lounge/qna")}
                >고민</NavLink>
            </div>
        </Container>
    );
};

export default HeaderLounge;
