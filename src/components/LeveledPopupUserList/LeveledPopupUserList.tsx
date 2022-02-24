import React from 'react';
import HeartValue from '../HeartValue/HeartValue';
import PopupUserList, { UserCardsInfo } from '../PopupUserList/PopupUserList';
import { ValidNumber } from '../HeartRating/useHeartRating';

type LeveledUserListProps = {
  level: ValidNumber,
  userCardsInfo: UserCardsInfo
};

const LeveledUserList: React.VFC<LeveledUserListProps> = ({ level, userCardsInfo }) => {
  if (level === 5) {
    return (
      <>
        <HeartValue value={level} />
        <div className="mg_top-8">
          <PopupUserList userCardsInfo={userCardsInfo} />
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
      <PopupUserList userCardsInfo={userCardsInfo} />
      <div style={{ height: '64px' }} />
    </>
  );
};

export default LeveledUserList;
