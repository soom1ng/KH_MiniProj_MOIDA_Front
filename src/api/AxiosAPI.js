import axios from 'axios';
const MOIDA_DOMAIN = "http://localhost:8090";


// 근데 이거 postListGET이렇게 하면 POST 는 postPost 라고해야하나???? board 로 바꿀까??
const AxiosApi = {

  //스터디 리스트
  studyListGet: async () => {
    return await axios.get(MOIDA_DOMAIN + "/study");
  },

  //나의 스터디 리스트
  studyMyListGet : async(userId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/myStudyList/${userId}`);
  },
   //내가 만든 스터디 리스트
   studyMyCreateListGet : async(userId) => {
    return await axios.get(MOIDA_DOMAIN + `/mypage/myCreateStudy/${userId}`);
  },

  // 스터디 헤더 정보
  studyViewGet: async (studyId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Main/${studyId}`);
  },

  // 스터디 멤버 정보
  studyMemGet: async (studyId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Member/${studyId}`);
  },

  // 스터디 멤버 확인
  studyMemOk : async(studyId, userId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/memIsOk/${studyId}/${userId}`);
},

// 스터디 일정 참가 확인
 studyScOk : async(studyScId, userId) => {
  return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/scIsOk/${studyScId}/${userId}`);
},

  // 스터디 일정 정보
  studyScGet: async (studyId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Schedule/${studyId}`);
  },

  // 스터디 일정 참여 정보
  studyUserScGet: async (userId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/mySc/${userId}`);
  },

  // 스터디 가입
  studyInsert: async (studyId, userId) => {
    const studyInsert = {
      studyId: studyId,
      userId: userId
    }
    return await axios.post(MOIDA_DOMAIN + `/study/studyRoom/Main/studyInsert`, studyInsert);
  },

  // 스터디 탈퇴
  studyDelete: async (studyId, userId) => {
    const studyDelete = {
      studyId: studyId,
      userId: userId
    };
    return await axios.delete(MOIDA_DOMAIN + `/study/studyRoom/Main/studyOut`, { data: studyDelete });
  },

  // 스터디 생성
  createStudy: async (userId, studyName, category, studyUserLimit, studyChatUrl, studyIntro, studyContent, studyDeadline, randomColor, tagString) => {
    const study = {
      userId: userId,
      studyName: studyName,
      studyCategory: category,
      studyUserLimit: studyUserLimit,
      studyChatUrl: studyChatUrl,
      studyIntro: studyIntro,
      studyContent: studyContent,
      studyDeadline: studyDeadline,
      studyProfile: randomColor,
      tagName: tagString
    };
    return await axios.post(MOIDA_DOMAIN + `/study/create`, study);
  },

  // // 스터디 보드생성
  // createBoardStudy: async (studyId, userId, boardTitle, boardContent) => {
  //   const boardw = {
  //     studyId: studyId,
  //     userId: userId,
  //     boardTitle: boardTitle,
  //     boardContent: boardContent
  //   };
  //   return await axios.post(MOIDA_DOMAIN + `/study/studyRoom/Board/BoardWrite/${studyId}`, boardw);
  // },

  // 스터디 일정 생성
  createStudySchedule: async (userId, studyId, studyScDate, studyScContent, studyScUserLimit) => {
    const schedule = {
      userId: userId,
      studyId: studyId,
      studyScDate: studyScDate,
      studyScContent: studyScContent,
      studyScUserLimit: studyScUserLimit
    };
    return await axios.post(MOIDA_DOMAIN + `/study/studyRoom/Schedule/${studyId}`, schedule)
  },
  //일정 참여하기
  scheduleMemReg: async (studyScId, userId) => {
    const schedulMem = {
      studyScId: studyScId,
      userId: userId
    };
    return await axios.post(MOIDA_DOMAIN + `/study/studyRoom/Schedule/MemberInser`, schedulMem);
  },

  //일정 참여취소
  scheduleMemDel: async (studyScId, userId) => {
    const schedulMem = {
      studyScId: studyScId,
      userId: userId
    };
    return await axios.delete(MOIDA_DOMAIN + `/study/studyRoom/Schedule/MemberDelete`, { data: schedulMem });
  },

  // 일정 멤버 정보
  studyScMemGet: async (studyScId) => {
    return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Schedule/MemberGet/${studyScId}`);
  },

  //일정 삭제
  scheduleScDel: async (studyScId) => {
    const schedulDelete = {
      studyScId: studyScId,
    };
    return await axios.delete(MOIDA_DOMAIN + `/study/studyRoom/ScheduleDelete`, { data : schedulDelete});
  },

  //스터디 권한 넘기기
  studyMgrNext: async (studyId, memId) => {
    const newData = { memId: memId.toString() };
    return await axios.patch(MOIDA_DOMAIN + `/study/studyRoom/Member/MemberNext/${studyId}`, newData);
  },

  //스터디 강퇴
  studyMemDel: async (studyId, memId) => {
    const studyMemDelete = {
      studyId: studyId,
      userId: memId
    };
    return await axios.delete(MOIDA_DOMAIN + `/study/studyRoom/Member/MemberDelete`, { data: studyMemDelete });
  },


  // 회원가입
  signUp: async (username, pw, pwConfirm, email, phone, nickname) => {
    const signUpData = {
      userName: username,
      pw: pw,
      pwConfirm: pwConfirm,
      email: email,
      phone: phone,
      nickname: nickname
    };

    try {
      const response = await axios.post(MOIDA_DOMAIN + "/new", signUpData);
      console.log("회원가입이 완료되었습니다.", response.data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  // 아이디 중복 확인
  checkUsername: async (username) => {
    const check = {
      nickname: username
    };
    return await axios.post(MOIDA_DOMAIN + "/checkUsername", check);
  },

  // 닉네임 중복 확인
  checkNickname: async (nickname) => {
    const check = {
      nickname: nickname
    };
    return await axios.post(MOIDA_DOMAIN + "/checkNickname", check);
  },
  

  // 로그인
  signIn: async (username, password) => {
    const signIn = {
      userName: username,
      pw: password
    };
    return await axios.post(MOIDA_DOMAIN + "/login", signIn);
  },

  // 마이페이지 프로필 확인
  myProfile: async (userId) => {
    return await axios.get(MOIDA_DOMAIN + `/myInfo/${userId}`);
  },


  // 마이페이지 프로필 수정
  updatePassword: async (userId, password, newPassword) => {
    const requestData = {
      userId: userId,
      pw: password,
      newPw: newPassword || password
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/pw`, requestData);
      return response.data;
    } catch (error) {
      console.log("비밀번호 변경 에러:", error.message);
      throw error;
    }
  },


  updateEmail: async (userId, email) => {
    const requestData = {
      userId: userId,
      email: email
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/email`, requestData);
      return response.data;
    } catch (error) {
      console.log("이메일 변경 에러:", error.message);
      throw error;
    }
  },

  updateNickname: async (userId, nickname) => {
    const requestData = {
      userId: userId,
      nickname: nickname
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/nickname`, requestData);
      return response.data;
    } catch (error) {
      console.log("닉네임 변경 에러:", error.message);
      throw error;
    }
  },

  updatePhone: async (userId, phone) => {
    const requestData = {
      userId: userId,
      phone: phone
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/phone`, requestData);
      return response.data;
    } catch (error) {
      console.log("번호 변경 에러:", error.message);
      throw error;
    }
  },

  // 이미지 수정
  uploadImageURL: async (userId, url) => {
    const requestData = {
      userId: userId,
      img: url
    };

    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/img`, requestData);
      return response.data;
    } catch (error) {
      console.log("이미지 업로드 에러:", error.message);
      throw error;
    }
  },

  // 자기소개 업로드
  uploadIntro: async (userId, intro) => {
    const requestData = {
      userId: userId,
      intro: intro
    };

    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/intro`, requestData);
      return response.data;
    } catch (error) {
      console.log(userId);
      console.log(intro);
      console.log("자기소개 업로드 에러:", error.message);
      throw error;
    }
  },

  //아이디, 비밀 번호 찾기

    findId: async (idEmail, idPhone) => {
      const requestData = {
        type : "findId",
        email: idEmail,
        phone: idPhone
      };
      return await axios.post(MOIDA_DOMAIN + "/findId", requestData);
    },

    findPw: async (username, pwEmail, pwPhone) => {
      const requestData = {
        type : "findPw",
        username: username,
        email: pwEmail,
        phone: pwPhone
      };
      return await axios.post(MOIDA_DOMAIN + "/findPw", requestData);
    },
  

  // 회원탈퇴
  deleteMember: async (userId, password) => {
    const delData = {
      userId: userId,
      pw: password
    };

    return await axios.post(MOIDA_DOMAIN + "/del", delData);
  },





  // 게시물 리스트 GET
  postListGet: async (boardName, lastId) => {
    return await axios.get(MOIDA_DOMAIN + `/lounge/${boardName}?lastId=${lastId}`);
  },

  // 게시물 페이지 GET
  postViewGet: async (boardName, postId) => {
    return await axios.get(MOIDA_DOMAIN + `/lounge/${boardName}/${postId}`);
  },

  // 게시물 등록 POST
  postReg: async (userId, title, contents, boardName, imgUrl) => {
    const post = {
      userId: userId,
      title: title,
      contents: contents,
      boardName: boardName,
      imgUrl: imgUrl
    };
    return await axios.post(MOIDA_DOMAIN + `/lounge/post/insert`, post);
  },

  // 게시물 수정
  postModify: async (postId, title, contents, imgUrl) => {
    const postMod = {
      postId: postId,
      title: title,
      contents: contents,
      imgUrl: imgUrl
    };
    return await axios.post(MOIDA_DOMAIN + "/lounge/post/update", postMod);
  },
  // 게시물 삭제
  postDelete: async (postId) => {
    return await axios.post(MOIDA_DOMAIN + `/lounge/post/delete?postId=${postId}`);
  },

  // 조회수 증가
  viewIncrease: async (postId) => {
    console.log("조회수 증가 api호출");
    return await axios.post(MOIDA_DOMAIN+`/lounge/post/view?postId=${postId}`);
  },

  // 추천 리스트 불러오기
  getRecommendList: async (userId) => {
    return await axios.get(MOIDA_DOMAIN + `/lounge/post/recommendList?userId=${userId}`);
  },

  // 추천하기
  postRecommend: async (postId, userId) => {
    console.log("추천발생")
    const data = {
      postId: postId,
      userId: userId
    };
    return await axios.post(MOIDA_DOMAIN + '/lounge/post/recommend', data);
  },

  // 추천취소
  postUndoRecommend: async (postId, userId) => {
    console.log("추천취소 발생")
    const data = {
      postId: postId,
      userId: userId
    };
    return await axios.post(MOIDA_DOMAIN + `/lounge/post/undoRecommend?postId=${postId}`);
  },

  // 댓글 등록 POST
  postCommentReg: async (userId, postId, parentId, contents) => {
    const comment = {
      userId: userId,
      postId: postId,
      parentId: parentId,
      contents: contents
    };
    return await axios.post(MOIDA_DOMAIN + `/lounge/comment/insert`, comment);
  },

  // 댓글 수정 POST
  postCommentModify: async (commentId, contents) => {
    const comment = {
      commentId: commentId,
      contents: contents
    };
    return await axios.post(MOIDA_DOMAIN + `/lounge/comment/update`, comment);
  },

  // 댓글 삭제
  postCommentDelete: async (commentId) => {
    return await axios.post(MOIDA_DOMAIN + `/lounge/comment/delete?commentId=${commentId}`);
  },



  // 스토리 리스트 GET
  storyListGet: async (lastId) => {
    return await axios.get(MOIDA_DOMAIN + `/story/?lastId=${lastId}`);
  },

  // 스토리 페이지 GET
  storyViewGet: async (storyId) => {
    return await axios.get(MOIDA_DOMAIN + `/story/${storyId}`);
  },

  // 스토리 등록 POST
  storyReg: async (userId, studyId, title, imgUrl, contents) => {
    const story = {
      userId: userId,
      studyId: studyId,
      title: title,
      imgUrl: imgUrl,
      contents: contents,
    };
    return await axios.story(MOIDA_DOMAIN + `/story/post/insert`, story);
  },

  // 스토리 수정 POST
  storyModify: async (title, contents, storyId) => {
    const story = {
      title: title,
      contents: contents,
      storyId: storyId,
    };
    return await axios.story(MOIDA_DOMAIN + `/story/post/update`, story);
  },

  // 스토리 삭제 POST
  storyDelete: async (storyId) => {
    const story = {
      storyId: storyId,
    };
    return await axios.story(MOIDA_DOMAIN + `/story/post/delete`, story);
  },

  // 스토리 댓글 등록 POST
  storyCommentReg: async (userId, storyId, parentId, contents) => {
    const comment = {
      userId: userId,
      storyId: storyId,
      parentId: parentId,
      contents: contents
    };
    return await axios.story(MOIDA_DOMAIN + `/story/comment/insert`, comment);
  },

  // 스토리 댓글 수정 POST
  storyCommentModify: async (commentId, contents) => {
    const comment = {
      commentId: commentId,
      contents: contents
    };
    return await axios.story(MOIDA_DOMAIN + `/story/comment/update`, comment);
  },

    // 스토리 댓글 삭제 POST
    storyCommentDelete: async (commentId) => {
      const comment = {
        commentId: commentId,
      };
      return await axios.story(MOIDA_DOMAIN + `/story/comment/delete`, comment);
    },


}

export default AxiosApi;