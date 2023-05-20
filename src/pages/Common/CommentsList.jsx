import Comment from "./Comment";
import styled from "styled-components";
import React, { useState } from "react";
import Paging from "../Common/Paging";
import CommentWriter from "./CommentWriter";

const Container = styled.div`
  width: 1200px;

  .comment-header {
    background-color: white;
    padding-left: 50px;
    display: flex;
    align-items: center;
    height: 100px;
    font-size: 3.2rem;
    font-weight: bold;
  }

  .comment-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: whitesmoke;
    margin: 10px auto;
    padding-top: 30px;
  }

  .comment-write {
    height: 215px;
    width: 880px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .comment-nickname {
      width: 100%;
      text-align: left;
    }
    textarea {
      height: 125px;
      width: 760px;
      border-radius: 10px;
      border: 0;
      align-items: normal;
      &:focus {
        outline-color: lightgray;
        outline-width: 2px;
      }
      button {
        margin: 0 auto;
        width: 100px;
      }
    }

    Button {
      margin-left: 20px;
      width: 100px;
      justify-content: center;
    }
  }
`;

// onClick DB  COMMENTS 테이블에 INSERT 해주는 거 만들어야함
// 아이디를 컨텍스트 API로 받아와야 할듯? 그럼 COMMENTS 테이블을 ID로 바꿔야 할 것같은데 흠...


// 댓글은 스토리와 라운지의 포스트에서 사용하게 됩니다.
// 타입을 lounge와 story로 나누면 되려나
// 아니면 게시물 + 댓글list로 VO가 구성되어 있고 한번에 받아오니까
// 댓글 list를 받아서 열어주는걸로 할까?? 괜찮을듯
const CommentsList = ({ storyId, postId, commentsList, page, setPage, update, setUpdate }) => {
    const listPerPage = 8; // 페이지 당 보여줄 댓글 개수 개수
    const offset = listPerPage * (page - 1); // 리스트를 슬라이스 하기 위한 변수
    const maxPage = Math.ceil(commentsList.length / listPerPage); // 현재 리스트의 최대 페이지



    return (
        <Container>
            <div className="comment-header">댓글 📑</div>

            <div className="comment-list">
                <CommentWriter postId={postId} storyId={storyId} update={update} setUpdate={setUpdate}/>

                {commentsList && commentsList.slice(offset, offset + listPerPage).map((comment) => (
                    <Comment comment={comment} update={update} setUpdate={setUpdate} />
                ))}

                {maxPage > 0 && <Paging maxPage={maxPage} page={page} setPage={setPage}></Paging>}
            </div>
        </Container>

    )
}

export default CommentsList;