import React from 'react';
import UserCard, { User } from '../../pages/SearchPage/UserCard';
import usePopup from '../../hooks/usePopup/usePopup';

type PopupUserCardProps = {
  user: User,
  id: string,
  mode: 'Add' | 'Edit',
};

const PopupUserCard: React.VFC<PopupUserCardProps> = ({ user, id, mode }) => {
  const {
    displayName,
    imageUrl,
    screenName,
  } = user;

  const {
    PopupTrigger,
    Popup,
  } = usePopup(imageUrl, displayName, screenName, id, mode);

  return (
    <>
      <div className="userCard">
        <PopupTrigger>
          <UserCard displayName={displayName} imageUrl={imageUrl} screenName={screenName} />
        </PopupTrigger>
      </div>
      <Popup />
    </>
  );
};

export default PopupUserCard;
