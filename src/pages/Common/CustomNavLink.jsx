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
     border-bottom: 3px solid var(--maincolor);
     border-bottom: ${props => props.deco && "3px solid var(--maincolor)"};

    
  }
  
  
  
`;

const CustomNavLink = ({ to, exact, contain, children, size, deco }) => {
    const location = window.location.pathname;

    return (
        <Container>
            <NavLink className={window.location.pathname.includes(contain) ? "active-nav" : "non-active-nav"}
                     to={to}
                     deco={deco}
            >{children}</NavLink>

        </Container>


    );
};

export default CustomNavLink;

