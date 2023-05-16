import React, {useState} from 'react';
import styled from "styled-components";
import enterIcon from "../../Images/enter.png"
import CommentWriter from "./CommentWriter";
// 접속한 아이디가 댓글 쓴 본인이면 수정/삭제가 보여야 함 => context API 로 유저의 아이디 값을 가져오고 비교한다?

const EnterIcon = styled.img`
  width: 50px;
`;
const StyledComment = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
  
  .comment-child {
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: center;
    margin-left: 100px;
    
  }
  
 
  .comment-body {
    width: 880px;
    height: 125px;
    display: flex;
    margin: 10px auto;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    
    img {
      margin-left: 20px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      border: 1px solid gray;
    }
    
    .comment-body-text {
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 600px;
      
      .comment-nickname {
        font-size: 2rem;
        font-weight: bold;
      }
      
      .comment-content {
        font-size: 1.7rem;
        
      }
    }
    .comment-footer {
      display: flex;
      
      .modify {
        cursor: pointer;
      }
      .reply {
        margin-left: 20px;
        cursor: pointer;
      }
      
    }
  }
  
  
`;


// 댓글 : 닉네임 댓글내용 날짜 정도 인가?
// 어떻게 가져오나? DB테이블을 가져오겠지 post_id로 조인해서 해당 글의 댓글을 모두 가져옴

// 순서는? comment_id 의 시퀀스 순서대로 먼저 달린 댓글이 먼저 보여짐
// 그런데 우린 대댓글 기능이 있잖아? 부모 댓글을 가진 댓글이 있을거임
// 부모 댓글의 ID또한 조건에 걸리고 대댓글도 ID로 등록된 순서대로 쫙 나열
// 근데 우리는 한 화면에 댓글에 몇개가 보일 수 있나? 6개라 가정하고
// 대댓글이 짤릴 수 도 있는데?? 1개 댓글에 8개의 대댓글이 달려있다면?
// 다음페이지에 랜더링되면 알기가 힘들것이다



// 내 아이디 값을 가져와서 수정/삭제가 가능해야함 댓글 삭제하면 대댓글은 어떻게 처리하냐?? 전부 삭제 처리하나?
// 닉네임은 변경가능한 값이다, 고유 아이디값과 비교하는 것이 맞다
// isChild = parent 컬럼에 값이 있으면 true 아니면 null 이니까 false로 쓸 수 있다

// 23.05.16
// context를 사용하여 닉네임 id를 가져온다
// 댓글 수정,삭제 기능을 context의 id값을 통해 랜더링한다.
// 댓글 작성시 닉네임을 가져와서 상단에 랜더링한다 -- commentWrite 컴포넌트를 만들깝쇼?
const Comment = ({comment}) => {
    const {userId, commentId, parentId, nickname, regTime, contents, imgUrl} = comment;

    const [isModify, setIsModify] = useState(false);
    const [reply, setReply ] = useState(false);


    return (
        <>
        <StyledComment>

            {(parentId !== 0)  &&
                <div className="comment-child">
                    <EnterIcon src={enterIcon} alt="#"/>
                </div>
            }
            {isModify ? <CommentWriter  parentId={parentId} content={contents} isModify={isModify} setIsModify={setIsModify}/> :

            <div className="comment-body">
                <img src={imgUrl} alt="#"/>
                <div className="comment-body-text">
                    <div className="comment-nickname">{nickname}</div>
                    <div className="comment-content">{contents}</div>
                    <div className="comment-footer">
                        <div className="time">{regTime}</div>
                        {/* context의 정보와 comment의 userId비교*/}
                        {userId && <div className="modify" onClick={() => setIsModify(true)}>수정</div>}
                        {!parentId && <div className="reply" onClick={() => setReply(true)}>답글달기</div>}
                    </div>
                </div>
            </div>
            }
        </StyledComment>
            {reply && <CommentWriter parentId={commentId} reply={reply} setReply={setReply}/>}
        </>



    );
};

export default Comment;