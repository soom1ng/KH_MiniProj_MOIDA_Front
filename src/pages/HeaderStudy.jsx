import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { BigTitle, SmallTitle } from '../styles/StyledComponent';
// import userImg from "../Images/user.png";
import { StudyInfo } from './Common/StudyInfo';

// Study 왼쪽 Nav
const StudyHeader = styled.div`
    width: 200px;
    background-color: white;
    height : 100vh;
    position : fixed;
    text-align: center;
    top: 90px;
    z-index: 1;
    margin: 0 auto;
    border-right: 1px solid gray;

`
const navDefault = {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    margin: '40px',
    display: 'block'
    
  };
  const navSelect = {
    color: 'rgb(107, 78, 254)',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    margin: '40px',
    display: 'block'
  };

//   // 스터디 정보 Nav
//   const StyledStudyInfo = styled.div `
//     width: 1000px;
//     border-bottom: 1px solid gray;
//     height: 300px;
//     position: relative;
//     background-color: white;
//     top: 90px;
//     left:200px;
//     padding-left: 60px;
//     padding-top: 20px;
//     z-index: 0;

//     .StudyProfile {
//         width: 50px;
//         height: 50px;
//         border-radius: 50%;
//         background-color: #E2fff9;
//         display: flex;
//         margin: 15px;
//         margin-left: 0px;
//     }

//     .StudyName {      
//         display: flex;
//         align-items: center;
//     }

//     .StudyContainer{
//         display: flex;
//         align-items: center;
        
//     }
//     .person{
//         width: 15px;
//         height: 15px;
//         margin-left:10px;
       
//     }
//     .item1{
//         margin-right: 50px;
//     }
//     .item2{
//         margin-right: 35px;
//     }
//     .itemPerson{
//         margin-left: auto;
//         margin-right: 15px;
//         font-size: 18px;
//         margin-top:0px;
//     }
//     .itemText{
//         font-size:18px;
//     }
// `;

// const StudyInfo = ({study_profile, study_name, study_tag, study_link, study_intro, study_mgr_id, study_user_limit, study_user_count}) => {
//     return(
//         <>
//         <StyledStudyInfo>
//         <div className='StudyName'><div className='StudyProfile' style={{backgroundColor:`${study_profile}`}}></div><h1>{study_name}</h1></div>
//         <p className="itemText">{study_intro}</p>
//         <div className='StudyContainer'>
//             <h2 className='item1'>태그</h2>
//             <h2>{study_tag}</h2>
//             <p className='itemPerson'>{study_mgr_id}<img className='person' src={userImg}/>{study_user_count}/{study_user_limit}</p>
//         </div>
//         <div className='StudyContainer'>
//             <h2 className='item2'>채팅방</h2>
//             <h2>{study_link}</h2>
//         </div> 
//         </StyledStudyInfo>
        
//         </>
//     );
// };




const HeaderStudy = () => {
    return(
        <>
        <StudyHeader>
        <NavLink to="/Study/StudyRoom" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>홈</NavLink>
                    <NavLink to="/StudyRoom/Schedule" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>일정</NavLink>
                    <NavLink to="/StudyRoom/Board" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>보드</NavLink>
                    <NavLink to="/StudyRoom/Member" style={({isActive}) =>{
                      return isActive ? navSelect : navDefault
                    }}>멤버</NavLink>
        </StudyHeader>
        <StudyInfo
            size='l' 
            study_profile={"#fffff"}
            study_name = {"스터디이름"}
            study_tag = {"#태그#태그"}
            study_intro={"스터디 설명입니다."}
            isBasic={1}
        />
        
        </>
    )
}
export default HeaderStudy;