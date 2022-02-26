import React from 'react';
import { Link } from 'react-router-dom';

const DebugNavigator: React.VFC = () => (
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
);

export default DebugNavigator;
