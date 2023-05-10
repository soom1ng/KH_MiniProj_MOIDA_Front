import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../Header";
import Button from "../Common/Button";
import {Board} from "../Common/Board";
import { Container } from "./LoungeFree";
import HeaderLounge from "../HeaderLounge";

const LoungeQnA = () => {

    return (
        <Container>
            <Header/>
            <HeaderLounge/>
           

                <div className='board-top'>
                    <div className='board-title'>
                        <h1>고민 게시판 🐣</h1>
                        <NavLink to='/lounge/write'><Button font={1.5}>글쓰기</Button></NavLink>
                </div>

                    <div className='board-list'>
                        <div>
                            <h2>공지</h2>
                            <li>이제</li>
                            <li>누가</li>
                            <li>공지해주냐</li>
                        </div>
                    </div>

                </div>
                <div className='board-bottom'>
                    <Board
                        post_id={'post'}
                        type='lounge'
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                        date="2023/04/11"
                        recommend={3}
                    ></Board>
                    <Board
                        board_id={235050}
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                        date="2023/04/11"
                        recommend={3}
                    ></Board>
                    <Board
                        board_id={235050}
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="assdadasd
                        asdsadad
                        asdsada"
                        date="2023/04/11"
                        recommend={3}
                    ></Board>
                    <Board
                        board_id={235050}
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                        date="2023/04/11"
                        recommend={3}
                    ></Board>
                    <Board
                        board_id={235050}
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                        date="2023/04/11"
                        recommend={3}
                    ></Board>
                    <Board
                        board_id={235050}
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                        date="2023/04/11"
                        recommend={3}
                        img_url={'#'}
                    ></Board>
                    <Board
                        board_id={235050}
                        nickname="곰돌이"
                        title="이것은 제목입니다"
                        content="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                        date="2023/04/11"
                        recommend={3}
                    ></Board>

                </div>
                </Container>


    );
};


export default LoungeQnA;