import React from "react";
import Header from "../Header";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostTitle } from "../Common/PostTitle";
import { StudyInfo } from "../Common/StudyInfo";
import { PostContent } from "../Common/PostContent";
import CommentsList from "../Common/CommentsList";


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;

  .titleBox {
    display: flex;
    flex-direction: row;
  }
  
  .StudyInfo {
    border-left:  1.5px solid black ;
  };
`;


//url주소: /story/post/4654546546{post-id} 
const StoryPost = ({ title, nickname, recommend, date, content }) => {
    return (
        <Container>
            <Header></Header>

            <div className="titleBox">
                <PostTitle
                    size="s"
                    title="요즘 개발하는게 너무 재미따히히"
                    nickname="닉네임"
                    recommend={-500}
                    date={"2023/04/11"}
                ></PostTitle>
                <div className="StudyInfo">
                    <StudyInfo
                        size='s'
                        study_profile={"#fffff"}
                        study_name={"백준방범대"}
                        study_tag={"#코딩 #자바"}
                        study_intro={"함께 코딩테스트를 준비하는 스터디입니다!"}
                    ></StudyInfo>
                </div>
            </div>

            {/* 게시글 내용 */}
            <div className="content">
                <PostContent></PostContent>
            </div>

            {/* 댓글 */}
            <div className="comment">
                <CommentsList></CommentsList>
            </div>
        </Container>
    );
};


export default StoryPost;