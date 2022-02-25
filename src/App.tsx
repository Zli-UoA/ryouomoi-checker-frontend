import React, { useEffect } from 'react';
import {
  Link, Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import './App.css';
import useQuery from './hooks/useQuery';
import CelebrationPage from './pages/CelebrationPage/CelebrationPage';
import HakyokuPage from './pages/HakyokuProcessPage/HakyokuProcessPage';
import HomePage from './pages/HomePage/HomePage';
import LostPartnerPage from './pages/LostPartnerPage/LostPartnerPage';
import PowerWordPage from './pages/PowerWordPage/PowerWordPage';
import SearchPage from './pages/SearchPage/SearchPage';
import TalkRoomPage from './pages/TalkRoomPage/TalkRoomPage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

const useNavigateToEachPage = (): void => {
  const navigate = useNavigate();
  const query = useQuery();
  const token = query.get('auth_token');
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('ahoy');
    if (token) {
      console.log('lets go');
      navigate(`/welcome?auth_token=${token}`);
      return;
    }

    if (localStorage.getItem('ryouomoi-checker-token')) {
      navigate('/home');
      return;
    }
    if (pathname !== '/tutorial/page2') {
      navigate('/tutorial');
    }
  }, [navigate, token, pathname]);
};

const App: React.VFC = () => {
  useNavigateToEachPage();
  return (
    <div className="App">
      <nav>
        <Link to="home">home</Link>
        /
        <Link to="tutorial">tutorial</Link>
        /
        <Link to="celebration">celebration</Link>
        /
        <Link to="hakyoku">hakyoku</Link>
        /
        <Link to="lost-partner">lost-partner</Link>
        /
        <Link to="search">search</Link>
        /
        <Link to="talkroom">talkroom</Link>
        /
        <Link to="welcome">welcome</Link>
        /
        <Link to="power-word">power-word</Link>
      </nav>

      <Routes>
        <Route path="/">
          root page
        </Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/tutorial/*" element={<TutorialPage />} />
        <Route path="/celebration" element={<CelebrationPage />} />
        <Route path="/hakyoku" element={<HakyokuPage />} />
        <Route path="/lost-partner" element={<LostPartnerPage />} />
        <Route path="/power-word" element={<PowerWordPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/talkroom" element={<TalkRoomPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};

export default App;
