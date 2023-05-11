import React from "react";
// import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import { Editor } from "../Common/Editor";
import { InputButton } from "../../styles/StyledComponent";
import HeaderLounge from "../HeaderLounge";


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

/* 
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    padding : 20px 100px 20px 100px;
} */
  .lounge-nav {
    width: 100%;
    margin: 0 auto;

    .nav {
      background-color: rgb(241, 241, 241);
      display: flex;
      justify-content: center;
      height: 60px;
      align-items: center;
    }
  }
`;

const EditorContainer = styled.div`

display: flex;
width: 1100px;
/* margin: 0 auto; */
text-align: left;
margin: 20px auto; /* 전체 마진 20px */
padding-bottom: 50px;
background-color: white;
flex-direction: column;
align-items: center;

`;


// const Button = styled.button`
//   width: 100px;
//   font-size:17px;
//   font-family: 'Noto Sans KR', sans-serif;
//   padding: 8px;
//   background-color: rgb(107, 78, 254);
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const LoungeWrite = ({}) => {

    return (
        <Container>
            {/* <NavContainer>
                <Header></Header>
                <div className='lounge-nav'>
                    <div className='nav'>
                        <div className='board-select'>
                            <NavLink to="/lounge/free" className='board-select-type'
                                style={{ color: 'var(--maincolor)' }}>자유</NavLink>
                            <NavLink to="/lounge/qna" className='board-select-type'>고민</NavLink>
                        </div>
                    </div>
                </div>
            </NavContainer> */}
          <Header/>
          <HeaderLounge/>
            <EditorContainer>
                <div className='board-top'>
                    <div className='board-title'>
                        <h1>자유 게시판 🐥</h1> 
                        {/* <h1>고민 게시판 🐥</h1>  */}
                        
                        </div>
               
                            {/* <InputLabel>제목</InputLabel>
                    <Input type="post_title" placeholder="제목을 입력해주세요." required /> */}

                            <Editor isTitle={1}></Editor>
                            {/* <Input type="post_desc" placeholder="내용을 입력해주세요." required /> */}

                            <InputButton type="submit">올리기</InputButton>
                
                    </div>

            </EditorContainer>

        </Container>
    );
};


export default LoungeWrite;