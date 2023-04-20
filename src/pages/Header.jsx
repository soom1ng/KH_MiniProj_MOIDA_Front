import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../Images/LOGO.png';
import searchIcon from '../Images/search.png';

const HeaderContainer = styled.div`
  width: 1200px;
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
  padding-top: 15px;
`;
const Logo = styled.img`
  height: 40px;
  width: 170px;
  margin: 0 20px 0 20px;
`;
const NavContainer = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  padding-top: 5px;  // 여기서 스터디, 스토리, 라운지 세로위치를 조정합니다.
`;
const Nav = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin: 22px;  // 여기서 네비게이션 메뉴 사이의 간격을 조정합니다
  
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
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgb(239,239,239);
  outline: none;
`;

const Header = () => {
    return (

        <HeaderContainer>
            <LogoNavContainer>
                <Logo src={logo} alt="로고" />
                <NavContainer>
                    <Nav to="/study">스터디</Nav>
                    <Nav to="/story">스토리</Nav>
                    <Nav to="/lounge">라운지</Nav>
                </NavContainer>
            </LogoNavContainer>
            <SearchContainer>
                <SearchBar type="text" placeholder="어떤 스터디를 찾고 싶으신가요?" />
                <SearchIcon src={searchIcon} alt="검색 아이콘" />
            </SearchContainer>
        </HeaderContainer>
    );
};
export default Header;