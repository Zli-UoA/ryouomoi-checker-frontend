import React from 'react';
import HeartValue from '../HeartValue/HeartValue';
import { UserListProps, User } from '../../pages/SearchPage/UserList';
import './leveledUserList.css';
import { ValidNumber } from '../HeartRating/useHeartRating';

type LeveledUserListProps = {
  level: ValidNumber,
  UserList: React.VFC<UserListProps>,
  users: User[],
};

const LeveledUserList: React.VFC<LeveledUserListProps> = ({ level, UserList, users }) => {
  if (level === 5) {
    return (
      <>
        <HeartValue value={level} />
        <UserList users={users} />
        <div style={{ height: '64px' }} />
      </>
    );
  }
  return (
    <>
      <div className="mg_top-8">
        <HeartValue value={level} />
      </div>
      <UserList users={users} />
      <div style={{ height: '64px' }} />
    </>
  );
};

export default LeveledUserList;
