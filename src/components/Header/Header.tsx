import React from 'react';
import './header.css';

type HeaderProps = {
  children: JSX.Element
};

const Header: React.VFC<HeaderProps> = ({ children }) => (
  <div className="header">
    <div className="header__children ">
      {children}
    </div>
  </div>
);

export default Header;
