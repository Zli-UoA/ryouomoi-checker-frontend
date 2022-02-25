import React from 'react';
import { HammerHeartIcon } from '../../components/Icon/Icon';
import './hammerHeartButton.css';

const HammerHeartButton: React.VFC = () => (
  <button type="button" className="hammerHeartButton">
    <HammerHeartIcon />
  </button>
);

export default HammerHeartButton;
