import React from 'react';
import UserCard from './UserCard';
import './userList.css';
import User from '../../types/User';

export type UserListProps = {
  users: User[]
};

const UserList: React.VFC<UserListProps> = ({
  users,
}) => (
  <div className="userList">
    {users.map(({ displayName, imageUrl, screenName }) => (
      <UserCard displayName={displayName} imageUrl={imageUrl} screenName={screenName} />
    ))}
  </div>
);

export default UserList;
