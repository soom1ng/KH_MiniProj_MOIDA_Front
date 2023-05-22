import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logout from '../Images/logout.png';

const NavigationContainer = styled.div`
  display: flex;
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: #fff;
  padding: 16px;
  border-right: 1.5px solid gray;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-right: 30px;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #6E53F4;
  }

  &.active {
    color: #6E53F4;
  }
`;

const MemDelete = styled.li`
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  margin-top: 220px;
  margin-bottom: 30px;
  margin-right: 30px;
`;

const MemDeleteLink = styled(Link)`
  text-decoration: none;
  color: #ff4f4f;

  &:hover {
    color: #cc5c5c;
  }
`;

const MemDeleteImg = styled.img`
  width: 17px;
  margin-right: 5px;
`;

const HeaderMyPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setActiveTab(1); // 페이지가 처음 로드될 때 activeTab 값을 1로 초기화
  }, []);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/MyPage/MyPost') {
      setActiveTab(2);
    }
  }, []);

  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/MyPage" className={`navbar-menu-item ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
            마이페이지
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/MyPage/MyPost" className={`navbar-menu-item ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
            나의 작성
          </NavigationLink>
        </NavigationItem>
        <MemDelete>
          <MemDeleteLink to="/MyPage/MemberDelete">
            <MemDeleteImg src={logout} alt="" />회원 탈퇴
          </MemDeleteLink>
        </MemDelete>
      </NavigationList>
    </NavigationContainer>
  );
};

export default HeaderMyPage;
