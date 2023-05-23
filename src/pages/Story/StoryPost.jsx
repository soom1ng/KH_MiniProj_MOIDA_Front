import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import { PostTitle } from "../Common/PostTitle";
import { StudyInfo } from "../Common/StudyInfo";
import CommentsList from "../Common/CommentsList";

import AxiosAPI from "../../api/AxiosAPI";
// import { LoginContext } from "../../context/AuthContext";



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


//url주소: /story/4654546546{storyId} 
const StoryPost = () => {
    const { storyId } = useParams();

    console.log("storyId = " + storyId);
    const [story, setStory] = useState(null);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [update, setUpdate] = useState(1); // 페이지 업데이트용

    useEffect(() => {
        const viewIncrease = async () => {
            try {
                const rsp = await AxiosAPI.viewIncrease(storyId);
                console.log(rsp.data);
            } catch (error) {
                console.error(error);
            }
        }
        viewIncrease();
    }, [storyId]);


    useEffect(() => {
        const viewStory = async () => {
            try {
                const rsp = await AxiosAPI.storyViewGet();
                setStory(rsp.data);
                setComments(rsp.data.comments);
                console.log(rsp.data);
            } catch (error) {
                console.error(error);
            }
        }
        viewStory();
    }, [storyId, update]);


    return (
        <Container>
            <Header></Header>

            <div className="titleBox">
                {story && <PostTitle
                    size="s"
                    title="요즘 개발하는게 너무 재미따히히"
                    nickname="닉네임"
                    recommend={-500}
                    date={"2023/04/11"}
                />}
                <div className="StudyInfo">
                {story && <StudyInfo
                        size='s'
                        study_profile={"#fffff"}
                        study_name={"백준방범대"}
                        study_tag={"#코딩 #자바"}
                        study_intro={"함께 코딩테스트를 준비하는 스터디입니다!"}
                    />}
                </div>
            </div>

            {/* 게시글 내용 */}
            <div className="content">
                {story && <p dangerouslySetInnerHTML={{ __html: story.contents.toString() }}></p>}
            </div>

            {/* 댓글 */}

            {/* <div className="comment">
                <CommentsList></CommentsList>
            </div> */}

            {story &&
                <CommentsList
                    storyId={storyId}
                    commentsList={comments}
                    setComments={setComments}
                    page={page}
                    setPage={setPage}
                    update={update}
                    setUpdate={setUpdate}
                />}

        </Container>
    );
};


export default StoryPost;