import React, { useEffect } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import './App.css';
import { baseURL } from './env';
import useFetchWithAuth from './hooks/useFetchWithAuth';
import useQuery from './hooks/useQuery';
import getToken from './lib/getToken';
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
  const queryToken = useQuery().get('auth_token');
  const localToken = getToken();
  const { pathname } = useLocation();
  const { statusCode } = useFetchWithAuth(`${baseURL}/me/lover`);

  useEffect(() => {
    if (!localToken && !queryToken && pathname !== '/tutorial/page2') {
      navigate('/tutorial');
    }

    if (queryToken) {
      navigate(`/welcome?auth_token=${queryToken}`);
      return;
    }

    if (localToken) {
      if (pathname === '/') {
        navigate('/home');
      }

      if (statusCode === 410 && pathname !== '/hakyoku') {
        navigate('/lost-partner');
      }

      if (statusCode === 200 && pathname !== '/hakyoku') {
        navigate('/celebration');
      }

      if (statusCode === 425) {
        navigate('/power-word');
      }
    }
  }, [statusCode, localToken, navigate, queryToken, pathname]);
};

const App: React.VFC = () => {
  useNavigateToEachPage();
  return (
    <div className="App">
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
