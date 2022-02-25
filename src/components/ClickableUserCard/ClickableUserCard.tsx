import React from 'react';
import UserCard from '../UserCard/UserCard';
import User from '../../types/User';
import './clickableUserCard.css';

type ClickableUserCardProps = {
  user: User,
  onClick: () => void
};

const ClickableUserCard: React.VFC<ClickableUserCardProps> = ({ user, onClick }) => (
  <button type="button" onClick={onClick} className="clickableUserCard">
    <UserCard
      displayName={user.displayName}
      imageUrl={user.imageUrl}
      screenName={user.screenName}
    />
  </button>
);

export default ClickableUserCard;
