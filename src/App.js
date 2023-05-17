import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; //브라우저라우터를 라우터로 이름 변경
import Home from './pages/Home';
import GlobalStyle from "../src/styles/StyledComponent"


import StudyList from './pages/Study/Main/StudyList';
import StudyMain from './pages/Study/Main/StudyMain';

import StudyRoomMain from './pages/Study/StudyRoom/StudyRoomMain';
import StudyRoomSchedule from './pages/Study/StudyRoom/StudyRoomSchedule';
import StudyRoomBoard from './pages/Study/StudyRoom/StudyRoomBoard';
import StudyRoomMember from './pages/Study/StudyRoom/StudyRoomMember';
import StudyBoardWrite from './pages/Study/StudyRoom/StudyBoardWrite';

import StoryMain from './pages/Story/StoryMain';
import StoryPost from './pages/Story/StoryPost';
import StoryWrite from './pages/Story/StoryWrite';

// import LoungeFree from './pages/Lounge/LoungeFree';
// import LoungeQnA from './pages/Lounge/LoungeQnA';


import LoungeMain from "./pages/Lounge/LoungeMain";
import LoungePost from './pages/Lounge/LoungePost';
import LoungeWrite from './pages/Lounge/LoungeWrite';
import SearchAll from './pages/Lounge/SearchAll';

import MyPage from './pages/User/Mypage';
import MyPost from './pages/User/MyPost';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import FindMember from './pages/User/FindMember';

import MemberDelete from './pages/User/MemberDelete'
import StudyCreate from './pages/Study/Main/StudyCreate';
import {Provider} from "./context/AuthContext";

function App() {
    return (
        <>

        <Provider>
            <GlobalStyle/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>

                    <Route path='/Study' element={<StudyMain/>}/>
                    <Route path='/Study/List' element={<StudyList/>}/>
                    <Route path='/Study/Create' element={<StudyCreate></StudyCreate>}/>

                    <Route path='/Study/StudyRoom' element={<StudyRoomMain/>}/>
                    <Route path='/StudyRoom/Schedule' element={<StudyRoomSchedule/>}/>
                    <Route path='/StudyRoom/Board' element={<StudyRoomBoard/>}/>
                    <Route path='/StudyRoom/Member' element={<StudyRoomMember/>}/>
                    <Route path='/StudyRoom/BoardWrite' element={<StudyBoardWrite/>}/>

                    <Route path='/Story' element={<StoryMain/>}/>
                    <Route path='/Story/Post' element={<StoryPost/>}/>
                    <Route path='/Story/Write' element={<StoryWrite/>}/>


                    <Route path='/lounge/:boardName/:postId' element={<LoungePost/>}/>
                    <Route path='/Lounge/:boardName' element={<LoungeMain/>}/>
                    <Route path='/Lounge/:boardName/Write' element={<LoungeWrite/>}/>
                    <Route path='/Lounge/SearchAll' element={<SearchAll/>}/>

                    <Route path='/SignIn' element={<SignIn/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>
                    <Route path='/FindMember' element={<FindMember/>}/>

                    <Route path='/Mypage' element={<MyPage/>}/>
                    <Route path='/Mypage/MemberDelete' element={<MemberDelete/>}/>
                    <Route path='/Mypage/MyPost' element={<MyPost/>}/>
                    
                </Routes>
            </Router>

        </Provider>
        </>
    );
};

export default App;
