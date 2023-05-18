import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  
  a {
    display: block;
    color: black;
    font-size: ${props => props.size ? props.size + 'rem' : '1.8rem'};
    font-weight: bold;
    margin: 0 22px 0 22px;
    text-decoration: none;
    height: 100%;
    position: relative;
    top: 1px;
  }
  .active-nav {
     color: var(--maincolor);
     font-size: ${props => props.size ? props.size + 0.2 + 'rem' : '2rem'};
     border-bottom: ${props => props.deco && '3px solid var(--maincolor)'};


  }  
`;

/**
 * NavLink link의 url이 포함되어있다면 active상태로 색과 크기가 변합니다.
 * @param to 연결될 url 주소
 * @param exact
 * @param contain url안에 contain이 포함되어있으면 활성화됩니다.
 * @param children
 * @param size  폰트 사이즈
 * @param deco 값이 있으면 밑줄
 * @returns {JSX.Element}
 * @constructor
 */

const CustomNavLink = ({ to, exact, contain, children, size, deco }) => {
  return (
    <Container size={size} deco={deco}>
      <NavLink className={window.location.pathname.includes(contain) ? "active-nav" : "non-active-nav"}
        to={to}
        exact={exact}
      >{children}</NavLink>

    </Container>


  );
};

export default CustomNavLink;

