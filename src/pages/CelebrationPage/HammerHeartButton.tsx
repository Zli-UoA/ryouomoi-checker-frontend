import React from 'react';
import { HammerHeartIcon } from '../../components/Icon/Icon';
import './hammerHeartButton.css';

type HammerHeartButtonProps = {
  onClick?: () => void;
};

const HammerHeartButton: React.VFC<HammerHeartButtonProps> = ({ onClick }) => (
  <button type="button" className="hammerHeartButton" onClick={onClick}>
    <HammerHeartIcon />
  </button>
);

export default HammerHeartButton;
