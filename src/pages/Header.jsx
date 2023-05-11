import styled from 'styled-components';
import {Link, NavLink, useLocation} from 'react-router-dom';
import logo from '../Images/LOGO.png';
import searchIcon from '../Images/search.png';
import {Button} from '../styles/StyledComponent';
import {useEffect, useState} from 'react';
import LogOut from '../Images/logout.png'
import MyPerson from '../Images/user.png'
import CustomNavLink from "./Common/CustomNavLink";
import {LoginContext} from "../context/AuthContext";


const Container = styled.div`
  padding-top: 10px;
  position: fixed;
  top: 0;
  width: 1200px;
  height: 90px;
  background-color: white;
  z-index: 90;

  .HeaderContainer, .HeaderLeft, .Nav, .HeaderRight {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .HeaderContainer {
    width: 1200px;
    border-bottom: 1.5px solid gray;
    margin: 0 auto;
    justify-content: space-between;
  }

  .HeaderLeft {
    padding-top: 18px;
  }

  .Nav {
    height: 100%;
    padding-top: 20px; // 여기서 스터디, 스토리, 라운지 세로위치를 조정합니다.
  }

  // 헤더 오른쪽 : 검색바, 로그인버튼, 마이페이지, 로그아웃 기능
  .HeaderRight {
    min-width: 430px;
    justify-content: space-between;
    padding-top: 18px;
  }

  .LoginArea {
    width: 100px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
  }

`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: 280px;
  height: 36px;
  background-color: rgb(239, 239, 239);
  z-index: 10;
  padding: 0 10px 0 10px;

  img {
    height: 20px;
    width: 20px;
    opacity: 40%;
  }

  input {
    width: 100%;
    height: 36px;
    padding: 5px 5px 5px 5px;
    font-size: 1.1rem;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: rgb(239, 239, 239);
    z-index: 20;
    border: none;
    outline: none;
  }
`;


// 로고를 헤더에서만 쓴다면 여기있어도 되고
// 다른곳에서도 사용한다면 Common 폴더에 컴포넌트로 만들어줍니다.
const Logo = styled.img`
  width: 160px;
  margin: 0 20px 0 20px;
`;

// navDefault와 navSelect차이는 색상뿐입니다. 간단하게 고쳐쓰겠습니다.


//  로그인 버튼 추가해야함 로그인담당하는 컨테이너 만들어야 해


const LoginButton = styled(Button)`
  background-color: var(--maincolor);
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

`;


const IsLogin = () => {
    const {isLogin} = LoginContext();
    const {setIsLogin} = LoginContext();

    function handleLogout() {
        console.log({isLogin})
        setIsLogin(false);
    }

    const MypageImage = styled.div`
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #E2fff9;
      margin: 10px;
    `;
    const MypageProfile = styled.ul`
      font-size: 1.5rem;
      font-weight: bolder;
      background-color: white;
      cursor: pointer;
      position: relative;
      padding: 0 15px 0 0;
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
      font-size: 1.3rem;
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

    `;
    const LoginButton = styled(Button)`
      background-color: var(--maincolor);
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
    `;


    // isLogin 상태만 가지고 로그인버튼 표시할지 마이페이지 표시할지 정하면 되지 않을까?
    const [view, setView] = useState(false);

    return (
        <>
            <MypageImage/>
            <MypageProfile onClick={() => {
                setView(!view)
            }}>윤홍비 님{" "}
                {view && (
                    <MyDiv>
                        <DropDown><Link to="/Mypage" style={linkStyle}><MyImg
                            src={MyPerson}/>마이페이지</Link></DropDown>
                        <DropDown><Link to="/" style={linkStyle} onClick={handleLogout}><MyImg src={LogOut}/>로그아웃</Link></DropDown>
                    </MyDiv>
                )}
            </MypageProfile>
        </>
    )
}

const Header = () => {
    const {isLogin} = LoginContext();
    const {setIsLogin} = LoginContext();

    function handleLogout() {
        console.log({isLogin})
        setIsLogin(false);
    }

    return (
        <Container>
            <div className='HeaderContainer'>
                <div className='HeaderLeft'>
                    <NavLink to="/"><Logo src={logo} alt="로고"/></NavLink>
                    <div className='Nav'>
                        <CustomNavLink to="/study" contain="/study" deco={1}>스터디</CustomNavLink>
                        <CustomNavLink to="/story" contain="story" deco={1}>스토리</CustomNavLink>
                        <CustomNavLink to="/lounge/free" contain="/lounge" deco={1}>라운지</CustomNavLink>
                    </div>
                </div>
                <div className='HeaderRight'>
                    <SearchBar>
                        <input className='searchInput' type="text" placeholder="검색하고 싶은 키워드를 입력해보세요!"/>
                        <NavLink to='/Lounge/SearchAll'><img src={searchIcon} alt="검색 아이콘"/></NavLink>
                    </SearchBar>
                    <div className='LoginArea' style={isLogin ? {width: '135px'} : {width: '130px'}}>
                        {isLogin ?
                            <IsLogin></IsLogin>
                            :
                            <LoginButton onClick={() => setIsLogin(true)}>로그인</LoginButton>
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Header;