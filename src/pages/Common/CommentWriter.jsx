// 댓글 작성 컴포넌트 입니다
// 댓글 작성, 대댓글 작성 둘 다 구현해야 합니다.

// 댓글에서 답글작성 버튼을 누르면 대댓글 작성 폼이 랜더링되게 해야한다. 이떄 parentId값을 전달받아 insert해줘야 한다
import React, {useState} from "react";
import styled from "styled-components";
import button from "./Button";

const Container = styled.div`
  padding: 15px;
  width: 880px;
  height: auto;
  background-color: white;
  border: 2px solid gray;
  border-radius: 10px;
  margin: ${props => props.parentId && !props.isModify ? '0 0 0 265px' : '0 auto'};


  .comment-nickname {
    width: 100%;
    font-size: 1.4rem;
  }

  .comment-write-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  textarea {
    border: none;
    resize: none;
    outline: none;
  }
  .comment-buttons {
    width: 100%;
    justify-content: right;
    text-align: right;
    
    button {
      font-size: 1.5rem;
      background-color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
/**
 * 댓글 등록, 수정할 떄 사용하는 컴포넌트입니다.
 * @param parentId 대댓글을 등록하기위해 parentId값을 전달받습니다.
 * @param content  댓글 수정시 기존의 내용을 content로 받습니다.
 * @param type     댓글 수정시 type을 modify로 받습니다
 * @returns {JSX.Element}
 * @constructor
 */
const CommentWriter = ({parentId, content, isModify, setIsModify, reply, setReply}) => {
    const [comment, setComment] = useState(content); // 댓글 입력을 위한 comment

    // 댓글 수정 시 이미 등록한 댓글을 나타내기 위함

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Comment submitted:", comment);
        // Reset the comment field
        setComment("");
    };

    return (
        <Container parentId={parentId} isModify={isModify}>
            <div className="comment-nickname">닉네임</div>
            <form className="comment-write-form" onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="댓글을 남겨보세요"
                    rows={4} // Adjust the number of rows as needed
                    cols={50} // Adjust the number of columns as needed
                />
                <div className='comment-buttons'>
                    {isModify ? (
                        <button onClick={() => setIsModify(false)}>취소</button>
                    ) : reply ? (
                        <button onClick={() => setReply(false)}>취소</button>
                    ) : (
                        <button onClick={() => setComment('')}>취소</button>
                    )}
                    <button className="submit-btn" type="submit">등록</button>
                </div>

            </form>
        </Container>
    )
};

export default CommentWriter;