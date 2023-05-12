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

    postListGet: async(boardName) => {
        return await axios.get(MOIDA_DOMAIN+`/lounge/${boardName}`);
    },

    postViewGet: async(boardName, postId) => {
        return await axios.get(MOIDA_DOMAIN + `/lounge/${boardName}/${postId}`);
    }
}

export default AxiosApi;