import React, { createContext, useState, useEffect } from 'react';

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

useEffect(() => {
    // 로컬 스토리지에서 인증 정보 가져오기
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedNickname = localStorage.getItem('nickname');
    const storedImg = localStorage.getItem('img');
    const storedIsLogin = localStorage.getItem('isLogin');

    if (storedUserId && storedUsername && storedPassword && storedIsLogin === 'true') {
      setUserId(storedUserId);
      setUsername(storedUsername);
      setPassword(storedPassword);
      setNickname(storedNickname);
      setImg(storedImg);
      setIsLogin(true);
    }
  }, []);

  const login = (userId, username, password, img, nickname) => {
    // 인증 정보 저장
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.getItem('nickname', nickname);
    localStorage.getItem('img', img);
    localStorage.setItem('isLogin', 'true');

    setUserId(userId);
    setUsername(username);
    setPassword(password);
    setNickname(nickname);
    setImg(img);
    setIsLogin(true);
  };

  const logout = () => {
    // 인증 정보 초기화
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.getItem('nickname');
    localStorage.getItem('img');
    localStorage.removeItem('isLogin');

    setUserId('');
    setUsername('');
    setPassword('');
    setNickname('');
    setImg('');
    setIsLogin(false);
  };

  
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
        setIsLogin,
        login,
        logout
    };
  
    return (
      <LoginContext.Provider value={contextValue}>
        {children}
      </LoginContext.Provider>
    );
  };
  