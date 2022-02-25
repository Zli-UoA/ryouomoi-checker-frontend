import React from 'react';
import UserIcon from '../../components/UserIcon/UserIcon';
import './userCard.css';

export type User = {
  displayName: string,
  imageUrl: string,
  screenName: string
};

const UserCard: React.VFC<User> = ({
  displayName, imageUrl, screenName,
}) => (
  <div className="userCard">
    <div className="userCard__icon">
      <UserIcon size="sm" image={imageUrl} />
    </div>
    <div className="userCard__text">
      <h1 className="userCard__name">{displayName}</h1>
      <h2 className="userCard__id">{screenName}</h2>
    </div>
  </div>
);

export default UserCard;
