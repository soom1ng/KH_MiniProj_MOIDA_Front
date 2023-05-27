import React, {useContext, useEffect, useState} from "react";
import Header from "../Header";
import styled from "styled-components";
import CommentsList from "../Common/CommentsList";
import HeaderLounge from "../HeaderLounge";
import { useParams } from "react-router-dom";
import AxiosAPI from "../../api/AxiosAPI";
import { LoungePostTitle } from "../Common/LoungePostTitle";
import {LoginContext} from "../../context/AuthContext";
import LoungeWrite from "./LoungeWrite";


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 90px;


  .content {
    font-size: 1.6rem;
    min-height: 750px;
    border-bottom: 1px solid gray;
    padding: 80px 250px 80px 250px;
  }
`;


const LoungePost = () => {
    const { boardName, postId } = useParams();

    console.log("boardName = " + boardName);
    console.log("postId = " + postId);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [update, setUpdate] = useState(1); // 페이지 업데이트용
    const [modify, setModify] = useState(false);


    useEffect(() => {
        const viewIncrease = async () => {
            try {
                const rsp = await AxiosAPI.viewIncrease(postId);
                console.log(rsp.data);
            } catch (error) {
                console.error(error);
            }
        }
        viewIncrease();
    }, [postId]);

    useEffect(() => {
        const viewPost = async () => {
            try {
                const rsp = await AxiosAPI.postViewGet(boardName, postId);
                setPost(rsp.data);
                setComments(rsp.data.comments);
                console.log(rsp.data);
            } catch (error) {
                console.error(error);
            }
        }
        viewPost();
    }, [postId, update]);



    return (
        <> {!modify ?
        <Container>
            <Header />
            {post && <HeaderLounge boardName={post.boardName} />}

            {post && <LoungePostTitle
                size='l'
                post={post}
                modify={modify}
                setModify={setModify}
                update={update}
                setUpdate={setUpdate}
            />}
            <div className="content">
                {post && <p dangerouslySetInnerHTML={{ __html: post.contents.toString() }}></p>}
            </div>

            {post &&
                <CommentsList
                    postId={postId}
                    commentsList={comments}
                    setComments={setComments}
                    page={page}
                    setPage={setPage}
                    update={update}
                    setUpdate={setUpdate}
                />}


        </Container> : <LoungeWrite modify={true} postId={postId} title={post.title} contents={post.contents} /> }</>
    )
};


export default LoungePost;