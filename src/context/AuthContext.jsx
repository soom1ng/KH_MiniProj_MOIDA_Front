import React, { createContext, useState } from 'react';
//이거 새로고침 로그아웃 안 되게 수정하기

export const LoginContext = createContext({
    userId: '',
    username: '',
    password: '',
    email: '',
    nickname: '',
    phone: '',
    intro: '',
    img: '',
    login: () => {},
    logout: () => {},
    setUsername: () => {},
    setPassword: () => {},
  });
  
  export const Provider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [intro, setIntro] = useState('');
    const [img, setImg] = useState('');
    const [isLogin, setIsLogin] = useState(false);

  
    const contextValue = {
        userId,
        username,
        password,
        email,
        nickname,
        phone,
        intro,
        img,
        isLogin,
        setUserId,
        setUsername,
        setPassword,
        setEmail,
        setNickname,
        setPhone,
        setIntro,
        setImg,
        setIsLogin
    };
  
    return (
      <LoginContext.Provider value={contextValue}>
        {children}
      </LoginContext.Provider>
    );
  };
  