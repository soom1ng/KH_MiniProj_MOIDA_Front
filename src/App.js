import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //브라우저라우터를 라우터로 이름 변경
import Home from './pages/Home';
import LoungeMain from './pages/Lounge/LoungeMain';
import LoungePost from './pages/Lounge/LoungePost';
import LoungeWrite from './pages/Lounge/LoungeWrite';
import StoryMain from './pages/Story/StoryMain';
import StoryPost from './pages/Story/StoryPost';
import StoryWrite from './pages/Story/StoryWrite';
import Mypage from './pages/User/Mypage';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Lounge' element={<LoungeMain/>}/>
        <Route path='/Lounge/Post' element={<LoungePost/>}/>
        <Route path='/Lounge/Write' element={<LoungeWrite/>}/>
        <Route path='/Story' element={<StoryMain/>}/>
        <Route path='/Story/Post' element={<StoryPost/>}/>
        <Route path='/Story/Write' element={<StoryWrite/>}/>
        <Route path='/Lounge' element={<LoungeMain/>}/>
        <Route path='/Lounge/Post' element={<LoungePost/>}/>
        <Route path='/Lounge/Write' element={<LoungeWrite/>}/>
        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/Signln' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
    </Router>
    </>
  );
};

export default App;
