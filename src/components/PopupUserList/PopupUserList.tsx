import React, { useState } from 'react';
import useOpen from '../../hooks/useOpen';
import useHeartRating from '../../hooks/useHeartRating';
import Popup from '../Popup/Popup';
import ClickableUserCard from '../ClickableUserCard/ClickableUserCard';
import User from '../../types/User';

export type UserCardsInfo = User[];

type PopupUserListProps = {
  userCardsInfo: UserCardsInfo
};

const PopupUserList: React.VFC<PopupUserListProps> = ({ userCardsInfo }) => {
  const { isOpen, close, open } = useOpen();

  const [whichUser, setWhichUser] = useState<User>({
    imageUrl: 'dummyUrl',
    id: 'dummyId',
    screenName: 'dummyScreenName',
    displayName: 'dummyDisplayName',
  });

  const { rating, setRating, clearRating } = useHeartRating();

  const genOnCardClick = (user: User) => (): void => {
    setWhichUser(user);
    open();
  };

  const primaryAction = (): void => {
    close();
  };

  const cancelAction = (): void => {
    close();
    clearRating();
  };

  const deleteAction = (): void => {
    close();
  };

  return (
    <div>
      {userCardsInfo.map((user) => (
        <ClickableUserCard user={user} onClick={genOnCardClick(user)} />
      ))}
      <Popup
        user={whichUser}
        isOpen={isOpen}
        heartRating={rating}
        setHeartRating={setRating}
        primaryAction={primaryAction}
        cancelAction={cancelAction}
        deleteAction={deleteAction}
      />
    </div>
  );
};

export default PopupUserList;
