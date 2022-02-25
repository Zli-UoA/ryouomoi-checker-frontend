import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOpen from '../../hooks/useOpen';
import useHeartRating from '../../hooks/useHeartRating';
import Popup from '../Popup/Popup';
import ClickableUserCard from '../ClickableUserCard/ClickableUserCard';
import User from '../../types/User';
import fetchWithAuth from '../../lib/fetchWithAuth';
import { baseURL } from '../../env';

type PopupUserListProps = {
  users: User[]
};

const PopupUserList: React.VFC<PopupUserListProps> = ({ users }) => {
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

    if (whichUser.lovePoint) {
      setRating(whichUser.lovePoint);
    }

    open();
  };

  const navigate = useNavigate();

  const primaryAction = async (): Promise<void> => {
    const data = await fetchWithAuth<{
      match_success: boolean
    }>(`${baseURL}/friends/${rating}`);

    if (data.match_success) {
      localStorage.setItem('matchSuccess', 'true');
      navigate('/celebration');
    }

    close();
    clearRating();
  };

  const cancelAction = (): void => {
    close();
    clearRating();
  };

  const deleteAction = async (): Promise<void> => {
    await fetchWithAuth(`${baseURL}/me/lovers/${whichUser.id}`);
    close();
    clearRating();
  };

  return (
    <div>
      {users.map((user) => (
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
