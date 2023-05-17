import axios from 'axios';
const MOIDA_DOMAIN = "http://localhost:8090";


// 근데 이거 postListGET이렇게 하면 POST 는 postPost 라고해야하나???? board 로 바꿀까??
const AxiosApi = {

  // 로그인
  signIn: async (username, password) => {
    const signIn = {
      userName: username,
      pw: password
    };
    return await axios.post(MOIDA_DOMAIN + "/login", signIn);
  },

  // 미니 프로필
  getNickname: async (userId) => {
    const requestData = {
      userId: userId
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/getMyInfo`, requestData);
      return response.data.nickname;
    } catch (error) {
      console.log("닉네임 가져오기 에러:", error.message);
      throw error;
    }
  },

  // 마이페이지(프로필) -- 수정 필요
  onMyPage: async (username) => {
    const myPage = {
      userName: username
    };
    return await axios.post(MOIDA_DOMAIN + "/myPage", myPage);
  },

  // 마이페이지 프로필 수정
  updatePassword: async (userId, newPw) => {
    const requestData = {
      userId: userId,
      newPw: newPw
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/pw`, requestData);
      return response.data;
    } catch (error) {
      console.log("비밀번호 변경 에러:", error.message);
      throw error;
    }
  },

  updateEmail: async (userId, newEmail) => {
    const requestData = {
      userId: userId,
      newEmail: newEmail
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/email`, requestData);
      return response.data;
    } catch (error) {
      console.log("이메일 변경 에러:", error.message);
      throw error;
    }
  },

  updateNickname: async (userId, newNickname) => {
    const requestData = {
      userId: userId,
      newNickname: newNickname
    };
    try {
      const response = await axios.post(`${MOIDA_DOMAIN}/nickname`, requestData);
      return response.data;
    } catch (error) {
      console.log("닉네임 변경 에러:", error.message);
      throw error;
    }
  },

  updatePhone: async (userId, newPhone) => {
    const requestData = {
      userId: userId,
      newPhone: newPhone
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
      imgUrl: imgUrl
    };
    return await axios.post(MOIDA_DOMAIN + `/lounge/${boardName}/write`, post);
  }

}

export default AxiosApi;