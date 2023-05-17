import axios from 'axios';
const MOIDA_DOMAIN = "http://localhost:8090";


// 근데 이거 postListGET이렇게 하면 POST 는 postPost 라고해야하나???? board 로 바꿀까??
const AxiosApi = {

    // 로그인
    signIn: async(username, password) => {
        const signIn= {
            userName: username,
            pw: password
          };
          return await axios.post(MOIDA_DOMAIN+ "/login", signIn);
    },

    // 게시물 리스트 GET
    postListGet: async(boardName, lastId) => {
        return await axios.get(MOIDA_DOMAIN+`/lounge/${boardName}?lastId=${lastId}`);
    },

    // 게시물 페이지 GET
    postViewGet: async(boardName, postId) => {
        return await axios.get(MOIDA_DOMAIN + `/lounge/${boardName}/${postId}`);
    },

    // 게시물 등록 POST
    postReg: async(userId, title, contents, boardName, imgUrl) => {
        const post = {
            userId : userId,
            title: title,
            contents: contents,
            imgUrl: imgUrl
        };
        return await axios.post(MOIDA_DOMAIN + `/lounge/${boardName}/write`, post);
    }

}

export default AxiosApi;