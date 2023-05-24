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
    // const [comments, setComments] = useState([]);
    // const [page, setPage] = useState(1);
    const [update, setUpdate] = useState(1); // 페이지 업데이트용
    // const [modify, setModify] = useState(false); // 수정


    useEffect(() => {
        // const viewIncrease = async () => {
        //     try {
        //         const rsp = await AxiosAPI.viewIncrease(storyId);
        //         console.log(rsp.data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // viewIncrease();
    }, [storyId]);


    useEffect(() => {
        const viewStory = async () => {
            try {
                const rsp = await AxiosAPI.storyViewGet(storyId);
                setStory(rsp.data);
                // setComments(rsp.data.comments);
                console.log(rsp.data);
            } catch (error) {
                console.error(error);
            }
        }
        viewStory();
    }, [storyId, update]);


    return (
        <Container>
            <Header/>

            <div className="titleBox">
                {story && <PostTitle
                    size="s"
                    title={story.title}
                    nickname={story.nickname}
                    // recommend={-500}
                    date={story.regtime}
                />}
                <div className="StudyInfo">
                {story && <StudyInfo
                        size='s'
                        // study_Id
                        study_profile={story.studyProfile}
                        study_name={story.studyName}
                        // study_tag={story.study_tag}
                        study_intro={story.studyIntro}
                    />}
                </div>
            </div>

            {/* 게시글 내용 */}
            <div className="content">
                { story && <p dangerouslySetInnerHTML={{ __html: story.contents.toString()}} style={{ fontSize: "18px", width: "900px" }}></p>}

                {/* {story && <p dangerouslySetInnerHTML={{ __html: story.contents.toString() }}></p>} */}
            </div>

            {/* 댓글 */}

            {/* <div className="comment">
                <CommentsList></CommentsList>
            </div> */}

            {/* {story &&
                <CommentsList
                    storyId={storyId}
                    // commentsList={comments}
                    // setComments={setComments}
                    page={page}
                    setPage={setPage}
                    update={update}
                    setUpdate={setUpdate}
                />} */}

        </Container>
    );
};


export default StoryPost;