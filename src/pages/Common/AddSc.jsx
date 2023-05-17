import React from "react";
import styled from "styled-components";
import plus from "../../Images/plus.png"

const StyledAddsc = styled.div`
background-color: white;
width: ${props => props.size}px;
margin-right: ${props => props.marginRight}px;
position: relative;
border-radius: 10px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`;

export const AddSc = ({ size, marginRight }) => {
    return (
        <>
            <StyledAddsc size={size} marginRight={marginRight}>
                <img src={plus} width={"40px"} height={"40px"}></img>
            </StyledAddsc>
        </>
    );
};