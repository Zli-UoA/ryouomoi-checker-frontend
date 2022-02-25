import React from 'react';
import UserIcon from '../../components/UserIcon/UserIcon';
import './userCard.css';

export type User = {
  displayName: string,
  imageUrl: string,
  screenName: string
};

const trimming = (tooLongName: string, limit: number): string => {
  let res = tooLongName;
  if (tooLongName.length >= limit) {
    const trimmed = tooLongName.substring(0, limit);
    res = `${trimmed}...`;
  }
  return res;
};

const UserCard: React.VFC<User> = ({
  displayName, imageUrl, screenName,
}) => (
  <div className="userCard">
    <div className="userCard__icon mg_top-8 mg_bottom-8 mg_left-8 mg_right-16">
      <UserIcon size="sm" image={imageUrl} />
    </div>
    <div className="userCard__text mg_top-8 mg_bottom-8 mg_right-8">
      <h1 className="userCard__name">{trimming(displayName, 15)}</h1>
      <h2 className="userCard__id">{trimming(screenName, 40)}</h2>
    </div>
  </div>
);

export default UserCard;
