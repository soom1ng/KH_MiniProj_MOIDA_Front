import axios from 'axios';
const MOIDA_DOMAIN = "http://localhost:8090";


// 근데 이거 postListGET이렇게 하면 POST 는 postPost 라고해야하나???? board 로 바꿀까??
const AxiosApi = {

  //스터디 리스트
  studyListGet : async() => {
    return await axios.get(MOIDA_DOMAIN + "/study");
  },  

  // 스터디 헤더 정보
  studyViewGet: async(studyId) => {
      return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Main/${studyId}`);
  },

  // 스터디 멤버 정보
  studyMemGet : async(studyId) => {
      return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Member/${studyId}`);
  },

  // 스터디 일정 정보
  studyScGet : async(studyId) => {
      return await axios.get(MOIDA_DOMAIN + `/study/studyRoom/Schedule/${studyId}`);
  },

  // 스터디 가입
  studyInsert : async(studyId, userId) => {
    const studyInsert = {
      studyId : studyId,
      userId : userId
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
      studyChatUrl : studyChatUrl,
      studyIntro : studyIntro, 
      studyContent : studyContent,
      studyDeadline : studyDeadline,
      studyProfile : randomColor,
      tagName : tagString
    };
    return await axios.post(MOIDA_DOMAIN + `/study/create`, study);
  },

  // 스터디 일정 생성
  createStudySchedule : async (userId, studyId, studyScDate, studyScContent, studyScUserLimit) => {
    const schedule = {
      userId : userId,
      studyId : studyId,
      studyScDate : studyScDate,
      studyScContent : studyScContent,
      studyScUserLimit : studyScUserLimit
    };
    return await axios.post(MOIDA_DOMAIN + `/study/studyRoom/Schedule/${studyId}`, schedule)
  },
  //일정 참여하기
  scheduleMemReg: async (studyScId, userId) => {
    const schedulMem = {
      studyScId : studyScId,
      userId : userId
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
  // scheduleMemDel: async (studyScId) => {
  //   const schedulDelete = {
  //     studyScId : studyScId,
  //   };
  //   return await axios.delete(MOIDA_DOMAIN + `/study/studyRoom/Schedule/ScheduleDelete`, { data : schedulDelete});
  // },
  
  //스터디 권한 넘기기
  studyMgrNext: async (studyId, memId) => {
    const newData = { memId: memId.toString() };
    return await axios.patch(MOIDA_DOMAIN + `/study/studyRoom/Member/MemberNext/${studyId}`, newData);
  },

  //스터디 강퇴
  studyMemDel: async (studyId, memId) => {
    const studyMemDelete = {
      studyId : studyId,
      userId : memId
    };
    return await axios.delete(MOIDA_DOMAIN + `/study/studyRoom/Member/MemberDelete`, { data : studyMemDelete});
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

    findPw: async (username, email) => {
      const signIn = {
        userName: username,
        email: email
      };
      return await axios.post(MOIDA_DOMAIN + "/find", signIn);
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

  // 댓글 수정 post
  postCommentModify: async (commentId, contents) => {
    const comment = {
      commentId: commentId,
      contents: contents
    };
    return await axios.post(MOIDA_DOMAIN + `/lounge/comment/update`, comment);
  }

}

export default AxiosApi;