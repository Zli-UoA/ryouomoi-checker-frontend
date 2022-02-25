import React from 'react';
import HeartValue from '../HeartValue/HeartValue';
import PopupUserList, { UserCardsInfo } from '../PopupUserList/PopupUserList';
import { ValidNumber } from '../HeartRating/useHeartRating';

type LeveledPopupUserListProps = {
  level: ValidNumber,
  userCardsInfo: UserCardsInfo
};

const LeveledPopupUserList: React.VFC<LeveledPopupUserListProps> = ({ level, userCardsInfo }) => (
  <>
    <div className="mg_top-8">
      <HeartValue value={level} />
    </div>
    <PopupUserList userCardsInfo={userCardsInfo} />
  </>
);

export default LeveledPopupUserList;
