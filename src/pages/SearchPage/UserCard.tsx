import React from 'react';
import UserIcon from '../../components/UserIcon/UserIcon';
import './userCard.css';

type User = {
  name: string,
  image: string,
  id: string
};

const UserCard: React.VFC<User> = ({
  name, image, id,
}) => (
  <div className="userCard">
    <UserIcon size="sm" image={image} />
    <h1 className="userCard__name">{name}</h1>
    <h2 className="userCard__id">{id}</h2>
  </div>
);

export default UserCard;
