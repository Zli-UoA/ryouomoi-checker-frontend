import React from 'react';
import {
  Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import CelebrationPage from './pages/CelebrationPage/CelebrationPage';
import HakyokuPage from './pages/HakyokuPage/HakyokuPage';
import HomePage from './pages/HomePage/HomePage';
import LostPartnerPage from './pages/LostPartnerPage/LostPartnerPage';
import PowerWordPage from './pages/PowerWordPage/PowerWordPage';
import SearchPage from './pages/SearchPage/SearchPage';
import TolkRoomPage from './pages/TolkRoomPage/TolkRoomPage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

const App: React.VFC = () => (
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
      <Link to="tolkroom">tolkroom</Link>
      /
      <Link to="welcome">welcome</Link>
    </nav>

    <Routes>
      <Route path="/">
        root page
      </Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/tutorial" element={<TutorialPage />} />
      <Route path="/celebration" element={<CelebrationPage />} />
      <Route path="/hakyoku" element={<HakyokuPage />} />
      <Route path="/lost-partner" element={<LostPartnerPage />} />
      <Route path="/power-word" element={<PowerWordPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tolkroom" element={<TolkRoomPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  </div>
);

export default App;
