import React from 'react';
import HeartValue from '../HeartValue/HeartValue';
import UserList, { User } from '../../pages/SearchPage/UserList';
import { ValidNumber } from '../HeartRating/useHeartRating';

type LeveledUserListProps = {
  level: ValidNumber,
  users: User[],
};

const LeveledUserList: React.VFC<LeveledUserListProps> = ({ level, users }) => {
  if (level === 5) {
    return (
      <>
        <HeartValue value={level} />
        <div className="mg_top-8">
          <UserList users={users} />
        </div>
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
