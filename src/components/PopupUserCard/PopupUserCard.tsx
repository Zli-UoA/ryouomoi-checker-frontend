import React from 'react';
import UserCard from '../UserCard/UserCard';
import useOpen from '../../hooks/useOpen';
import useHeartRating from '../../hooks/useHeartRating';
import Popup from '../Popup/Popup';
import User from '../../types/User';

type PopupUserCardProps = {
  user: User,
  id: string,
};

const PopupUserCard: React.VFC<PopupUserCardProps> = ({ user, id }) => {
  const { isOpen, close, open } = useOpen();
  const { rating, setRating, clearRating } = useHeartRating();

  return (
    <>
      <div className="userCard">
        <button type="button" onClick={open}>
          <UserCard
            displayName={user.displayName}
            imageUrl={user.imageUrl}
            screenName={user.screenName}
          />
        </button>
      </div>
      <Popup
        user={{ id, ...user }}
        isOpen={isOpen}
        heartRating={rating}
        setHeartRating={setRating}
        primaryAction={() => {
          clearRating();
          close();
        }}
      />
    </>
  );
};

export default PopupUserCard;
