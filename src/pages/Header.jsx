import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/LOGO.png';
import searchIcon from '../Images/search.png';
import { Button } from '../styles/StyledComponent';
import { useState } from 'react';
import LogOut from '../Images/logout.png'
import MyPerson from '../Images/user.png'

const NavDefault = styled.div`
  position : fixed;
  width: 1200px;
  background-color: white;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid gray;
`;
const LogoNavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 18px;
`;
const Logo = styled.img`
  width: 150px;
  margin: 0 20px 0 20px;
`;
const NavContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  padding-top: 5px;  // 여기서 스터디, 스토리, 라운지 세로위치를 조정합니다.
`;


const navDefault = {
  color: 'black',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  margin: '22px'
};
const navSelect = {
  color: 'rgb(107, 78, 254)',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  margin: '22px'
};

const SearchLoginContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 350px;
  justify-content: space-between;
  margin-right: 20px;
  margin-top: 15px;
`;


//  로그인 버튼 추가해야함 로그인담당하는 컨테이너 만들어야 해


const SearchContainer = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;
  overflow: hidden;
  width: 255px;
  height: 36px;
  background-color: rgb(239,239,239);
  
`;

const SearchIcon = styled.img`
  height: 20px;
  width: 20px;
  opacity: 40%;
`;

const SearchBar = styled.input`
  padding: 5px;
  width: 210px;
  border: 0;
  font-size: 9px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgb(239,239,239);
  outline: none;
`;


const IsLogin = () => {
  const isLogin = true;
  const LoginButton = styled(Button)`
  background-color: rgb(107, 78, 254);
  width: 70px;
  height: 36px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;

  &.active {
    background-color: rgb(107, 78, 254);
  }
`;

const MypageImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #E2fff9;
  margin: 10px;
`;
const MypageProfile = styled.ul`
  font-size: 15px;
  font-weight: bolder;
  background-color: white;
  padding : 0;
  cursor: pointer;
  position: relative;
  padding-right: 15px;
`;
const MyDiv = styled.div`
  background-color: white;
  position: absolute;
  top: 30px;
  right: 1px;
  text-decoration-line: none;
  width: 120px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
const DropDown = styled.li`
  font-size: 13px;
  text-decoration: none;
  list-style: none;
  top: 30px;
  margin: 10px;
  text-decoration-line: none;
  color: #9b9b9b;
  
`;
const linkStyle = {
  textDecoration: 'none',
  color: 'black'
};

const MyImg = styled.img`
  width: 15px;
  margin-right: 20px;
  text-align: left;
  
`


const [view, setView] = useState(false);

  if(isLogin){
    return (
      <>
      <MypageImage/><MypageProfile onClick={() => {setView(!view)}}>윤홍비 님{" "}
      {view && (
      <MyDiv>
        <DropDown><Link to="/Mypage" style={linkStyle}><MyImg src={MyPerson}/>마이페이지</Link></DropDown>
        <DropDown><Link to="/Logout" style={linkStyle}><MyImg src={LogOut}/>로그아웃</Link></DropDown>
      </MyDiv>
      )}
      </MypageProfile>
      </>
    )
  }else{
    return <LoginButton>로그인</LoginButton>
  }
}

const Header = () => {
    return (
      <NavDefault>
        <HeaderContainer>
            <LogoNavContainer>
                <Logo src={logo} alt="로고" />
                <NavContainer>
                    <NavLink to="/study" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>스터디</NavLink>
                    <NavLink to="/story" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>스토리</NavLink>
                    <NavLink to="/lounge" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>라운지</NavLink>
                     </NavContainer>
            </LogoNavContainer>
            <SearchLoginContainer>
                <SearchContainer>
                    <SearchBar type="text" placeholder="검색하고 싶은 키워드를 입력해보세요!" />
                    <SearchIcon src={searchIcon} alt="검색 아이콘" />
                </SearchContainer>
                <IsLogin></IsLogin>
               
            </SearchLoginContainer>
        </HeaderContainer>
        </NavDefault>
    );
};
export default Header;