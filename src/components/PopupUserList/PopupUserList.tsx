import React from 'react';
import PopupUserCard from '../PopupUserCard/PopupUserCard';
import { User } from '../../pages/SearchPage/UserCard';

export type UserCardsInfo = {
  user: User,
  id: string,
}[];

type PopupUserListProps = {
  userCardsInfo: UserCardsInfo
};

const PopupUserList: React.VFC<PopupUserListProps> = ({ userCardsInfo }) => (
  <div>
    {userCardsInfo.map(({ user, id }) => <PopupUserCard user={user} id={id} />)}
  </div>
);

export default PopupUserList;
