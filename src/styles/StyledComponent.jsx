import { Form } from "react-router-dom";
import styled, {css} from 'styled-components';
import { createGlobalStyle} from "styled-components";

// 전역스타일링: 모든 곳에 쓰이는 style입니다.
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 10px = 1rem;
    --maincolor: rgb(107,78,254);
  }  
  body {
    //font-family:
  }
  
  h1 { // bigTitle 크기입니다.
    font-size: 3.2rem;
    font-weight: bolder;
  }
  h2 { // smallTitle 크기입니다.
    font-size: 1.8rem;
    font-weight: bolder;
  }
`;


const BigTitle = styled.text`
    font-size: 32px;
    color: ${props => props.color || 'black'};
    font-weight: bolder;
`;

const SmallTitle = styled.text`
    font-size: 18px;
    color: ${props => props.color || 'black'};
    font-weight: bolder;
`;

const Search = styled.div`
    font-size:16px;
    color: rgb(127, 127, 127);
    background-color : rgb(239, 239, 239);
    border-radius: 4px;
`;

const Button = styled.button`
  width: 80px;
  font-size:14px;
  padding: 5px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const InputButton = styled.button`
  width: 100px;
  font-size:17px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 8px;
  background-color: rgb(107, 78, 254);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BlockBox = styled.div`
    background-color : white;
    border-radius: 20px;
`;

const Container = styled.div`
    background-color : #f3f3f3;
      
`;

const MyDiv = styled.div`
    background-color: red;
`;

const StudyRoom = styled.div`
    padding-top: 150px;
    padding-left: 250px;
    width: 900px;
    z-index:-10;
    word-wrap: break-word;
`;

const Profile = styled.div`
    background-color:#E2fffe;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

const BoardBox = styled.div`
    background-color: #f3f3f3;
    width: 1000px;
    height: 100%;
    padding-bottom: 100px;
    position: relative;
    left: -50px;
    margin-top: 50px;
    display: flex;
    padding-top: 30px;
    justify-content: center;

`;

const BoardContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const InputLabel = styled.p`
  text-align: left;
  width: 100px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 19px;
  margin-right: 10px;
`;

const InputLabelBig = styled.p`
  text-align: left;
  width: 150px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 19px;
  margin-right: 10px;
`;


const Input = styled.input`
  width: 300px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  flex: 1;
  padding: 8px;
  border: 2px solid #e4e4e4;
  border-radius: 4px;
`;


export {BigTitle, SmallTitle, Search, Button, InputButton, BlockBox, Container, MyDiv, StudyRoom, Profile, BoardBox, BoardContainerWrapper, InputLabel, InputLabelBig, Input};
export default GlobalStyle;