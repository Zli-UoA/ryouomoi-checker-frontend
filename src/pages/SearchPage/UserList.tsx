import React from 'react';
import UserCard from './UserCard';
import './userList.css';

type User = {
  name: string,
  image: string,
  id: string
};

type UserListProps = {
  users: User[]
};

const UserList: React.VFC<UserListProps> = ({
  users,
}) => (
  <div className="userList">
    {users.map(({ name, image, id }) => (
      <UserCard name={name} image={image} id={id} />
    ))}
  </div>
);

export default UserList;
