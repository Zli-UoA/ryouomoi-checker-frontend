import React from 'react';
import User from '../../types/User';
import ValidNumber from '../../types/ValidNumber';
import HeartValue from '../HeartValue/HeartValue';
import PopupUserList from '../PopupUserList/PopupUserList';

const LeveledUsers: React.VFC<{ level: ValidNumber, users: User[] }> = ({
  users, level,
}) => (
  <div className="leveledUsers">
    <HeartValue value={level} />
    <PopupUserList users={users} />
  </div>
);

export default LeveledUsers;
