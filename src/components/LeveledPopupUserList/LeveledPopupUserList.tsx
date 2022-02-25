import React from 'react';
import ValidNumber from '../../types/ValidNumber';
import HeartValue from '../HeartValue/HeartValue';
import PopupUserList, { UserCardsInfo } from '../PopupUserList/PopupUserList';

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
