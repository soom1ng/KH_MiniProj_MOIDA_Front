import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //브라우저라우터를 라우터로 이름 변경
import Home from './pages/Home';


import StudyCreate from './pages/Study/Main/StudyCreate';
import StudyList from './pages/Study/Main/StudyList';
import StudyMain from './pages/Study/Main/StudyMain';

import StudyRoomMain from './pages/Study/StudyRoom/StudyRoomMain';
import StudyRoomSchedule from './pages/Study/StudyRoom/StudyRoomMain';
import StudyRoomBoard from './pages/Study/StudyRoom/StudyRoomBoard';
import StudyRoomMember from './pages/Study/StudyRoom/StydtRoomMember';

import StoryMain from './pages/Story/StoryMain';
import StoryPost from './pages/Story/StoryPost';
import StoryWrite from './pages/Story/StoryWrite';

import LoungeFreeMain from './pages/Lounge/LoungeFreeMain';
import LoungeQnA from './pages/Lounge/LoungeQnA';
import LoungePost from './pages/Lounge/LoungePost';
import LoungeWrite from './pages/Lounge/LoungeWrite';
import SearchAll from './pages/Lounge/SearchAll';

import Mypage from './pages/User/Mypage';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import MemberDelete from './pages/User/MemberDelete';
import MyPost from './pages/User/MyPost';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>


        <Route path='/Study' element={<StudyMain/>}/>
        <Route path='/Study/Create' element={<StudyCreate/>}/>
        <Route path='/Study/List' element={<StudyList/>}/>

        <Route path='/Study/StudyRoom' element={<StudyRoomMain/>}/>
        <Route path='/Study/StudyRoom/StudyRoomSchedule' element={<StudyRoomSchedule/>}/>
        <Route path='/Study/StudyRoom/StudyRoomBoard' element={<StudyRoomBoard/>}/>
        <Route path='/Study/StudyRoom/StudyRoomMember' element={<StudyRoomMember/>}/>


        <Route path='/Story' element={<StoryMain/>}/>
        <Route path='/Story/Post' element={<StoryPost/>}/>
        <Route path='/Story/Write' element={<StoryWrite/>}/>

        <Route path='/Lounge' element={<LoungeFreeMain/>}/>
        <Route path='/Lounge/QnA' element={<LoungeQnA/>}/>
        <Route path='/Lounge/Post' element={<LoungePost/>}/>
        <Route path='/Lounge/Write' element={<LoungeWrite/>}/>
        <Route path='/Lounge/SearchAll' element={<SearchAll/>}/>

        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/Signln' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Mypage/MemberDelete' element={<MemberDelete/>}/>
        <Route path='/Mypage/MyPost' element={<MyPost/>}/>
        </Routes>
    </Router>
    </>
  );
};

export default App;
