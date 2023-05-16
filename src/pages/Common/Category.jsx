import React from "react";
import styled, { css } from "styled-components";
import dropDownImg from "../../Images/drop-down.png";
import { InputLabel } from "../../styles/StyledComponent";

const ARRAYS = {
  r: css`
    --flex-direction: row;
    --margin-top: 10px;
    --margin-left: -20px;
  `,
  c: css`
    --flex-direction: column;
    --margin-top: 0px;
    --margin-left: 0px;
  `
}

const StyledCategory = styled.div`
  ${(p)=>p.arrayStyle}
  display: flex;
  flex-direction: var(--flex-direction);
  text-align: left;
  /* align-items: center; */
  justify-content: center;

.dropdown{
  position : relative;
  display : inline-block;
  align-items: center;
  margin-left: var(--margin-left);
}

.dropbtn{
  border : 1px solid rgb(37, 37, 37);
  border-radius : 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color : rgb(37, 37, 37);
  padding : 12px;
  width :150px;
  text-align: left;
  cursor : pointer;
  font-size : 12px;
  margin-top: var(--margin-top);
}

.dropdown-content{
  display : none;
  position : absolute;
  z-index : 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  min-width : 150px;

}

.dropdown-content li{
  display : block;
  text-decoration : none;
  color : rgb(37, 37, 37);
  font-size: 12px;
  padding : 12px 20px;
}

.dropdown-content li:hover{
  background-color : #ececec
}

.dropdown:hover .dropdown-content {
  display: block;
}

.DropDownImg {
  width: 10px;
  height: 15px;
  margin-left : 50px;
  }
  
  .menuBlock {
  display: flex;
  width: 1100px;
  height: 60px;
  align-items: center;
  padding: 20px 0 10px 0;
  }
  `;


export const Category = ({array}) => {
    const arrayStyle = ARRAYS[array];
    

    return (

        <StyledCategory arrayStyle={arrayStyle}>
            <InputLabel>카테고리</InputLabel>

            <div class="dropdown">
                <button class="dropbtn">
                    View More
                    <img className="DropDownImg" src={dropDownImg} alt="아이콘" />
                </button>
                <div class="dropdown-content">
                    <li>언어</li>
                    <li>코딩</li>
                    <li>취미</li>
                    <li>기타</li>
                </div>
            </div>
        </StyledCategory>
    )

}
