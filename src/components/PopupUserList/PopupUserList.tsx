import React from 'react';
import PopupUserCard from '../PopupUserCard/PopupUserCard';
import { User } from '../../pages/SearchPage/UserCard';

export type UserCardsInfo = {
  user: User,
  id: string,
  mode: 'Add' | 'Edit',
}[];

type PopupUserListProps = {
  userCardsInfo: UserCardsInfo
};

const PopupUserList: React.VFC<PopupUserListProps> = ({ userCardsInfo }) => (
  <div>
    {userCardsInfo.map(({ user, id, mode }) => <PopupUserCard user={user} id={id} mode={mode} />)}
  </div>
);

export default PopupUserList;
