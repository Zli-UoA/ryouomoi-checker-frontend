import React from 'react';
import './withBackground.css';

type WithBackgroundProps = {
  children: JSX.Element,
};

const WithBackground: React.VFC<WithBackgroundProps> = ({ children }) => (
  <div className="withBackground">
    {children}
  </div>
);

export default WithBackground;
