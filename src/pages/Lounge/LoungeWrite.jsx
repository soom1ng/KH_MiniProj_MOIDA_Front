import React, {useContext, useState} from "react";
// import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import {Editor} from "../Common/Editor";
import HeaderLounge from "../HeaderLounge";
import {useNavigate, useParams} from "react-router-dom";
import {BOARD} from "./LoungeMain";
import AxiosApi from "../../api/AxiosAPI";
import Modal from "../utils/Modal";
import {LoginContext} from "../../context/AuthContext";

// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //
// ---------------------------------상우님 수정예정------------------------------------- //

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

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


const LoungeWrite = () => {
    const navigate = useNavigate();
    const {boardName} = useParams();
    console.log("boardName = " + boardName);

    // 등록 input값
    const { userId } = useContext(LoginContext);
    console.log("userID = " + userId)
    const [inputTitle, setInputTitle] = useState("1");
    const [inputContents, setInputContents] = useState("");
    const [inputImgUrl, setInputImgUrl] = useState("");

    // 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModelText] = useState("");


    // 게시물 등록
    const onClickRegPost = async() => {
        const postReg1 = await AxiosApi.postReg(userId, inputTitle, inputContents, boardName, inputImgUrl);
        console.log("userId = " + userId);
        console.log("inputTitle = " + inputTitle);
        console.log("inputContent = " + inputContents);
        console.log(postReg1.data.result);
        if (postReg1.data) {
            navigate(`/lounge/${boardName}`);
        }// } else {
        //     setModalOpen(true);
        //     setModelText("게시물 등록 실패.");


    }


    return (
        <Container>
            <Header/>
            <HeaderLounge/>
            <EditorContainer>
                <div className='board-top'>
                    <div className='board-title'>
                        <h1>{BOARD[boardName]} 게시판🐥</h1>

                    </div>
                    <Editor isTitle={1} inputTitle={inputTitle} inputContents={inputContents} setInputTitle={setInputTitle} setInputContents={setInputContents}/>


                    <button onClick={() => onClickRegPost()} type="submit">올리기</button>
                    <Modal open={modalOpen} >{modalText}</Modal>
                </div>

            </EditorContainer>

        </Container>
    );
};


export default LoungeWrite;