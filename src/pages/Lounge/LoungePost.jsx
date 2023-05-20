import React, { useEffect, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import CommentsList from "../Common/CommentsList";
import HeaderLounge from "../HeaderLounge";
import { useParams } from "react-router-dom";
import AxiosAPI from "../../api/AxiosAPI";
import { LoungePostTitle } from "../Common/LoungePostTitle";

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


  .content {
    font-size: 1.6rem;
    min-height: 750px;
    border-bottom: 1px solid gray;
    padding: 80px 250px 80px 250px;
  }
`;


// 2안 선택idt
// lounge/ boardName / postId
// why?
// 1. postId 1개로만 받는 경우: url 주소 : /lounge/post/:postId
// 페이지마다 navLink색을 변경해줘야하는데 boardName 을 가져와서 해결할 수 있다
// but, 기존의 NavLink를 바꿔야하며 props를 3단으로 내려줘야함 또한 게시판 마다 주소가 있는 것이 유용함

// 2. boardName, postId를 하고 boardName 에 기능을 부여하는 것
// postId가 서치하는데 지배적인 역할임 PK값이라서 얘 하나면 찾을 수가 있음
// 그럼 백엔드에서 /lounge/{boardName}/{postId} 로 데이터 보내는데 boardName은 할 게 없음 +
// /lounge/아무거나/postId하면 데이터가 성공적으로 전송됨 => boardName 을 sql쿼리문에도 넣는 것 더블체크용으로


const LoungePost = () => {
    const { boardName, postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [update, setUpdate] = useState(1); // 페이지 업데이트용


    // 댓글 등록 시 페이지를 다시 랜더링 시켜줘야하는데 어떻게 할까....
    // viewPost함수를 실행시켜야함 다시 랜더링이 일어나야 함..
    // 아 여기서 더 props를 늘려야 한다니..................


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
    }, [update]);



    return (

        <Container>
            <Header />
            {post && <HeaderLounge boardName={post.boardName} />}

            {post && <LoungePostTitle
                size='l'
                post={post}
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


        </Container>
    )
};


export default LoungePost;